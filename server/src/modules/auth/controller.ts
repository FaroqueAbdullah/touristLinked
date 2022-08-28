import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";

import { handleValidation } from "../../common/middlewares";
import { validateRegistration, validateUsername } from "./validation";
import {
  checkUser,
  searchOne,
  tryCreateUser,
  update,
  changePassword,
} from "./service";

const { ObjectId } = require("mongoose").Types;
const authRoute = express.Router();
const ModelName = 'User';


const createUserHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.body;

    const id = await tryCreateUser(user);
    console.log('iddd ', id)
    if (!id) {
      return res.status(400).send({
        status: "error",
        message: "User already exists by username or email or phone number.",
      });
    }

    const token = jwt.sign(
      {
        id,
        exp:
          Math.floor(Date.now() / 1000) +
          parseInt('10', 10),
      },
      'process.env.JWT_SECRET'
    );
    user.accountActivationToken = token;
    user._id = id;
    await update(user, ModelName);
    // await sendAccountCreatedEmail(
    //   user.email,
    //   "BizBook365 account created",
    //   token,
    //   user
    // );

    return res
      .status(201)
      .send({ status: "ok", message: "User created successfully" });
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

      const token = jwt.sign(
        {
          id: user._id,
          username: req.body.username,
          exp:
            Math.floor(Date.now() / 1000) +
            parseInt('10', 10),
        },
        'process.env.JWT_SECRET'
      );

      res.status(200).send({status: 'ok', user, message: "User logged in successfully", token: token });
      return;
    }
  }

  res.status(400).send("Invalid username or password");
};



authRoute.post("/register", handleValidation(validateRegistration),createUserHandler);
authRoute.post("/login", loginHandler);
authRoute.post("/verify-token", (req: any, res: any) => res.send("Hello verify-token!"));
authRoute.post("/forgot-password", (req: any, res: any) => res.send("Hello forgot-password!"));
authRoute.post("/reset-password", (req: any, res: any) => res.send("Hello reset-password!"))
authRoute.post("/deactivate-account", (req: any, res: any) => res.send("Hello deactivate-account!"))
authRoute.post("/check-username", (req: any, res: any) => res.send("Hello check-username!"));


export default authRoute;

