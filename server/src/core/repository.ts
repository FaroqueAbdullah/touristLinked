import mongoose from "mongoose";
const eventEmitter = require("./event-manager").getInstance();

interface ItemType {
  _id: string
}

const save = async (item: object, modelName: string) => {
  const model = new mongoose.models[modelName](item);
  const savedItem = await model.save();
  eventEmitter.emit(`${modelName}Created`, savedItem);
  return savedItem;
};

const update = async <Type extends ItemType>(item: Type, modelName: string) => {
  const doc = await mongoose.models[modelName].updateOne(
    { _id: item._id },
    item,
    {}
  );
  eventEmitter.emit(`${modelName}Updated`, doc);
  return doc;
};

const updateAll = async (query: object, updateModel: object, modelName: string) => {
  const doc = await mongoose.models[modelName].updateMany(query, updateModel);
  eventEmitter.emit(`${modelName}Updated`, doc);
  return doc;
};

const deleteById = async (id: string, modelName: string) => {
  const model = await mongoose.models[modelName].findById(id);
  if (model) {
    const result = await mongoose.models[modelName].deleteOne({ _id: id });
    eventEmitter.emit(`${modelName}Deleted`, model);
    return result;
  }
  throw new Error(`Product not found by the id: ${id}`);
};

const getById = async (id: string, modelName: string) => {
  const model = await mongoose.models[modelName].findById(id);
  if (model == null) {
    throw new Error(`${modelName} not found by the id: ${id}`);
  }
  return model;
};

const searchOne = async (query: object, modelName: string) => {
  const data = await mongoose.models[modelName].findOne(query).lean().exec();
  return data;
};

const dynamicSearch = async (query: object, modelName: string) => {
  const data = await mongoose.models[modelName].find(query).lean().exec();
  return data;
};

const getSortClause = (payload: any) => {
  let sort: any = {};
  if (payload.sort) {
    const key = payload.sort;
    const value = parseInt(payload.order, 10) ?? 1;
    sort[key] = value;
  } else {
    sort = { updatedAt: -1 };
  }
  return sort;
};

const count = async (query: object, modelName: string) => {
  const data = await mongoose.models[modelName].find(query).count();
  return data;
};

const search = async (payload:any, query: any, modelName: any) => {
  const sort = getSortClause(payload);
  const take = parseInt('', 10);
  const skip = (parseInt(payload.current, 10) - 1) * take;

  const data = mongoose.models[modelName].find(query).sort(sort);
  const result =
    payload.pageSize === -1
      ? await data.lean().exec()
      : await data.skip(skip).limit(take).lean().exec();

  return result;
};

const getDropdownData = async (query:any, project:any, modelName:any) => {
  const data = await mongoose.models[modelName]
    .find(query)
    .select(project)
    .sort(project)
    .lean()
    .exec();
  return data;
};

export {
  save,
  update,
  deleteById,
  getById,
  searchOne,
  dynamicSearch,
  updateAll,
  getSortClause,
  count,
  search,
  getDropdownData,
};
