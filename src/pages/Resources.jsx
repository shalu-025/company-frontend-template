import React, { useState } from 'react';

function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      title: "The Complete Guide to Cloud Migration",
      category: "Whitepapers",
      type: "PDF",
      description: "A comprehensive guide to planning and executing successful cloud migrations for enterprise organizations.",
      date: "Dec 2024",
      readTime: "25 min"
    },
    {
      title: "AI in Enterprise: Best Practices and Use Cases",
      category: "Case Studies",
      type: "Article",
      description: "Real-world examples of how leading companies are leveraging AI to transform their operations.",
      date: "Nov 2024",
      readTime: "15 min"
    },
    {
      title: "Data Security in the Modern Era",
      category: "Whitepapers",
      type: "PDF",
      description: "Understanding emerging threats and implementing robust security frameworks for data protection.",
      date: "Nov 2024",
      readTime: "20 min"
    },
    {
      title: "Building Scalable Data Pipelines",
      category: "Technical Guides",
      type: "Tutorial",
      description: "Step-by-step guide to architecting and implementing enterprise-grade data pipelines.",
      date: "Oct 2024",
      readTime: "30 min"
    },
    {
      title: "Financial Services Digital Transformation",
      category: "Case Studies",
      type: "Case Study",
      description: "How a leading bank transformed its operations using MHK's cloud and AI solutions.",
      date: "Oct 2024",
      readTime: "12 min"
    },
    {
      title: "Automation ROI Calculator",
      category: "Tools",
      type: "Interactive",
      description: "Calculate the potential ROI of implementing intelligent automation in your organization.",
      date: "Sep 2024",
      readTime: "5 min"
    },
    {
      title: "Multi-Cloud Strategy Framework",
      category: "Whitepapers",
      type: "PDF",
      description: "Strategic framework for implementing and managing multi-cloud architectures.",
      date: "Sep 2024",
      readTime: "18 min"
    },
    {
      title: "Healthcare Data Analytics Success Story",
      category: "Case Studies",
      type: "Case Study",
      description: "Transforming patient care through advanced data analytics and AI-powered insights.",
      date: "Aug 2024",
      readTime: "10 min"
    },
    {
      title: "API Security Best Practices",
      category: "Technical Guides",
      type: "Guide",
      description: "Essential security practices for protecting your APIs and microservices architecture.",
      date: "Aug 2024",
      readTime: "22 min"
    }
  ];

  const categories = ['all', 'Whitepapers', 'Case Studies', 'Technical Guides', 'Tools'];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  const featuredWebinars = [
    {
      title: "Future of Enterprise AI",
      date: "January 15, 2025",
      time: "2:00 PM EST",
      speaker: "Dr. Sarah Chen, CTO"
    },
    {
      title: "Cloud Cost Optimization Strategies",
      date: "January 22, 2025",
      time: "3:00 PM EST",
      speaker: "Michael Rodriguez, Cloud Architect"
    },
    {
      title: "Zero Trust Security Implementation",
      date: "January 29, 2025",
      time: "2:00 PM EST",
      speaker: "James Wilson, Security Director"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Resources</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Insights, guides, and tools to help you navigate your digital transformation journey
            </p>
          </div>

          {/* Featured Webinars */}
          <div className="mb-20 p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredWebinars.map((webinar, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">{webinar.title}</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>{webinar.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>{webinar.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">👤</span>
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                  <button className="w-full px-6 py-3 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition-all">
                    Register Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Library */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-8">Resource Library</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white'
                      : 'bg-white text-gray-700 hover:shadow-lg'
                  }`}
                >
                  {category === 'all' ? 'All Resources' : category}
                </button>
              ))}
            </div>

            {/* Resource Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {filteredResources.map((resource, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-sm">{resource.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <span className="mr-4">📖 {resource.readTime}</span>
                    <span>📂 {resource.category}</span>
                  </div>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
                    Download / Read →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-20 p-12 bg-white rounded-3xl shadow-lg text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, case studies, and industry trends
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-red-600 focus:outline-none"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Popular Topics */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {['Cloud Migration', 'AI & ML', 'Data Engineering', 'Cybersecurity', 'DevOps', 'Automation', 'Analytics', 'IoT', 'Blockchain', 'Digital Transformation', 'API Management', 'Microservices'].map((topic, index) => (
                <button key={index} className="px-6 py-3 bg-gradient-to-br from-red-50 to-rose-50 rounded-full hover:shadow-lg transition-all text-gray-700 font-semibold">
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;