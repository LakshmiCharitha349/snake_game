# Context Summary: Issue #3 — render-snake

## Issue
- **State:** Open
- **Labels:** None
- **Milestone:** None
- **Assigned to:** LakshmiCharitha349

## What the issue asks for
Render a static snake on the game board consisting of 3 connected segments positioned near the center of the board. Each segment occupies exactly one grid cell. The snake should be visually distinct from empty cells. No movement, controls, or game logic — purely visual. The data structure should be designed with future movement in mind.

## Linked issues
None.

## Codebase findings
| Area | Detail |
|---|---|
| Repo structure | `src/components/Board.tsx`, `src/constants/board.ts`, `src/types/` (empty), `src/game/` (empty) |
| Relevant files | `Board.tsx` renders cells with `board__cell` class; `board.ts` exports `BOARD_ROWS=20`, `BOARD_COLS=20` |
| Test framework | Vitest + React Testing Library; tests co-located in `src/components/Board.test.tsx` |
| Tech stack | React 19, TypeScript (strict), Vite 8 |
| Docs | `ARCHITECTURE.md`: types → `src/types/`, game logic → `src/game/`, components → `src/components/` |

## Initial observations
- **Snake data structure**: the issue notes say "represent the snake as a collection of coordinates" — a `Position[]` type in `src/types/` fits the architecture.
- **Initial position**: center of a 20×20 grid is row 10, cols 9–11 (3 horizontal segments).
- **Board integration**: `Board.tsx` currently renders all cells as `board__cell`. Snake cells need a distinguishing class (e.g. `board__cell--snake`) or the Board needs to receive snake positions as a prop.
- **Separation of concerns**: per the issue notes, keep rendering separate from movement logic. Snake state (initial positions) can live as a constant in `src/constants/` or computed in `App.tsx`, passed as a prop to `Board`.
- **Future movement**: using `Position[]` (array of `{row, col}`) makes it easy to push/shift for movement later.
