const { ObjectId } = require("mongoose").Types;
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import {  GeneralError  } from "./error";
import { Request, Response, NextFunction, RequestHandler  } from "express";
const { searchOne } = require("../core/repository");

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';

const handleError = async (err: any, req: Request, res: Response, next: NextFunction) => {
  console.log('handle error called')
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


export {
  handleError
};
