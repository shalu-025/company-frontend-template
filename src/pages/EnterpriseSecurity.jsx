import React from 'react';

function EnterpriseSecurity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-red-100 rounded-full">
                <span className="text-red-600 font-semibold text-sm">ENTERPRISE SECURITY</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bank-grade protection for your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600"> digital assets.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Enterprise-level security protocols built into every layer, ensuring your data stays protected.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all">
                Secure Your Business →
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Security <span className="text-red-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Security Architecture Design",
                description: "Design comprehensive security frameworks that protect your infrastructure from modern threats.",
                icon: "🏛️"
              },
              {
                title: "Compliance Management",
                description: "Ensure compliance with industry regulations including GDPR, HIPAA, SOC 2, and ISO 27001.",
                icon: "📋"
              },
              {
                title: "Threat Detection & Response",
                description: "24/7 monitoring and rapid response to security incidents with advanced threat intelligence.",
                icon: "🔍"
              },
              {
                title: "Identity & Access Management",
                description: "Implement robust IAM solutions with multi-factor authentication and role-based access control.",
                icon: "🔐"
              },
              {
                title: "Security Audits",
                description: "Comprehensive security assessments to identify vulnerabilities and recommend improvements.",
                icon: "🔎"
              },
              {
                title: "Penetration Testing",
                description: "Ethical hacking services to test your defenses and identify potential security weaknesses.",
                icon: "⚔️"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Multi-Layer <span className="text-red-600">Security Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                layer: "Network Security",
                items: ["Firewalls", "DDoS Protection", "VPN", "Network Segmentation", "Intrusion Detection"]
              },
              {
                layer: "Application Security",
                items: ["Secure Coding", "WAF", "API Security", "Code Review", "Vulnerability Scanning"]
              },
              {
                layer: "Data Security",
                items: ["Encryption at Rest", "Encryption in Transit", "Data Loss Prevention", "Backup & Recovery", "Key Management"]
              },
              {
                layer: "Endpoint Security",
                items: ["Antivirus/Antimalware", "Device Management", "Patch Management", "Endpoint Detection", "Mobile Security"]
              }
            ].map((layer, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-red-600">{layer.layer}</h3>
                <ul className="space-y-3">
                  {layer.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-red-500 mr-3 text-xl">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 px-6 bg-gradient-to-br from-red-50 to-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Compliance <span className="text-red-600">Standards</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['GDPR', 'HIPAA', 'SOC 2', 'ISO 27001', 'PCI DSS', 'NIST', 'CCPA', 'FedRAMP'].map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center font-bold text-xl text-gray-700 hover:shadow-lg transition-all border-2 border-gray-100 hover:border-red-500">
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Security Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Security <span className="text-red-600">Matters</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Protect Your Reputation",
                description: "A single breach can damage years of trust with customers and partners.",
                icon: "⭐"
              },
              {
                title: "Avoid Financial Loss",
                description: "Data breaches cost businesses millions in fines, legal fees, and lost revenue.",
                icon: "💰"
              },
              {
                title: "Ensure Business Continuity",
                description: "Security incidents can disrupt operations and cause significant downtime.",
                icon: "🔄"
              },
              {
                title: "Meet Compliance Requirements",
                description: "Regulations require proper security measures to protect sensitive data.",
                icon: "📜"
              },
              {
                title: "Gain Competitive Advantage",
                description: "Strong security posture builds customer confidence and trust.",
                icon: "🏆"
              },
              {
                title: "Protect Intellectual Property",
                description: "Safeguard your trade secrets and proprietary information from theft.",
                icon: "🔒"
              }
            ].map((reason, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-red-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Secure Your Business Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait for a breach to happen. Let's build a robust security framework for your organization.
          </p>
          <button className="px-8 py-4 bg-white text-red-600 rounded-lg font-semibold hover:shadow-xl transition-all">
            Get a Security Assessment
          </button>
        </div>
      </section>
    </div>
  );
}

export default EnterpriseSecurity;