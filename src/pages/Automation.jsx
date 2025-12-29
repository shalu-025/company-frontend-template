import React from 'react';

function Automation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-orange-100 rounded-full">
                <span className="text-orange-600 font-semibold text-sm">AUTOMATION</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Accelerating business velocity
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600"> through code.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform manual processes into automated workflows that save time, reduce errors, and increase efficiency.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Automate Your Business →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">⚡</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Automation <span className="text-orange-600">Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Business Process Automation",
                description: "Streamline complex business workflows with intelligent automation that eliminates repetitive tasks and accelerates operations.",
                icon: "🔄",
                features: ["Workflow Design", "Process Optimization", "Task Automation", "Integration Services"]
              },
              {
                title: "Workflow Optimization",
                description: "Analyze and optimize your existing workflows to identify bottlenecks and implement automation for maximum efficiency.",
                icon: "📊",
                features: ["Process Analysis", "Bottleneck Identification", "Performance Metrics", "Continuous Improvement"]
              },
              {
                title: "RPA Solutions",
                description: "Robotic Process Automation to handle high-volume, repeatable tasks with software robots that work 24/7.",
                icon: "🤖",
                features: ["Bot Development", "Process Recording", "Exception Handling", "Bot Management"]
              },
              {
                title: "DevOps & CI/CD",
                description: "Automate your software development lifecycle with continuous integration and continuous deployment pipelines.",
                icon: "🚀",
                features: ["Pipeline Automation", "Build Automation", "Testing Automation", "Deployment Automation"]
              },
              {
                title: "Infrastructure as Code",
                description: "Manage and provision infrastructure through code for consistent, repeatable, and scalable deployments.",
                icon: "💻",
                features: ["Terraform", "CloudFormation", "Ansible", "Configuration Management"]
              },
              {
                title: "API Integration & Automation",
                description: "Connect disparate systems and automate data flow between applications with robust API integrations.",
                icon: "🔗",
                features: ["API Development", "System Integration", "Data Synchronization", "Webhook Automation"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="text-orange-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Benefits of <span className="text-orange-600">Automation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "⏱️", title: "Time Savings", description: "Reduce manual work by up to 80%" },
              { icon: "💰", title: "Cost Reduction", description: "Lower operational costs significantly" },
              { icon: "🎯", title: "Accuracy", description: "Eliminate human errors in processes" },
              { icon: "📈", title: "Scalability", description: "Handle increased volume without hiring" },
              { icon: "😊", title: "Employee Satisfaction", description: "Free staff for strategic work" },
              { icon: "⚡", title: "Speed", description: "Process transactions in seconds" },
              { icon: "📊", title: "Analytics", description: "Real-time insights into operations" },
              { icon: "🔒", title: "Compliance", description: "Consistent adherence to regulations" }
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

      {/* Use Cases */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Common Automation <span className="text-orange-600">Use Cases</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Invoice Processing", description: "Automate invoice data extraction, validation, and payment processing" },
              { title: "Customer Onboarding", description: "Streamline new customer registration and account setup" },
              { title: "Report Generation", description: "Auto-generate and distribute reports on schedule" },
              { title: "Data Entry", description: "Eliminate manual data entry between systems" },
              { title: "Email Automation", description: "Trigger emails based on specific events or conditions" },
              { title: "Inventory Management", description: "Auto-update stock levels and reorder when needed" }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-orange-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's identify automation opportunities that will transform your operations.
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Start Automating Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Automation;