import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import 'dotenv/config';

import { handleValidation } from "../../common/middlewares";
import { validateRegistration, validateUsername } from "./validation";
import {
  checkUser,
  searchOne,
  tryCreateUser,
  update,
  changePassword,
} from "./service";
import { sendAccountCreatedEmail, sendPasswordResetEmail, sendPasswordResetSuccessEmail } from "../../email";

const { ObjectId } = require("mongoose").Types;
const authRoute = express.Router();
const ModelName = 'User';
const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const generateActivationKey = () => {
  return Math.floor(100000 + Math.random() * 900000);
}


const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;

    const id = await tryCreateUser(user);

    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "User already exists by username or email or phone number.",
      });
    }

    user.accountActivationToken = generateActivationKey();
    user._id = id;
    await update(user, ModelName);

    await sendAccountCreatedEmail(user);

    const jwtToken = jwt.sign(
      { id },
      secretToken,
      {
        expiresIn: "2h",
      }
    );

    return res
      .status(201)
      .send({ status: "ok", message: "User created successfully", jwtToken });
  } catch (error) {
    return next(error);
  }
};

const loginHandler = async (req: Request, res: Response) => {
  if (req.body.username && req.body.password) {
    const user = await checkUser(req.body.username, req.body.password);
    if (user) {
      if (!user.isActive) {
        return res.status(400).send({
          status: "error",
          message: "User is not active",
        });
      }

      const jwtToken = jwt.sign(
        { id: user._id },
        secretToken,
        {
          expiresIn: "2h",
        }
      );

      const { _id, ...restData } = user;

      res.status(200).send({status: 'ok', restData, message: "User logged in successfully", jwtToken });
      return;
    }
  }

  res.status(400).send("Invalid username or password");
};

const activateAccountHandler = async (req: Request, res: Response) => {
  const { token, jwtToken } = req.body;

  if (token && jwtToken) {

    try {
      const decoded = jwt.verify(jwtToken, secretToken) as jwt.JwtPayload;

      const user = await searchOne({ _id: decoded.id }, ModelName);
      console.log("user 1", user)
      if (user) {
        const tokenValid = token === user.accountActivationToken;
        if (tokenValid) {
          user.accountActivationToken = null;
          user.isActive = true;
          await update(user, ModelName);

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
    const user = await searchOne({ email: req.body.email }, ModelName);

    if (user) {

      const jwtToken = jwt.sign(
        { id: user._id },
        secretToken,
        {
          expiresIn: "2h",
        }
      );

      user.passwordResetToken = generateActivationKey();
      await update(user, ModelName);

      await sendPasswordResetEmail(user);

      return res
        .status(200)
        .send({ status: "ok", message: "Email sent successfully",  jwtToken});
    }
  }

  return res.status(400).send({
    status: "error",
    message: "Email address not found.",
  });
};

const verifyTokenHandler = async (req: Request, res: Response) => {
  const { jwtToken, token } = req.body;

  if (jwtToken && token) {
    try {
      const decoded = jwt.verify(jwtToken, secretToken) as jwt.JwtPayload;
      const user = await searchOne({ _id: decoded.id }, ModelName);

      if (user) {
        const tokenValid = token === user.passwordResetToken;
        if (tokenValid) {
          const jwtTokenWithPasswordResetToken = jwt.sign(
            { id: user._id, token: token },
            secretToken,
            {
              expiresIn: "2h",
            }
          );

          return res
            .status(200)
            .send({ status: "ok", message: "Token verified", jwtToken: jwtTokenWithPasswordResetToken });
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
  const { password, jwtToken } = req.body;
  if (jwtToken && password) {
    try {
      const decoded = jwt.verify(jwtToken, secretToken) as jwt.JwtPayload;
      const user = await searchOne({ _id: ObjectId(decoded.id) }, ModelName);
      if (user) {
        const tokenValid = decoded.token === user.passwordResetToken;
        if (tokenValid) {
          await changePassword(user, password);

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

const checkUsernameHandler = async (req: Request, res: Response) => {
  const user = await searchOne(
    { username: req.body.username.toLowerCase() },
    ModelName
  );
  if (user) {
    return res
      .status(400)
      .send({ status: "unavailable", message: "Username is taken" });
  }
  return res
    .status(200)
    .send({ status: "available", message: "Username is available" });
};



authRoute.post("/register", handleValidation(validateRegistration),createUserHandler);
authRoute.post("/login", loginHandler);
authRoute.post("/forgot-password", forgotPasswordHandler);
authRoute.post("/verify-token", verifyTokenHandler);
authRoute.post("/reset-password", resetPasswordHandler);
authRoute.post("/activate-account", activateAccountHandler);
authRoute.post("/check-username", checkUsernameHandler);


export default authRoute;

