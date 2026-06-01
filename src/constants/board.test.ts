import { BOARD_ROWS, BOARD_COLS, INITIAL_SNAKE } from './board';

describe('INITIAL_SNAKE', () => {
  it('has exactly 3 segments', () => {
    expect(INITIAL_SNAKE).toHaveLength(3);
  });

  it('keeps all segments within board bounds', () => {
    for (const { row, col } of INITIAL_SNAKE) {
      expect(row).toBeGreaterThanOrEqual(0);
      expect(row).toBeLessThan(BOARD_ROWS);
      expect(col).toBeGreaterThanOrEqual(0);
      expect(col).toBeLessThan(BOARD_COLS);
    }
  });

  it('has all consecutive segments adjacent (differ by exactly 1 in row or col)', () => {
    for (let i = 0; i < INITIAL_SNAKE.length - 1; i++) {
      const a = INITIAL_SNAKE[i];
      const b = INITIAL_SNAKE[i + 1];
      const rowDiff = Math.abs(a.row - b.row);
      const colDiff = Math.abs(a.col - b.col);
      expect(rowDiff + colDiff).toBe(1);
    }
  });

  it('is centered near the middle of the board', () => {
    const centerRow = BOARD_ROWS / 2;
    const centerCol = BOARD_COLS / 2;
    // Allow the snake to be within 3 cells of center in each axis
    for (const { row, col } of INITIAL_SNAKE) {
      expect(Math.abs(row - centerRow)).toBeLessThanOrEqual(3);
      expect(Math.abs(col - centerCol)).toBeLessThanOrEqual(3);
    }
  });
});
