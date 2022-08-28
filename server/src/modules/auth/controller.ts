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
import { sendAccountCreatedEmail } from "../../email";

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

    const token = jwt.sign(
      { id },
      secretToken,
      {
        expiresIn: "2h",
      }
    );

    return res
      .status(201)
      .send({ status: "ok", message: "User created successfully", token: token });
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

      const jwtSignature = jwt.sign(
        {
          id: user._id,
          username: req.body.username,
          exp:
            Math.floor(Date.now() / 1000) +
            parseInt('10', 10),
        },
        secretToken
      );

      const { _id, ...restData } = user;

      res.status(200).send({status: 'ok', restData, message: "User logged in successfully", jwtSignature });
      return;
    }
  }

  res.status(400).send("Invalid username or password");
};

const activateAccountHandler = async (req: Request, res: Response) => {
  const { token, jwtSignature } = req.body;

  if (token && jwtSignature) {

    try {
      const decoded = jwt.verify(jwtSignature, secretToken) as jwt.JwtPayload;

      const user = await searchOne({ _id: decoded.id }, ModelName);

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



authRoute.post("/register", handleValidation(validateRegistration),createUserHandler);
authRoute.post("/login", loginHandler);
authRoute.post("/verify-token", (req: any, res: any) => res.send("Hello verify-token!"));
authRoute.post("/forgot-password", (req: any, res: any) => res.send("Hello forgot-password!"));
authRoute.post("/reset-password", (req: any, res: any) => res.send("Hello reset-password!"))
authRoute.post("/activate-account", activateAccountHandler)
authRoute.post("/check-username", (req: any, res: any) => res.send("Hello check-username!"));


export default authRoute;

