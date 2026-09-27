import { useState } from 'react'
import ProjectRow from '../components/ProjectRow.jsx'
import { Item, repoPath } from './CV.jsx'
import { projects, universityProjects } from '../data.js'
import './Projects.css'

export default function Projects() {
  const [openId, setOpenId] = useState(null)

  const openProps = (id) => ({
    open: openId === id,
    onToggle: () => setOpenId((current) => (current === id ? null : id)),
  })

  const metaFor = (p) =>
    p.repo
      ? `${p.team} · ${p.course} · ${repoPath(p.repo)}`
      : `${p.team} · ${p.course}`

  return (
    <section className="projects-page">
      <h1 className="projects-page__title">Projects</h1>
      <p className="projects-page__lead">
        A mix of research, freelance, personal, and university builds. Click one
        to read more.
      </p>

      <div className="project-list">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            {...openProps(project.id)}
          />
        ))}
      </div>

      <section className="projects-section">
        <h2 className="section-heading">
          University projects{' '}
          <span className="cv-section__count">({universityProjects.length})</span>
        </h2>
        <div className="cv-list">
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
              meta={metaFor(p)}
              {...openProps(p.id)}
            />
          ))}
        </div>
      </section>
    </section>
  )
}
