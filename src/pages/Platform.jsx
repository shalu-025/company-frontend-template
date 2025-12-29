import React from 'react';

function Platform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-purple-600 font-semibold text-sm">Next-Gen Enterprise Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Data Platforms That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Actually Deliver.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We build the intelligent infrastructure that powers the world's most ambitious enterprises. 
            Scalable, secure, and stunningly effective.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
              Get Started →
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-200 hover:border-purple-600 transition-all">
              View Our Products
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">CLIENT RETENTION</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">DEPLOYMENTS</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">DEDICATED SUPPORT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Platform <span className="text-purple-600">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Data Processing",
                description: "Stream and process massive datasets in real-time with sub-second latency.",
                icon: "⚡"
              },
              {
                title: "AI-Powered Analytics",
                description: "Built-in machine learning models that provide actionable insights automatically.",
                icon: "🤖"
              },
              {
                title: "Enterprise Security",
                description: "Bank-grade encryption and compliance built into every layer of the platform.",
                icon: "🔒"
              },
              {
                title: "Scalable Infrastructure",
                description: "Auto-scaling architecture that grows with your business needs.",
                icon: "📈"
              },
              {
                title: "Multi-Cloud Support",
                description: "Deploy anywhere - AWS, Azure, GCP, or on-premises infrastructure.",
                icon: "☁️"
              },
              {
                title: "Developer Friendly",
                description: "Comprehensive APIs and SDKs for seamless integration.",
                icon: "👨‍💻"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Data Infrastructure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of enterprises already using our platform
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}

export default Platform;