import GameState from './GameState';
import GridResize from './actions/GridResize';
import ReloadGame from './actions/ReloadGame';

type Props = {};

const ToolbarTop: React.FC<Props> = () => {
  return (
    <section className="double-cards_toolbar-top">
      <div className="double-cards_toolbar-top__info">
        <GameState />
      </div>
      <div className="double-cards_toolbar-top__actions">
        <GridResize />
        <ReloadGame />
      </div>
    </section>
  );
};

export default ToolbarTop;
