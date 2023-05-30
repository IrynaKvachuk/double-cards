import { setObstacle } from '../../../features/DoubleCards/DoubleCardsActions';
import { resetObstacles } from '../../../features/Obstacles/ObstaclesActions';
import { ObstacleNameType } from '../../../features/Obstacles/ObstaclesTypes';
import store from '../../../store';

const getRandomObstacleName = (): ObstacleNameType => {
  const obstacleNames: ObstacleNameType[] = ['freeze', 'shuffle'];
  const randomIndex = Math.floor(Math.random() * obstacleNames.length);
  return obstacleNames[randomIndex];
};

// grids more than 2x3
const minCardDeck = (): boolean => {
  const cardsDeck = store.getState().doubleCards.cardsDeck;
  return cardsDeck.length > 6;
};

// more than 2 pairs
const minCardsToPlay = (): boolean => {
  const cardsDeck = store.getState().doubleCards.cardsDeck;
  const matchedCardsCount = store.getState().doubleCards.matchedCardsCount;

  return cardsDeck.length - matchedCardsCount > 4;
};

export const loadObstacles = () => {
  const newObstacle = minCardDeck() ? getRandomObstacleName() : '';
  store.dispatch(resetObstacles());
  return store.dispatch(setObstacle(newObstacle));
};

// check how many ACTIVE cards in the game
export const checkForPlayingCards = () => {
  if (!minCardsToPlay()) store.dispatch(setObstacle(''));
};
