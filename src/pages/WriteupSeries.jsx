import { useCallback, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Lightbox } from './CV.jsx'
import { writeups } from '../data.js'
import './Writeups.css'

const documents = import.meta.glob('/src/writeups/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})
const images = import.meta.glob('/src/writeups/**/*.{png,jpg,jpeg,webp,gif,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const isExternal = (url) => /^([a-z]+:|\/\/)/i.test(url)

// Resolves a path written in a Markdown file against that file's own location.
const resolvePath = (url, documentPath) =>
  decodeURI(new URL(url, `http://local${documentPath}`).pathname)

function WriteupImage({ src, alt = '' }) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const step = useCallback(() => {}, [])

  return (
    <>
      <button type="button" className="writeup__image" onClick={() => setOpen(true)}>
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {alt && <span className="writeup__caption">{alt}</span>}
      {open && <Lightbox images={[{ src, alt }]} index={0} onClose={close} onStep={step} />}
    </>
  )
}

function Level({ series, file }) {
  const documentPath = `/src/writeups/${series.id}/${file}`
  const components = {
    // Each file's title sits under the series title on this page.
    h1: 'h2',
    h2: 'h3',
    a({ href, children }) {
      return (
        <a className="link" href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      )
    },
    img({ src = '', alt }) {
      const resolved = isExternal(src) ? src : images[resolvePath(src, documentPath)] || src
      return <WriteupImage src={resolved} alt={alt} />
    },
  }

  return (
    <article className="writeup">
      <div className="writeup__body">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {documents[documentPath]}
        </ReactMarkdown>
      </div>
    </article>
  )
}

export default function WriteupSeries() {
  const { seriesId } = useParams()
  const series = writeups.find((entry) => entry.id === seriesId)

  if (!series) return <Navigate to="/writeups" replace />

  return (
    <section className="writeups-page">
      <Link className="writeups-series__back bracket" to="/writeups">
        all writeups
      </Link>

      <div className="writeups-series__head writeups-series__heading">
        <h1 className="writeups-page__title">{series.title}</h1>
        <span className="writeups-series__period mono">{series.period}</span>
      </div>
      <p className="writeups-series__category mono">
        {series.category} · {series.levels.length} levels
      </p>
      <p className="writeups-series__summary">{series.summary}</p>
      <a
        className="writeups-series__repo bracket"
        href={series.repo}
        target="_blank"
        rel="noreferrer"
      >
        open repository
      </a>

      {series.levels.map((file) => (
        <Level key={file} series={series} file={file} />
      ))}
    </section>
  )
}
