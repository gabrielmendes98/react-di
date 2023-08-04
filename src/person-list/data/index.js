import { api } from '../../api';
import { mapPersonList } from './mappers';

export const getPersonList = () => api.get('/persons').then(mapPersonList);

export const getPersonDetails = (id) => api.get(`/persons/${id}`);
