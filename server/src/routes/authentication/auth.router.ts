import express from 'express';

import { logInMethods, signUpMethods } from './auth.controller';

const authRouter = express.Router();

authRouter.post('/registration' , signUpMethods);

authRouter.post('/login' , logInMethods);

export { authRouter };