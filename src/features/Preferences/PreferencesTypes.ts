export type ThemeT = 'light' | 'dark';

export enum Preferences {
  SET_THEME = 'DOUBLE_CARDS/SET_THEME'
}

interface SetTheme {
  type: typeof Preferences.SET_THEME;
  payload: { theme: ThemeT };
}

export type PreferencesType = SetTheme;
