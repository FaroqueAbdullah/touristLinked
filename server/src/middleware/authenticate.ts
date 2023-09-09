import { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedRequest } from "../utils/appError";

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers.authorization;

  if (accessToken) {
    jwt.verify(accessToken, secretToken, (err: any, decoded: any) => {
      if (err) {
        return next(new UnauthorizedRequest("User token is not valid"))
      } else {
        req.log.info(`Authenticated user ${decoded.email}`);
        next();
      }
    });
  } else {
    return next(new UnauthorizedRequest("User token is not provided")) 
  }
};

export default authenticateRequest;