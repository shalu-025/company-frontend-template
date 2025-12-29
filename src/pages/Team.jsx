import React from 'react';

function Team() {
  const leadership = [
    {
      name: "Mahendra Kumar",
      role: "Founder & CEO",
      image: "👨‍💼",
      bio: "Visionary leader with 20+ years of experience in enterprise technology. Passionate about driving digital transformation and innovation."
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "👩‍💻",
      bio: "Technology strategist with expertise in cloud architecture and AI. Leading MHK's technical innovation and product development."
    },
    {
      name: "Rajesh Patel",
      role: "Chief Operating Officer",
      image: "👨‍💼",
      bio: "Operations expert ensuring seamless delivery and client satisfaction. 15+ years of experience in managing global technology teams."
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Data Officer",
      image: "👩‍💼",
      bio: "Data science leader pioneering advanced analytics and AI solutions. Expert in turning data into actionable business insights."
    }
  ];

  const departments = [
    {
      name: "Engineering",
      icon: "⚙️",
      description: "Our world-class engineers build robust, scalable solutions that power enterprise operations globally.",
      teamSize: "150+ Engineers"
    },
    {
      name: "Data Science & AI",
      icon: "🤖",
      description: "Expert data scientists and AI specialists developing cutting-edge machine learning solutions.",
      teamSize: "50+ Data Scientists"
    },
    {
      name: "Cloud Architecture",
      icon: "☁️",
      description: "Certified cloud architects designing and implementing multi-cloud infrastructure at scale.",
      teamSize: "40+ Architects"
    },
    {
      name: "Security",
      icon: "🛡️",
      description: "Cybersecurity experts ensuring enterprise-grade protection and compliance across all solutions.",
      teamSize: "30+ Security Experts"
    },
    {
      name: "Client Success",
      icon: "🤝",
      description: "Dedicated team ensuring our clients achieve their business objectives and maximize ROI.",
      teamSize: "60+ Success Managers"
    },
    {
      name: "Innovation Lab",
      icon: "🔬",
      description: "Research and development team exploring emerging technologies and future solutions.",
      teamSize: "25+ Researchers"
    }
  ];

  const values = [
    {
      title: "Collaboration",
      icon: "🤝",
      description: "We believe in the power of teamwork and collective intelligence"
    },
    {
      title: "Innovation",
      icon: "💡",
      description: "We constantly push boundaries and explore new possibilities"
    },
    {
      title: "Excellence",
      icon: "⭐",
      description: "We strive for excellence in everything we do"
    },
    {
      title: "Integrity",
      icon: "💎",
      description: "We operate with honesty, transparency, and ethical principles"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Team</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              The brilliant minds driving innovation and excellence at MHK Tech
            </p>
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition-all">
                  <div className="text-8xl mb-4">{leader.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <div className="text-red-600 font-semibold mb-4">{leader.role}</div>
                  <p className="text-gray-700">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Departments */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="text-6xl mb-4">{dept.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{dept.name}</h3>
                  <div className="text-red-600 font-semibold mb-4">{dept.teamSize}</div>
                  <p className="text-gray-700">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">What Drives Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl">
                  <div className="text-6xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-20 p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white">
            <h2 className="text-4xl font-bold text-center mb-12">Our Team by Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">350+</div>
                <div className="text-xl opacity-90">Team Members</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-xl opacity-90">Nationalities</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl opacity-90">Global Offices</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="text-xl opacity-90">Employee Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center p-12 bg-white rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about technology and innovation.
            </p>
            <a href="/company/careers" className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
              View Open Positions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;