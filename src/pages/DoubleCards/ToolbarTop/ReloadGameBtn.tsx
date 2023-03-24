import { useState } from 'react';
import { reloadGame } from '../utils';
import Loader from '../../../components/icons/Loader';

const ReloadGameBtn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const reload = () => {
    setIsLoading(true);
    setTimeout(() => {
      reloadGame();
      setIsLoading(false);
    }, 500);
  };

  return (
    <button className="game-app_btn reload-btn" onClick={reload}>
      {isLoading ? <Loader size={40} /> : 'new game'}
    </button>
  );
};

export default ReloadGameBtn;
