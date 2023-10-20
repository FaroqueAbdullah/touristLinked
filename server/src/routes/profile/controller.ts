import { Request, Response, NextFunction } from 'express';
import {
  createUserProfile,
  deleteUserProfile,
  findUserProfile,
  updateOrCreateUserProfile,
} from '../../services/profile.service';

import 'dotenv/config';
import { UserProfileInputType } from '../../schemas/profile.schema';
import { BadRequest } from '../../utils/appError';

const createProfile = async (
  req: Request<{ userId: string }, object, UserProfileInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { userName, profileImage, bio, profession, address, country } =
    req.body;

  const isValidRequest = req.params.userId == res.locals.id;

  if (!isValidRequest) {
    return next(new BadRequest('Bad Request'));
  }

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
  const isValidRequest = req.params.userId == res.locals.id;

  if (!isValidRequest) {
    return next(new BadRequest('Bad Request'));
  }

  try {
    const profile = await findUserProfile({
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

const updateProfile = async (
  req: Request<{ userId: string }, object, UserProfileInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { userName, profileImage, bio, profession, address, country } =
    req.body;

  const isValidRequest = req.params.userId == res.locals.id;
  if (!isValidRequest) {
    return next(new BadRequest('Bad Request'));
  }

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
  const isValidRequest = req.params.userId == res.locals.id;

  if (!isValidRequest) {
    return next(new BadRequest('Bad Request'));
  }

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
