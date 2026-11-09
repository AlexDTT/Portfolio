import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Writeups from './pages/Writeups.jsx'
import CV from './pages/CV.jsx'

// Split out so the Markdown renderer only loads when a series is opened.
const WriteupSeries = lazy(() => import('./pages/WriteupSeries.jsx'))

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writeups" element={<Writeups />} />
          <Route
            path="/writeups/:seriesId"
            element={
              <Suspense fallback={null}>
                <WriteupSeries />
              </Suspense>
            }
          />
          <Route path="/cv" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
