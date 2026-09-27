import { NavLink } from 'react-router-dom'
import { profile } from '../data.js'
import ThemeToggle from './ThemeToggle.jsx'
import Clock from './Clock.jsx'
import './Nav.css'

const pages = [
  { to: '/', label: 'Home', end: true, key: 'h' },
  { to: '/projects', label: 'Projects', key: 'p' },
  { to: '/cv', label: 'CV', key: 'c' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav__top">
        <Clock />
        <ThemeToggle />
      </div>

      <div className="container nav__row">
        <nav className="nav__pages" style={{'marginBottom': '0.5rem'}}>
          {pages.map((p) => (
            <NavLink
              key={p.to}
              to={p.to}
              end={p.end}
              className={({ isActive }) =>
                'nav__link bracket' + (isActive ? ' nav__link--active' : '')
              }
            >
              {p.label}
              <span className="key-hint">{p.key}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
