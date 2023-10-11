import express from 'express';

import 'dotenv/config';

const eventRoute = express.Router();

const createEvent = async () => {};

const getAllEvents = async () => {};

const getEvent = async () => {};

const updateEvent = async () => {};

const deleteEvent = async () => {};

eventRoute.post('/create', createEvent);
eventRoute.get('/:userId/getall', getAllEvents);
eventRoute.get('/:userId/:eventId/get', getEvent);
eventRoute.put('/:userId/:eventId/update', updateEvent);
eventRoute.delete('/:userId/:eventId/delete', deleteEvent);

export default eventRoute;
