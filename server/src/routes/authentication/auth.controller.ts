import { Request, Response } from 'express';

const signUpMethods = function ( req: Request, res: Response ) : void  {
  res.status(201).send(req.body)
}

const logInMethods = function ( req: Request, res: Response ) : void  {
  res.status(201).send(req.body)
}

export {
  signUpMethods,
  logInMethods
}