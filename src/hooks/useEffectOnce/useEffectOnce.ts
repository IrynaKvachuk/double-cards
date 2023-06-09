import { useEffect, useRef, useState } from 'react';

export const useEffectOnce = (effect: () => void | (() => void)) => {
  const destroyFunc = useRef<void | (() => void)>();
  const effectCalled = useRef(false);
  const renderAfterCalled = useRef(false);

  const [effectOnceValue, setVal] = useState<number>(0);

  if (effectCalled.current) {
    renderAfterCalled.current = true;
  }

  useEffect(() => {
    // only execute the effect first time around
    if (!effectCalled.current) {
      destroyFunc.current = effect();
      effectCalled.current = true;
    }

    // this forces one render after the effect is run
    setVal((effectOnceValue) => effectOnceValue + 1);

    return () => {
      if (!renderAfterCalled.current) return;
      if (destroyFunc.current) destroyFunc.current();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
