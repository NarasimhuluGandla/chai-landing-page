import { useState } from 'react'
import './EmailSignup.css'

function EmailSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address')
      return
    }

    // Simulate form submission
    setStatus('Thank you! You\'ll be notified when we launch.')
    setEmail('')
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus(''), 3000)
  }

  return (
    <div className="email-signup">
      <h3 className="signup-title">Be the First to Experience Royalty</h3>
      <p className="signup-subtitle">Join our exclusive list for early access and special offers</p>
      
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="email-input"
            required
          />
          <button type="submit" className="submit-btn">
            Notify Me
          </button>
        </div>
        {status && (
          <p className={`status-message ${status.includes('Thank') ? 'success' : 'error'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  )
}

export default EmailSignup
