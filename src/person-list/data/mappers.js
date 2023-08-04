/**
 * @param {Array} personList
 * @returns {Array<PersonList>}
 */
export const mapPersonList = (personList) =>
  personList.map((person) => ({
    id: person.id,
    name: person.name.toUpperCase(),
  }));
