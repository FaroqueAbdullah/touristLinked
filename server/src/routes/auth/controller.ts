import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import 'dotenv/config';

import { handleValidation } from "../../common/middlewares";
import { validateRegistration, validateUsername } from "./validation";
import { sendAccountCreatedEmail, sendPasswordResetEmail, sendPasswordResetSuccessEmail } from "../../email";

const authRoute = express.Router();


import { changePassword, createUser, updateUser, userByEmail, userById } from "../../services/user.service";
import { UserCreateInput, UserDataInputInterface } from "../../interfaces/UserInterface";
import generateKey from "../../utils/generateRandomCode";


const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';


const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: UserDataInputInterface = req.body;
    const { email } = user

    const isUserExist = await userByEmail(email);

    if ( isUserExist ) {
      return res.status(400).send({
        status: "error",
        message: "User already have an account.",
      });
    }

    const createdUser = await createUser(user)

    const { id } = createdUser;

    await sendAccountCreatedEmail(createdUser);

    const accessToken = jwt.sign(
      { id },
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

const loginHandler = async (req: Request, res: Response) => {
  if (req.body.emailOrUsername && req.body.password) {
    const user = await userByEmail(req.body.emailOrUsername);
    if (user) {
      if (!user.isActive) {
        return res.status(400).send({
          status: "error",
          message: "User is not active",
        });
      }

      const accessToken = jwt.sign(
        { id: user.id },
        secretToken,
        {
          expiresIn: "2h",
        }
      );

      const refreshToken = jwt.sign(
        { id: user.id },
        secretToken,
        {
          expiresIn: "30d",
        }
      );

      const { id, ...restData } = user;

      res.status(200).send({status: 'ok', message: "User logged in successfully", data: { user: restData, accessToken, refreshToken } });
      return;
    }
  }

  res.status(400).send("Invalid username or password");
};

const activateAccountHandler = async (req: Request, res: Response) => {
  const { token, accessToken } = req.body;

  if (token && accessToken) {

    try {
      const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;

      const user = await userById( decoded.id );

      if (user) {
        const tokenValid = token === user.accountActivationToken;
        if (tokenValid) {
          user.accountActivationToken = null;
          user.isActive = true;

          const { accountActivationToken,  isActive, id} = user
          await updateUser( id,  { isActive, accountActivationToken} );

          return res.status(200).send({
            status: "ok",
            message: "Account is activated successfully",
          });
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid Token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "bad request",
  });
};

const forgotPasswordHandler = async (req: Request, res: Response) => {
  if (req.body.email) {
    const user = await userByEmail( req.body.email );

    if (user) {

      const accessToken = jwt.sign(
        { id: user.id },
        secretToken,
        {
          expiresIn: "2h",
        }
      );

      user.accountActivationToken = generateKey().toString();

      const { id, accountActivationToken } = user;
      await updateUser(id, { accountActivationToken });

      await sendPasswordResetEmail(user);

      return res
        .status(200)
        .send({ status: "ok", data: { accessToken }, message: "Email sent successfully"});
    }
  }

  return res.status(400).send({
    status: "error",
    message: "Email address not found.",
  });
};

const verifyTokenHandler = async (req: Request, res: Response) => {
  const { accessToken, token } = req.body;

  if (accessToken && token) {
    try {
      const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;
      const user = await userById(decoded.id );

      if (user) {
        const tokenValid = token === user.passwordResetToken;
        if (tokenValid) {
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
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "Invalid token",
  });
};

const resetPasswordHandler = async (req: Request, res: Response) => {
  const { password, accessToken } = req.body;
  if (accessToken && password) {
    try {
      const decoded = jwt.verify(accessToken, secretToken) as jwt.JwtPayload;
      const user = await userById(decoded.id);
      if (user) {
        const tokenValid = decoded.token === user.passwordResetToken;
        if (tokenValid) {
          await changePassword(user.id, password);

          await sendPasswordResetSuccessEmail(user);

          return res
            .status(200)
            .send({ status: "ok", message: "Password changed successfully" });
        }
        return res
          .status(400)
          .send({ status: "error", message: "Token invalid" });
      }
    } catch (error) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token",
      });
    }
  }
  return res.status(400).send({
    status: "error",
    message: "Invalid token",
  });
};

// const checkUsernameHandler = async (req: Request, res: Response) => {
//   const user = await searchOne(
//     { username: req.body.username.toLowerCase() },
//     ModelName
//   );
//   if (user) {
//     return res
//       .status(400)
//       .send({ status: "unavailable", message: "Username is taken" });
//   }
//   return res
//     .status(200)
//     .send({ status: "available", message: "Username is available" });
// };



authRoute.post("/register", handleValidation(validateRegistration),createUserHandler);
authRoute.post("/login", loginHandler);
authRoute.post("/forgot-password", forgotPasswordHandler);
authRoute.post("/verify-token", verifyTokenHandler);
authRoute.post("/reset-password", resetPasswordHandler);
authRoute.post("/activate-account", activateAccountHandler);
// authRoute.post("/check-username", checkUsernameHandler);


export default authRoute;

