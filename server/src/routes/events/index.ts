import express from 'express';
import authenticateRequest from '../../middleware/authenticate';
import {
  createEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} from './controller';

import ValidateProfileAccess from '../../middleware/validateProfileAccess';

const eventRoute = express.Router();

eventRoute.post(
  '/:profileId/create',
  authenticateRequest,
  ValidateProfileAccess,
  createEvent,
);
eventRoute.get('/:profileId/getall', getAllEvents);
eventRoute.get('/:profileId/:postId/get', getEvent);
eventRoute.put(
  '/:profileId/:postId/update',
  authenticateRequest,
  ValidateProfileAccess,
  updateEvent,
);
eventRoute.delete(
  '/:profileId/:postId/delete',
  authenticateRequest,
  ValidateProfileAccess,
  deleteEvent,
);

export default eventRoute;
