import fs from 'fs';
import  { Express } from "express";

const init = async (app: Express) => {
  const rootPath = __dirname;
  const moduleNames = await fs.promises.readdir(rootPath);
  await Promise.all(
    moduleNames.map(async (moduleName: string) => {
      const stat = await fs.promises.lstat(`${rootPath}/${moduleName}`);
      if (stat.isDirectory()) {
        // eslint-disable-next-line global-require
        const module = await import(`./${moduleName}`);

        if (module.init) {
          await module.init(app);
        }
      }
    })
  );
  return app;
};

export  { init };