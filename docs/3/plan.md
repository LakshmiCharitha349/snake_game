# Plan: render-snake (#3)

## Objective
Render a static 3-segment snake on the game board, centered near the middle of the grid. The snake is visually distinct from empty cells. The data structure — a `Position[]` array — is designed to support future movement. No gameplay logic is introduced.

## Scope
### In Scope
- `Position` type (`{ row: number; col: number }`) in `src/types/index.ts`
- `INITIAL_SNAKE: Position[]` constant in `src/constants/board.ts` (3 horizontal segments at row 10, cols 9–11)
- `Board` component updated to accept `snake: Position[]` prop and render snake cells with `board__cell--snake` class
- CSS for `board__cell--snake` (distinct colour from empty cells)
- `App.tsx` updated to pass `INITIAL_SNAKE` to `<Board />`
- Tests: snake segments appear at the correct cells; non-snake cells are unaffected

### Out of Scope
- Movement, keyboard input, game loop
- Food, scoring, collision detection

## Approach
Define `Position` in `src/types/index.ts`. Export `INITIAL_SNAKE` from `src/constants/board.ts` — a 3-element array with head at `{row:10, col:11}`, body at `{row:10, col:10}`, tail at `{row:10, col:9}`. Update `Board` to accept `snake: Position[]` and build a `Set` of `"row,col"` strings for O(1) lookup when rendering cells. Each cell gets `board__cell--snake` added to its class list if its coordinates appear in the set. Style snake cells with a bright green colour. `App.tsx` passes `INITIAL_SNAKE` as the `snake` prop.

## Affected Areas
| Area | Files / Modules | Change Type |
|------|----------------|-------------|
| Types | `src/types/index.ts` | Add |
| Constants | `src/constants/board.ts` | Modify (add `INITIAL_SNAKE`) |
| Component | `src/components/Board.tsx` | Modify |
| Styles | `src/components/Board.css` | Modify |
| App | `src/App.tsx` | Modify |

## Assumptions
1. [ASSUMPTION] `Position = { row: number; col: number }` exported from `src/types/index.ts`.
2. [ASSUMPTION] `INITIAL_SNAKE` is 3 horizontal segments: head `{row:10, col:11}`, body `{row:10, col:10}`, tail `{row:10, col:9}`.
3. [ASSUMPTION] `Board` receives `snake: Position[]` prop; O(1) cell lookup via a `Set<string>`.
4. [ASSUMPTION] Snake cells styled with a distinct green colour via `board__cell--snake` CSS class.

## Open Questions (resolved)
| # | Question | Answer / Decision |
|---|----------|------------------|
| 1 | Board prop shape? | `snake: Position[]` — typed and extensible |
| 2 | Orientation? | Horizontal (head right, tail left) |

## Risks & Mitigations
| Risk | Mitigation |
|------|-----------|
| Board prop change breaks existing tests | Update `Board.test.tsx` to pass an empty `snake` array |
| Snake position out of bounds | Center calculation verified against 20×20 grid |

## Status: Completed
Implemented in 4 tasks. All tests passing. Final commit: 5e878c8.
