import { useState } from 'react'
import './ProjectRow.css'

export default function ProjectRow({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="project-row" data-open={open}>
      <button
        className="project-row__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="project-row__head">
          <h3 className="project-row__title">{project.title}</h3>
          <span className="project-row__period mono">{project.period}</span>
        </div>
        <p className="project-row__summary">{project.summary}</p>
      </button>

      {open && (
        <div className="project-row__detail">
          <p>{project.detail}</p>
          <ul className="project-row__stack">
            {project.stack.map((s) => (
              <li key={s} className="mono">
                {s}
              </li>
            ))}
          </ul>
          {project.link && (
            <a
              className="bracket"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              visit {project.title.toLowerCase()}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
