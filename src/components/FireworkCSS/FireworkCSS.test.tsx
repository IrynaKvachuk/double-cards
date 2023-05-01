import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FireworkCSS from '.';
import store from '../../store';

const setUp = () => {
  const utils = render(
    <Router>
      <Provider store={store}>
        <FireworkCSS />
      </Provider>
    </Router>
  );
  const fireWorkContainer = screen.getByTestId('fireworks-container');

  return {
    fireWorkContainer,
    ...utils
  };
};

describe('FireworkCSS', () => {
  test('renders firework properly', () => {
    const { fireWorkContainer } = setUp();

    expect(fireWorkContainer).toBeInTheDocument();
  });
});
