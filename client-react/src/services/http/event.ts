import http from '@/services/http/axios';

const createEvent = (data: any) => {
  return http.post(`/event/create`, data);
};

const getEvent = (eventId: number) => {
  return http.get(`/event/get/${eventId}`);
};

const updateEvent = (eventId: number, data: any) => {
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
