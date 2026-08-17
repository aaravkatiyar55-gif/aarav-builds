# Aarav Builds

A personal site for sharing the projects I am making and the web-development skills I am practising.

## What is on the site?

- An introduction and current learning focus
- A build log linking to real projects
- A short learning map
- An interactive theme switcher that remembers the selected theme
- A small note button that changes the displayed learning reminder

## Technologies

- HTML
- CSS
- JavaScript

## Run locally

Open `index.html` in a browser. No build step or package installation is needed.

For a small local server during testing:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Testing

The first local check covered:

- JavaScript syntax with `node --check script.js`
- Theme toggle changes and theme persistence after refresh
- The note button updates the displayed note and its status message
- A 360px-wide browser viewport with no horizontal page overflow

The deployed-site checks will be added after GitHub Pages is live.

## Deployment

The public deployment URL will be added here after the site is published.

## AI usage

I used OpenAI Codex as a coding assistant for planning, implementation support, and testing guidance. I chose the site purpose and reviewed the project direction; the site will only claim features that are actually present and tested.
