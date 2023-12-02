import http from '@/services/http/axios';
import { EventTypes } from '@/types/event.types';

const createEvent = (data: EventTypes) => {
    return http.post('/event/create', data);
};

const getEvent = (eventId: number) => {
    return http.get(`/event/get/${eventId}`);
};

const updateEvent = (eventId: number, data: EventTypes) => {
    return http.put(`/event/update/${eventId}`, data);
};

const deleteEvent = (eventId: number) => {
    return http.delete(`/event/update/${eventId}`);
};

const getUserAllEvents = (userId: number) => {
    return http.get(`/event/${userId}/getall`);
};

const EventService = {
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent,
    getUserAllEvents,
};

export default EventService;
