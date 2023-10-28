import express from 'express';
import authenticateRequest from '../../middleware/authenticate';
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from './controller';

import ValidateProfileAccess from '../../middleware/validateProfileAccess';

const postRoute = express.Router();

postRoute.post(
  '/:profileId/create',
  authenticateRequest,
  ValidateProfileAccess,
  createPost,
);
postRoute.get('/:profileId/getall', getAllPosts);
postRoute.get('/:postId/get', getPost);
postRoute.put(
  '/:profileId/:postId/update',
  authenticateRequest,
  ValidateProfileAccess,
  updatePost,
);
postRoute.delete(
  '/:profileId/:postId/delete',
  authenticateRequest,
  ValidateProfileAccess,
  deletePost,
);

export default postRoute;
