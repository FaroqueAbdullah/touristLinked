import  express, { Request, Response, NextFunction, RequestHandler  } from "express";

import 'dotenv/config';


const profileRoute = express.Router();


const createProfile =async (req: Request, res: Response) => {
  return res.status(201).send({
    status: "ok",
    message: "Profile created Succesfully",
  });
}

const getProfile =async (req: Request, res: Response) => {
  
}

const updateProfile =async (req: Request, res: Response) => {
  
}

const deleteProfile =async (req: Request, res: Response) => {
  
}


profileRoute.post("/:userId/create", createProfile);
profileRoute.get("/:userId/get", getProfile);
profileRoute.put("/:userId/update", updateProfile);
profileRoute.delete("/:userId/delete", deleteProfile);


export default profileRoute;

