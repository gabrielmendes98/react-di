import { mapPersonList } from './mappers';

describe('mapPersonList', () => {
  it('should return an empty array when given an empty array', () => {
    const result = mapPersonList([]);
    expect(result).toEqual([]);
  });

  it('should return an array of objects with id and name properties', () => {
    const personList = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const result = mapPersonList(personList);
    expect(result).toEqual([
      { id: 1, name: 'JOHN' },
      { id: 2, name: 'JANE' },
    ]);
  });

  it('should not modify the original array', () => {
    const personList = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    mapPersonList(personList);
    expect(personList).toEqual([
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]);
  });
});
