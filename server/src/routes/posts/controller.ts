import  express, { Request, Response, NextFunction, RequestHandler  } from "express";

import 'dotenv/config';



const postRoute = express.Router();


const createPost =async (req: Request, res: Response) => {
  // console.log(req.params.userId)
  res.status(200).send({
    status: 'ok', 
    message: "User logged in successfully",
    data: {  } 
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


postRoute.post("/create", createPost);
postRoute.get("/:userId/getall", getAllPosts);
postRoute.get("/:userId/:postId/get", getPost);
postRoute.put("/:userId/:postId/update", updatePost);
postRoute.delete("/:userId/:postId/delete", deletePost);


export default postRoute;

