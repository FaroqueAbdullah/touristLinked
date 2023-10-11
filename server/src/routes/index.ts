import { Express } from 'express';
import authRoute from './auth';

const init = (app: Express) => {
  app.use('/api/auth', authRoute);

  return app;
};

export { init };
