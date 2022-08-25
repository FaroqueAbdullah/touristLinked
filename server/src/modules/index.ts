const fs = require("fs");

const init = async (app) => {
  const rootPath = __dirname;
  const moduleNames = await fs.promises.readdir(rootPath);
  await Promise.all(
    moduleNames.map(async (moduleName) => {
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