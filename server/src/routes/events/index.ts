import { Express } from 'express';

import authenticateRequest from '../../middleware/authenticate';
import eventRoute from './controller';

const init = async (app: Express) => {
  app.use('/api/event', authenticateRequest, eventRoute);
  return app;
};

export { init };
