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

- GitHub Pages run `32031730043` deployed commit `93586a5` successfully.
- A fresh public page showed the build-journal heading, `style.css?v=20260817-5`, no external Google fonts, and no old portfolio hero copy.
- At 375px, there was no horizontal overflow.
- Build notes, What I’m learning, and About navigation targets worked.
- The theme button worked with Enter, had visible focus, persisted after refresh, and produced no browser console errors.
- Focus Orbit and Aarav Ping Bot source links each returned HTTP 200 during the current check.

## Testing boundary

These notes record checks that were actually run for the current site. A passing local check does not by itself prove a public deployment is current.
