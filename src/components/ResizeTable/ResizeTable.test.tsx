import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import store from '../../store';
import ResizeTable from '.';

type SetUp = {
  showResizeTable?: boolean;
};

const setUp = (props: SetUp) => {
  const { showResizeTable = true } = props;
  const mockData = {
    showResizeTable,
    setShowResizeTable: jest.fn()
  };
  const utils = render(
    <Router>
      <Provider store={store}>
        <ResizeTable {...mockData} />
      </Provider>
    </Router>
  );
  const table = screen.queryByTestId('resize-table');

  return {
    table,
    mockData,
    ...utils
  };
};

describe('ResizeTable', () => {
  test('table is not rendered without prop', () => {
    const { table } = setUp({ showResizeTable: false });

    expect(table).not.toBeInTheDocument();
  });
  test('renders table', () => {
    const { table } = setUp({});

    expect(table).toBeInTheDocument();
  });

  // td onMouseOver <- if !isAllowed - expected getByText('Please, choose even value')
});
