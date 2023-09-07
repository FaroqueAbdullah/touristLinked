import profileRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/visit", profileRoute);
  return app;
};

export { init };