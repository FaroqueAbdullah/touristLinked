import postRoute from "./controller";
import { authenticateRequest } from '../../common/middlewares';

const init = async (app: any) => {
  app.use("/api/post", authenticateRequest, postRoute);
  return app;
};

export { init };