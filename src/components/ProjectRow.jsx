import EntryLogo from './EntryLogo.jsx'
import './ProjectRow.css'

export default function ProjectRow({ project, open, onToggle }) {
  return (
    <div className="project-row" data-open={open}>
      <button
        className="project-row__trigger"
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="project-row__head">
          <div className="project-row__lead">
            <EntryLogo src={project.logo} alt={`${project.title} logo`} />
            <h3 className="project-row__title">{project.title}</h3>
          </div>
          <span className="project-row__period mono">{project.period}</span>
        </div>
        <p className="project-row__summary">{project.summary}</p>
      </button>

      <div className="project-row__detail" data-open={open}>
        <div className="project-row__detail__inner">
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
      </div>
    </div>
  )
}
