import ProjectRow from '../components/ProjectRow.jsx'
import { projects } from '../data.js'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects-page">
      <h1 className="projects-page__title">Projects</h1>
      <p className="projects-page__lead">
        A mix of research, freelance, and personal builds. Click one to read more.
      </p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
