import React from 'react';
import { useState } from 'react';
import { onResizeBtnClick } from './utils';
import ResizeTable from '../../../../../components/ResizeTable';

const GridResize: React.FC = React.memo(() => {
  const [showResizeTable, setShowResizeTable] = useState(false);

  return (
    <div className="grid-resize">
      <button
        className="game-app_btn double-cards_btn"
        aria-label="grid-resize-btn"
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
