import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { profile } from '../data.js'

const ROUTE_KEYS = {
  h: '/',
  p: '/projects',
}

const LINK_KEYS = {
  e: `mailto:${profile.email}`,
  g: profile.github,
  l: profile.linkedin,
}

export default function useKeyboardShortcuts() {
  const navigate = useNavigate()

  useEffect(() => {
    function handleKeyDown(e) {
      // Ignore if a modifier is held, or focus is in a form field.
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      const key = e.key.toLowerCase()

      if (ROUTE_KEYS[key]) {
        navigate(ROUTE_KEYS[key])
        return
      }
      if (LINK_KEYS[key]) {
        window.open(LINK_KEYS[key], '_blank', 'noopener,noreferrer')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [navigate])
}
