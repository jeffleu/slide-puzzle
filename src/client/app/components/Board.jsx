import React from 'react';
import Row from './Row';

const Board = (props) => {
  const { board, move } = props;

  return (
    <table>
      <tbody>
        { board.map((row, i) => <Row key={i} rowIndex={i} row={row} move={move} />) }
      </tbody>
    </table>
  );
};

export default Board;
