import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import 'dotenv/config';


const { ObjectId } = require("mongoose").Types;
const postRoute = express.Router();
const ModelName = 'Post';

const createPost =async (req: Request, res: Response) => {
  
}

const getAllPosts =async (req: Request, res: Response) => {
  
}

const getPost =async (req: Request, res: Response) => {
  
}

const updatePost =async (req: Request, res: Response) => {
  
}

const deletePost =async (req: Request, res: Response) => {
  
}


postRoute.post("/:userId/create", createPost);
postRoute.get("/:userId/getall", getAllPosts);
postRoute.get("/:userId/:postId/get", getPost);
postRoute.put("/:userId/:postId/update", updatePost);
postRoute.delete("/:userId/:postId/delete", deletePost);


export default postRoute;

