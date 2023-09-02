import { Request, Response, NextFunction, RequestHandler  } from 'express';

import authRoute from "./controller";
interface ProcessRequest extends Request {
  modelName? : string
}

const init = async (app: any) => {
  app.use("/api/auth", authRoute);
  return app;
};

export { init };