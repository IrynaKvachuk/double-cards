import { useEffect, useRef, useState } from 'react';
import { ButtonWrapper } from '../_basic';
import { ObstacleIF } from '../../features/Obstacles/ObstaclesTypes';
import { setObstacle } from './utils';
import { useSelector } from 'react-redux';
import { selectTurns } from '../../features/DoubleCards/DoubleCardsSelects';

type Props = {
  obstacleData: ObstacleIF;
  icon: string | React.ReactNode;
  title: string;
  className?: string;
};

const Obstacle: React.FC<Props> = (props: Props) => {
  const { obstacleData, icon = '', title, className = '' } = props;
  const { useObstacle } = obstacleData;

  const obstacleElRef = useRef<HTMLDivElement>(null);

  const turns = useSelector(selectTurns);
  const [fireCount, setFireCount] = useState<number>(-1);

  useEffect(() => {
    setObstacle({ obstacleElRef, obstacleData, fireCount, setFireCount });
  }, [turns]);

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
