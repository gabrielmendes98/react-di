import { renderHook } from '@testing-library/react-hooks';
import { usePersonList } from './index';

describe('usePersonList', () => {
  it('should fetch and return the person list', async () => {
    const mockPersonList = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
    const mockGetPersonList = jest.fn().mockResolvedValue(mockPersonList);

    const { result, waitForNextUpdate } = renderHook(() =>
      usePersonList(mockGetPersonList)
    );

    expect(result.current.loadingPersonList).toBe(true);
    expect(result.current.personList).toEqual([]);

    await waitForNextUpdate();

    expect(mockGetPersonList).toHaveBeenCalled();
    expect(result.current.loadingPersonList).toBe(false);
    expect(result.current.personList).toEqual(mockPersonList);
  });
});
