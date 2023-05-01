import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../../../store';
import WinPopup from '.';

const setUp = () => {
  const utils = render(
    <Router>
      <Provider store={store}>
        <WinPopup />
      </Provider>
    </Router>
  );

  return {
    ...utils
  };
};

describe('WinPopup', () => {
  test('renders popup', () => {
    setUp();
    const popupHeader = screen.getByRole('heading', { name: 'Win!', level: 1 });
    const gridSizeHeader = screen.getByRole('heading', { level: 2 });
    // const fireWorkContainer = screen.getByTestId('fireworks-container'); <-- once

    expect(popupHeader).toBeInTheDocument();
    expect(gridSizeHeader).toBeInTheDocument();
  });
});
