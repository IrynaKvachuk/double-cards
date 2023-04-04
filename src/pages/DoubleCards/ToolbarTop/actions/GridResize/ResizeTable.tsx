import { useEffect, useState } from 'react';
import { columnOnClick, columnOnMouseOver, tableOnMouseLeave } from './events';
import { Dispatch, SetStateAction } from '../../../../../features/_common/types';

type Props = {
  showResizeTable: boolean;
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
};

const ResizeTable: React.FC<Props> = (props: Props) => {
  const { showResizeTable, setShowResizeTable } = props;

  const rowAmount = Array.from({ length: 4 }, (_, i) => i + 1);
  const columnAmount = Array.from({ length: 6 }, (_, i) => i + 1);

  const [selectedRow, setSelectedRow] = useState<number>(2);
  const [selectedColumn, setSelectedColumn] = useState<number>(2);
  const [isAllowed, setIsAllowed] = useState(true);

  useEffect(() => {
    const cellsCount = selectedRow * selectedColumn;
    const isEven = cellsCount % 2 === 0 ? true : false;
    const isAllowed = isEven && cellsCount >= 4;
    setIsAllowed(isAllowed);
  }, [selectedRow, selectedColumn]);

  if (!showResizeTable) return null;
  return (
    <div className="grid-resize_table">
      <table onMouseLeave={() => tableOnMouseLeave({ setShowResizeTable })}>
        <tbody>
          {rowAmount.map((rowIndex) => (
            <tr key={rowIndex} data-id={rowIndex}>
              {columnAmount.map((columnIndex) => {
                const lessThenFocused = columnIndex <= selectedColumn && rowIndex <= selectedRow;
                const isSelected = lessThenFocused && isAllowed;

                return (
                  <td
                    key={rowIndex * 10 + columnIndex}
                    data-id={columnIndex}
                    className={isSelected ? 'selected' : ''}
                    onMouseOver={(event) =>
                      columnOnMouseOver({ event, setSelectedColumn, setSelectedRow })
                    }
                    onClick={(event) => columnOnClick({ event, isAllowed, setShowResizeTable })}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid-resize_table__footer">
        {isAllowed ? <span>{(selectedRow * selectedColumn) / 2 + ' pairs'}</span> : null}
      </div>
    </div>
  );
};

export default ResizeTable;