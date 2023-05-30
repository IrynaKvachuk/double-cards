import { useEffect, useRef, useState } from 'react';
import { ButtonWrapper } from '../_basic';
import { ObstacleIF } from '../../features/Obstacles/ObstaclesTypes';
import { setObstacle } from './utils';
import { useSelector } from 'react-redux';
import {
  selectGameReloaded,
  selectTurns,
  selectUsedObstacle
} from '../../features/DoubleCards/DoubleCardsSelects';

type Props = {
  obstacleData: ObstacleIF;
  icon: string | React.ReactNode;
  title: string;
  className?: string;
  getFireCount?: (fireCount: number) => void;
};

const Obstacle: React.FC<Props> = (props: Props) => {
  const { obstacleData, icon = '', title, className = '', getFireCount = () => {} } = props;
  const { type } = obstacleData;

  const obstacleElRef = useRef<HTMLDivElement>(null);

  const turns = useSelector(selectTurns);
  const usedObstacle = useSelector(selectUsedObstacle);
  const gameReloaded = useSelector(selectGameReloaded);

  const [fireCount, setFireCount] = useState<number>(-1);
  const [useObstacle, setUseObstacle] = useState<boolean>(false);

  // fireCount inheritance
  useEffect(() => {
    getFireCount(fireCount);
  }, [fireCount]);

  // obstacle on/off
  useEffect(() => {
    const useObstacle = usedObstacle === type;

    setUseObstacle(useObstacle);
    if (useObstacle) setFireCount(obstacleData.fireCount);
  }, [usedObstacle]);

  // obstacle count and actions after turn
  useEffect(() => {
    if (usedObstacle !== type) return;
    setObstacle({ obstacleElRef, obstacleData, fireCount, setFireCount });
  }, [turns]);

  // reset after game was reloaded
  useEffect(() => {
    if (!gameReloaded) return;
    setFireCount(obstacleData.fireCount);
  }, [gameReloaded]);

  return (
    <div
      ref={obstacleElRef}
      className={`obstacle ${className} ${useObstacle ? 'active' : ''}`}
      data-testid="obstacle"
    >
      <ButtonWrapper className="obstacle_btn" title={title}>
        {icon}
      </ButtonWrapper>
      {useObstacle ? (
        <span className="obstacle_count" title="obstacle count">
          {fireCount}
        </span>
      ) : null}
    </div>
  );
};

export default Obstacle;
