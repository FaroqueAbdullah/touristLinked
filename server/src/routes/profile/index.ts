import express from 'express';
import {
  createProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from './controller';

const profileRoute = express.Router();

profileRoute.post('/:userId/create', createProfile);
profileRoute.get('/:userId/get', getProfile);
profileRoute.put('/:userId/update', updateProfile);
profileRoute.delete('/:userId/delete', deleteProfile);

export default profileRoute;
