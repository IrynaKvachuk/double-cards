import { DependencyList, useEffect } from 'react';
import { useTimeoutFn } from '../useTimeoutFn/useTimeoutFn';

export type UseDebounceReturn = [() => boolean | null, () => void];

export const useDebounce = (
  fn: Function,
  ms: number = 0,
  deps: DependencyList = []
): UseDebounceReturn => {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, deps);

  return [isReady, cancel];
};

export default useDebounce;
