import './WhyChooseUsSection.css'

function WhyChooseUsSection() {
  const advantages = [
    {
      icon: '🚀',
      title: 'Modular architecture for rapid deployment',
      description: 'Pre-built components that integrate seamlessly, reducing time-to-market from months to weeks.'
    },
    {
      icon: '✅',
      title: 'Bank-grade security & compliance by design',
      description: 'Enterprise-level security protocols built into every layer, ensuring your data stays protected.'
    },
    {
      icon: '📊',
      title: 'Scalable to handle petabytes of data',
      description: 'Infrastructure that grows with your business, from startup to enterprise scale without rebuilding.'
    },
    {
      icon: '🤝',
      title: '24/7 Dedicated support teams',
      description: 'Round-the-clock expert support across multiple time zones to keep your operations running smoothly.'
    }
  ]

  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <div className="section-header">
          <p className="section-label">THE MHK ADVANTAGE</p>
          <h2 className="section-title">
            Why Industry Leaders <span className="gradient-text">Choose Us.</span>
          </h2>
          <p className="section-description">
            We deliver competitive advantage through superior engineering. Our solutions are built to last, scale, and outperform.
          </p>
        </div>

        <div className="advantages-wrapper">
          {advantages.map((item, index) => (
            <div key={index} className="advantage-row">
              <div className="advantage-icon-box">
                <span className="advantage-icon">{item.icon}</span>
              </div>
              <div className="advantage-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection