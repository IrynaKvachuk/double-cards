import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCardsDeck,
  selectGameReloaded,
  selectTurns
} from '../../../features/DoubleCards/DoubleCardsSelects';
import { setFreezer } from './utils';
import { Dispatch, SetStateAction } from '../../../features/_common/types';

type Props = {
  setShowObstaclesToolbar: Dispatch<SetStateAction<boolean>>;
};

const FreezeCard = (props: Props) => {
  const { setShowObstaclesToolbar } = props;
  const cardsDeck = useSelector(selectCardsDeck);
  const turns = useSelector(selectTurns);
  const gameReloaded = useSelector(selectGameReloaded);

  const [createObstacle, setCreateObstacle] = useState<boolean>(false);
  const [freezeTimer, setFreezeTimer] = useState<number>(3);
  const [stopFreezing, setStopFreezing] = useState<boolean>(false);

  // add only for grids more than 2x3
  useEffect(() => {
    const isLargeGrid = cardsDeck.length > 6;
    const createObstacle = isLargeGrid && !stopFreezing;
    setCreateObstacle(createObstacle);
    setShowObstaclesToolbar(createObstacle);
  }, [cardsDeck, stopFreezing]);

  useEffect(() => {
    if (!createObstacle) return;
    setFreezer({ freezeTimer, createObstacle, setStopFreezing, setFreezeTimer });
  }, [turns]);

  useEffect(() => {
    if (!gameReloaded) return;
    setStopFreezing(false);
    setCreateObstacle(true);
    setFreezeTimer(3);
  }, [gameReloaded]);

  return createObstacle ? <span>Freeze in {freezeTimer} moves</span> : null;
};

export default FreezeCard;
