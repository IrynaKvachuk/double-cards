import { useEffect, useState } from 'react';
import Container from '../../../layout/Container';
import FreezeCard from './FreezeCard/FreezeCard';
import {
  selectGameReloaded,
  selectTurns,
  selectUsedObstacle
} from '../../../features/DoubleCards/DoubleCardsSelects';
import { useSelector } from 'react-redux';
import ShuffleCards from './ShuffleCards/ShuffleCards';
import { checkForPlayingCards, loadObstacles } from './utils';

const ToolbarObstacles = () => {
  const gameReloaded = useSelector(selectGameReloaded);
  const usedObstacle = useSelector(selectUsedObstacle);
  const turns = useSelector(selectTurns);

  // remove obstacles if left less than 3 pairs
  useEffect(() => {
    checkForPlayingCards();
  }, [turns]);

  useEffect(() => {
    if (!gameReloaded) return;
    loadObstacles();
  }, [gameReloaded]);

  return (
    <Container classList={`toolbar-obstacles ${usedObstacle ? '' : 'disabled'}`}>
      <FreezeCard usedObstacle={usedObstacle} />
      <ShuffleCards usedObstacle={usedObstacle} />
    </Container>
  );
};

export default ToolbarObstacles;
