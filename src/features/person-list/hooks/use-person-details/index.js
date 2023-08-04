import { useState } from 'react';

/**
 * @typedef {Object} ReturnObject
 * @property {boolean} loadingPersonDetails
 * @property {PersonDetails} personDetails
 * @property {function} showPersonDetails
 */

/**
 * @typedef {function(GetPersonDetails): ReturnObject} UsePersonDetails
 * @type {UsePersonDetails}
 */
export const usePersonDetails = (getPersonDetails) => {
  const [loadingPersonDetails, setLoadingPersonDetails] = useState(false);
  const [personDetails, setPersonDetails] = useState(false);

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
