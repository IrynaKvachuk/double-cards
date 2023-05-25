import { useSelector } from 'react-redux';
import Obstacle from '../../../../components/Obstacle/Obstacle';
import ShuffleIcon from '../../../../components/_icons/ShuffleIcon';
import { selectShuffleObstacle } from '../../../../features/Obstacles/ObstaclesSelects';

const ShuffleCards = () => {
  const obstacleData = useSelector(selectShuffleObstacle);

  return <Obstacle obstacleData={obstacleData} icon={<ShuffleIcon />} title="shuffle cards" />;
};

export default ShuffleCards;
