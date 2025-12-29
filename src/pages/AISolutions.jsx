import React from 'react';

function AISolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-purple-100 rounded-full">
                <span className="text-purple-600 font-semibold text-sm">AI SOLUTIONS</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Drive innovation and stay ahead of the competition
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> with AI.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Smart agents that automate your complex workflows and unlock insights hidden in your data.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Explore AI Solutions →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🧠</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our AI & Machine Learning <span className="text-purple-600">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Machine Learning",
                description: "Build and deploy custom ML models that learn from your data and improve over time, delivering predictive insights that drive business value.",
                icon: "🤖",
                features: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning", "Model Optimization"]
              },
              {
                title: "Predictive Modeling & Advanced Analytics",
                description: "Leverage statistical techniques and machine learning to forecast trends, identify patterns, and make data-driven predictions.",
                icon: "📈",
                features: ["Time Series Forecasting", "Risk Analysis", "Customer Churn Prediction", "Demand Forecasting"]
              },
              {
                title: "Deep Learning",
                description: "Harness the power of neural networks for complex tasks like image recognition, natural language processing, and pattern detection.",
                icon: "🔬",
                features: ["Neural Networks", "Computer Vision", "Transfer Learning", "Model Training & Tuning"]
              },
              {
                title: "Data Visualization & Dashboarding",
                description: "Transform complex data into intuitive visual stories that enable faster, more informed decision-making across your organization.",
                icon: "📊",
                features: ["Interactive Dashboards", "Real-time Analytics", "Custom Reports", "Data Storytelling"]
              },
              {
                title: "Natural Language Processing (NLP)",
                description: "Extract meaning from text data, automate document processing, and build intelligent chatbots and virtual assistants.",
                icon: "💬",
                features: ["Sentiment Analysis", "Text Classification", "Named Entity Recognition", "Language Translation"]
              },
              {
                title: "AI Strategy & Consulting",
                description: "Navigate your AI journey with expert guidance on strategy, implementation, and best practices for sustainable AI adoption.",
                icon: "💡",
                features: ["AI Roadmap Development", "Use Case Identification", "ROI Analysis", "Ethical AI Implementation"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <span className="text-purple-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            AI <span className="text-purple-600">Use Cases</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Customer Insights", description: "Understand customer behavior and preferences to personalize experiences" },
              { title: "Process Automation", description: "Automate repetitive tasks and streamline business operations" },
              { title: "Fraud Detection", description: "Identify anomalies and prevent fraudulent activities in real-time" },
              { title: "Recommendation Systems", description: "Deliver personalized product and content recommendations" },
              { title: "Predictive Maintenance", description: "Anticipate equipment failures before they occur" },
              { title: "Document Processing", description: "Extract and process information from documents automatically" }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-purple-100">
                <h3 className="text-xl font-bold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Harness the Power of AI?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore how AI can transform your business operations and drive growth.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Talk to Our AI Experts
          </button>
        </div>
      </section>
    </div>
  );
}

export default AISolutions;