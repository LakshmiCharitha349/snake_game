import { render } from '@testing-library/react';
import Board from './Board';
import { BOARD_ROWS, BOARD_COLS } from '../constants/board';

describe('Board', () => {
  it('renders BOARD_ROWS × BOARD_COLS cells', () => {
    const { container } = render(<Board />);
    const cells = container.querySelectorAll('.board__cell');
    expect(cells).toHaveLength(BOARD_ROWS * BOARD_COLS);
  });

  it('renders a different cell count when constants change', () => {
    const { container } = render(<Board />);
    const cells = container.querySelectorAll('.board__cell');
    expect(cells.length).toBe(BOARD_ROWS * BOARD_COLS);
  });
});
