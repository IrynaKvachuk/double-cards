import { Preferences, PreferencesType, ThemeT } from './PreferencesTypes';

export const setTheme = (input: ThemeT): PreferencesType => ({
  type: Preferences.SET_THEME,
  payload: { theme: input }
});
