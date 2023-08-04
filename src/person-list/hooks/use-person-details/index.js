import { useState } from 'react';

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
