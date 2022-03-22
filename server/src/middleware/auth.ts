import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction  } from 'express';

const verifyToken = (req: Request, res: Response, next: NextFunction ) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ "message": "user is unauthenticate" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY as string);
    
    if ( !decoded ) {
      return res.status(401).send({ "message": "user is unauthenticate login again" });
    }
  } catch (err) {
    return res.status(401).send({ "message": "user is unauthenticate login again" });
  }
  return next();
};

export {
  verifyToken
}