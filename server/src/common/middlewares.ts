const { ObjectId } = require("mongoose").Types;
const jwt = require("jsonwebtoken");
import { v4 as uuidv4 } from "uuid";
import {  GeneralError  } from "./error";
const { searchOne } = require("../core/repository");

const handleError = async (err: any, req: any, res: any, next: any) => {
  if (res?.headersSent) {
    return next(err);
  }

  let code = 500;
  if (err instanceof GeneralError) {
    code = err.getCode();
  }

  const correlationId = req?.headers["x-correlation-id"];
  req.log.error(err, { correlationId });
  return (
    res &&
    res.status(code).send({
      correlationId,
      message: err.message,
      status: "error",
      error: { ...err },
    })
  );
};

const handleRequest = async (req: any, res: any, next: any) => {
  let correlationId = req.headers["x-correlation-id"];
  if (!correlationId) {
    correlationId = uuidv4();
    req.headers["x-correlation-id"] = correlationId;
  }

  res.set("x-correlation-id", correlationId);
  // req.log = req.log.child({ correlationId });
  // req.log.info(`new request: ${req.method} ${req.url}`);
  return next();
};

const handleValidation = (validate: any) => (req: any, res: any, next: any) => {
  const result = validate(req.body, req.user);
  const isValid = result.error == null;
  if (isValid) {
    req.body = result.value;
    return next();
  }

  const { details } = result.error;
  const messages = details.map((e: any) => e.message);
  const msg = messages.join(",");
  // throw new BadRequest(msg);
  return res.status(400).send({ status: "error", message: msg });
};

const authenticateRequest = async (req: any, res: any, next: any) => {
  let auth = req.headers.authorization;
  if (auth) {
    auth = auth.replace("Bearer ", "");
    jwt.verify(auth, process.env.JWT_SECRET, (err: any, decoded: any) => {
      if (err) {
        const { stack, name, ...errorProps } = err;
        // req.log.error({ ...errorProps, name }, "jwt token invalid");
        res.status(401).send({
          success: false,
          errorMessage: err.message || "Invalid token",
        });
      } else {
        req.user = decoded;
        // req.log = req.log.child({ username: req.user.username });
        // req.log.info(`Authenticated user ${req.user.username}`);
        next();
      }
    });
  } else {
    res.status(401).send({ error: "Unauthenticated request" });
  }
};

// authorize request
const authorizeRequest = async (req: any, res: any, next: any) => {
  const { user } = req;
  if (user) {
    const { username, roleId } = user;
    const permission = await searchOne(
      {
        // roleId: r,
        roleId: ObjectId(roleId),
        resourceName: req._parsedUrl.pathname,
        isAllowed: true,
      },
      "Permission"
    );
    if (permission) {
      // req.log.info(`Authorized user ${username}`);
      return next();
    }
    // req.log.error(
    //   `Unauthorized user ${username} for the resource ${req.originalUrl} with role ${roleId}`
    // );
  }
  return res.status(403).send({
    error: "Unauthorized request",
    message: "Unauthorized",
    status: "error",
  });
};

export {
  handleError,
  handleRequest,
  handleValidation,
  authenticateRequest,
  authorizeRequest,
};
