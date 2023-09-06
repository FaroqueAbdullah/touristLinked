import eventRoute from "./controller";
import { authenticateRequest } from '../../common/middlewares';

const init = async (app: any) => {
  app.use("/api/event", authenticateRequest, eventRoute);
  return app;
};

export { init };