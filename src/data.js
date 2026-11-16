import content from './content.json'

// Edit content.json to update both the website and the generated Typst CVs.
// Keep stored paths independent of Vite; resolve public assets for the website here.
const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

function withAssets(entry) {
  return {
    ...entry,
    ...(entry.logo && { logo: asset(entry.logo) }),
    ...(entry.galleries && {
      galleries: entry.galleries.map((gallery) => ({
        ...gallery,
        images: gallery.images.map((image) => ({ ...image, src: asset(image.src) })),
      })),
    }),
  }
}

// Level numbers a writeup file covers: "natas04.md" -> [4], "natas00-03.md" -> [0, 1, 2, 3].
export function levelNumbers(file) {
  const match = file.match(/(\d+)(?:-(\d+))?\.md$/)
  if (!match) return []
  const first = Number(match[1])
  const last = match[2] ? Number(match[2]) : first
  return Array.from({ length: last - first + 1 }, (_, i) => first + i)
}

const span = (numbers) => {
  if (numbers.length === 0) return ''
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  return min === max ? `${min}` : `${min}–${max}`
}

// "levels 0–17 · 18 in progress", derived from the series' level files.
export function levelLabel(series) {
  const pending = series.inProgress ?? []
  const done = series.levels.filter((file) => !pending.includes(file)).flatMap(levelNumbers)
  const open = pending.flatMap(levelNumbers)
  const label = done.length === 1 ? `level ${span(done)}` : `levels ${span(done)}`
  return open.length ? `${label} · ${span(open)} in progress` : label
}

export const { profile, currently, qa, quote, skills, writeups } = content
export const projects = content.projects.map(withAssets)
export const experience = content.experience.map(withAssets)
export const universityProjects = content.universityProjects.map(withAssets)
export const education = content.education.map(withAssets)
