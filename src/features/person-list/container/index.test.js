import { render, screen } from '@testing-library/react';
import { PersonListContainer } from './index';

const usePersonListMock = jest.fn();
const usePersonDetailsMock = jest.fn();

describe('PersonListContainer', () => {
  it('should render loading message when loading person list', async () => {
    usePersonListMock.mockReturnValue({
      loadingPersonList: true,
      personList: null,
    });
    usePersonDetailsMock.mockReturnValue({
      loadingPersonDetails: false,
      personDetails: null,
      showPersonDetails: jest.fn(),
    });

    render(
      <PersonListContainer
        usePersonList={usePersonListMock}
        usePersonDetails={usePersonDetailsMock}
      />
    );

    expect(screen.getByText('Loading person list...')).toBeInTheDocument();
  });

  it('should render person list when loaded', async () => {
    const mockPersonList = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    usePersonListMock.mockReturnValue({
      loadingPersonList: false,
      personList: mockPersonList,
    });
    usePersonDetailsMock.mockReturnValue({
      loadingPersonDetails: false,
      personDetails: null,
      showPersonDetails: jest.fn(),
    });

    render(
      <PersonListContainer
        usePersonList={usePersonListMock}
        usePersonDetails={usePersonDetailsMock}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Person container' })
    ).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });

  it('should render loading message when loading person details', async () => {
    usePersonListMock.mockReturnValue({
      loadingPersonList: false,
      personList: null,
    });
    usePersonDetailsMock.mockReturnValue({
      loadingPersonDetails: true,
      personDetails: null,
      showPersonDetails: jest.fn(),
    });

    render(
      <PersonListContainer
        usePersonList={usePersonListMock}
        usePersonDetails={usePersonDetailsMock}
      />
    );

    expect(screen.getByText('Loading person details...')).toBeInTheDocument();
  });

  it('should render person details when loaded', async () => {
    const mockPersonDetails = { id: 1, name: 'John Doe', age: 30 };
    usePersonListMock.mockReturnValue({
      loadingPersonList: false,
      personList: null,
    });
    usePersonDetailsMock.mockReturnValue({
      loadingPersonDetails: false,
      personDetails: mockPersonDetails,
      showPersonDetails: jest.fn(),
    });

    render(
      <PersonListContainer
        usePersonList={usePersonListMock}
        usePersonDetails={usePersonDetailsMock}
      />
    );

    expect(screen.getByText('Name: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Age: 30')).toBeInTheDocument();
  });
});
