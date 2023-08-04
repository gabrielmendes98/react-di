import { useEffect, useState } from 'react';

/**
 * @typedef {Object} ReturnObject
 * @property {boolean} loadingPersonList
 * @property {PersonList} personList
 */

/**
 * @typedef {function(GetPersonList): ReturnObject} UsePersonList
 * @type {UsePersonList}
 */
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
