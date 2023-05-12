import React from 'react';
import { setPreferenceItem } from '../../../features/Preferences/PreferencesActions';
import { ThemeT } from '../../../features/Preferences/PreferencesTypes';
import store from '../../../store';

type OnToggleChange = {
  event: React.ChangeEvent<HTMLInputElement>;
  prevTheme: ThemeT;
};

export const onToggleChange = (props: OnToggleChange) => {
  const { prevTheme } = props;
  const theme = prevTheme === 'light' ? 'dark' : 'light';

  store.dispatch(setPreferenceItem({ theme }));
};
