import { renderHook } from '@testing-library/react-hooks';
import { useEffectOnce } from './useEffectOnce';

describe('useFffectOnce', () => {
  const mockEffectCleanup = jest.fn();
  const mockEffectCallback = jest.fn().mockReturnValue(mockEffectCleanup);
  test('run effect only once', () => {
    const { rerender } = renderHook(() => useEffectOnce(mockEffectCallback));
    expect(mockEffectCallback).toHaveBeenCalledTimes(1);

    rerender();
    expect(mockEffectCallback).toHaveBeenCalledTimes(1);
  });
});
