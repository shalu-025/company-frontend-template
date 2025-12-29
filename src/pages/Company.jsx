import React from 'react';
import { Link } from 'react-router-dom';

function Company() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600"> Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MHK Tech is a global technology leader delivering enterprise-grade solutions that drive digital transformation and business excellence.
            </p>
          </div>

          {/* Company Overview Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded with a vision to revolutionize the technology landscape, MHK Tech has emerged as a trusted partner for organizations seeking cutting-edge digital solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We combine deep technical expertise with industry knowledge to deliver solutions that not only meet but exceed expectations. Our team of expert engineers, data scientists, and consultants work collaboratively to transform complex challenges into elegant solutions.
              </p>
              <Link to="/company/who-we-are" className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full hover:shadow-lg transition-all">
                Learn More About Us →
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🏢</div>
              </div>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/company/who-we-are" className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Who We Are</h3>
              <p className="text-gray-600">Discover our story, mission, and values that guide everything we do.</p>
            </Link>

            <Link to="/company/products" className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Our Products</h3>
              <p className="text-gray-600">Explore our innovative product portfolio built for the future.</p>
            </Link>

            <Link to="/company/team" className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Our Team</h3>
              <p className="text-gray-600">Meet the talented individuals driving innovation at MHK Tech.</p>
            </Link>

            <Link to="/company/careers" className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">Join Us</h3>
              <p className="text-gray-600">Be part of a team that's shaping the future of technology.</p>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="mt-20 p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-xl opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-xl opacity-90">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">200+</div>
                <div className="text-xl opacity-90">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-xl opacity-90">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;