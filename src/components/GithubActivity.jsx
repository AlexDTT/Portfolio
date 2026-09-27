import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import './GithubActivity.css'

const LEVEL_CLASS = ['lvl-0', 'lvl-1', 'lvl-2', 'lvl-3', 'lvl-4']

function buildWeeks(contributions) {
  if (!contributions.length) return []
  const weeks = []
  let week = new Array(7).fill(null)

  const firstDow = new Date(contributions[0].date + 'T00:00:00Z').getUTCDay()
  for (let i = 0; i < firstDow; i++) week[i] = null

  contributions.forEach((day) => {
    const dow = new Date(day.date + 'T00:00:00Z').getUTCDay()
    week[dow] = day
    if (dow === 6) {
      weeks.push(week)
      week = new Array(7).fill(null)
    }
  })
  if (week.some(Boolean)) weeks.push(week)
  return weeks
}

export default function GithubActivity() {
  const [state, setState] = useState({ status: 'loading', weeks: [], total: 0 })

  useEffect(() => {
    let cancelled = false

    fetch(`https://github-contributions-api.jogruber.de/v4/${profile.githubUsername}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('request failed')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        const total = Object.values(data.total || {}).reduce((a, b) => a + b, 0)
        setState({ status: 'ready', weeks: buildWeeks(data.contributions || []), total })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', weeks: [], total: 0 })
      })

    return () => {
      cancelled = true
    }
  }, [])

  if (state.status === 'error') {
    return (
      <p className="github-activity__fallback">
        <a className="link" href={profile.github} target="_blank" rel="noreferrer">
          See my activity on GitHub
        </a>
      </p>
    )
  }

  return (
    <div className="github-activity">
      {state.status === 'loading' ? (
        <p className="github-activity__loading mono">loading activity…</p>
      ) : (
        <>
          <div className="github-activity__grid" role="img" aria-label={`${state.total} GitHub contributions in the last year`}>
            {state.weeks.map((week, wi) => (
              <div className="github-activity__week" key={wi}>
                {week.map((day, di) => (
                  <div
                    key={di}
                    className={`github-activity__cell ${day ? LEVEL_CLASS[day.level] : 'lvl-empty'}`}
                    title={day ? `${day.count} contributions on ${day.date}` : undefined}
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="github-activity__meta mono">
            {state.total} contributions in the last year ·{' '}
            <a className="link" href={profile.github} target="_blank" rel="noreferrer">
              view on GitHub
            </a>
          </p>
        </>
      )}
    </div>
  )
}
