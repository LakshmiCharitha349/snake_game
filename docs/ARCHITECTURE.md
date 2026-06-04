# Architecture

## Overview

Snake is a browser-based game built using React, TypeScript, and Vite.

The application consists of:

* Board rendering
* Snake rendering
* Movement engine
* Food generation
* Score tracking
* Collision detection

## Folder Structure

src/
├── components/
├── game/
├── hooks/
├── constants/
├── types/
└── App.tsx

## Responsibilities

### components/

Contains UI components.

Examples:

* Board
* Snake
* Score

### game/

Contains game logic.

Examples:

* Movement
* Collision detection
* Food spawning

### hooks/

Contains React hooks.

Examples:

* useGameLoop
* useKeyboard

### constants/

Game configuration.

Examples:

* Board size
* Tick speed

### types/

Shared TypeScript types.

## Design Principles

* Keep UI separate from game logic.
* Prefer small focused components.
* Prefer pure functions for game calculations.
* Avoid premature optimization.
