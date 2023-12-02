import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../utils/appError';

const ValidateRequestId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.userId != res.locals.id) {
    return next(new BadRequest('Bad request'));
  }

  return next();
};

export default ValidateRequestId;
