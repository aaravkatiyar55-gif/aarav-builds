# Aarav Builds test notes

## Local checks

| Check | How it was tested | Result |
| --- | --- | --- |
| JavaScript syntax | `node --check script.js` | Pass |
| Theme preference | Toggle the theme, refresh the page | Pass — selected theme remains |
| Reading-size preference | Toggle “Text +”, refresh the page | Pass — selected reading size remains |
| Note button | Activate “Show a different note” | Pass — quote changes and status text updates |
| Small screen layout | 360px-wide browser viewport | Pass — no horizontal overflow observed |
| Project filters | Select each filter using mouse and keyboard | Pass — one matching project shown, then both restored |

## Deployment note

After adding the filters, GitHub Pages initially served updated HTML with a cached JavaScript file in the browser. The CSS and JavaScript URLs include a small release version string; this value is bumped whenever those files change so a deployment receives matching assets.

## Before each public update

1. Load the live URL in a fresh browser page.
2. Test navigation, theme toggle, and note button with keyboard and mouse.
3. Check a phone-width layout and a desktop-width layout.
4. Keep project links and README claims matched to the live site.
