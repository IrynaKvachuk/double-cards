import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Obstacle from '../../../../components/Obstacle/Obstacle';
import ShuffleIcon from '../../../../components/_icons/ShuffleIcon';
import { selectShuffleObstacle } from '../../../../features/Obstacles/ObstaclesSelects';
import { UsedObstacle } from '../../../../features/DoubleCards/DoubleCardsTypes';
import { setShuffle } from './utils';

type Props = {
  usedObstacle: UsedObstacle;
};

const ShuffleCards: React.FC<Props> = (props: Props) => {
  const { usedObstacle } = props;

  const obstacleData = useSelector(selectShuffleObstacle);

  const [shuffleTimer, setShuffleTimer] = useState<number>(-1);

  useEffect(() => {
    if (shuffleTimer === -1) return;
    if (usedObstacle === 'shuffle') setShuffle({ shuffleTimer });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shuffleTimer]);

  const getFireCount = (fireCount: number) => setShuffleTimer(fireCount);

  return (
    <Obstacle
      obstacleData={obstacleData}
      icon={<ShuffleIcon />}
      title="shuffle cards"
      getFireCount={getFireCount}
    />
  );
};

export default ShuffleCards;
