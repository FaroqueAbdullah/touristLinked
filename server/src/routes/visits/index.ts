import visitRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/visit", visitRoute);
  return app;
};

export { init };