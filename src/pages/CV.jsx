import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import EntryLogo from '../components/EntryLogo.jsx'
import { profile, projects, experience, universityProjects, education } from '../data.js'
import './CV.css'

function VideoPlayer({ id, title }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className="cv-video cv-video--playing">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="cv-video">
      <button
        type="button"
        className="cv-video__poster"
        onClick={() => setPlaying(true)}
        aria-label={`Play ${title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
          alt=""
          loading="lazy"
          onError={(e) => {
            if (e.currentTarget.dataset.fallback) return
            e.currentTarget.dataset.fallback = '1'
            e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
          }}
        />
        <span className="cv-video__badge">Play walkthrough</span>
      </button>
    </div>
  )
}

function Lightbox({ images, index, onClose, onStep }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const image = images[index]

  useEffect(() => {
    closeRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        onStep(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onStep(-1)
      } else if (event.key === 'Tab') {
        const controls = Array.from(dialogRef.current?.querySelectorAll('button') || [])
        if (controls.length === 0) return
        const first = controls[0]
        const last = controls[controls.length - 1]
        const active = document.activeElement
        if (!controls.includes(active)) {
          event.preventDefault()
          first.focus()
        } else if (event.shiftKey && active === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && active === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, onStep])

  return createPortal(
    <div
      className="cv-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <div className="cv-lightbox__stage" onClick={(event) => event.stopPropagation()}>
        <img className="cv-lightbox__img" src={image.src} alt={image.alt} />
        <div className="cv-lightbox__meta">
          <span className="cv-lightbox__caption">{image.alt}</span>
          <span className="cv-lightbox__count mono">
            {index + 1} / {images.length}
          </span>
        </div>
      </div>

      <button
        type="button"
        className="cv-lightbox__close"
        ref={closeRef}
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        aria-label="Close image"
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="cv-lightbox__nav cv-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              onStep(-1)
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="cv-lightbox__nav cv-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation()
              onStep(1)
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>,
    document.body
  )
}

function Gallery({ gallery }) {
  const images = gallery.images
  const [index, setIndex] = useState(null)
  const triggers = useRef([])
  const lastTrigger = useRef(null)

  const open = useCallback((i) => {
    lastTrigger.current = triggers.current[i] || null
    setIndex(i)
  }, [])

  const close = useCallback(() => {
    setIndex(null)
    lastTrigger.current?.focus()
  }, [])

  const step = useCallback(
    (delta) => {
      setIndex((current) =>
        current === null ? current : (current + delta + images.length) % images.length
      )
    },
    [images.length]
  )

  return (
    <div className="cv-gallery">
      <h4 className="cv-gallery__heading">{gallery.heading}</h4>
      <div
        className="cv-gallery__grid"
        style={{
          '--gallery-cols': gallery.columns || 2,
          '--gallery-ratio': gallery.ratio || '16 / 10',
        }}
      >
        {images.map((img, i) => (
          <figure className="cv-gallery__figure" key={img.src}>
            <button
              type="button"
              className="cv-gallery__zoom"
              ref={(el) => {
                triggers.current[i] = el
              }}
              onClick={() => open(i)}
              aria-label={`View larger: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </button>
          </figure>
        ))}
      </div>

      {index !== null && (
        <Lightbox images={images} index={index} onClose={close} onStep={step} />
      )}
    </div>
  )
}

export function Item({
  title,
  highlight,
  period,
  meta,
  summary,
  points,
  detail,
  video,
  galleries,
  href,
  hrefLabel,
  logo,
  open,
  onToggle,
}) {
  const expandable = Boolean(
    summary || points?.length || detail?.length || video || galleries?.length || href
  )

  const logoMark = <EntryLogo src={logo} alt={`${title} logo`} />

  if (!expandable) {
    return (
      <article className="cv-item cv-item--static">
        <div className="cv-item__head">
          <div className="cv-item__lead">
            {logoMark}
            <h3 className="cv-item__title">
              {title}
              {highlight && (
                <span className="cv-item__highlight mono"> | {highlight}</span>
              )}
            </h3>
          </div>
          <span className="cv-item__end">
            <span className="cv-item__period mono">{period}</span>
          </span>
        </div>
        <p className="cv-item__meta mono">{meta}</p>
      </article>
    )
  }

  return (
    <article className="cv-item">
      <button
        className="cv-item__trigger"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="cv-item__head">
          <div className="cv-item__lead">
            {logoMark}
            <h3 className="cv-item__title">{title}</h3>
          </div>
          <span className="cv-item__end">
            <span className="cv-item__period mono">{period}</span>
            <span className="cv-item__sign mono" aria-hidden="true">
              {open ? '−' : '+'}
            </span>
          </span>
        </div>
        <p className="cv-item__meta mono">{meta}</p>
      </button>

      <div className="cv-item__detail" data-open={open}>
        <div className="cv-item__detail__inner">
          {summary && <p className="cv-item__summary">{summary}</p>}
          {points?.length > 0 && (
            <ul className="cv-item__points">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
          {video && <VideoPlayer id={video.id} title={video.title} />}
          {detail?.map((para, i) => (
            <p className="cv-item__para" key={i}>
              {para}
            </p>
          ))}
          {galleries?.map((gallery) => (
            <Gallery key={gallery.heading} gallery={gallery} />
          ))}
          {href && (
            <a className="link cv-item__more" href={href} target="_blank" rel="noreferrer">
              {hrefLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Section({ title, count, children }) {
  return (
    <div className="cv-section">
      <h2 className="section-heading">
        {title} <span className="cv-section__count">({count})</span>
      </h2>
      <div className="cv-list">{children}</div>
    </div>
  )
}

export function repoPath(repo) {
  return repo ? repo.replace('https://github.com/', '') : null
}

export default function CV() {
  const [openId, setOpenId] = useState(null)

  const openProps = (id) => ({
    open: openId === id,
    onToggle: () => setOpenId((current) => (current === id ? null : id)),
  })

  return (
    <section className="cv-page">
      <header className="cv-page__head">
        <h1 className="cv-page__title">CV</h1>
        <p className="cv-page__lead">
          Things I've done, everything together - from the earliest start to now.
        </p>
        <p className="cv-page__contact mono">
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>{profile.location}</span>
          <a className="link" href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
        </p>
      </header>

      <Section title="Experience" count={experience.length}>
        {experience.map((job) => (
          <Item
            key={job.id}
            title={job.role}
            logo={job.logo}
            period={job.period}
            points={job.points}
            meta={`${job.org} · ${job.type} · ${job.location}`}
            {...openProps(job.id)}
          />
        ))}
      </Section>

      <Section title="Projects" count={projects.length}>
        {projects.map((project) => (
          <Item
            key={project.id}
            title={project.title}
            logo={project.logo}
            period={project.period}
            meta={project.org}
            summary={project.summary}
            detail={[project.detail]}
            href={project.link}
            hrefLabel={`visit ${project.title.toLowerCase()}`}
            {...openProps(project.id)}
          />
        ))}
      </Section>

      <Section title="University Projects" count={universityProjects.length}>
        {universityProjects.map((p) => (
          <Item
            key={p.id}
            title={p.title}
            logo={p.logo}
            period={p.period}
            points={p.points}
            detail={p.detail}
            video={p.video}
            galleries={p.galleries}
            href={p.repo}
            hrefLabel="open repository"
            meta={
              p.repo
                ? `${p.team} · ${p.course} · ${repoPath(p.repo)}`
                : `${p.team} · ${p.course}`
            }
            {...openProps(p.id)}
          />
        ))}
      </Section>

      <Section title="Education" count={education.length}>
        {education.map((e) => (
          <Item
            key={e.id}
            title={e.institution}
            logo={e.logo}
            highlight={e.highlight}
            period={e.period}
            meta={`${e.degree} · ${e.location}`}
          />
        ))}
      </Section>
    </section>
  )
}
