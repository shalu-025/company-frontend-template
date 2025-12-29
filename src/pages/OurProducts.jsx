import React from 'react';
import { Link } from 'react-router-dom';

function OurProducts() {
  const products = [
    {
      name: "MHK DataHub",
      icon: "🗄️",
      description: "Enterprise-grade data engineering platform that transforms raw data into actionable insights. Built for scale, security, and performance.",
      features: [
        "Real-time data processing",
        "Advanced ETL pipelines",
        "Data lake management",
        "Multi-cloud support",
        "Automated data quality checks"
      ],
      category: "Data Platform"
    },
    {
      name: "MHK AI Studio",
      icon: "🤖",
      description: "Comprehensive AI/ML platform for building, training, and deploying intelligent applications at enterprise scale.",
      features: [
        "Pre-built AI models",
        "Custom model training",
        "AutoML capabilities",
        "Model deployment & monitoring",
        "Explainable AI features"
      ],
      category: "AI Platform"
    },
    {
      name: "MHK CloudOps",
      icon: "☁️",
      description: "Multi-cloud management platform that simplifies infrastructure operations and optimizes cloud spending.",
      features: [
        "Multi-cloud orchestration",
        "Cost optimization",
        "Security compliance",
        "Automated scaling",
        "Infrastructure as Code"
      ],
      category: "Cloud Platform"
    },
    {
      name: "MHK SecureGuard",
      icon: "🛡️",
      description: "Enterprise security platform providing comprehensive protection against modern cyber threats.",
      features: [
        "Zero-trust architecture",
        "Threat intelligence",
        "Real-time monitoring",
        "Compliance automation",
        "Identity & access management"
      ],
      category: "Security Platform"
    },
    {
      name: "MHK AutoFlow",
      icon: "⚡",
      description: "Intelligent automation platform that streamlines business processes and eliminates repetitive tasks.",
      features: [
        "RPA capabilities",
        "Workflow automation",
        "API integration",
        "Process mining",
        "Smart document processing"
      ],
      category: "Automation Platform"
    },
    {
      name: "MHK Analytics Pro",
      icon: "📊",
      description: "Advanced analytics platform delivering real-time insights and predictive intelligence for data-driven decisions.",
      features: [
        "Interactive dashboards",
        "Predictive analytics",
        "Custom reporting",
        "Real-time visualization",
        "Natural language queries"
      ],
      category: "Analytics Platform"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Products</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Enterprise-grade platforms built to power the future of your business
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {products.map((product, index) => (
              <div key={index} className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-6xl">{product.icon}</div>
                  <div>
                    <div className="text-sm text-red-600 font-semibold mb-2">{product.category}</div>
                    <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-bold mb-3 text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-red-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          {/* Why Choose Our Products */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose MHK Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-4">Enterprise-Ready</h3>
                <p className="text-gray-700">
                  Built to handle the most demanding enterprise workloads with proven scalability and reliability.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4">Easy Integration</h3>
                <p className="text-gray-700">
                  Seamlessly integrate with your existing systems through comprehensive APIs and connectors.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
                <p className="text-gray-700">
                  24/7 support from our team of experts ensures your success every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a demo to see how our products can drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:shadow-lg transition-all">
                Request a Demo
              </Link>
              <Link to="/platform" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurProducts;