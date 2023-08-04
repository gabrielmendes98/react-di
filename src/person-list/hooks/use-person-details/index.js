import { useState } from 'react';
import { getPersonDetails } from '../../../services/person';

export const usePersonDetails = (
  getPersonDetailsService = getPersonDetails
) => {
  const [loadingPersonDetails, setLoadingPersonDetails] = useState(false);
  const [personDetails, setPersonDetails] = useState(false);

  const showPersonDetails = (id) => {
    setLoadingPersonDetails(true);
    getPersonDetailsService(id).then((details) => {
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
