import { Request, Response, NextFunction, RequestHandler  } from 'express';

// import eventRoute from "./controller";

interface ProcessRequest extends Request {
  modelName? : string
}


const init = async (app: any) => {
  app.use("/api/post", console.log('post modules'));
  return app;
};

// export { init };