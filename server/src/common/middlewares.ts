const { ObjectId } = require("mongoose").Types;
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { ValidateFunction } from "../modules/auth/interface";
import {  GeneralError  } from "./error";
import { Request, Response, NextFunction, RequestHandler  } from "express";
const { searchOne } = require("../core/repository");

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

const handleValidation = (validate: ValidateFunction) => (req: Request, res: Response, next: NextFunction) => {
  const result = validate(req.body);
  const isValid = result.error == null;

  if (isValid) {
    req.body = result.value;
    return next();
  }

  const { details } = result.error;
  const messages = details.map((e: any) => e.message);
  const msg = messages.join(",");
  
  // throw new BadRequest(msg);
  return res.status(400).send({ status: "error", message: msg });
};

const authenticateRequest = async (req: Request, res: Response, next: NextFunction) => {
  let auth = req.headers.authorization;
  if (auth) {
    auth = auth.replace("Bearer ", "");
    jwt.verify(auth, "JwtSecret", (err: any, decoded: any) => {
      if (err) {
        const { stack, name, ...errorProps } = err;
        req.log.error({ ...errorProps, name }, "jwt token invalid");
        res.status(401).send({
          success: false,
          errorMessage: err.message || "Invalid token",
        });
      } else {
        // req.user = decoded;
        // req.log = req.log.child({ username: req.user.username });
        // req.log.info(`Authenticated user ${req.user.username}`);
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
  handleValidation,
  authenticateRequest
};
