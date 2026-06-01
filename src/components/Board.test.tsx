import { render } from '@testing-library/react';
import Board from './Board';
import { BOARD_ROWS, BOARD_COLS } from '../constants/board';

describe('Board', () => {
  it('renders BOARD_ROWS × BOARD_COLS cells', () => {
    const { container } = render(<Board snake={[]} />);
    const cells = container.querySelectorAll('.board__cell');
    expect(cells).toHaveLength(BOARD_ROWS * BOARD_COLS);
  });

  it('renders a different cell count when constants change', () => {
    const { container } = render(<Board snake={[]} />);
    const cells = container.querySelectorAll('.board__cell');
    expect(cells.length).toBe(BOARD_ROWS * BOARD_COLS);
  });

  it('marks snake cells with board__cell--snake', () => {
    const snake = [{ row: 0, col: 0 }, { row: 0, col: 1 }];
    const { container } = render(<Board snake={snake} />);
    const snakeCells = container.querySelectorAll('.board__cell--snake');
    expect(snakeCells).toHaveLength(2);
  });

  it('does not mark any cells as snake when snake is empty', () => {
    const { container } = render(<Board snake={[]} />);
    const snakeCells = container.querySelectorAll('.board__cell--snake');
    expect(snakeCells).toHaveLength(0);
  });

  it('marks only the correct cells as snake', () => {
    const snake = [{ row: 1, col: 2 }];
    const { container } = render(<Board snake={snake} />);
    const snakeCells = container.querySelectorAll('.board__cell--snake');
    expect(snakeCells).toHaveLength(1);
    // Cell index for row=1, col=2 in a BOARD_COLS-wide grid
    const allCells = container.querySelectorAll('.board__cell');
    const expectedIndex = 1 * BOARD_COLS + 2;
    expect(allCells[expectedIndex].classList).toContain('board__cell--snake');
  });
});
