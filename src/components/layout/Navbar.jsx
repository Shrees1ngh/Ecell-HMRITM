import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './NavbarCard.css'
import ecellLogo from '../../assets/ecell-logo.svg'

const navItems = [
  { title: 'Home', path: '/', description: 'Welcome to E-Cell HMRITM' },
  { title: 'About', path: '/about', description: 'Our Story & Mission' },
  { title: 'Team', path: '/team', description: 'Meet Our Leaders' },
  { title: 'Startups', path: '/startups', description: 'Incubated Ventures' },
  { title: 'Events', path: '/events', description: 'Workshops & Competitions' },
  { title: 'Contact', path: '/contact', description: 'Get In Touch' },
]

function Navbar() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`modern-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="modern-nav-container">
        {/* Menu Toggle */}
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Logo - Centered */}
        <Link to="/" className="nav-brand" onClick={() => setIsMenuOpen(false)}>
          <img src={ecellLogo} alt="E-Cell Logo" className="nav-logo" />
          <span className="nav-brand-text">E-Cell HMRITM</span>
        </Link>

        {/* CTA Button */}
        <Link to="/join" className="nav-cta-btn">
          Join Us
        </Link>
      </div>

      {/* Dropdown Menu Cards */}
      {isMenuOpen && (
        <>
          <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} />
          <div className="menu-cards">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className={`menu-card ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <h3 className="menu-card-title">{item.title}</h3>
                <p className="menu-card-description">{item.description}</p>
                <span className="menu-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
