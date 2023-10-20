import { Express } from 'express';
import authRoute from './auth';
import profileRoute from './profile';
import postRoute from './posts';

const init = (app: Express) => {
  app.use('/api/auth', authRoute);
  app.use('/api/profile', profileRoute);
  app.use('/api/post', postRoute);

  return app;
};

export { init };
