import { Request, Response, NextFunction } from 'express';
import { GeneralError } from '../utils/appError';

const handleError = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res?.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  // const correlationId = req?.headers['x-correlation-id'];
  // req.log.error(err, { correlationId });

  return (
    res &&
    res.status(code).send({
      status: 'error',
      message: err.message,
    })
  );
};

export default handleError;
