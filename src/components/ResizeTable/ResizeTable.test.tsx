import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../../store';
import ResizeTable from '.';

const setUp = () => {
  const mockData = {
    showResizeTable: true,
    setShowResizeTable: jest.fn()
  };
  const utils = render(
    <Router>
      <Provider store={store}>
        <ResizeTable {...mockData} />
      </Provider>
    </Router>
  );
  const table = screen.getByTestId('resize-table');

  return {
    table,
    mockData,
    ...utils
  };
};

describe('ResizeTable', () => {
  test('renders table', () => {
    const { table } = setUp();

    expect(table).toBeInTheDocument();
  });

  // td onMouseOver <- if !isAllowed - expected getByText('Please, choose even value')
});
