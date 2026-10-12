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
  content.json             Shared website/PDF content, skills, and concise CV selection.
  data.js                  Website exports and base-aware public asset paths.
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
    CV.jsx                        Experience, Projects, University Projects, Education, Skills, galleries, walkthroughs, and PDF downloads.
```

## Editing content

Shared content lives in `src/content.json`:
- `profile` - name, role, contact links
- `qa` - the What/Where/Why sections on the homepage
- `quote` - the pull-quote line + elaboration
- `currently` - the "Now" bullet list
- `projects` - the full project list on /projects (also shown on /cv)
- `experience` - CV work history (role, org, type, period, location)
- `universityProjects` - FEUP coursework entries on /cv and /projects, with optional `repo` link, plus `galleries` (screenshots, served from `public/media/cv/`) and `video` (YouTube walkthrough id)
- `education` - school history on /cv
- `skills` - skill groups shared by /cv and both PDFs

Any entry in `projects`, `experience`, `universityProjects`, or `education`
may also carry an optional `logo` path to an image under `public/` (e.g.
`/media/cv/clutch/clutchlogo.webp`). It renders as the small chip above the
title on /, /projects, and /cv - no component edits needed.

No component edits needed for text changes.

## CV downloads

The CV tab has **Download CV** and **Download Extended CV** links. Both PDFs
are generated from `src/content.json` using `cv/resume.typ`, adapted from the
original `@preview/clickworthy-resume:1.0.1` template. The concise CV keeps
the original selection; the extended version includes all entries, full
descriptions, skills, repository links, and walkthrough links. Screenshot
galleries remain on the website.

`npm run build` regenerates both PDFs before building the site, so the existing
`npm run deploy` publishes matching website and PDF content. `npm run dev`
also generates them at startup. After editing content during a running dev
session, regenerate PDFs with:

```bash
npm run build:cv
```

Outputs are `src/generated/cv/alexandre-teixeira-cv.pdf` and
`src/generated/cv/alexandre-teixeira-extended-cv.pdf`. Vite imports them as
assets and emits them with content hashes under `dist/assets/`, so downloads
use the matching PDF rather than a stale public URL. The download handler
checks the PDF signature before saving and reports failed or timed-out requests.
PDFs use PDF 1.4 for viewer compatibility.
Generated PDFs and the compiler cache are ignored by Git.

On Linux/macOS (x64/arm64), the first PDF build downloads the official Typst
0.15.1 binary, verifies its SHA-256 checksum, and caches it in `.cache/typst/`.
The template package is cached there too; the first build requires internet
access and `tar` with xz support. Subsequent builds work offline. An installed
`typst` on PATH is used instead when available; on other platforms install the
Typst CLI yourself. Set `TYPST_BIN` to use a specific executable.

Each experience, project, university project, and education entry can include:

```json
"cv": {
  "includeInShort": true,
  "shortPoints": ["A concise achievement for the shorter PDF."]
}
```

New entries appear in the extended PDF automatically. Set `includeInShort`
to `true` to include them in the concise PDF too. `shortPoints` is optional:
experience and university projects fall back to `points`, and projects fall
back to `summary`. Project stacks are included automatically. Education uses
its shared degree and GPA fields. Entries retain their content-array order.
Skills appear in both PDFs. Check the PDF layout after adding content, since
the concise version may grow beyond one page.

To edit this template in the Typst web app, upload `cv/resume.typ` and
`src/content.json` with the same folder structure. Its default output is the
concise CV; locally the build script sets `--input version=extended` for the
extended version.

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
  `image` field per project in `content.json` if you want thumbnails later.
- Re-read the `qa` and `quote` copy in `content.json` - I wrote it from your
  resume/LinkedIn, it should sound like you saying it, not like a summary.
