import { Request, Response, NextFunction } from 'express';
import { BadRequest } from '../utils/appError';

const ValidateProfileAccess = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.profileId != res.locals.profileId) {
    return next(new BadRequest('Bad request'));
  }

  return next();
};

export default ValidateProfileAccess;
