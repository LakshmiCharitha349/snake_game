# Tasks: render-snake (#3)

## Task 1: Define snake types

**Description**
Create `src/types/index.ts` with the types needed to represent the snake. This includes `Position` (`{ row: number; col: number }`) and a `Snake` type alias (`Position[]`), keeping the type surface ready for future movement without over-engineering now.

**Acceptance Criteria**
- [ ] `src/types/index.ts` exists and exports `Position` and `Snake`
- [ ] `Position` has `row: number` and `col: number` fields
- [ ] `Snake` is a type alias for `Position[]`
- [ ] TypeScript compilation succeeds

**Files Likely Affected**
- `src/types/index.ts` — created

**Test Requirements**
- Unit: none (pure types; correctness verified by consumers)

**Dependencies**
- None

**Estimated Complexity:** S

---

## Task 2: Create initial snake state

**Description**
Export `INITIAL_SNAKE: Snake` from `src/constants/board.ts` — 3 horizontal segments with head at `{row:10, col:11}`, body at `{row:10, col:10}`, tail at `{row:10, col:9}`.

**Acceptance Criteria**
- [ ] `INITIAL_SNAKE` is exported from `src/constants/board.ts` typed as `Snake`
- [ ] It contains exactly 3 elements in head → tail order
- [ ] Positions are `{row:10, col:11}`, `{row:10, col:10}`, `{row:10, col:9}`
- [ ] TypeScript compilation succeeds

**Files Likely Affected**
- `src/constants/board.ts` — add `INITIAL_SNAKE`

**Test Requirements**
- Unit: none (correctness verified by Task 4)

**Dependencies**
- Depends on Task 1

**Estimated Complexity:** S

---

## Task 3: Render snake segments on board

**Description**
Update `Board.tsx` to accept a `snake: Snake` prop. Build a `Set<string>` of `"row,col"` keys for O(1) lookup and apply `board__cell--snake` to matching cells. Style snake cells green. Update `App.tsx` to pass `INITIAL_SNAKE`. Fix existing tests to pass `snake={[]}`.

**Acceptance Criteria**
- [ ] `Board` accepts a required `snake: Snake` prop
- [ ] Cells matching snake positions render with class `board__cell--snake`
- [ ] All other cells remain `board__cell` only
- [ ] Snake cells are visually distinct (green colour)
- [ ] `App.tsx` passes `INITIAL_SNAKE` to `<Board />`
- [ ] Existing Board tests updated to pass `snake={[]}` (no regressions)
- [ ] `npm run build` succeeds with no TypeScript errors

**Files Likely Affected**
- `src/components/Board.tsx` — add `snake` prop and cell class logic
- `src/components/Board.css` — add `.board__cell--snake` style
- `src/components/Board.test.tsx` — update existing tests
- `src/App.tsx` — pass `INITIAL_SNAKE`

**Test Requirements**
- Unit: passing empty `snake` array renders no snake cells; passing a position highlights that cell

**Dependencies**
- Depends on Task 2

**Estimated Complexity:** M

---

## Task 4: Verify initial positioning

**Description**
Add a dedicated test suite verifying that `INITIAL_SNAKE` satisfies all the acceptance criteria from the issue: exactly 3 segments, positioned near the center, each segment in a valid grid cell, and all segments connected (adjacent cells).

**Acceptance Criteria**
- [ ] Test confirms `INITIAL_SNAKE` has exactly 3 segments
- [ ] Test confirms all segments are within board bounds (`0 ≤ row < BOARD_ROWS`, `0 ≤ col < BOARD_COLS`)
- [ ] Test confirms segments are adjacent (each consecutive pair differs by exactly 1 col or 1 row)
- [ ] Test confirms the snake center is near the board center
- [ ] All tests pass

**Files Likely Affected**
- `src/constants/board.test.ts` — created

**Test Requirements**
- Unit: length, bounds, adjacency, center proximity

**Dependencies**
- Depends on Task 2

**Estimated Complexity:** S
