import  express, { Request, Response, NextFunction, RequestHandler  } from "express";
import jwt from "jsonwebtoken";
import { createUserProfile, deleteUserProfile, findUserProfile, updateOrCreateUserProfile } from "../../services/profile.service";

import 'dotenv/config';


const profileRoute = express.Router();

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';


const createProfile =async (req: Request, res: Response) => {
  const { userName, profileImage, bio, profession, address, country } = req.body
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return res.status(400).send({
      status: "error",
      message: "Request is not valid",
    });
  }

  try {
    const profile = await createUserProfile({
      userName,
      profileImage,
      bio,
      profession,
      address,
      country,
      userId: jwtDecode.id
    })
  
    return res.status(201).send({
      status: "ok",
      message: "Profile created Succesfully",
      data: {...profile}
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: "Server Error"
    });
  }

  
}

const getProfile =async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return res.status(400).send({
      status: "error",
      message: "Request is not valid",
    });
  }

  try {
    const profile = await findUserProfile({
      userId: jwtDecode.id
    })
  
    return res.status(201).send({
      status: "ok",
      message: "Profile created Succesfully",
      data: {...profile}
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: "Server Error"
    });
  }
}

const updateProfile =async (req: Request, res: Response) => {
  const { userName, profileImage, bio, profession, address, country }  = req.body
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return res.status(400).send({
      status: "error",
      message: "Request is not valid",
    });
  }

  try {
    const profile = await updateOrCreateUserProfile({ 
      userId: jwtDecode.id
     }, {
      userName,
      profileImage,
      bio,
      profession,
      address,
      country,
      userId: jwtDecode.id
    })
  
    return res.status(201).send({
      status: "ok",
      message: "Profile Updated Succesfully",
      data: {...profile}
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: "Server Error"
    });
  }
}

const deleteProfile =async (req: Request, res: Response) => {
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return res.status(400).send({
      status: "error",
      message: "Request is not valid",
    });
  }

  try {
    await deleteUserProfile({ id: jwtDecode.id })

    return res.status(201).send({
      status: "ok",
      message: "Profile deleted Succesfully"
    });

  } catch (error) {
    return res.status(400).send({
      status: "error",
      message: "Server Error"
    });
  }
}

profileRoute.post("/:userId/create", createProfile);
profileRoute.get("/:userId/get", getProfile);
profileRoute.put("/:userId/update", updateProfile);
profileRoute.delete("/:userId/delete", deleteProfile);


export default profileRoute;

