import { authenticateRequest } from "../../middleware/authenticate";
import postRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/post", authenticateRequest, postRoute);
  return app;
};

export { init };