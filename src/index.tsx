import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import store from './store';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </HashRouter>
);
