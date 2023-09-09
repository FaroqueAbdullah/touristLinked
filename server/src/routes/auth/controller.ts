import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

import { 
  sendAccountCreatedEmail, 
  sendPasswordResetEmail, 
  sendPasswordResetSuccessEmail 
} from "../../email";
import { 
  createUser, 
  findUser, 
  updateUser
} from "../../services/user.service";
import generateKey from "../../utils/generateRandomCode";
import { 
  getPasswordHash,
  matchPasswordHash 
} from "../../utils/passwordHash";
import { 
  ForgotPasswordInputType,
  LoginUserInputType,
  RegisterUserInputType, 
  ResetPasswordInputType, 
  TokenVerifyUserInputType 
} from "../../schemas/user.schema";

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';


const registerUserHandler = async (
  req: Request< {}, {}, RegisterUserInputType >, 
  res: Response, 
  next: NextFunction) => {
  try {
    const user = req.body;
    const { email, firstName, lastName, phoneNumber } = user

    const isUserExist = await findUser({email});

    if ( isUserExist ) {
      return res.status(400).send({
        status: "error",
        message: "User already have an account.",
      });
    }

    const passwordHash = await getPasswordHash(user.password);
    const accountActivationToken = generateKey().toString();

    const createdUser = await createUser({
      email,
      firstName,
      lastName,
      phoneNumber,
      passwordHash: passwordHash,
      accountActivationToken: accountActivationToken
    })

    await sendAccountCreatedEmail(createdUser);

    const accessToken = jwt.sign(
      { email },
      secretToken,
      {
        expiresIn: "2h",
      }
    );

    return res
      .status(201)
      .send({ status: "ok", message: "User created successfully", data: { accessToken } });
  } catch (error) {
    return next(error);
  }
};

const activateAccountHandler = async (
  req: Request< {}, {}, TokenVerifyUserInputType >, 
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  const accessToken = req.headers.authorization as string;

  try {
    const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;

    const user = await findUser({ email: decoded.email });

    if (!user) {
      return res
        .status(400)
        .send({ status: "error", message: "Token invalid" });
    }

    const isTokenValid = token === user.accountActivationToken;

    if (!isTokenValid) {
      return res
        .status(400)
        .send({ status: "error", message: "Token invalid" });
    }
      
    user.accountActivationToken = null;
    user.isActive = true;

    const { accountActivationToken,  isActive, id} = user
    await updateUser({id: id},  { isActive, accountActivationToken});

    return res.status(200).send({
      status: "ok",
      message: "Account is activated successfully",
    });
      
    
  } catch (error) {
    return next(error);
  }
};

const loginHandler = async (
  req: Request< {}, {}, LoginUserInputType >, 
  res: Response,
  next: NextFunction
) => {

  const {
    email,
    password
  } = req.body

  try {
    const user = await findUser({ email })

    if (!user) {
      return res.status(400).send({
        status: "error",
        message: "Invalid Credentials",
      });
    }
  
    if (!user.isActive) {
      return res.status(400).send({
        status: "error",
        message: "User is not active",
      });
    }

    const match = await matchPasswordHash(password, user.passwordHash);

    if (!match) {
      return res.status(400).send({
        status: "error",
        message: "Invalid Credentials",
      });
    }
  
    const accessToken = jwt.sign(
      { email, id: user.id },
      secretToken,
      {
        expiresIn: "2h",
      }
    );
  
    const refreshToken = jwt.sign(
      { email },
      secretToken,
      {
        expiresIn: "30d",
      }
    );
  
    res.status(200).send({
      status: 'ok', 
      message: "User logged in successfully",
      data: { user: user, accessToken, refreshToken } 
    });
  } catch (error) {
    return next(error);
  }
};

const forgotPasswordHandler = async (
  req: Request< {}, {}, ForgotPasswordInputType >, 
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body

  try {
    const user = await findUser({ email });

    if (user) {

      const accessToken = jwt.sign(
        { email },
        secretToken,
        {
          expiresIn: "2h",
        }
      );

      user.passwordResetToken = generateKey().toString();

      const { id, passwordResetToken } = user;
      await updateUser({id: id}, { passwordResetToken });

      await sendPasswordResetEmail(user);

      return res
        .status(200)
        .send({ status: "ok", data: { accessToken }, message: "Email sent successfully"});
    }
  } catch (error) {
    return next(error);
  }
  
};

const verifyTokenHandler = async (
  req: Request< {}, {}, TokenVerifyUserInputType >, 
  res: Response,
  next: NextFunction
) => {
  const { token } = req.body;
  const accessToken = req.headers.authorization as string;

  try {
    const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;
    const user = await findUser({ email: decoded.email });

    if (!user) {
      return res.status(400).send({
        status: "error",
        message: "User not found.",
      });
    }

    const tokenValid = token === user.passwordResetToken;

    if (tokenValid) {
      return res
      .status(400)
      .send({ status: "error", message: "Token invalid" });
    }

    const jwtTokenWithPasswordResetToken = jwt.sign(
      { id: user.id, token: token },
      secretToken,
      {
        expiresIn: "2h",
      }
    );

    return res
      .status(200)
      .send({ status: "ok", data: { accessToken: jwtTokenWithPasswordResetToken }, message: "Token verified" });
    
  } catch (error) {
    return next(error);
  }
};

const resetPasswordHandler = async (
  req: Request< {}, {}, ResetPasswordInputType >, 
  res: Response,
  next: NextFunction
) => {
  const { password } = req.body;
  const accessToken = req.headers.authorization as string;
  
  try {
    const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;
    const user = await findUser({email: decoded.email});

    if (!user) {
      return res.status(400).send({
        status: "error",
        message: "User not found.",
      });
    }
    const tokenValid = decoded.token === user.passwordResetToken;
    
    if (tokenValid) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }

    const passwordHash = await getPasswordHash(password);
    const passwordResetToken = null

    await updateUser({id: user.id}, { passwordHash, passwordResetToken })

    await sendPasswordResetSuccessEmail(user);

    return res
      .status(200)
      .send({ status: "ok", message: "Password changed successfully" });
      
  } catch (error) {
    return next(error);
  }
};


export {
  registerUserHandler,
  activateAccountHandler,
  loginHandler,
  forgotPasswordHandler,
  verifyTokenHandler,
  resetPasswordHandler
}

