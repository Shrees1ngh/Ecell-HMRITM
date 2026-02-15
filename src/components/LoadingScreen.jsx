import { useState, useEffect } from 'react'
import CircularText from './CircularText/CircularText'
import ecellLogo from '../assets/ecell-logo.svg'
import './LoadingScreen.css'

function LoadingScreen({ onLoadComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        if (onLoadComplete) onLoadComplete()
      }, 600) // Wait for fade out animation
    }, 2500)

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  if (!isVisible) return null

  return (
    <div className={`loading-screen ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Outer Circle - Entrepreneurship Cell */}
        <div className="loading-circle-outer">
          <CircularText 
            text="ENTREPRENEURSHIP CELL • ENTREPRENEURSHIP CELL • " 
            spinDuration={15}
            loop={true}
          />
        </div>

        {/* Inner Circle - HMRITM */}
        <div className="loading-circle-inner">
          <CircularText 
            text="HMRITM • HMRITM • HMRITM • HMRITM • " 
            spinDuration={10}
            loop={true}
          />
        </div>

        {/* Center Logo/Text */}
        <div className="loading-center">
          <img src={ecellLogo} alt="E-Cell Logo" className="loading-logo" />
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
