import  express, { Request, Response, NextFunction, RequestHandler  } from "express";

import 'dotenv/config';


const postRoute = express.Router();


const createPost =async (req: Request, res: Response) => {
  return res.status(201).send({
    status: "ok",
    message: "Post created Succesfully",
  });
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

