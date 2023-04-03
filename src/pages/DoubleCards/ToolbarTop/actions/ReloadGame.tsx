import { useState } from 'react';
import { reloadGame } from '../../utils';
import Loader from '../../../../components/icons/Loader';

const ReloadGame: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const reload = () => {
    setIsLoading(true);
    setTimeout(() => {
      reloadGame();
      setIsLoading(false);
    }, 500);
  };

  return (
    <button className="game-app_btn double-cards_btn" title="New Game" onClick={reload}>
      {isLoading ? <Loader size={40} /> : <span>&#8635;</span>}
    </button>
  );
};

export default ReloadGame;
