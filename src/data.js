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

export const { profile, currently, qa, quote, skills } = content
export const projects = content.projects.map(withAssets)
export const experience = content.experience.map(withAssets)
export const universityProjects = content.universityProjects.map(withAssets)
export const education = content.education.map(withAssets)
