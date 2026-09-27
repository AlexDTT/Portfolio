import { Link } from 'react-router-dom'
import EntryLogo from '../components/EntryLogo.jsx'
import { profile, qa, quote, currently, projects } from '../data.js'
import './Home.css'

export default function Home() {
  const featured = projects.slice(0, 2)

  return (
    <>
      <section className="home-hero">
        <h1 className="home-hero__title">{profile.name}</h1>
        <p className="home-hero__intro">
          I'm a developer leaning into cybersecurity. I build full-stack products,
          then try to find where they'd break.
        </p>
      </section>

      {qa.map((item) => (
        <section className="home-section" key={item.label}>
          <h2 className="section-heading">{item.label}</h2>
          <p className="home-section__body">{item.body}</p>
        </section>
      ))}

      <section className="home-quote">
        <p className="home-quote__line">{quote.line}</p>
        <p className="home-quote__body">{quote.body}</p>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Now</h2>
        <ul className="home-currently">
          {currently.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="home-section">
        <h2 className="section-heading">Work</h2>
        <ul className="home-featured">
          {featured.map((p) => (
            <li key={p.id}>
              <Link className="home-featured__link" to="/projects">
                <EntryLogo src={p.logo} alt={`${p.title} logo`} />
                <span className="home-featured__title">{p.title}</span>
                <span className="home-featured__summary">{p.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="home-more">
          <Link className="bracket" to="/projects">
            all projects
            <span className="key-hint">p</span>
          </Link>
        </p>
      </section>
    </>
  )
}
