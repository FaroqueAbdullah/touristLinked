import authRoute from "./controller";

const init = async (app: any) => {
  app.use("/api/auth", authRoute);
  return app;
};

export { init };