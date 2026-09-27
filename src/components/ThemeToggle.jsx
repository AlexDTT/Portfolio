import { useEffect, useState } from 'react'
import './ThemeToggle.css'

function getInitialTheme() {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable - theme still applies for this session
    }
  }, [theme])

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle light/dark theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? 'Flashlight' : 'Night mode'}
      <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
    </button>
  )
}
