import { useEffect, useState } from 'react'
import './Clock.css'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Europe/Lisbon',
})

export default function Clock() {
  const [time, setTime] = useState(() => formatter.format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 1000 * 15)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="clock mono" title="Local time, Porto">
      {time}, PRT
    </span>
  )
}
