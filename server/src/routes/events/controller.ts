import { Request, Response, NextFunction } from 'express';

import { EventInputType } from '../../schemas/event.schema';
import {
  createUserEvent,
  deleteUserEvent,
  findUserAllEvent,
  findUserEvent,
  updateUserEvent,
} from '../../services/event.service';

const createEvent = async (
  req: Request<{ profileId: string }, object, EventInputType>,
  res: Response,
  next: NextFunction,
) => {
  const {
    eventLocation,
    eventStart,
    eventEnd,
    totalMembers,
    eventInfo,
    eventFee,
  } = req.body;

  const authorId = parseInt(req.params.profileId);

  try {
    await createUserEvent({
      eventLocation,
      eventStart,
      eventEnd,
      totalMembers,
      eventInfo,
      eventFee,
      eventCreatorId: authorId,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Event created Succesfully',
    });
  } catch (error) {
    return next(error);
  }
};

const getAllEvents = async (
  req: Request<{ profileId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const eventCreatorId = parseInt(req.params.profileId);

    const events = await findUserAllEvent({ eventCreatorId });

    return res.status(201).send({
      status: 'ok',
      message: 'User events ',
      data: events,
    });
  } catch (error) {
    return next(error);
  }
};

const getEvent = async (
  req: Request<{ profileId: string; eventId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.eventId);
    const events = await findUserEvent({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'User events ',
      data: events,
    });
  } catch (error) {
    return next(error);
  }
};

const updateEvent = async (
  req: Request<{ profileId: string; eventId: string }, object, EventInputType>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      eventLocation,
      eventStart,
      eventEnd,
      totalMembers,
      eventInfo,
      eventFee,
    } = req.body;

    const id = parseInt(req.params.eventId);
    const event = await updateUserEvent(
      { id },
      {
        eventLocation,
        eventStart,
        eventEnd,
        totalMembers,
        eventInfo,
        eventFee,
      },
    );

    return res.status(201).send({
      status: 'ok',
      message: 'Event updated successfully ',
      data: { ...event },
    });
  } catch (error) {
    return next(error);
  }
};

const deleteEvent = async (
  req: Request<{ profileId: string; eventId: string }, object, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = parseInt(req.params.eventId);
    await deleteUserEvent({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'Event deleted successfully ',
    });
  } catch (error) {
    return next(error);
  }
};

export { createEvent, getAllEvents, getEvent, updateEvent, deleteEvent };
