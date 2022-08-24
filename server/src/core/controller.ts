import { Request, Response, NextFunction, RequestHandler  } from 'express';

interface RequestWithProp extends Request {
  modelName?: String;
  searchQuery? : String;
}

const { NotFound } = require("../common/errors");
const {
  getById,
  search,
  count,
  save,
  update,
  deleteById,
} = require("./repository");

const getByIdHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { id } = req.query;
    const item = await getById(id, ModelName);
    if (item) {
      return res.status(200).send(item);
    }
    throw new NotFound(`${ModelName} not found by the id: ${id}`);
  } catch (error) {
    return next(error, req, res);
  }
};

const searchHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    req.log.info({ body }, `search ${ModelName}`);
    const data = await search(body, req.searchQuery, ModelName);
    return res.status(200).send({ data, total: 0 });
  } catch (error) {
    return next(error, req, res);
  }
};

const countHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    req.log.info({ body }, `count ${ModelName}`);
    const result = await count(req.searchQuery, ModelName);
    const response = { success: true, total: result };
    return res.status(200).send(response);
  } catch (error) {
    return next(error, req, res);
  }
};

const saveHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    const id = await save(body, ModelName);
    req.log.info({ id }, `${ModelName} created`);
    return res
      .status(201)
      .send({ success: true, message: `${ModelName} created` });
  } catch (error) {
    return next(error, req, res);
  }
};

const updateHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { body } = req;
    const id = await update(body, ModelName);
    return res
      .status(200)
      .send({ success: true, message: `${ModelName} updated` });
  } catch (error) {
    return next(error, req, res);
  }
};

const deleteHandler: RequestHandler = async (req: RequestWithProp, res: Response, next: NextFunction) => {
  try {
    const ModelName = req.modelName;
    const { id } = req.query;
    await deleteById(id, ModelName);
    return res
      .status(200)
      .send({ success: true, message: `${ModelName} deleted` });
  } catch (error) {
    return next(error, req, res);
  }
};

// export
module.exports = {
  getByIdHandler,
  searchHandler,
  countHandler,
  saveHandler,
  updateHandler,
  deleteHandler,
};
