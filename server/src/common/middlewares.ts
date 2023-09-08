const { ObjectId } = require("mongoose").Types;
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import {  GeneralError  } from "./error";
import { Request, Response, NextFunction, RequestHandler  } from "express";
const { searchOne } = require("../core/repository");

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const handleError = async (err: any, req: Request, res: Response, next: NextFunction) => {
  if (res?.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  const correlationId = req?.headers["x-correlation-id"];
  // req.log.error(err, { correlationId });
  return (
    res &&
    res.status(code).send({
      correlationId,
      message: err.message,
      status: "error",
      error: { ...err },
    })
  );
};

const handleRequest = async (req: Request, res: Response, next: NextFunction) => {
  let correlationId = req.headers["x-correlation-id"];
  console.log('correlationId ', correlationId)
  if (!correlationId) {
    correlationId = uuidv4();
    req.headers["x-correlation-id"] = correlationId;
  }

  res.set("x-correlation-id", correlationId);
  req.log = req.log.child({ correlationId });
  req.log.info(`new request: ${req.method} ${req.url}`);
  return next();
};

const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  let accessToken = req.headers.authorization;
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
    res.status(401).send({ error: "Unauthenticated request" });
  }
};


export {
  handleError,
  handleRequest,
  authenticateRequest
};
