import { Request, Response, NextFunction, RequestHandler  } from 'express';

// const authRoutes = require("./controller");

// import {
//   authenticateRequest,
//   authorizeRequest,
// } from "../../common/middlewares";

interface ProcessRequest extends Request {
  modelName? : string
}

// const { name: ModelName } = require("./model");

// const processRequest: RequestHandler = async (req: ProcessRequest, res: Response, next:NextFunction ) => {
//   req.modelName = ModelName;
//   return next();
// };

const init = async (app: any) => {
  app.use("/api/auth", (req: any, res: any) => {
    res.send("Hello auth!");
  });
  // app.use(
  //   "/api/users",
  //   authenticateRequest,
  //   authorizeRequest,
  //   processRequest,
  //   userRoutes
  // );
  return app;
};

export { init };