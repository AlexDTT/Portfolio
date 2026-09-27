import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts.js'

export default function Layout() {
  useKeyboardShortcuts()
  const wide = useLocation().pathname === '/'

  return (
    <div className={wide ? 'page page--wide' : 'page'}>
      <Nav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
