import React from 'react';

function CloudArchitecture() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-sky-100 rounded-full">
                <span className="text-sky-600 font-semibold text-sm">CLOUD SOLUTIONS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Streamline and scale business operations
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600"> with cloud.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Scalable infrastructure for the modern age. Build, migrate, and optimize your cloud ecosystem with expert guidance.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Explore Cloud Solutions →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">☁️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Cloud <span className="text-sky-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AWS & Azure Native Application Development",
                description: "Build cloud-native applications optimized for AWS and Azure platforms with best practices and modern architectures.",
                icon: "🚀"
              },
              {
                title: "IAAS, PAAS, SAAS",
                description: "Comprehensive cloud service models from infrastructure to platform to software as a service solutions.",
                icon: "🏗️"
              },
              {
                title: "Cloud Migrations",
                description: "Seamlessly migrate your applications and data to the cloud with minimal downtime and risk.",
                icon: "🔄"
              },
              {
                title: "Cloud Security & Compliance",
                description: "Implement robust security measures and ensure compliance with industry standards and regulations.",
                icon: "🔒"
              },
              {
                title: "Hybrid Cloud Solutions",
                description: "Design and implement hybrid cloud architectures that combine on-premises and cloud resources.",
                icon: "🌐"
              },
              {
                title: "Cloud Cost Optimization",
                description: "Optimize your cloud spending with intelligent resource management and cost-saving strategies.",
                icon: "💰"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-sky-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Cloud Platforms We <span className="text-sky-600">Specialize In</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amazon Web Services",
                description: "Comprehensive cloud services including EC2, S3, Lambda, RDS, and more",
                services: ["Compute", "Storage", "Database", "AI/ML", "Security"]
              },
              {
                name: "Microsoft Azure",
                description: "Enterprise-grade cloud platform with seamless integration with Microsoft tools",
                services: ["Virtual Machines", "Azure SQL", "App Service", "AI Services", "DevOps"]
              },
              {
                name: "Google Cloud Platform",
                description: "Powerful infrastructure with advanced data analytics and AI capabilities",
                services: ["Compute Engine", "BigQuery", "Kubernetes Engine", "AI Platform", "Cloud Storage"]
              }
            ].map((provider, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-3">{provider.name}</h3>
                <p className="text-gray-600 mb-4">{provider.description}</p>
                <div className="space-y-2">
                  {provider.services.map((service, idx) => (
                    <div key={idx} className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Move to the <span className="text-sky-600">Cloud?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📈", title: "Scalability", description: "Scale resources up or down based on demand" },
              { icon: "💵", title: "Cost Efficiency", description: "Pay only for what you use with no upfront costs" },
              { icon: "🌍", title: "Global Reach", description: "Deploy applications closer to your users worldwide" },
              { icon: "🔄", title: "Flexibility", description: "Quickly adapt to changing business needs" },
              { icon: "🛡️", title: "Security", description: "Enterprise-grade security and compliance" },
              { icon: "⚡", title: "Performance", description: "High-performance infrastructure and networks" },
              { icon: "🔧", title: "Innovation", description: "Access to latest technologies and services" },
              { icon: "📊", title: "Analytics", description: "Built-in tools for data analysis and insights" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Move to the Cloud?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's design a cloud strategy that aligns with your business goals.
          </p>
          <button className="px-8 py-4 bg-white text-sky-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Start Your Cloud Journey
          </button>
        </div>
      </section>
    </div>
  );
}

export default CloudArchitecture;