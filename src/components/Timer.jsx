import { useEffect, useRef, useState } from 'react'

export default function Timer({ seconds, paused, onExpire }) {
  const [remaining, setRemaining] = useState(seconds)
  const onExpireRef = useRef(onExpire)
  const expiredRef = useRef(false)
  onExpireRef.current = onExpire

  useEffect(() => {
    if (paused) return
    if (expiredRef.current) return

    const interval = setInterval(() => {
      setRemaining(prev => {
        const next = Math.max(0, prev - 0.1)
        if (next === 0 && !expiredRef.current) {
          expiredRef.current = true
          queueMicrotask(() => onExpireRef.current?.())
        }
        return next
      })
    }, 100)

    return () => clearInterval(interval)
  }, [paused])

  const pct = Math.max(0, Math.min(100, (remaining / seconds) * 100))
  const display = Math.ceil(remaining)

  let cls = 'timer'
  if (remaining <= seconds * 0.33) cls += ' urgent'
  if (remaining <= seconds * 0.15) cls += ' critical'
  if (paused) cls += ' paused'

  return (
    <div className={cls}>
      <div className="timer-row">
        <span className="timer-icon" aria-hidden="true">⏱</span>
        <span className="timer-num">{display}</span>
        <span className="timer-unit">с</span>
      </div>
      <div className="timer-bar">
        <div className="timer-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}
