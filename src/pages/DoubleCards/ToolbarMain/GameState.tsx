import React from 'react';
import { useSelector } from 'react-redux';
import Stopwatch from '../../../components/StopWatch';
import {
  selectGameFinished,
  selectGameReloaded,
  selectTurns
} from '../../../features/DoubleCards/DoubleCardsSelects';
import { setGameTime } from '../../../features/DoubleCards/DoubleCardsActions';
import { Timer } from '../../../features/_common/types';
import store from '../../../store';

const saveTimeToStore = (time: Timer) => {
  store.dispatch(setGameTime(time));
};

const GameState: React.FC = React.memo(() => {
  const gameReloaded = useSelector(selectGameReloaded);
  const gameFinished = useSelector(selectGameFinished);
  const doubleCardsTurns = useSelector(selectTurns);

  return (
    <div className="double-cards_results">
      <span className="double-cards_results__turns">Turns: {doubleCardsTurns}</span>
      <span className="double-cards_results__time">
        <Stopwatch resetTime={gameReloaded} runTimer={!gameFinished} saveTime={saveTimeToStore} />
      </span>
    </div>
  );
});

GameState.displayName = 'GameState';

export default GameState;
