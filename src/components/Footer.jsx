import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-about">
            <h3 className="footer-logo">MHK<span>.Tech</span></h3>
            <p className="footer-tagline">
              Engineering the future of enterprise intelligence through data, AI, and cloud innovation.
            </p>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-column">
              <h4>Menu</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/company/who-we-are">Who we are</Link></li>
                <li><Link to="/company/products">Our Products</Link></li>
                <li><Link to="/company/careers">Join Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>What We Do</h4>
              <ul>
                <li><Link to="/solutions/data-engineering">Data Engineering</Link></li>
                <li><Link to="/solutions/ai-solutions">Data Science AI</Link></li>
                <li><Link to="/solutions/it-solutions">IT Solutions</Link></li>
                <li><Link to="/solutions/cloud-architecture">CLOUD Solutions</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Us</h4>
              <ul className="footer-contact">
                <li>
                  <span>📞</span>
                  <a href="tel:+18328026265">USA: +1 (832) 802-6265</a>
                </li>
                <li>
                  <span>✉️</span>
                  <a href="mailto:contact@mhktechinc.com">contact@mhktechinc.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-locations">
          <h4>Our Locations</h4>
          <div className="locations-grid">
            <div className="location-item">
              <span className="location-icon">🇺🇸</span>
              <div>
                <h5>USA</h5>
                <p>20008 Champion Forest Dr, STE 403, Spring, TX 77379 USA</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">🇮🇳</span>
              <div>
                <h5>INDIA</h5>
                <p>Road No 36 & 37 Beside Madhapur Metrostation Jubilee Hills, Hyderabad, Telangana, 500033 India</p>
              </div>
            </div>
            <div className="location-item">
              <span className="location-icon">🇨🇦</span>
              <div>
                <h5>CANADA</h5>
                <p>132 Daylily Lane, Kitchener, Ontario, Canada, N2R 0L7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 MHK Tech INC. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer