import { ObstacleIF } from '../../features/Obstacles/ObstaclesTypes';
import { DispatchT, SetStateAction } from '../../features/_common/types';
import { setAnimation } from '../../utils';

type SetObstacle = {
  obstacleElRef: React.RefObject<HTMLDivElement>;
  obstacleData: ObstacleIF;
  fireCount: number;
  setFireCount: DispatchT<SetStateAction<number>>;
};

export const setHighlightAnimation = (elementRef: React.RefObject<HTMLDivElement>) => {
  const element = elementRef.current;
  if (!element) return;

  setTimeout(() => {
    setAnimation({ element, visible: true, name: 'highlight' });
  }, 100);
  setTimeout(() => {
    setAnimation({ element, visible: false, name: 'highlight' });
  }, 600);
};

// obstacle count and actions after turn
export const setObstacle = (props: SetObstacle) => {
  const { obstacleElRef, obstacleData, fireCount, setFireCount } = props;
  const element = obstacleElRef?.current as HTMLDivElement;

  if (fireCount === 2) {
    setAnimation({ element, visible: true, name: 'pulse' });
  }
  if (fireCount === 1) {
    setFireCount(0);
    return setTimeout(() => {
      setFireCount(obstacleData.fireCount);
      setAnimation({ element, visible: false, name: 'pulse' });
    }, 500);
  }

  setFireCount((prevValue) => prevValue - 1);
};
