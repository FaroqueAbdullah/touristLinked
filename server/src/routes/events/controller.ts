import { Request, Response, NextFunction } from 'express';

import { EventInputType } from '../../schemas/event.schema';
import {
  createUserEvent,
  deleteUserEvent,
  findUserAllEvent,
  findUserEvent,
  updateUserEvent,
} from '../../services/event.service';
import { ForbiddenRequest, NotFound } from '../../utils/appError';

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

  const eventCreatorId = res.locals.profileId;

  try {
    await createUserEvent({
      eventLocation,
      eventStart,
      eventEnd,
      totalMembers,
      eventInfo,
      eventFee,
      eventCreatorId,
    });

    return res.status(201).send({
      status: 'ok',
      message: 'Event created Succesfully',
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
    const event = await findUserEvent({ id });

    if (!event) {
      return next(new NotFound('Event Not Found'));
    }

    return res.status(201).send({
      status: 'ok',
      message: 'User events ',
      data: event,
    });
  } catch (error) {
    return next(error);
  }
};

const updateEvent = async (
  req: Request<{ eventId: string }, object, EventInputType>,
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
    const event = await findUserEvent({ id });

    if (!event) {
      return next(new NotFound('Event Not Found'));
    }

    if (event.eventCreatorId !== res.locals.profileId) {
      return next(new ForbiddenRequest('Access denied'));
    }

    const updatedEvent = await updateUserEvent(
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
      data: { ...updatedEvent },
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
    const event = await findUserEvent({ id });

    if (!event) {
      return next(new NotFound('Event Not Found'));
    }

    if (event.eventCreatorId !== res.locals.profileId) {
      return next(new ForbiddenRequest('Access denied'));
    }

    await deleteUserEvent({ id });

    return res.status(201).send({
      status: 'ok',
      message: 'Event deleted successfully ',
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

export { createEvent, getEvent, updateEvent, deleteEvent, getAllEvents };
