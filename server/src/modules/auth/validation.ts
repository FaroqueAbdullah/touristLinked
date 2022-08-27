import Joi from 'joi';

import { UserInterface } from "./auth.interface";

const { ObjectId } = require("mongoose").Types;

const commonKeys = {
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  username: Joi.string().min(3).max(30).required(),
  country: Joi.string().min(3).max(15).optional(),
  address: Joi.string().min(3).max(30).optional(),
  phoneNumber: Joi.string().min(5).max(15).required(),
  email: Joi.string().min(5).max(30).required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password"))
};

const registrationSchema = Joi.object().keys({
  ...commonKeys,
});

const usernameSchema = Joi.object().keys({
  username: Joi.string().min(3).max(30).label("Username").required(),
});

const validateRegistration = (data: UserInterface) => {
  const result = registrationSchema.validate(data);
  result.value = { roleName: "user", ...data };
  return result;
};

const validateUsername = (data: string) => {
  const result = usernameSchema.validate(data);
  result.value = data;
  return result;
};



const userUpdateSchema = Joi.object().keys({
  _id: Joi.string().required(),
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  address: Joi.string().min(3).max(30).optional(),
  country: Joi.string().min(3).max(15).optional(),
  phoneNumber: Joi.string().min(5).max(15).required(),
  email: Joi.string().min(5).max(30).required()
});

const validateUserUpdate = (data: UserInterface) => {
  const result = userUpdateSchema.validate(data);
  result.value = data;
  return result;
};

export {
  validateRegistration,
  validateUsername,
  validateUserUpdate,
};
