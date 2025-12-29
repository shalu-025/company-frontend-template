import React, { useState } from 'react';

function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Industry-leading salaries and performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "🏖️",
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and generous PTO"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Training budgets, certifications, and conference attendance"
    },
    {
      icon: "🚀",
      title: "Career Growth",
      description: "Clear career paths and internal mobility opportunities"
    },
    {
      icon: "🎉",
      title: "Amazing Culture",
      description: "Collaborative environment with team events and celebrations"
    }
  ];

  const openings = [
    {
      title: "Senior Cloud Architect",
      department: "Cloud Architecture",
      location: "Remote / Hyderabad",
      type: "Full-time",
      experience: "8+ years"
    },
    {
      title: "Data Engineer",
      department: "Data Engineering",
      location: "Remote / Bangalore",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Data Science",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "4+ years"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Mumbai",
      type: "Full-time",
      experience: "3+ years"
    },
    {
      title: "Security Analyst",
      department: "Security",
      location: "Remote / London",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / Singapore",
      type: "Full-time",
      experience: "6+ years"
    },
    {
      title: "Client Success Manager",
      department: "Client Success",
      location: "Remote / Dubai",
      type: "Full-time",
      experience: "4+ years"
    }
  ];

  const filteredOpenings = selectedDepartment === 'all' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  const departments = ['all', ...new Set(openings.map(job => job.department))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Team</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Build your career with a team that's shaping the future of technology
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Why Join MHK Tech?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="text-6xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Culture */}
          <div className="mb-20 p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white">
            <h2 className="text-4xl font-bold text-center mb-8">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-6xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="opacity-90">We encourage creative thinking and experimenting with new ideas</p>
              </div>
              <div>
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
                <p className="opacity-90">We work together, support each other, and celebrate wins as a team</p>
              </div>
              <div>
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Impact</h3>
                <p className="opacity-90">Your work directly contributes to solutions that matter</p>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-8">Open Positions</h2>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedDepartment === dept
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
                      : 'bg-white text-gray-700 hover:shadow-lg'
                  }`}
                >
                  {dept === 'all' ? 'All Positions' : dept}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOpenings.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{job.title}</h3>
                    <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                      {job.type}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6 text-gray-700">
                    <div className="flex items-center">
                      <span className="mr-2">📁</span>
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">💼</span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
                    Apply Now →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Hiring Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Apply</h3>
                <p className="text-gray-700">Submit your application and resume through our portal</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Screen</h3>
                <p className="text-gray-700">Initial screening call with our recruitment team</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Interview</h3>
                <p className="text-gray-700">Technical and cultural fit interviews with the team</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-rose-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-3">Offer</h3>
                <p className="text-gray-700">Receive your offer and join the team!</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-white rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
              Send Your Resume →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;