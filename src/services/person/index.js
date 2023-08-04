import { api } from '../api';

export const getPersonList = () => api.get('/persons');

export const getPersonDetails = (id) => api.get(`/persons/${id}`);
