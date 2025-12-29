import React from 'react';
import { Link } from 'react-router-dom';

function Solutions() {
  const solutions = [
    {
      icon: "💾",
      title: "Data Engineering",
      description: "Robust pipelines that transform raw data into gold.",
      color: "blue",
      link: "/solutions/data-engineering",
      features: ["Real-time Data Streaming", "Data Integration & ETL", "Data Lake Solutions"]
    },
    {
      icon: "🧠",
      title: "AI Solutions",
      description: "Smart agents that automate your complex workflows.",
      color: "purple",
      link: "/solutions/ai-solutions",
      features: ["Machine Learning", "Predictive Analytics", "Deep Learning"]
    },
    {
      icon: "☁️",
      title: "Cloud Architecture",
      description: "Scalable infrastructure for the modern age.",
      color: "blue",
      link: "/solutions/cloud-architecture",
      features: ["AWS & Azure Native", "Cloud Migrations", "Hybrid Cloud Solutions"]
    },
    {
      icon: "💻",
      title: "IT Solutions",
      description: "Boost productivity, maximize growth and minimize downtime.",
      color: "green",
      link: "/solutions/it-solutions",
      features: ["Managed Services", "Consulting", "Project Management"]
    },
    {
      icon: "⚡",
      title: "Automation",
      description: "Accelerating business velocity through code.",
      color: "orange",
      link: "/solutions/automation",
      features: ["Business Process Automation", "Workflow Optimization", "RPA Solutions"]
    },
    {
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Bank-grade protection for your digital assets.",
      color: "red",
      link: "/solutions/enterprise-security",
      features: ["Security Architecture Design", "Compliance Management", "Threat Detection"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
            <span className="text-green-600 font-semibold text-sm">WHAT WE DO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Solutions for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Digital Frontier
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise with strategic business insight to build 
            ecosystems, not just software.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link 
                key={index}
                to={solution.link}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-${solution.color}-100 rounded-xl flex items-center justify-center text-3xl mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-green-600 font-semibold flex items-center">
                  Learn More <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Solution You Need?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your unique challenges and find the perfect fit.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default Solutions;