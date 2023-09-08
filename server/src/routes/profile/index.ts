import { authenticateRequest } from "../../middleware/authenticate";
import profileRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/profile", authenticateRequest, profileRoute);
  return app;
};

export { init };