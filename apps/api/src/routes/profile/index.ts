import express from 'express';
import {
  createProfile,
  deleteProfile,
  getProfile,
  updateProfile,
} from './controller';
import authenticateRequest from '../../middleware/authenticate';
import ValidateRequestId from '../../middleware/validateId';

const profileRoute = express.Router();

profileRoute.post(
  '/:userId/create',
  authenticateRequest,
  ValidateRequestId,
  createProfile,
);
profileRoute.get('/:userId/get', getProfile);
profileRoute.put(
  '/:userId/update',
  authenticateRequest,
  ValidateRequestId,
  updateProfile,
);
profileRoute.delete(
  '/:userId/delete',
  authenticateRequest,
  ValidateRequestId,
  deleteProfile,
);

export default profileRoute;
