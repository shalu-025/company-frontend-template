import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const offices = [
    {
      city: "Hyderabad",
      country: "India",
      address: "HITEC City, Madhapur, Hyderabad, Telangana 500081",
      phone: "+91 40 1234 5678",
      email: "india@mhktechinc.com"
    },
    {
      city: "San Francisco",
      country: "United States",
      address: "123 Market Street, San Francisco, CA 94103",
      phone: "+1 415 123 4567",
      email: "usa@mhktechinc.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "25 King Street, London EC2V 8EE",
      phone: "+44 20 1234 5678",
      email: "uk@mhktechinc.com"
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Marina Boulevard, Singapore 018989",
      phone: "+65 6123 4567",
      email: "singapore@mhktechinc.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Touch</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Let's discuss how we can help transform your business with cutting-edge technology solutions
            </p>
          </div>

          {/* Contact Form and Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-red-600 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl shadow-lg p-8 lg:p-12 text-white">
                <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📧</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="opacity-90">info@mhktechinc.com</p>
                      <p className="opacity-90">support@mhktechinc.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">📞</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="opacity-90">+1 (800) MHK-TECH</p>
                      <p className="opacity-90">24/7 Support Available</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-3xl mr-4">💬</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                      <p className="opacity-90">Available Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                <div className="space-y-4">
                  <a href="/resources" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                    <span className="mr-3">📚</span>
                    <span className="font-semibold">Browse Resources</span>
                  </a>
                  <a href="/company/careers" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                    <span className="mr-3">💼</span>
                    <span className="font-semibold">View Open Positions</span>
                  </a>
                  <a href="/solutions" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                    <span className="mr-3">🚀</span>
                    <span className="font-semibold">Explore Solutions</span>
                  </a>
                  <a href="/platform" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
                    <span className="mr-3">🔧</span>
                    <span className="font-semibold">See Platform Features</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Our Global Offices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all">
                  <div className="text-5xl mb-4">🌍</div>
                  <h3 className="text-2xl font-bold mb-2">{office.city}</h3>
                  <p className="text-red-600 font-semibold mb-4">{office.country}</p>
                  <div className="space-y-3 text-gray-700">
                    <p className="text-sm">{office.address}</p>
                    <div className="pt-3 border-t border-gray-200">
                      <p className="flex items-center mb-2">
                        <span className="mr-2">📞</span>
                        <span className="text-sm">{office.phone}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="mr-2">✉️</span>
                        <span className="text-sm">{office.email}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Hours */}
          <div className="p-12 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl text-center">
            <h2 className="text-4xl font-bold mb-8">Business Hours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-bold mb-3">Sales Team</h3>
                <p className="text-gray-700">Monday - Friday</p>
                <p className="text-gray-700">9:00 AM - 6:00 PM EST</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                <p className="text-gray-700">24/7</p>
                <p className="text-gray-700">Available Worldwide</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">General Inquiries</h3>
                <p className="text-gray-700">Monday - Friday</p>
                <p className="text-gray-700">8:00 AM - 8:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;