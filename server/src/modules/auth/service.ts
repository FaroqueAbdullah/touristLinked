import bcrypt from 'bcryptjs'

import { NotFound } from "../../common/error";
import {
  save,
  getById,
  searchOne,
  dynamicSearch,
  updateAll,
  update,
} from "../../core/repository";
import { UserInterface } from './interface'
import { Model, name as ModelName } from "./model";

const { ObjectId } = require("mongoose").Types;

async function getPasswordHash(password: string) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

const changePassword = async (user: UserInterface, newPassword: string) => {
  const id = user._id;
  const model = await Model.findById(id);
  if (model) {
    model.passwordHash = await getPasswordHash(newPassword);
    model.passwordResetToken = '';
    model.save();
    return model._id;
  }

  throw new NotFound(`User not found by the id: ${id}`);
};

const getByUsername = async (username: string) => {
  const item = await Model.findOne({ username }).lean();
  if (item) {
    const { passwordHash, ...rest } = item;
    return rest;
  }
  return null;
};

const checkUser = async (emailOrUsername: string, password: string) => {

  let user;

  if ( /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test( emailOrUsername ) ) {
    user = await Model.findOne({ email: emailOrUsername  }).lean(); // status: "Active"
  } else {
    user = await Model.findOne({ username: emailOrUsername  }).lean(); // status: "Active"
  }
  
  

  if (user) {
    const match = await bcrypt.compare(password, user.passwordHash);
    const { passwordHash, passwordResetToken, accountActivationToken, ...rest } = user;
    return match ? rest : undefined;
  }

  return undefined;
};

const createUser = async (user: UserInterface) => {
  const passwordHash = await getPasswordHash(user.password);
  const { _id } = await save({ passwordHash, ...user }, ModelName);
  return _id;
};

const tryCreateUser = async (user: UserInterface) => {
  const { username, phoneNumber, email } = user;
  const query = {
    $or: [{ phoneNumber }, { email }, { username }],
  };
  const item = await Model.findOne(query);
  if (item) {
    return false;
  }
  const id = await createUser(user);
  return id;
};

const getQuery = (payload: any) => {
  const createdBySubQuery = {
    $or: [
      { createdBy: ObjectId(payload.userId) },
      { _id: ObjectId(payload.userId) },
    ],
  };

  let query = {};
  if (payload.name) {
    query = {
      $and: [
        createdBySubQuery,
        {
          $or: [
            { firstName: { $regex: payload.name, $options: "i" } },
            { lastName: { $regex: payload.name, $options: "i" } },
            { username: { $regex: payload.name, $options: "i" } },
          ],
        },
      ],
    };
  } else query = createdBySubQuery;

  return query;
};

export {
  save,
  searchOne,
  changePassword,
  checkUser,
  createUser,
  getByUsername,
  tryCreateUser,
  updateAll,
  update,
  getQuery,
  ModelName,
};
