import authenticateRequest from "../../middleware/authenticate";
import eventRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/event", authenticateRequest, eventRoute);
  return app;
};

export { init };