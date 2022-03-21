import { Request, Response } from 'express';

const signUpMethods = function ( req: Request, res: Response ) : void  {
  res.send('hello signUpMethods')
}

const logInMethods = function ( req: Request, res: Response ) : void  {
  res.send('hello logInMethods')
}

export {
  signUpMethods,
  logInMethods
}