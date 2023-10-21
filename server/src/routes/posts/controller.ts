import { Request, Response, NextFunction } from 'express';

import { PostInputType } from '../../schemas/post.schema';
import {
  createUserPost,
  deleteUserPost,
  findUserAllPost,
  findUserPost,
  updateUserPost,
} from '../../services/post.service';

const createPost = async (
  req: Request<{ profileId: string }, object, PostInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { content, image } = req.body;

  try {
    await createUserPost({
      content,
      image,
      authorId: res.locals.profileId,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Post created Succesfully',
    });
  } catch (error) {
    return next(error);
  }
};

const getAllPosts = async (
  req: Request<{ userId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorId = parseInt(req.params.userId);
    const posts = await findUserAllPost({ authorId });

    return res.status(201).send({
      status: 'ok',
      message: 'User posts ',
      data: { ...posts },
    });
  } catch (error) {
    return next(error);
  }
};

const getPost = async (
  req: Request<{ userId: string; postId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.postId);
    const posts = await findUserPost({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'User posts ',
      data: { ...posts },
    });
  } catch (error) {
    return next(error);
  }
};

const updatePost = async (
  req: Request<{ userId: string; postId: string }, object, PostInputType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { content, image } = req.body;

    const id = parseInt(req.params.postId);
    const post = await updateUserPost(
      { id },
      {
        content,
        image,
      },
    );

    return res.status(201).send({
      status: 'ok',
      message: 'Post updated successfully ',
      data: { ...post },
    });
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (
  req: Request<{ userId: string; postId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.postId);
    await deleteUserPost({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'Post deleted successfully ',
    });
  } catch (error) {
    return next(error);
  }
};

export { createPost, getAllPosts, getPost, updatePost, deletePost };
