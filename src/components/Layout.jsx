import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts.js'

export default function Layout() {
  useKeyboardShortcuts()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return (
    <div className="page">
      <Nav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
