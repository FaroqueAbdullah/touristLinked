/* eslint-disable global-require */
import app from "./app";
import logger from "./logger";
import connectWithDb from "./db";

const setup = async () => {
  const eventEmitter = require("./event-manager").getInstance();
  
  return { app, eventEmitter, connectWithDb, logger };
};

export { setup };