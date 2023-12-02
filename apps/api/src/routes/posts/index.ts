import express from 'express';
import authenticateRequest from '../../middleware/authenticate';
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from './controller';

const postRoute = express.Router();

postRoute.post('/create', authenticateRequest, createPost);
postRoute.get('/get/:postId', getPost);
postRoute.put('/update/:postId', authenticateRequest, updatePost);
postRoute.delete('/delete/:postId', authenticateRequest, deletePost);
postRoute.get('/:profileId/getall', getAllPosts);

export default postRoute;
