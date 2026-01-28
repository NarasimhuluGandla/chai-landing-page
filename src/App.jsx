import { useState, useEffect } from 'react'
import './App.css'
import Logo from './components/Logo'
import EmailSignup from './components/EmailSignup'
import SocialLinks from './components/SocialLinks'
import Countdown from './components/Countdown'

function App() {
  return (
    <div className="app">
      <div className="background-pattern"></div>
      <div className="content">
        <Logo />
        
        <main className="hero">
          <h1 className="tagline">Brew the Royal Tradition</h1>
          
          <p className="description">
            Experience the exquisite taste of premium instant chai tea, 
            crafted with authentic spices and inspired by the refined traditions 
            of royal Indian households. A legacy of flavor in every cup.
          </p>

          <Countdown />
          
          <EmailSignup />
        </main>

        <SocialLinks />
        
        <footer className="footer">
          <p>&copy; 2026 Royal Chai. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
