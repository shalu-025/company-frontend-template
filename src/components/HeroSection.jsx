import { Link } from 'react-router-dom'
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-gradient-bg"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Next-Gen Enterprise Intelligence</span>
          </div>
          
          <h1 className="hero-title">
            Data Platforms That <br />
            <span className="gradient-text">Actually Deliver.</span>
          </h1>
          
          <p className="hero-description">
            We build the intelligent infrastructure that powers the world's most ambitious enterprises. 
            <strong> Scalable, secure, and stunningly effective.</strong>
          </p>

          <div className="hero-search-bar">
            <input 
              type="text" 
              placeholder="Ask our AI how we can transform your data..." 
              className="hero-input"
            />
            <button className="hero-search-btn">→</button>
          </div>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">Get Started</Link>
            <Link to="/company/products" className="btn-secondary">View Our Products</Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">CLIENT RETENTION</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">DEPLOYMENTS</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">DEDICATED SUPPORT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection