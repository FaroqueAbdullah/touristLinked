import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  birth_day: { type: Date },
  gender: { type: String },
  role: [{ type: String }],
  password: { type: String },
  token: { type: String }
})

const User = mongoose.model("User", userSchema)

export { User }