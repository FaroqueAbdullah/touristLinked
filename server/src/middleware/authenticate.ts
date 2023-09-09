import { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers.authorization;
  console.log('accessToken ', accessToken)
  if (accessToken) {
    jwt.verify(accessToken, secretToken, (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Unauthenticate user",
        });
      } else {
        req.log.info(`Authenticated user ${decoded.email}`);
        next();
      }
    });
  } else {
    res.status(401).send({
      status: "error",
      error: "Unauthenticated request" 
    });
  }
};

export default authenticateRequest;