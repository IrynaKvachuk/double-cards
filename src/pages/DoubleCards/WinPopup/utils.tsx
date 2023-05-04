import { GameResult } from '.';
import { GridSize } from '../../../features/DoubleCards/DoubleCardsTypes';
import { DispatchT, SetStateAction } from '../../../features/_common/types';
import { stringifyDataToLocalStorage, tryParseDataFromLocalStorage } from '../../../utils';
import { reloadGame } from '../utils';

type OnClose = {
  setIsOpen: DispatchT<SetStateAction<boolean>>;
};

export const onClose = (props: OnClose) => {
  const { setIsOpen } = props;

  reloadGame();
  setIsOpen(false);

  return;
};

type RefreshBestResult = {
  newResult: GameResult;
  gridSize: GridSize;
  setGameResult: DispatchT<SetStateAction<GameResult>>;
};

export const refreshBestResult = (props: RefreshBestResult) => {
  const { newResult, gridSize, setGameResult } = props;
  const { columnAmount, rowAmount } = gridSize;
  const { time, turns } = newResult;
  const sizeName = String(columnAmount + 'x' + rowAmount);

  const prevResults = tryParseDataFromLocalStorage().bestResult;
  const resultForCurrentSize: GameResult = prevResults?.[sizeName];
  const bestResult = {
    time: time > resultForCurrentSize?.time ? resultForCurrentSize.time : time,
    turns: turns > resultForCurrentSize?.turns ? resultForCurrentSize.turns : turns
  };

  stringifyDataToLocalStorage({
    bestResult: { ...prevResults, [sizeName]: bestResult }
  });
  setGameResult(bestResult);

  return;
};
