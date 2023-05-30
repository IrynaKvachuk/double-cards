import { ObstacleIF } from '../../features/Obstacles/ObstaclesTypes';
import { DispatchT, SetStateAction } from '../../features/_common/types';

type SetPulseAnimation = {
  obstacleEl: HTMLDivElement;
  visible: boolean;
};

const setPulseAnimation = (props: SetPulseAnimation) => {
  const { obstacleEl, visible } = props;
  if (!obstacleEl) return;

  if (visible) return obstacleEl.classList.add('pulse');
  return obstacleEl.classList.remove('pulse');
};

type SetObstacle = {
  obstacleElRef: React.RefObject<HTMLDivElement>;
  obstacleData: ObstacleIF;
  fireCount: number;
  setFireCount: DispatchT<SetStateAction<number>>;
};

// obstacle count and actions after turn
export const setObstacle = (props: SetObstacle) => {
  const { obstacleElRef, obstacleData, fireCount, setFireCount } = props;
  const obstacleEl = obstacleElRef?.current as HTMLDivElement;

  if (fireCount === 2) {
    setPulseAnimation({ obstacleEl, visible: true });
  }
  if (fireCount === 1) {
    setFireCount(0);
    return setTimeout(() => {
      setFireCount(obstacleData.fireCount);
      setPulseAnimation({ obstacleEl, visible: false });
    }, 500);
  }

  setFireCount((prevValue) => prevValue - 1);
};
