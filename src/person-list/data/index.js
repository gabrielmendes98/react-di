import { api } from '../../api';
import { mapPersonList } from './mappers';

/**
 * @function
 * @returns {Promise<PersonList>}
 */
export const getPersonList = () => api.get('/persons').then(mapPersonList);

/**
 * @function
 * @param {number} id
 * @returns {Promise<PersonDetails>}
 */
export const getPersonDetails = (id) => api.get(`/persons/${id}`);
