export const formatPersonList = (personList) =>
  personList.map((person) => ({
    id: person.id,
    name: person.name.toUpperCase(),
  }));
