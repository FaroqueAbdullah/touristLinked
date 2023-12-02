import { init } from './routes';

import { setup as setupCore } from './core';
import { Express } from 'express';

import * as swaggerdoc from './swagger/swagger.json';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import handleError from './middleware/handleError';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const swaggerDocs = swaggerJSDoc(swaggerdoc);

const initModules = (app: Express) => {
  const app2 = init(app);

  return app2;
};

const configureRoutes = (app: Express) => {
  app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerDocs, { explorer: true }),
  );
  const app2 = initModules(app);
  app2.use(handleError);

  return app2;
};

const { app } = setupCore();
configureRoutes(app);

export default app;
