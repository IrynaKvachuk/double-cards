import { BoosterIF } from '../../features/Boosters/BoosterTypes';
import { initBoosters, setBooster } from '../../features/Boosters/BoostersActions';
import { setCardsDeck, setGridSize } from '../../features/DoubleCards/DoubleCardsActions';
import { openModal } from '../../features/Modal/ModalActions';
import { getPreferences } from '../../features/Preferences/PreferencesActions';
import { PreferencesIF } from '../../features/Preferences/PreferencesTypes';
import store from '../../store';
import { tryParseDataFromLocalStorage } from '../../utils';
import { shuffleCards } from './GameTable/utils';

const loadPrevPreferences = (prevPreferences: PreferencesIF) => {
  if (!prevPreferences) return;

  store.dispatch(getPreferences(prevPreferences));
};

const loadPrevBoosters = (prevBoosters: Array<BoosterIF>) => {
  if (prevBoosters) {
    for (const [key, value] of Object.entries(prevBoosters)) {
      const booster = value as BoosterIF;
      store.dispatch(setBooster(booster));
    }
    return;
  }
  return store.dispatch(initBoosters());
};

export const getPrevSettings = () => {
  const localStorageData = tryParseDataFromLocalStorage();
  const { gridSize = {}, boosters, preferences } = localStorageData;

  if (Object.keys(gridSize).length) store.dispatch(setGridSize(gridSize));
  loadPrevBoosters(boosters);
  loadPrevPreferences(preferences);
};

export const reloadGame = () => {
  const newCards = shuffleCards();
  store.dispatch(setCardsDeck(newCards));
  store.dispatch(openModal('none'));
};
