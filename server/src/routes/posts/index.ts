import { Request, Response, NextFunction, RequestHandler  } from 'express';

import postRoute from "./controller";
import { authenticateRequest } from '../../common/middlewares';



interface ProcessRequest extends Request {
  modelName? : string
}


const init = async (app: any) => {
  app.use("/api/post", authenticateRequest, postRoute);
  return app;
};

export { init };