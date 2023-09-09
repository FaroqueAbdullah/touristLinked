import { Request, Response, NextFunction, RequestHandler  } from "express";
import {  GeneralError  } from "../utils/appError";

const handleError = async (err: any, req: Request, res: Response, next: NextFunction) => {

  if (res?.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  const correlationId = req?.headers["x-correlation-id"];
  req.log.error(err, { correlationId });

  return (
    res &&
    res.status(code).send({
      status: "error",
      message: "Server Error"
    })
  );
};

export default handleError;