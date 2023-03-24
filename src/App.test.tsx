import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app body', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app-body');
  expect(linkElement).toBeInTheDocument();
});
