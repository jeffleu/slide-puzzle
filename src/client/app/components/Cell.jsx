import React from 'react';

const Cell = (props) => {
  const { rowIndex, columnIndex, cellValue, move } = props;
  const value = (cellValue > 0) ? cellValue : null;
  
  return (
    <td>
      <div className="cell" onClick={() => {move(rowIndex, columnIndex)}}>
        { value }
      </div>
    </td>
  );
};

export default Cell;
