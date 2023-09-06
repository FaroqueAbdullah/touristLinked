import profileRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/profile", profileRoute);
  return app;
};

export { init };