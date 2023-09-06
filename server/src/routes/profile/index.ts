import { Request, Response, NextFunction, RequestHandler  } from 'express';

import profileRoute from "./controller";

interface ProcessRequest extends Request {
  modelName? : string
}


const init = async (app: any) => {
  app.use("/api/profile", profileRoute);
  return app;
};

export { init };