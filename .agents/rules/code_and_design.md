# Workspace Coding & Design Rules

## CSS & Styling Guidelines
- Maintain CSS design tokens in `src/css/main.css`. Do not hardcode arbitrary hex colors directly inside component styles if a design variable exists.
- Components styles belong in `src/css/components.css`.
- Keyframes and UI transitions belong in `src/css/animations.css`.
- Support responsive breakpoints: Desktop (> 1024px), Tablet (768px - 1024px), Mobile (< 768px).

## JavaScript Guidelines
- Maintain ES Module syntax (`import`/`export`).
- Dynamic page content (rooms, farm zones, gallery items, testimonials) must be loaded from `src/js/data.js`.
- DOM interactions should be clean, modular, and use `DOMContentLoaded` event handlers.

## Build & Quality Checks
- Before finishing any task, run `npm run build` to verify Vite bundle output.
