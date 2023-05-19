import { useEffect, useState } from 'react';
import Container from '../../../layout/Container';
import FreezeCard from './FreezeCard/FreezeCard';
import { selectGameReloaded } from '../../../features/DoubleCards/DoubleCardsSelects';
import { useSelector } from 'react-redux';

const ToolbarObstacles = () => {
  const gameReloaded = useSelector(selectGameReloaded);

  const [showObstaclesToolbar, setShowObstaclesToolbar] = useState<boolean>(true);

  useEffect(() => {
    if (!gameReloaded) return;
    setShowObstaclesToolbar(true);
  }, [gameReloaded]);

  return showObstaclesToolbar ? (
    <Container classList="toolbar-obstacles">
      <FreezeCard setShowObstaclesToolbar={setShowObstaclesToolbar} />
    </Container>
  ) : null;
};

export default ToolbarObstacles;
