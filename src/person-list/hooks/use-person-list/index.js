import { useEffect, useState } from 'react';

export const usePersonList = (getPersonList) => {
  const [loadingPersonList, setLoadingPersonList] = useState(true);
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getPersonList().then((list) => {
      setLoadingPersonList(false);
      setPersonList(list);
    });
  }, []);

  return {
    loadingPersonList,
    personList,
  };
};
