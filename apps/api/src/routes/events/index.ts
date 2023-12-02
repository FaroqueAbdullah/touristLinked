import express from 'express';
import authenticateRequest from '../../middleware/authenticate';
import {
  createEvent,
  getAllEvents,
  getEvent,
  updateEvent,
  deleteEvent,
} from './controller';

const eventRoute = express.Router();

eventRoute.post('/create', authenticateRequest, createEvent);
eventRoute.get('/get/:eventId', getEvent);
eventRoute.put('/update/:eventId', authenticateRequest, updateEvent);
eventRoute.delete('/delete/:eventId', authenticateRequest, deleteEvent);
eventRoute.get('/:profileId/getall', getAllEvents);

export default eventRoute;
