# Portfolio - Alexandre Teixeira

Personal homepage, React + Vite + React Router. Markdown/terminal-flavored
minimalism - monospace throughout, `>` prompt-style links, a light/dark
toggle, and a few functional details (live Porto clock, keyboard shortcuts).

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
add a rewrite rule so `/projects` and `/cv` don't 404 on refresh.

## Structure

```
src/
  data.js                  All content: profile, qa, quote, currently, projects, experience, universityProjects, education.
  index.css                 Theme tokens (light + dark via [data-theme]), mono-first type, prompt-link + key-hint utilities.
  App.jsx                    Router setup (/, /projects, /cv).
  hooks/
    useKeyboardShortcuts.js  Global "h/p/c" page shortcuts + "e/g/l" for email/GitHub/LinkedIn.
  components/
    Layout.jsx                Nav + Footer wrapper, wires up keyboard shortcuts.
    Nav.jsx                    Clock, theme toggle, bracket-link page nav with key hints.
    Footer.jsx                 Bracket links (email/github/linkedin) + copyright.
    ThemeToggle.jsx            Light/dark toggle, persisted to localStorage.
    Clock.jsx                  Live local time, Europe/Lisbon.
    ProjectRow.jsx              Click-to-expand project case study, used on /projects.
  pages/
    Home.jsx                    Greeting, What/Where/Why, pull quote, Now, 2 featured projects.
    Projects.jsx                  Full project list + university projects (CV-style entries).
    CV.jsx                        Experience, Projects, University Projects, Education (rgo.pt-style list), with screenshot galleries + YouTube walkthroughs.
```

## Editing content

Everything text-based lives in `src/data.js`:
- `profile` - name, role, contact links
- `qa` - the What/Where/Why sections on the homepage
- `quote` - the pull-quote line + elaboration
- `currently` - the "Now" bullet list
- `projects` - the full project list on /projects (also shown on /cv)
- `experience` - CV work history (role, org, type, period, location)
- `universityProjects` - FEUP coursework entries on /cv and /projects, with optional `repo` link, plus `galleries` (screenshots, served from `public/media/cv/`) and `video` (YouTube walkthrough id)
- `education` - school history on /cv

Any entry in `projects`, `experience`, `universityProjects`, or `education`
may also carry an optional `logo` path to an image under `public/` (e.g.
`/media/cv/clutch/clutchlogo.webp`). It renders as the small chip above the
title on /, /projects, and /cv - no component edits needed.

No component edits needed for text changes.

## Keyboard shortcuts

`h` → Home · `p` → Projects · `c` → CV · `e` → email · `g` → GitHub ·
`l` → LinkedIn. Disabled while a modifier key (Cmd/Ctrl/Alt) is held or a
form field is focused. Defined in `useKeyboardShortcuts.js` - add more by
extending `ROUTE_KEYS` or `LINK_KEYS`.

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
