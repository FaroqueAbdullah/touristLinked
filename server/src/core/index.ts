/* eslint-disable global-require */
import app from './app';
import logger from './logger';
import eventEmitter from './event-manager';

const setup = async () => {
  return { app, eventEmitter, logger };
};

export { setup };
