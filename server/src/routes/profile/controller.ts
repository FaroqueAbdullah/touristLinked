import { 
  Request, 
  Response, 
  NextFunction
} from "express";
import jwt from "jsonwebtoken";
import { 
  createUserProfile, 
  deleteUserProfile, 
  findUserProfile, 
  updateOrCreateUserProfile 
} from "../../services/profile.service";

import 'dotenv/config';
import { UserProfileInputType } from "../../schemas/profile.schema";
import { BadRequest } from "../../utils/appError";

const secretToken = process.env.TOKEN_KEY ? process.env.TOKEN_KEY : '';


const createProfile =async (
  req: Request< {userId: string}, {}, UserProfileInputType >, 
  res: Response, 
  next: NextFunction
) => {
  const { userName, profileImage, bio, profession, address, country } = req.body
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return next(new BadRequest("Bad Request"))
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
    return next(error);
  }
}

const getProfile =async (
  req: Request< {userId: string}, {}, {} >, 
  res: Response, 
  next: NextFunction
) => {
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return next(new BadRequest("Bad Request"))
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
    return next(error);
  }
}

const updateProfile =async (
  req: Request< {userId: string}, {}, UserProfileInputType >, 
  res: Response, 
  next: NextFunction
) => {
  const { userName, profileImage, bio, profession, address, country }  = req.body
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return next(new BadRequest("Bad Request"))
  }

  try {
    const profile = await updateOrCreateUserProfile({ 
      userId: jwtDecode.id
     },{
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
    return next(error)
  }
}

const deleteProfile =async (
  req: Request< {userId: string}, {}, {} >, 
  res: Response, 
  next: NextFunction
) => {
  const accessToken = req.headers.authorization as string;
  const jwtDecode = jwt.verify(accessToken, secretToken) as jwt.JwtPayload

  const isValidRequest = req.params.userId == jwtDecode.id;

  if (!isValidRequest) {
    return next(new BadRequest("Bad Request"))
  }

  try {
    await deleteUserProfile({ id: jwtDecode.id })

    return res.status(201).send({
      status: "ok",
      message: "Profile deleted Succesfully"
    });

  } catch (error) {
    return next(error);
  }
}

export {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
};

