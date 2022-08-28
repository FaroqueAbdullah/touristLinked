import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import { MongoError } from "../../common/error";

const keyMapping: any = {
  phoneNumber: "Phone number",
  email: "Email",
  username: "Username",
};

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, index: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    passwordResetToken: { type: String, required: false, default: '' },
    isActive: { type: Boolean, required: false, default: false },
    accountActivationToken: { type: String, required: false },
    address: { type: String, required: false },
    country: { type: String, required: false }
  },
  { timestamps: true }
);

// create index for username and email individually
userSchema.index({ username: "text" });
userSchema.index({ email: "text" });

userSchema.post("save", (error: any, doc: any, next: any) => {
  if (error.name === "MongoError" && error.code === 11000) {
    // if error.message contains the substring 'duplicate key error' then it's a duplicate username
    if (error.message.includes("duplicate key error")) {
      const keyName: string = Object.keys(error.keyValue)[0];
      const errorMessage = `${keyMapping[keyName]} already exists`;
      next(new MongoError(errorMessage));
    } else next(new MongoError(error.message));
  } else {
    next();
  }
});

const ModelName = "User";
const User = mongoose.model(ModelName, userSchema);

export { User as Model, ModelName as name };
