# Aarav Builds testing notes

## Source checks

- `node --check script.js`
- `git diff --check`

## Local browser checks

- The page has one h1 and two project-note articles with logical h2, h3, and h4 headings.
- Header navigation moves to Build notes, What I’m learning, and About.
- Focus Orbit and Aarav Ping Bot links use their intended public URLs.
- The theme button works with mouse and Enter, updates its pressed state and status message, and persists after refresh.
- The layout has no horizontal overflow at 320px, 768px, or desktop width.
- Both paper and dark themes remain readable.
- No console errors were observed in the local browser checks.

## Deployed checks

After a GitHub Pages build completes, open a fresh public page and verify the current asset versions, build-note layout, theme control, project links, mobile layout, and browser console.

## Testing boundary

These notes record checks that were actually run for the current site. A passing local check does not by itself prove a public deployment is current.
