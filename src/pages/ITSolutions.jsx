import React from 'react';

function ITSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-green-100 rounded-full">
                <span className="text-green-600 font-semibold text-sm">IT SOLUTIONS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Boost productivity, maximize growth and minimize
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> downtime.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive IT services that keep your business running smoothly and efficiently.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Get IT Support →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">💻</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our IT <span className="text-green-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Managed Services",
                description: "Proactive IT management and monitoring to keep your systems running at peak performance 24/7.",
                icon: "🛠️"
              },
              {
                title: "Consulting",
                description: "Expert guidance on IT strategy, digital transformation, and technology adoption to drive business value.",
                icon: "💡"
              },
              {
                title: "Project Management",
                description: "End-to-end project delivery with experienced PMs ensuring on-time, on-budget success.",
                icon: "📋"
              },
              {
                title: "Application and Web Development",
                description: "Custom software solutions and modern web applications tailored to your business needs.",
                icon: "🌐"
              },
              {
                title: "Migration & Support",
                description: "Seamless system migrations and ongoing technical support to minimize disruption and maximize uptime.",
                icon: "🔄"
              },
              {
                title: "Infrastructure Management",
                description: "Design, deploy, and maintain robust IT infrastructure that scales with your business.",
                icon: "🏗️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our <span className="text-green-600">IT Solutions?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "24/7 Support",
                description: "Round-the-clock technical support ensuring your business never stops.",
                icon: "⏰"
              },
              {
                title: "Proactive Monitoring",
                description: "Continuous monitoring to identify and resolve issues before they impact your business.",
                icon: "👁️"
              },
              {
                title: "Scalable Solutions",
                description: "IT solutions that grow with your business, from startup to enterprise.",
                icon: "📈"
              },
              {
                title: "Cost Effective",
                description: "Optimize IT spending while maximizing value and performance.",
                icon: "💰"
              },
              {
                title: "Expert Team",
                description: "Certified professionals with deep expertise across all major technologies.",
                icon: "👥"
              },
              {
                title: "Security First",
                description: "Built-in security best practices to protect your critical business assets.",
                icon: "🔒"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all flex gap-4">
                <div className="text-4xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our IT solutions can drive efficiency and growth for your business.
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default ITSolutions;