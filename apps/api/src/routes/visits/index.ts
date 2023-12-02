import visitRoute from './controller';

import { Express } from 'express';

const init = async (app: Express) => {
  app.use('/api/visit', visitRoute);
  return app;
};

export { init };
