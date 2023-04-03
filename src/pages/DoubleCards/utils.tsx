import { setCardsDeck, setGridSize } from '../../features/DoubleCards/DoubleCardsActions';
import { openModal } from '../../features/Modal/ModalActions';
import store from '../../store';
import { tryParseDataFromLocalStorage } from '../../utils';
import { shuffleCards } from './GameTable/utils';

export const getPrevSettings = () => {
  const localStorageData = tryParseDataFromLocalStorage();
  const { gridSize = {} } = localStorageData;

  if (Object.keys(gridSize).length) store.dispatch(setGridSize(gridSize));
};

export const reloadGame = () => {
  const newCards = shuffleCards();
  store.dispatch(setCardsDeck(newCards));
  store.dispatch(openModal('none'));
};
