import { renderHook, act } from '@testing-library/react-hooks';
import { usePersonDetails } from './index';

describe('usePersonDetails', () => {
  const mockGetPersonDetails = jest.fn();

  it('should set loadingPersonDetails to true when showPersonDetails is called', async () => {
    mockGetPersonDetails.mockResolvedValueOnce({ name: 'John Doe' });
    const { result, waitForNextUpdate } = renderHook(() =>
      usePersonDetails(mockGetPersonDetails)
    );

    expect(result.current.loadingPersonDetails).toBe(false);

    act(() => {
      result.current.showPersonDetails(1);
    });

    expect(result.current.loadingPersonDetails).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loadingPersonDetails).toBe(false);
  });

  it('should set personDetails when showPersonDetails is called', async () => {
    const mockPersonDetails = { name: 'John Doe' };
    mockGetPersonDetails.mockResolvedValueOnce(mockPersonDetails);
    const { result, waitForNextUpdate } = renderHook(() =>
      usePersonDetails(mockGetPersonDetails)
    );

    expect(result.current.personDetails).toBe(false);

    act(() => {
      result.current.showPersonDetails(1);
    });

    await waitForNextUpdate();

    expect(result.current.personDetails).toEqual(mockPersonDetails);
  });
});
