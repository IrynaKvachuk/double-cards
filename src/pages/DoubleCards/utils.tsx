import { BoosterIF } from '../../features/Boosters/BoosterTypes';
import { initBoosters, setBooster } from '../../features/Boosters/BoostersActions';
import { setCardsDeck, setGridSize } from '../../features/DoubleCards/DoubleCardsActions';
import { openModal } from '../../features/Modal/ModalActions';
import store from '../../store';
import { tryParseDataFromLocalStorage } from '../../utils';
import { shuffleCards } from './GameTable/utils';

const loadBoosters = (prevBoosters: Array<BoosterIF>) => {
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
  const { gridSize = {}, boosters } = localStorageData;

  if (Object.keys(gridSize).length) store.dispatch(setGridSize(gridSize));
  loadBoosters(boosters);
};

export const reloadGame = () => {
  const newCards = shuffleCards();
  store.dispatch(setCardsDeck(newCards));
  store.dispatch(openModal('none'));
};
