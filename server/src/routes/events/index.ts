import { Request, Response, NextFunction, RequestHandler  } from 'express';

// import eventRoute from "./controller";

interface ProcessRequest extends Request {
  modelName? : string
}


const init = async (app: any) => {
  app.use("/api/event", console.log('Event modules'));
  return app;
};

// export { init };