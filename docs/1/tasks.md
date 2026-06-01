# Tasks: render-game-board (#1)

## Task 1: Scaffold the Vite+React+TS project

**Description**
Run `npm create vite@latest` with the `react-ts` template to generate the project foundation. This establishes `package.json`, `vite.config.ts`, `tsconfig.json`, and `index.html`.

**Acceptance Criteria**
- [ ] `package.json` exists with React, ReactDOM, and TypeScript dependencies
- [ ] `npm install && npm run build` completes without errors
- [ ] `npm run dev` starts the dev server without errors

**Files Likely Affected**
- `package.json` — created by scaffold
- `vite.config.ts` — created by scaffold
- `tsconfig.json` / `tsconfig.node.json` — created by scaffold
- `index.html` — created by scaffold

**Test Requirements**
- Unit: none (scaffold verification is build success)
- Edge cases: TypeScript strict mode enabled in tsconfig

**Dependencies**
- None

**Estimated Complexity:** S

---

## Task 2: Clean up Vite boilerplate and set up folder structure

**Description**
Remove the generated demo content (default CSS hero styles, SVG assets, Counter component) and create the empty directories from `docs/ARCHITECTURE.md`: `src/components/`, `src/game/`, `src/hooks/`, `src/constants/`, `src/types/`.

**Acceptance Criteria**
- [ ] No Vite/React logo SVG files remain in `src/` or `public/`
- [ ] Default counter/demo component removed
- [ ] All folders from ARCHITECTURE.md exist under `src/`
- [ ] `npm run build` still succeeds after cleanup
- [ ] `src/App.tsx` renders a minimal root (empty div or placeholder)

**Files Likely Affected**
- `src/App.tsx` — stripped to minimal shell
- `src/App.css` — cleared of boilerplate styles
- `src/index.css` — reset to base styles only
- `public/vite.svg`, `src/assets/react.svg` — deleted

**Test Requirements**
- Unit: none
- Edge cases: ensure no broken imports remain after deleting assets

**Dependencies**
- Depends on Task 1

**Estimated Complexity:** S

---

## Task 3: Add board constants

**Description**
Create `src/constants/board.ts` exporting `BOARD_ROWS` and `BOARD_COLS` (both defaulting to 20).

**Acceptance Criteria**
- [ ] `src/constants/board.ts` exists and exports `BOARD_ROWS = 20` and `BOARD_COLS = 20`
- [ ] TypeScript compilation succeeds
- [ ] No magic numbers for grid dimensions appear anywhere else in the codebase

**Files Likely Affected**
- `src/constants/board.ts` — created

**Test Requirements**
- Unit: none (pure constants; correctness verified by component consuming them)

**Dependencies**
- Depends on Task 2

**Estimated Complexity:** S

---

## Task 4: Implement the Board component and wire it into App

**Description**
Create `src/components/Board.tsx` that renders a `BOARD_ROWS × BOARD_COLS` grid of cells using CSS Grid. Wire it into `src/App.tsx`. The board should be centered in the viewport, responsive (vmin-based), square aspect ratio, with visible 1px cell borders and a clean neutral look.

**Acceptance Criteria**
- [ ] `Board.tsx` renders exactly `BOARD_ROWS × BOARD_COLS` cells
- [ ] Board is visible and centered in the viewport on load
- [ ] Board scales with the viewport (vmin-based width, square aspect ratio)
- [ ] Each cell has a visible 1px border
- [ ] No snake, food, or score is rendered
- [ ] `npm run build` succeeds with no TypeScript errors or warnings

**Files Likely Affected**
- `src/components/Board.tsx` — created
- `src/App.tsx` — updated to render `<Board />`
- `src/App.css` or `src/components/Board.css` — board and cell styles

**Test Requirements**
- Unit: verify `BOARD_ROWS × BOARD_COLS` cells are rendered (e.g. with Vitest + React Testing Library)
- Edge cases: changing `BOARD_ROWS`/`BOARD_COLS` constants updates the rendered cell count

**Dependencies**
- Depends on Task 3

**Estimated Complexity:** M
