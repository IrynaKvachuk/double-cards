import { ObstacleIF } from '../../features/Obstacles/ObstaclesTypes';
import { DispatchT, SetStateAction } from '../../features/_common/types';

type SetPulseAnimation = {
  obstacleEl: HTMLDivElement;
  visible: boolean;
};

const setPulseAnimation = (props: SetPulseAnimation) => {
  const { obstacleEl, visible } = props;
  if (!obstacleEl) return;
  // const obstacleContainer = obstacleEl.closest('.toolbar-obstacles') as HTMLElement;

  if (visible) return obstacleEl.classList.add('pulse');
  return obstacleEl.classList.remove('pulse');
};

type SetObstacle = {
  obstacleElRef: React.RefObject<HTMLDivElement>;
  obstacleData: ObstacleIF;
  fireCount: number;
  setFireCount: DispatchT<SetStateAction<number>>;
};

export const setObstacle = (props: SetObstacle) => {
  const { obstacleElRef, obstacleData, fireCount } = props;
  const initFireCount = obstacleData.fireCount;
  const obstacleEl = obstacleElRef?.current as HTMLDivElement;

  if (fireCount === initFireCount - 1) setPulseAnimation({ obstacleEl, visible: true });
  if (fireCount === 1) {
    setPulseAnimation({ obstacleEl, visible: false });
    return;
  }
};
