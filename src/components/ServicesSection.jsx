import { Link } from 'react-router-dom'
import './ServicesSection.css'

function ServicesSection() {
  const services = [
    {
      icon: '💾',
      title: 'Data Engineering',
      description: 'Robust pipelines that transform raw data into gold.',
      features: [
        'Real-time Data Streaming',
        'Data Integration & ETL services',
        'Data Lake Solutions',
        'Data governance & management',
        'BI & Reporting'
      ],
      link: '/solutions/data-engineering',
      color: '#3b82f6'
    },
    {
      icon: '🧠',
      title: 'AI Solutions',
      description: 'Smart agents that automate your complex workflows.',
      features: [
        'Machine Learning',
        'Predictive Modeling & Advanced Analytics',
        'Deep Learning',
        'Natural Language Processing (NLP)',
        'Data Visualization & Dashboarding'
      ],
      link: '/solutions/ai-solutions',
      color: '#8b5cf6'
    },
    {
      icon: '☁️',
      title: 'Cloud Architecture',
      description: 'Scalable infrastructure for the modern age.',
      features: [
        'AWS & Azure Native Application Development',
        'IAAS, PAAS, SAAS',
        'Cloud Migrations',
        'Cloud Security & Compliance',
        'Hybrid Cloud Solutions'
      ],
      link: '/solutions/cloud-architecture',
      color: '#6366f1'
    },
    {
      icon: '⚡',
      title: 'Automation',
      description: 'Accelerating business velocity through code.',
      features: [
        'Business Process Automation',
        'Workflow Optimization',
        'RPA Solutions',
        'DevOps & CI/CD',
        'Infrastructure as Code'
      ],
      link: '/solutions/automation',
      color: '#f59e0b'
    },
    {
      icon: '💻',
      title: 'IT Solutions',
      description: 'Boost productivity, maximize growth and minimize downtime.',
      features: [
        'Managed services',
        'Consulting',
        'Project Management',
        'Application and Web Development',
        'Migration & Support'
      ],
      link: '/solutions/it-solutions',
      color: '#10b981'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-grade protection for your digital assets.',
      features: [
        'Security Architecture Design',
        'Compliance Management',
        'Threat Detection & Response',
        'Identity & Access Management',
        'Security Audits'
      ],
      link: '/solutions/enterprise-security',
      color: '#ef4444'
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <p className="section-label">WHAT WE DO</p>
          <h2 className="section-title">
            Solutions for the <span className="gradient-text">Digital Frontier</span>
          </h2>
          <p className="section-description">
            We combine deep technical expertise with strategic business insight to build ecosystems, not just software.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item" style={{'--accent-color': service.color}}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link} className="service-link">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/solutions" className="btn-view-all">View All Services</Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection