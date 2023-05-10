import React from 'react';
import { useState } from 'react';
import { reloadGame } from '../../../utils';
import Loader from '../../../../../components/icons/Loader';
import { DispatchT, SetStateAction } from '../../../../../features/_common/types';

type Reload = {
  setIsLoading: DispatchT<SetStateAction<boolean>>;
};

const reload = (props: Reload) => {
  const { setIsLoading } = props;

  setIsLoading(true);
  setTimeout(() => {
    reloadGame();
    setIsLoading(false);
  }, 500);
};

const ReloadGame: React.FC = React.memo(() => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      className="game-app_btn double-cards_btn"
      title="New Game"
      onClick={() => reload({ setIsLoading })}
    >
      {isLoading ? <Loader size={40} /> : <span>&#8635;</span>}
    </button>
  );
});

ReloadGame.displayName = 'ReloadGame';

export default ReloadGame;
