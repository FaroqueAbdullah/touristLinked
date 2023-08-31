import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    post: { type: String, required: true },
    img: { type: String, required: false },
    comments: { types: Array, required: false },
    likes: { types: Array, required: false }
  },
  { timestamps: true }
); 

const ModelName = "Post";
const Post = mongoose.model(ModelName, userSchema);

export { Post as Model, ModelName as name };
