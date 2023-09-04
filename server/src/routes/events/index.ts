import { Request, Response, NextFunction, RequestHandler  } from 'express';

import eventRoute from "./controller";
import { authenticateRequest } from '../../common/middlewares';

interface ProcessRequest extends Request {
  modelName? : string
}


const init = async (app: any) => {
  app.use("/api/event", authenticateRequest, eventRoute);
  return app;
};

export { init };