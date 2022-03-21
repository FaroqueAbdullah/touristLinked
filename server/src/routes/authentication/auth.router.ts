import express from 'express';
import { logInMethods, signUpMethods } from './auth.controller';

const authRouter = express.Router();

authRouter.get('/signup' , signUpMethods)

authRouter.get('/login' , logInMethods)

export { authRouter };