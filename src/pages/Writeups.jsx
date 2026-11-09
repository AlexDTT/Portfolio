import { Link } from 'react-router-dom'
import { writeups } from '../data.js'
import './Writeups.css'

export default function Writeups() {
  return (
    <section className="writeups-page">
      <h1 className="writeups-page__title">Writeups</h1>
      <p className="writeups-page__lead">
        Notes from the CTFs and security wargames I'm working through. Click one
        to read it.
      </p>

      <ul className="writeups-list">
        {writeups.map((series) => (
          <li key={series.id}>
            <Link className="writeups-entry" to={`/writeups/${series.id}`}>
              <span className="writeups-series__head">
                <span className="writeups-entry__title">{series.title}</span>
                <span className="writeups-series__period mono">{series.period}</span>
              </span>
              <span className="writeups-series__category mono">
                {series.category} · {series.levels.length} levels
              </span>
              <span className="writeups-series__summary">{series.summary}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
