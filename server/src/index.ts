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

    app2.use(handleError);

    return app2;
  };

  const { app, eventEmitter, connectWithDb, logger } = await setupCore();

  try {
    await configureRoutes(app);

    app.listen(PORT, async () => {
      logger.info(`Server started on port ${PORT}`);

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
    handleError;
  }
};

start();
