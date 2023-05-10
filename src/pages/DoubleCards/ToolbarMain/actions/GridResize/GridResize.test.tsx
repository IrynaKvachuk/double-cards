import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ReloadGame from '.';
import store from '../../../../../store';

const setUp = () => {
  const utils = render(
    <Router>
      <Provider store={store}>
        <ReloadGame />
      </Provider>
    </Router>
  );
  const reloadBtn = screen.getByRole('button', { name: 'grid-resize-btn' });

  return {
    reloadBtn,
    ...utils
  };
};

describe('GridResize', () => {
  test('renders action btn', () => {
    const { reloadBtn } = setUp();

    expect(reloadBtn).toBeInTheDocument();
  });
});

describe('ResizeTable', () => {});
