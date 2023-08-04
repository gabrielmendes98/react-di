import { useEffect, useState } from 'react';
import { getPersonList as _getPersonList } from '../../../services/person';
import { formatPersonList } from './utils';

export const usePersonList = (getPersonList = _getPersonList) => {
  const [loadingPersonList, setLoadingPersonList] = useState(true);
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    getPersonList('/persons').then((list) => {
      setLoadingPersonList(false);
      setPersonList(formatPersonList(list));
    });
  }, []);

  return {
    loadingPersonList,
    personList,
  };
};
