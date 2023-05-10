import GameState from './GameState';
import GridResize from './actions/GridResize';
import ReloadGame from './actions/ReloadGame';

type Props = {};

const ToolbarMain: React.FC<Props> = () => {
  return (
    <section className="double-cards_toolbar-main">
      <div className="double-cards_toolbar-main__info">
        <GameState />
      </div>
      <div className="double-cards_toolbar-main__actions">
        <GridResize />
        <ReloadGame />
      </div>
    </section>
  );
};

export default ToolbarMain;
