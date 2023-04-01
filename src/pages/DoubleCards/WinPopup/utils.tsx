import { GameResult } from '.';
import { Dispatch, SetStateAction } from '../../../features/_common/types';
import { stringifyDataToLocalStorage, tryParseDataFromLocalStorage } from '../../../utils';

type OnClose = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const onClose = (props: OnClose) => {
  const { setIsOpen } = props;

  setIsOpen(false);

  return;
};

type RefreshBestResult = {
  newResult: GameResult;
  setGameResult: Dispatch<SetStateAction<GameResult>>;
};

export const refreshBestResult = (props: RefreshBestResult) => {
  const { newResult, setGameResult } = props;
  const { time, turns } = newResult;

  const prevResult: GameResult = tryParseDataFromLocalStorage().bestResult;
  const bestResult = {
    time: time > prevResult?.time ? prevResult.time : time,
    turns: turns > prevResult?.turns ? prevResult.turns : turns
  };

  stringifyDataToLocalStorage({
    bestResult
  });
  setGameResult(bestResult);

  return;
};
