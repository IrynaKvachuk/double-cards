import { useState } from 'react';
import { columnOnClick, columnOnMouseOver, tableOnMouseLeave } from './events';
import { Dispatch, SetStateAction } from '../../../../../features/_common/types';

type Props = {
  showResizeTable: boolean;
  setShowResizeTable: Dispatch<SetStateAction<boolean>>;
};

const ResizeTable: React.FC<Props> = (props: Props) => {
  const { showResizeTable, setShowResizeTable } = props;

  const rowAmount = Array.from({ length: 8 }, (_, i) => i + 1);
  const columnAmount = Array.from({ length: 8 }, (_, i) => i + 1);

  const [selectedRow, setSelectedRow] = useState<number>(2);
  const [selectedColumn, setSelectedColumn] = useState<number>(2);

  if (!showResizeTable) return null;
  return (
    <div className="grid-resize_table">
      <table onMouseLeave={() => tableOnMouseLeave({ setShowResizeTable })}>
        <tbody>
          {rowAmount.map((rowIndex) => (
            <tr key={rowIndex} data-id={rowIndex}>
              {columnAmount.map((columnIndex) => {
                const isSelected = columnIndex <= selectedColumn && rowIndex <= selectedRow;

                return (
                  <td
                    key={rowIndex * 10 + columnIndex}
                    data-id={columnIndex}
                    className={isSelected ? 'selected' : ''}
                    onMouseOver={(event) =>
                      columnOnMouseOver({ event, setSelectedColumn, setSelectedRow })
                    }
                    onClick={(event) => columnOnClick({ event, setShowResizeTable })}
                  ></td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResizeTable;
