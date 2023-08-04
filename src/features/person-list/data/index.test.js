import { getPersonList, getPersonDetails } from './index';
import { api } from '../../../api';
import { mapPersonList } from './mappers';

jest.mock('../../../api');

describe('getPersonList', () => {
  it('should call api.get with "/persons"', async () => {
    api.get.mockImplementationOnce(() => Promise.resolve([]));
    await getPersonList();
    expect(api.get).toHaveBeenCalledWith('/persons');
  });

  it('should return the mapped person list', async () => {
    const mockPersonList = [{ id: 1, name: 'John Doe' }];
    api.get.mockResolvedValue(mockPersonList);
    const result = await getPersonList();
    expect(result).toEqual(mapPersonList(mockPersonList));
  });
});

describe('getPersonDetails', () => {
  it('should call api.get with "/persons/:id"', async () => {
    const mockId = 1;
    await getPersonDetails(mockId);
    expect(api.get).toHaveBeenCalledWith(`/persons/${mockId}`);
  });

  it('should return the person details', async () => {
    const mockPersonDetails = { id: 1, name: 'John Doe', age: 30 };
    api.get.mockResolvedValue(mockPersonDetails);
    const result = await getPersonDetails(mockPersonDetails.id);
    expect(result).toEqual(mockPersonDetails);
  });
});
