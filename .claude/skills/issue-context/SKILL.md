name: issue-context
description: >
  GitHub issue information gathering and codebase context skill. Given a GitHub issue number,
  fetches the full issue (body, comments, linked issues), surveys the codebase structure and
  relevant files, and produces a structured context summary ready for planning. Used by the
  user-story-implementation orchestrator — load this skill at the start of Phase 0 and follow
  it completely before returning.
---

# Issue Context Skill

Gather everything needed to understand a GitHub issue and the codebase it lives in.
Produce a structured **Context Summary** and signal when it is ready for the planning phase.

Do not proceed to planning until all steps below are complete.

---

## Step 1 — Fetch Issue

gh issue view <NUMBER> --json title,body,labels,assignees,milestone,comments

If error:
- run gh auth status
- if not authenticated → ask user to run gh auth login
- if issue not found → ask for correct repo/issue number

Scan issue body/comments for linked issues (#123, closes #45, sub-issues)

For each linked issue:
gh issue view <LINKED_NUMBER> --json title,body,state

Record relationship (blocks / blocked-by / related / sub-issue)

---

## Step 2 — Codebase Survey

### Repo structure
find . -maxdepth 3 -not -path '*/\.*' -not -path '*/node_modules/*' | head -80

---

### Relevant files (domain search)
grep -r "<domain keyword>" --include="*.ts" -l
rg "<domain keyword>" -l

---

### Test structure
find . -name "*.test.*" -o -name "*.spec.*" -o -name "*_test.*" | head -20

Identify:
- test framework (jest / pytest / go test / etc.)
- file layout pattern
- assertion style

---

### Tech stack
cat package.json
cat requirements.txt
cat go.mod
cat pom.xml
cat Gemfile

---

### Documentation
ls docs/

Review relevant architecture notes / prior design docs

---

## Step 3 — Context Summary Output

## Context Summary: Issue #<NUMBER> — <Title>

### Issue
- State: open / closed
- Labels: ...
- Milestone: ...

### What the issue asks for
(2–4 sentences summarizing requirement)

### Linked issues
| # | Title | Relationship | State |

### Codebase findings
| Area           | Detail |
|----------------|--------|
| Repo structure | ... |
| Relevant files | ... |
| Test framework | ... |
| Tech stack     | ... |
| Docs           | ... |

### Initial observations
Notes on:
- architecture patterns
- risks / edge cases
- similar existing implementations

---

## Step 4 — Confirmation

Ask user:
"Does this context look accurate? Reply **Agreed** to proceed to planning, or specify corrections."

If corrections:
- update context
- reprint full summary

---

## Step 5 — Save Context

After user approval:

save to:
docs/<NUMBER>/context.md

Confirm:
"Context saved to docs/<NUMBER>/context.md. Ready to begin planning."

Return control to orchestrator.