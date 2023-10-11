import authenticateRequest from '../../middleware/authenticate';
import postRoute from './controller';

import { Express } from 'express';

const init = async (app: Express) => {
  app.use('/api/post', authenticateRequest, postRoute);
  return app;
};

export { init };
