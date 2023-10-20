import { Request, Response, NextFunction } from 'express';
import {
  createUserProfile,
  deleteUserProfile,
  findUserProfile,
  updateOrCreateUserProfile,
} from '../../services/profile.service';

import 'dotenv/config';
import { UserProfileInputType } from '../../schemas/profile.schema';

const createProfile = async (
  req: Request<{ userId: string }, object, UserProfileInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { userName, profileImage, bio, profession, address, country } =
    req.body;

  try {
    const profile = await createUserProfile({
      userName,
      profileImage,
      bio,
      profession,
      address,
      country,
      userId: res.locals.id,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Profile created Succesfully',
      data: { ...profile },
    });
  } catch (error) {
    return next(error);
  }
};

const getProfile = async (
  req: Request<{ userId: string }, object, object>,
  res: Response,
  next: NextFunction,
) => {
  const userId = parseInt(req.params.userId);
  try {
    const profile = await findUserProfile({
      userId,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Profile created Succesfully',
      data: { ...profile },
    });
  } catch (error) {
    return next(error);
  }
};

const updateProfile = async (
  req: Request<{ userId: string }, object, UserProfileInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { userName, profileImage, bio, profession, address, country } =
    req.body;

  try {
    const profile = await updateOrCreateUserProfile(
      {
        userId: res.locals.id,
      },
      {
        userName,
        profileImage,
        bio,
        profession,
        address,
        country,
        userId: res.locals.id,
      },
    );

    return res.status(201).send({
      status: 'ok',
      message: 'Profile Updated Succesfully',
      data: { ...profile },
    });
  } catch (error) {
    return next(error);
  }
};

const deleteProfile = async (
  req: Request<{ userId: string }, object, object>,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteUserProfile({ id: res.locals.id });

    return res.status(201).send({
      status: 'ok',
      message: 'Profile deleted Succesfully',
    });
  } catch (error) {
    return next(error);
  }
};

export { createProfile, getProfile, updateProfile, deleteProfile };
