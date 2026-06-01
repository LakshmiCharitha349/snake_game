import { BOARD_ROWS, BOARD_COLS } from '../constants/board';
import './Board.css';

function Board() {
  const cells = Array.from({ length: BOARD_ROWS * BOARD_COLS });

  return (
    <div
      className="board"
      style={
        {
          '--board-rows': BOARD_ROWS,
          '--board-cols': BOARD_COLS,
        } as React.CSSProperties
      }
    >
      {cells.map((_, i) => (
        <div key={i} className="board__cell" />
      ))}
    </div>
  );
}

export default Board;
