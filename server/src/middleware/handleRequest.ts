import { Request, Response, NextFunction, RequestHandler  } from "express";
import { v4 as uuidv4 } from "uuid";

const handleRequest = async (req: Request, res: Response, next: NextFunction) => {
  let correlationId = req.headers["x-correlation-id"];
  console.log('correlationId ', correlationId)
  if (!correlationId) {
    correlationId = uuidv4();
    req.headers["x-correlation-id"] = correlationId;
  }

  res.set("x-correlation-id", correlationId);
  req.log = req.log.child({ correlationId });
  req.log.info(`new request: ${req.method} ${req.url}`);
  return next();
};

export default handleRequest;