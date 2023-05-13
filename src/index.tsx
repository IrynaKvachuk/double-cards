import App from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import AppProvider from './store/AppProvider';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </HashRouter>
);
