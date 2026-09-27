# Portfolio - Alexandre Teixeira

Personal homepage, React + Vite + React Router. Markdown/terminal-flavored
minimalism - monospace throughout, `>` prompt-style links, a light/dark
toggle, and a few functional details (live Porto clock, keyboard shortcuts,
a live GitHub activity graph).

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Output goes to `dist/`, deployable anywhere static (Vercel, Netlify, GitHub
Pages, Cloudflare Pages). If your host doesn't do SPA rewrites automatically,
add a rewrite rule so `/projects` doesn't 404 on refresh.

## Structure

```
src/
  data.js                  All content: profile, qa, quote, currently, projects.
  index.css                 Theme tokens (light + dark via [data-theme]), mono-first type, bracket-link + key-hint utilities.
  App.jsx                    Router setup (/, /projects).
  hooks/
    useKeyboardShortcuts.js  Global "h/p" page shortcuts + "e/g/l" for email/GitHub/LinkedIn.
  components/
    Layout.jsx                Nav + Footer wrapper, wires up keyboard shortcuts.
    Nav.jsx                    Clock, theme toggle, bracket-link page nav with key hints.
    Footer.jsx                 Bracket links (email/github/linkedin) + copyright.
    ThemeToggle.jsx            Light/dark toggle, persisted to localStorage.
    Clock.jsx                  Live local time, Europe/Lisbon.
    GithubActivity.jsx         Live contributions heatmap (see below).
    ProjectRow.jsx              Click-to-expand project case study, used on /projects.
  pages/
    Home.jsx                    Greeting, What/Where/Why, pull quote, Now, Activity, 2 featured projects.
    Projects.jsx                  Full project list.
```

## Editing content

Everything text-based lives in `src/data.js`:
- `profile` - name, role, contact links, `githubUsername`
- `qa` - the What/Where/Why sections on the homepage
- `quote` - the pull-quote line + elaboration
- `currently` - the "Now" bullet list
- `projects` - the full project list on /projects

No component edits needed for text changes.

## Keyboard shortcuts

`h` → Home · `p` → Projects · `e` → email · `g` → GitHub ·
`l` → LinkedIn. Disabled while a modifier key (Cmd/Ctrl/Alt) is held or a
form field is focused. Defined in `useKeyboardShortcuts.js` - add more by
extending `ROUTE_KEYS` or `LINK_KEYS`.

## GitHub activity graph

`GithubActivity.jsx` fetches real contribution history client-side, no
token needed:

```
https://github-contributions-api.jogruber.de/v4/{username}?y=last
```

`profile.githubUsername` controls the account (currently `AlexDTT`). This is
a community-run, cached API; if it's ever down the component falls back to
a plain "see my activity on GitHub" link instead of breaking the page.

## Theme

`ThemeToggle.jsx` writes a `data-theme` attribute to `<html>` and persists
the choice to `localStorage`. Default follows the visitor's OS preference
via `prefers-color-scheme` until they toggle it manually. Both palettes live
in `src/index.css` under `:root` and `:root[data-theme='dark']`.

## Notes / next steps

- No project screenshots - `ProjectRow` is text-only by design. Add an
  `image` field per project in `data.js` if you want thumbnails later.
- Re-read the `qa` and `quote` copy in `data.js` - I wrote it from your
  resume/LinkedIn, it should sound like you saying it, not like a summary.
