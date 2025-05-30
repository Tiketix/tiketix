// lib/api/events.js
import { api } from "./axios";

export const getAllEvents = () => api.get("events/");
export const addEvent = (data) => api.post("events/add-event", data);
export const deleteEvent = (id) => api.delete("events/delete-event", { data: { id } });
export const getEventsByTitle = title => api.get("events/events-by-title", { params: { title } });
  


// import api from "./axios";

// export const getAllEvents = async () => {
//   return api.get("events/");
// };

// export const addEvent = async (data, token) => {
//   return api.post("events/add-event", data, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const deleteEvent = async (eventId, token) => {
//   return api.delete("events/delete-event", {
//     data: { id: eventId },
//     headers: { Authorization: `Bearer ${token}` },
//   });
// };

// export const getEventsByTitle = async (title) => {
//   return api.get("events/events-by-title", {
//     params: { title },
//   });
// };
