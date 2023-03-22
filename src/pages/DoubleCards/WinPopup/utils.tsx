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
  newResult: number;
  setBestResult: Dispatch<SetStateAction<number>>;
};

export const refreshBestResult = (props: RefreshBestResult) => {
  const { newResult, setBestResult } = props;
  const bestResult = tryParseDataFromLocalStorage().bestResult || 0;

  if (!bestResult || newResult < bestResult) {
    stringifyDataToLocalStorage({ bestResult: newResult });
    setBestResult(newResult);
  }

  setBestResult(bestResult);
  return;
};
