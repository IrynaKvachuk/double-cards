import { setGridSize } from '../../features/DoubleCards/DoubleCardsActions';
import { GridSize } from '../../features/DoubleCards/DoubleCardsTypes';
import { Dispatch, SetStateAction } from '../../features/_common/types';
import store from '../../store';
import { stringifyDataToLocalStorage } from '../../utils';
import { reloadGame } from '../../pages/DoubleCards/utils';
import { getSelectedCellIds, isAllowedMount } from './utils';

type TableOnMouseLeave = {
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
};

export const tableOnMouseLeave = (props: TableOnMouseLeave) => {
  const { setShowResizeTable } = props;

  setShowResizeTable(false);

  return;
};

type ColumnOnMouseOver = {
  event: React.MouseEvent<HTMLTableCellElement>;
  setSelectedColumn: Dispatch<SetStateAction<number>>;
  setSelectedRow: Dispatch<SetStateAction<number>>;
};

export const columnOnMouseOver = (props: ColumnOnMouseOver) => {
  const { event, setSelectedColumn, setSelectedRow } = props;
  const cell = event.target as HTMLTableCellElement;
  const { rowId, columnId } = getSelectedCellIds({ cell });

  setSelectedColumn(columnId);
  setSelectedRow(rowId);

  return;
};

type ColumnOnClick = {
  event: React.MouseEvent<HTMLTableCellElement>;
  isAllowed: boolean;
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
  setIsAllowed: Dispatch<SetStateAction<boolean>>;
};

export const changeGridSize = (props: GridSize) => {
  store.dispatch(setGridSize(props));
  stringifyDataToLocalStorage({ gridSize: props });
  reloadGame();
};

export const columnOnClick = (props: ColumnOnClick) => {
  const { event, isAllowed, setShowResizeTable, setIsAllowed } = props;
  const cell = event.target as HTMLTableCellElement;
  const isMobile = 'ontouchstart' in document.documentElement;
  let isAllowedInMobile = false;

  if (isMobile) {
    const { rowId, columnId } = getSelectedCellIds({ cell });

    isAllowedInMobile = isAllowedMount({ selectedRow: rowId, selectedColumn: columnId });
    setIsAllowed(false);
    if (!isAllowedInMobile) return;
  }
  if (!isMobile && !isAllowed) return;

  const columnId = cell.getAttribute('data-id');
  const rowId = cell.closest('tr')?.getAttribute('data-id');

  changeGridSize({ columnAmount: Number(columnId), rowAmount: Number(rowId) });
  setShowResizeTable(false);

  return;
};
