import { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { UnauthorizedRequest } from "../utils/appError";
import { validateJwt } from "../utils/jwtToken";

const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers.authorization;

  if (accessToken) {
    const decode = validateJwt( accessToken) 

    if (!decode) {
      return next(new UnauthorizedRequest("User token is not valid"))
    } else {
      req.log.info(`Authenticated user ${decode.email}`);
      next();
    }
    ;
  } else {
    return next(new UnauthorizedRequest("User token is not provided")) 
  }
};

export default authenticateRequest;