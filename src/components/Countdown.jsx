import { useState, useEffect } from 'react'
import './Countdown.css'

function Countdown() {
  const launchDate = new Date('2026-03-01T00:00:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [launchDate])

  return (
    <div className="countdown-container">
      <h2 className="launching-text">Launching Soon</h2>
      <div className="countdown">
        <div className="time-unit">
          <div className="time-value">{timeLeft.days}</div>
          <div className="time-label">Days</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.hours}</div>
          <div className="time-label">Hours</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.minutes}</div>
          <div className="time-label">Minutes</div>
        </div>
        <div className="time-separator">:</div>
        <div className="time-unit">
          <div className="time-value">{timeLeft.seconds}</div>
          <div className="time-label">Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
