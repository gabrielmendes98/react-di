import { api } from '../../api';
import { mapPersonList } from './mappers';

/** @type {GetPersonList} */
export const getPersonList = () => api.get('/persons').then(mapPersonList);

/** @type {GetPersonDetails} */
export const getPersonDetails = (id) => api.get(`/persons/${id}`);
