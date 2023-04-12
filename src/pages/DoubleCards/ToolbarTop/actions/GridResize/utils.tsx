import { Dispatch, SetStateAction } from '../../../../../features/_common/types';

type GetSelectedCellIds = {
  cell: HTMLTableCellElement;
};

export const getSelectedCellIds = (props: GetSelectedCellIds) => {
  const { cell } = props;
  const columnId = Number(cell.getAttribute('data-id'));
  const rowId = Number(cell.closest('tr')?.getAttribute('data-id'));

  return { rowId, columnId };
};

type IsAllowedMount = {
  selectedRow: number;
  selectedColumn: number;
};

export const isAllowedMount = (props: IsAllowedMount) => {
  const { selectedRow, selectedColumn } = props;
  const cellsCount = selectedRow * selectedColumn;
  const isEven = cellsCount % 2 === 0 ? true : false;
  const isAllowed = isEven && cellsCount >= 4;

  return isAllowed;
};

type OnResizeBtnClick = {
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
};

export const onResizeBtnClick = (props: OnResizeBtnClick) => {
  const { setShowResizeTable } = props;

  setShowResizeTable((prevState) => !prevState);
};
