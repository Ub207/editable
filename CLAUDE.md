# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the app

Open `index.html` directly in a browser — no build step or server required. The page loads `script.js` (the compiled output); `script.ts` is the TypeScript source.

## Building / compiling TypeScript

There is no `package.json` or `tsconfig.json` in the repo. To compile `script.ts` to `script.js` after changes, run:

```
tsc script.ts --target ES6 --strict
```

If `tsc` is not available, install TypeScript globally first: `npm install -g typescript`.

## Architecture

Single-page static app with no framework or bundler:

- `index.html` — form UI (Personal Info, Education, Experience, Skills) + a hidden `#resume-display` div
- `script.ts` / `script.js` — one `DOMContentLoaded` listener that (1) captures form fields on submit, (2) renders them into `#resume-content` via `innerHTML`, then (3) swaps form/display visibility; the Edit button reverses the swap
- `style.css` — all styling, including responsive breakpoint at 600 px

