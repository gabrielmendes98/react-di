import { useState } from 'react';

/**
 * @typedef {Object} ReturnObject
 * @property {boolean} loadingPersonDetails
 * @property {PersonDetails} personDetails
 * @property {function} showPersonDetails
 */

/**
 * @param {function(number): Promise<PersonDetails>} getPersonDetails
 * @returns {ReturnObject}
 */
export const usePersonDetails = (getPersonDetails) => {
  const [loadingPersonDetails, setLoadingPersonDetails] = useState(false);
  const [personDetails, setPersonDetails] = useState(false);

  /**
   * @param {number} id - The ID of the person to fetch details for.
   */
  const showPersonDetails = (id) => {
    setLoadingPersonDetails(true);
    getPersonDetails(id).then((details) => {
      setLoadingPersonDetails(false);
      setPersonDetails(details);
    });
  };

  return {
    loadingPersonDetails,
    personDetails,
    showPersonDetails,
  };
};
