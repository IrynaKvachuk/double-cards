import React from 'react';
import { useState } from 'react';
import ResizeTable from './ResizeTable';
import { onResizeBtnClick } from './utils';

const GridResize: React.FC = React.memo(() => {
  const [showResizeTable, setShowResizeTable] = useState(false);

  return (
    <div className="grid-resize">
      <button
        className="game-app_btn double-cards_btn"
        title="Change grid size"
        onClick={() => onResizeBtnClick({ setShowResizeTable })}
      >
        &#9783;
      </button>
      <ResizeTable showResizeTable={showResizeTable} setShowResizeTable={setShowResizeTable} />
    </div>
  );
});

GridResize.displayName = 'GridResize';

export default GridResize;
