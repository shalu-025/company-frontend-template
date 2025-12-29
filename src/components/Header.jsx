import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../assets/MHK logo1_new.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="MHK Tech logo" className="logo-image" />
          {/* <span className="logo-text">MHK<span>.Tech</span></span> */}
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/platform">Platform</Link></li>
          
          <li className="dropdown"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/solutions">Solutions ▾</Link>
            {activeDropdown === 'solutions' && (
              <ul className="dropdown-menu">
                <li><Link to="/solutions/data-engineering">Data Engineering</Link></li>
                <li><Link to="/solutions/ai-solutions">AI Solutions</Link></li>
                <li><Link to="/solutions/cloud-architecture">Cloud Architecture</Link></li>
                <li><Link to="/solutions/it-solutions">IT Solutions</Link></li>
                <li><Link to="/solutions/automation">Automation</Link></li>
                <li><Link to="/solutions/enterprise-security">Enterprise Security</Link></li>
              </ul>
            )}
          </li>
          
          <li className="dropdown"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}>
            <Link to="/company">Company ▾</Link>
            {activeDropdown === 'company' && (
              <ul className="dropdown-menu">
                <li><Link to="/company/who-we-are">Who We Are</Link></li>
                <li><Link to="/company/products">Our Products</Link></li>
                <li><Link to="/company/team">Our Team</Link></li>
                <li><Link to="/company/careers">Join Us</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact" className="cta-button">Get in Touch</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header