import { Link } from 'react-router-dom'
import ecellLogo from '../../assets/ecell-logo.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-column">
          <div className="footer-logo">
            <img src={ecellLogo} alt="E-Cell HMRITM" />
            <span>E-CELL</span>
          </div>
          <p className="footer-tagline">
            The Entrepreneurship Cell, HMRITM
          </p>
          <p className="footer-description">
            <h3 className="footer-heading">VISIT US</h3>
        <p className="footer-address">
          HMR INSTITUTE OF TECHNOLOGY AND MANAGEMENT<br />
          Plot No. 326, Bakoli HMRITM Rd, Hamidpur,<br />
          New Delhi, Delhi, 110036, India
        </p>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/startups">Startups</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-column">
          <h3 className="footer-heading">CONTACT US</h3>
          <div className="footer-contact">
            <p className="contact-label">For General Inquiries:</p>
            <a href="mailto:ecell@hmritm.ac.in" className="contact-email">
              ecell@hmritm.ac.in
            </a>
            
            <p className="contact-label">For Sponsorship:</p>
            <a href="mailto:sponsorship@hmritm.ac.in" className="contact-email">
              sponsorship@hmritm.ac.in
            </a>
            
            <p className="contact-label">For Collaborations:</p>
            <a href="mailto:partnerships@hmritm.ac.in" className="contact-email">
              partnerships@hmritm.ac.in
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div className="footer-column">
          <h3 className="footer-heading">FOLLOW US</h3>
          <ul className="footer-social">
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img
                    className="social-icon-img"
                    src="https://img.freepik.com/premium-vector/instagram-logo-icon_1273375-1177.jpg?semt=ais_user_personalization&w=740&q=80"
                    alt="Instagram"
                  />
                </span>
                Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img
                    className="social-icon-img"
                    src="https://img.freepik.com/premium-vector/linkedin-logo-icon_1273375-1174.jpg?semt=ais_user_personalization&w=740&q=80"
                    alt="LinkedIn"
                  />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img
                    className="social-icon-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPQivbrXaeLxe8UzyawJ2O-vTfZlsYhkRgQ&s"
                    alt="Facebook"
                  />
                </span>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img
                    className="social-icon-img"
                    src="https://img.freepik.com/premium-vector/icon-design-fundamentals-crafting-perfect-vector-art-illustrations_1301270-3868.jpg?semt=ais_user_personalization&w=740&q=80"
                    alt="YouTube"
                  />
                </span>
                YouTube
              </a>
            </li>
            <li>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <span className="social-icon">
                  <img
                    className="social-icon-img"
                    src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="X"
                  />
                </span>
                X
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Cell HMRITM. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
