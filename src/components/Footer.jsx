import { profile } from '../data.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer container">
      <div className="footer__links">
        <a className="bracket" href={`mailto:${profile.email}`}>
          email
          <span className="key-hint">e</span>
        </a>
        <a className="bracket" href={profile.github} target="_blank" rel="noreferrer">
          github
          <span className="key-hint">g</span>
        </a>
        <a className="bracket" href={profile.linkedin} target="_blank" rel="noreferrer">
          linkedin
          <span className="key-hint">l</span>
        </a>
      </div>
      <p className="footer__copy mono">© {year} {profile.name}</p>
    </footer>
  )
}
