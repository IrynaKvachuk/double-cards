import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { setFreezer } from './utils';
import Obstacle from '../../../../components/Obstacle/Obstacle';
import { selectFreezeObstacle } from '../../../../features/Obstacles/ObstaclesSelects';
import { UsedObstacle } from '../../../../features/DoubleCards/DoubleCardsTypes';
import { freezeCard } from '../../../../features/DoubleCards/DoubleCardsActions';
import { useDispatch } from 'react-redux';

type Props = {
  usedObstacle: UsedObstacle;
};

const FreezeCard: React.FC<Props> = (props: Props) => {
  const { usedObstacle } = props;
  const dispatch = useDispatch();

  const obstacleData = useSelector(selectFreezeObstacle);

  const [freezeTimer, setFreezeTimer] = useState<number>(-1);

  const getFireCount = (fireCount: number) => setFreezeTimer(fireCount);

  useEffect(() => {
    if (freezeTimer === -1) return;
    if (usedObstacle === 'freeze') setFreezer({ freezeTimer });
    if (usedObstacle !== 'freeze') dispatch(freezeCard({ cardIndex: 0, toFreeze: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [freezeTimer]);

  return (
    <Obstacle
      obstacleData={obstacleData}
      icon="&#10054;"
      title="freeze card for 2 turns"
      getFireCount={getFireCount}
    />
  );
};

export default FreezeCard;
