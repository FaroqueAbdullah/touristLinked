import { Request, Response, NextFunction } from 'express';

import { PostInputType } from '../../schemas/post.schema';
import {
  createUserPost,
  deleteUserPost,
  findUserAllPost,
  findUserPost,
  updateUserPost,
} from '../../services/post.service';
import { ForbiddenRequest, NotFound } from '../../utils/appError';

const createPost = async (
  req: Request<Record<string, never>, object, PostInputType>,
  res: Response,
  next: NextFunction,
) => {
  const { content, image } = req.body;

  const authorId = res.locals.profileId;

  try {
    await createUserPost({
      content,
      image,
      authorId,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Post created Succesfully',
    });
  } catch (error) {
    return next(error);
  }
};

const getPost = async (
  req: Request<{ postId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.postId);
    const post = await findUserPost({ id });

    if (!post) {
      return next(new NotFound('Post Not Found'));
    }

    return res.status(201).send({
      status: 'ok',
      message: 'User posts ',
      data: post,
    });
  } catch (error) {
    return next(error);
  }
};

const updatePost = async (
  req: Request<{ profileId: string; postId: string }, object, PostInputType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { content, image } = req.body;

    const id = parseInt(req.params.postId);
    const post = await findUserPost({ id });

    if (!post) {
      return next(new NotFound('Post Not Found'));
    }

    if (post.authorId !== res.locals.profileId) {
      return next(new ForbiddenRequest('Access denied'));
    }

    const updatedPost = await updateUserPost(
      { id },
      {
        content,
        image,
      },
    );

    return res.status(201).send({
      status: 'ok',
      message: 'Post updated successfully ',
      data: { ...updatedPost },
    });
  } catch (error) {
    return next(error);
  }
};

const deletePost = async (
  req: Request<{ profileId: string; postId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.postId);
    const post = await findUserPost({ id });

    if (!post) {
      return next(new NotFound('Post Not Found'));
    }

    if (post.authorId !== res.locals.profileId) {
      return next(new ForbiddenRequest('Access denied'));
    }

    await deleteUserPost({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'Post deleted successfully ',
    });
  } catch (error) {
    return next(error);
  }
};

const getAllPosts = async (
  req: Request<{ profileId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const authorId = parseInt(req.params.profileId);

    const posts = await findUserAllPost({ authorId });

    return res.status(201).send({
      status: 'ok',
      message: 'User posts ',
      data: posts,
    });
  } catch (error) {
    return next(error);
  }
};

export { createPost, getPost, updatePost, deletePost, getAllPosts };
