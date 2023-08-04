import { useState } from 'react';
import { getPersonDetails as _getPersonDetails } from '../../../services/person';

export const usePersonDetails = (getPersonDetails = _getPersonDetails) => {
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
