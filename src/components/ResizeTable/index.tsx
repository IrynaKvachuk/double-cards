import React from 'react';
import { useEffect, useState } from 'react';
import { useEffectOnce } from '../../hooks';
import { DispatchT, SetStateAction } from '../../features/_common/types';
import { columnOnClick, columnOnMouseOver, tableOnMouseLeave } from './events';
import { isAllowedMount } from './utils';

type Props = {
  showResizeTable: boolean;
  setShowResizeTable: DispatchT<SetStateAction<boolean>>;
};

const ResizeTable: React.FC<Props> = React.memo((props: Props) => {
  const { showResizeTable, setShowResizeTable } = props;

  const [rowAmount, setRowAmount] = useState<Array<number>>([]);
  const [columnAmount, setColumnAmount] = useState<Array<number>>([]);
  const [selectedRow, setSelectedRow] = useState<number>(2);
  const [selectedColumn, setSelectedColumn] = useState<number>(2);
  const [isAllowed, setIsAllowed] = useState(true);

  useEffectOnce(() => {
    const rowAmount = Array.from({ length: 4 }, (_, i) => i + 1);
    const columnAmount = Array.from({ length: 6 }, (_, i) => i + 1);
    setRowAmount(rowAmount);
    setColumnAmount(columnAmount);
  });

  useEffect(() => {
    setIsAllowed(isAllowedMount({ selectedRow, selectedColumn }));
  }, [selectedRow, selectedColumn]);

  if (!showResizeTable) return null;
  return (
    <div className="grid-resize_table">
      <table
        data-testid="resize-table"
        onMouseLeave={() => tableOnMouseLeave({ setShowResizeTable })}
      >
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
                    onClick={(event) =>
                      columnOnClick({
                        event,
                        isAllowed,
                        setShowResizeTable,
                        setIsAllowed
                      })
                    }
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        {isAllowed ? <span>{(selectedRow * selectedColumn) / 2 + ' pairs'}</span> : null}
        {!isAllowed ? <span className="footer_error">Please, choose even value</span> : null}
      </div>
    </div>
  );
});

ResizeTable.displayName = 'ResizeTable';

export default ResizeTable;
