import { render, screen } from '@testing-library/react';
import { Details } from './index';

describe('Details component', () => {
  const details = {
    name: 'John Doe',
    age: 30,
  };

  it('should render the person details', () => {
    render(<Details details={details} />);
    expect(
      screen.getByRole('heading', { name: 'Person details:' })
    ).toBeInTheDocument();
    expect(screen.getByText(`Name: ${details.name}`)).toBeInTheDocument();
    expect(screen.getByText(`Age: ${details.age}`)).toBeInTheDocument();
  });
});
