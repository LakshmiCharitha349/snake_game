# Plan: render-game-board (#1)

## Objective
Bootstrap a React+TypeScript+Vite project and render a centered, empty game board as a configurable grid. The board displays the correct number of rows and columns, has visible cell borders, scales responsively within the viewport, and contains no gameplay elements. This provides the visual foundation for all subsequent Snake game features.

## Scope
### In Scope
- Scaffold the project with `npm create vite@latest` (react-ts template)
- Remove Vite boilerplate (default styles, assets, counter component)
- Create the folder structure: `src/components/`, `src/game/`, `src/hooks/`, `src/constants/`, `src/types/`
- Add `src/constants/board.ts` with `BOARD_ROWS` and `BOARD_COLS` (default 20×20)
- Add `src/components/Board.tsx` that renders a `BOARD_ROWS × BOARD_COLS` grid of cells
- Style the board: centered in viewport, responsive size, cells with visible borders, clean neutral look
- Wire `Board` into `src/App.tsx`

### Out of Scope
- Snake, food, score, game logic
- Keyboard input, animation, or game loop

## Approach
Use `npm create vite@latest` with the `react-ts` template to scaffold the project. Delete the generated demo content (App.css hero styles, SVG logos, Counter). Create the directory structure from the architecture doc. Put board dimensions in `src/constants/board.ts` so they are easy to change. `Board.tsx` generates an array of `BOARD_ROWS × BOARD_COLS` cells, renders them in a CSS grid, and applies a border to each cell. The board uses `aspect-ratio` and a percentage-based or `vmin`-based size so it scales with the viewport while remaining square. `App.tsx` centers the board using flexbox.

## Affected Areas
| Area | Files / Modules | Change Type |
|------|----------------|-------------|
| Project scaffold | `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html` | Add |
| Constants | `src/constants/board.ts` | Add |
| Components | `src/components/Board.tsx` | Add |
| App entry | `src/App.tsx`, `src/main.tsx` | Add / Modify |
| Styles | `src/index.css`, `src/App.css` | Add / Modify |
| Types | `src/types/` (placeholder directory) | Add |

## Assumptions
1. [ASSUMPTION] Default grid dimensions: 20 columns × 20 rows.
2. [ASSUMPTION] Cells have a visible border (1px) so the grid is legible.
3. [ASSUMPTION] Board scales responsively with the viewport (vmin-based sizing, square aspect ratio).
4. [ASSUMPTION] Styling uses plain CSS (index.css for global resets, component CSS for board).

## Open Questions (resolved)
| # | Question | Answer / Decision |
|---|----------|------------------|
| 1 | Grid dimensions default? | 20×20 |
| 2 | Cell borders visible? | Yes, 1px border per cell |
| 3 | Fixed vs. responsive size? | Responsive — scales with viewport |
| 4 | CSS approach? | Plain CSS files |

## Risks & Mitigations
| Risk | Mitigation |
|------|-----------|
| Vite boilerplate leftover clutters the codebase | Explicit cleanup step in implementation |
| Board constants hardcoded in wrong place | Export from `src/constants/board.ts` only — no magic numbers elsewhere |

## Status: Completed
Implemented in 4 tasks. All tests passing. Final commit: 813d3bd.
