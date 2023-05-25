import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectGameReloaded,
  selectTurns
} from '../../../../features/DoubleCards/DoubleCardsSelects';
import { reloadFreezer, setFreezer } from './utils';
import { DispatchT, SetStateAction } from '../../../../features/_common/types';
import Obstacle from '../../../../components/Obstacle/Obstacle';
import { selectFreezeObstacle } from '../../../../features/Obstacles/ObstaclesSelects';

type Props = {
  setShowObstaclesToolbar: DispatchT<SetStateAction<boolean>>;
};

const FreezeCard = (props: Props) => {
  const { setShowObstaclesToolbar } = props;
  const obstacleElRef = useRef<HTMLSpanElement>(null);

  const cardsDeck = useSelector(selectCardsDeck);
  const turns = useSelector(selectTurns);
  const gameReloaded = useSelector(selectGameReloaded);
  const obstacleData = useSelector(selectFreezeObstacle);

  const [createObstacle, setCreateObstacle] = useState<boolean>(false);
  const [freezeTimer, setFreezeTimer] = useState<number>(3);
  const [stopFreezing, setStopFreezing] = useState<boolean>(false);

  // add only for grids more than 2x3
  useEffect(() => {
    const isLargeGrid = cardsDeck.length > 6;
    const createObstacle = isLargeGrid && !stopFreezing;
    setCreateObstacle(createObstacle);
    setShowObstaclesToolbar(createObstacle);
  }, [cardsDeck, stopFreezing, setShowObstaclesToolbar]);

  useEffect(() => {
    if (!createObstacle) return;
    // setFreezer({ freezeTimer, createObstacle, setStopFreezing, setFreezeTimer });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turns]);

  useEffect(() => {
    if (!gameReloaded) return;
    reloadFreezer({ setStopFreezing, setCreateObstacle, setFreezeTimer });
  }, [gameReloaded]);

  return createObstacle ? (
    <Obstacle obstacleData={obstacleData} icon="&#10054;" title="freeze card for 2 turns" />
  ) : null;
};

export default FreezeCard;
