import { setup as setupCore } from './core';
import app from './app';

const PORT = process.env.SERVER_PORT || 8000;

const start = async () => {
  const { logger } = setupCore();

  app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`);
  });
};

start();
