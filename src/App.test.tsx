import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import store from './store';

test('renders app body', () => {
  render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );
  const linkElement = screen.getByTestId('app-body');
  expect(linkElement).toBeInTheDocument();
});
