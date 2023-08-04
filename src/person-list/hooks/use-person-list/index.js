import { useEffect, useState } from 'react';
import { getPersonList } from '../../../services/person';
import { formatPersonList } from './utils';

export const usePersonList = (getPersonListService = getPersonList) => {
  const [loadingPersonList, setLoadingPersonList] = useState(true);
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getPersonListService('/persons').then((list) => {
      setLoadingPersonList(false);
      setPersonList(formatPersonList(list));
    });
  }, []);

  return {
    loadingPersonList,
    personList,
  };
};
