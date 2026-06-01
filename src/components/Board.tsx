import type { Snake } from '../types';
import { BOARD_ROWS, BOARD_COLS } from '../constants/board';
import './Board.css';

type BoardProps = {
  snake: Snake;
};

function Board({ snake }: BoardProps) {
  const snakeCells = new Set(snake.map(({ row, col }) => `${row},${col}`));
  const cells = Array.from({ length: BOARD_ROWS * BOARD_COLS });

  return (
    <div
      className="board"
      style={{
        gridTemplateRows: `repeat(${BOARD_ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${BOARD_COLS}, 1fr)`,
      }}
    >
      {cells.map((_, i) => {
        const row = Math.floor(i / BOARD_COLS);
        const col = i % BOARD_COLS;
        const isSnake = snakeCells.has(`${row},${col}`);
        return (
          <div
            key={i}
            className={`board__cell${isSnake ? ' board__cell--snake' : ''}`}
          />
        );
      })}
    </div>
  );
}

export default Board;
