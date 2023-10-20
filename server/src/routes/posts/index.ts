import express from 'express';
import authenticateRequest from '../../middleware/authenticate';
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from './controller';
import ValidateRequestId from '../../middleware/validateId';

const postRoute = express.Router();

postRoute.post(
  '/:userId/create',
  authenticateRequest,
  ValidateRequestId,
  createPost,
);
postRoute.get('/:userId/getall', getAllPosts);
postRoute.get('/:userId/:postId/get', getPost);
postRoute.put(
  '/:userId/:postId/update',
  authenticateRequest,
  ValidateRequestId,
  updatePost,
);
postRoute.delete(
  '/:userId/:postId/delete',
  authenticateRequest,
  ValidateRequestId,
  deletePost,
);

export default postRoute;
