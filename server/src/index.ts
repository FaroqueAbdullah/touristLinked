import  express from "express";

import { setup as setupCore } from "./core";
import { init } from "./modules";
import { handleError, handleRequest } from "./common/middlewares";
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 8000;

const start = async () => {
  const initModules = async (app: any) => {
    const app2 = await init(app);
    return app2;
  };

  const configureRoutes = async (app: any) => {
    app.use(handleRequest);
    const app2 = await initModules(app);
    app2.get("/", (req: any, res: any) => {
      res.send("Hello World!");
    });
    app2.use(handleError);
    return app2;
  };

  const { app, eventEmitter, connectWithDb, logger } = await setupCore();

  try {
    await configureRoutes(app);
    app.listen(PORT, async () => {
      logger.info(`Server started on port ${PORT}`);

      console.log('hello')

      const broadcastDatabaseConnectionEstablished = (em: any) => {
        em.emit("databaseConnectionEstablished");
      };

      eventEmitter.on("databaseConnectionEstablished", () => {
        logger.info(
          "eventEmitterHealthCheck()=> Database connection established"
        );
      });

      await connectWithDb(broadcastDatabaseConnectionEstablished, eventEmitter);
      logger.info(`Database connection established at ${new Date()}`);
    });
  } catch (err) {
    // handleError(err);
  }
};

start();















// import express from 'express';
// import bodyParser from 'body-parser';
// import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';
// import 'dotenv/config';

// import { authRouter } from './routes/authentication/auth.router';
// import { articleRouter } from './routes/article/article.router';

// import * as swaggerdoc from './utils/swagger.json';


// import { connect } from './config/db.js';

// const PORT = process.env.SERVER_PORT || 4000;

// const options: swaggerJSDoc.Options = swaggerdoc;

// const swaggerSpec = swaggerJSDoc(options);

// const app = express();
// connect();

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use(bodyParser.json());
// app.use('/auth' , authRouter);
// app.use('/article' , articleRouter);

// app.listen(PORT, () => {
//   console.log(`server has started on ${PORT}`)
// });