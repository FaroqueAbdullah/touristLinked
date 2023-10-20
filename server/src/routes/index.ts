import { Express } from 'express';
import authRoute from './auth';
import authenticateRequest from '../middleware/authenticate';
import profileRoute from './profile';

const init = (app: Express) => {
  app.use('/api/auth', authRoute);
  app.use('/api/profile', authenticateRequest, profileRoute);

  return app;
};

export { init };
