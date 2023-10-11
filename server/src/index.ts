import { setup as setupCore } from './core';
import { init } from './routes';

import { Express } from 'express';

import * as swaggerdoc from './swagger/swagger.json';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import handleRequest from './middleware/handleError';
import handleError from './middleware/handleError';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const PORT = process.env.SERVER_PORT || 8000;

const swaggerDocs = swaggerJSDoc(swaggerdoc);

const start = async () => {
  const initModules = async (app: Express) => {
    const app2 = await init(app);

    return app2;
  };

  const configureRoutes = async (app: Express) => {
    app.use(handleRequest);
    app.use(
      '/api-docs',
      swaggerUI.serve,
      swaggerUI.setup(swaggerDocs, { explorer: true }),
    );
    const app2 = await initModules(app);
    app2.use(handleError);

    return app2;
  };

  const { app, logger } = await setupCore();

  await configureRoutes(app);

  app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`);
  });
};

start();
