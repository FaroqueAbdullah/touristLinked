import { Request, Response, NextFunction } from 'express';
import { UnauthorizedRequest } from '../utils/appError';
import { validateJwt } from '../utils/jwtToken';
import { cookiePerse } from '../utils/cookies';

const authenticateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const cookies = req.headers.cookie || '';
  const cookieParse = cookiePerse(cookies);

  const { access_token } = cookieParse;

  if (!access_token) {
    return next(new UnauthorizedRequest('User token is not provided'));
  }

  const decode = validateJwt(access_token);

  if (decode.success) {
    res.locals.email = decode.email;
    res.locals.id = decode.id;
    res.locals.profileId = decode.profileId;
    req.log.info(`Authenticated user ${decode.email}`);
    return next();
  } else {
    return next(new UnauthorizedRequest('User token is not valid'));
  }
};

export default authenticateRequest;
