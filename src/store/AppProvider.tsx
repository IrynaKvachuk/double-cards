import React from 'react';
import { Provider } from 'react-redux';
import store from '.';

type Props = {
  children: React.ReactNode;
};

const AppProvider = (props: Props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <React.StrictMode>{children}</React.StrictMode>
    </Provider>
  );
};

export default AppProvider;
