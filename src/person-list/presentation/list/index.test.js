import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { List } from './index';

describe('List', () => {
  const mockList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  const mockHandleShowDetails = jest.fn();

  beforeEach(() => {
    mockHandleShowDetails.mockClear();
  });

  it('should render a list of people', () => {
    render(<List list={mockList} handleShowDetails={mockHandleShowDetails} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent('John Doe');
    expect(listItems[1]).toHaveTextContent('Jane Doe');
  });

  it('should call handleShowDetails when a button is clicked', () => {
    render(<List list={mockList} handleShowDetails={mockHandleShowDetails} />);
    const buttons = screen.getAllByRole('button');
    userEvent.click(buttons[0]);
    expect(mockHandleShowDetails).toHaveBeenCalledWith(1);
    userEvent.click(buttons[1]);
    expect(mockHandleShowDetails).toHaveBeenCalledWith(2);
  });
});
