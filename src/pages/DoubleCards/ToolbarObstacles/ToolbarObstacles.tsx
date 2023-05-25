import { useEffect, useState } from 'react';
import Container from '../../../layout/Container';
import FreezeCard from './FreezeCard/FreezeCard';
import { selectGameReloaded } from '../../../features/DoubleCards/DoubleCardsSelects';
import { useSelector } from 'react-redux';
import ShuffleCards from './ShuffleCards/ShuffleCards';
import { useEffectOnce } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { toogleObstacle } from '../../../features/Obstacles/ObstaclesActions';

const ToolbarObstacles = () => {
  const dispatch = useDispatch();
  const gameReloaded = useSelector(selectGameReloaded);

  const [showObstaclesToolbar, setShowObstaclesToolbar] = useState<boolean>(true);

  useEffectOnce(() => {
    dispatch(toogleObstacle({ type: 'freeze', useObstacle: true }));
  });

  useEffect(() => {
    if (!gameReloaded) return;
    setShowObstaclesToolbar(true);
  }, [gameReloaded]);

  return showObstaclesToolbar ? (
    <Container classList="toolbar-obstacles">
      <FreezeCard setShowObstaclesToolbar={setShowObstaclesToolbar} />
      <ShuffleCards />
    </Container>
  ) : null;
};

export default ToolbarObstacles;
