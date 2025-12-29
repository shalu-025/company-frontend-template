import React from 'react';

function WhoWeAre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Who We Are</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Pioneering digital transformation through innovation, expertise, and unwavering commitment to excellence
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  MHK Tech was founded with a singular vision: to bridge the gap between cutting-edge technology and real-world business challenges. What began as a small team of passionate technologists has evolved into a global force in enterprise technology solutions.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Over the years, we've worked with Fortune 500 companies, innovative startups, and government organizations, helping them navigate the complexities of digital transformation. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to our clients' success.
                </p>
                <p className="text-lg text-gray-700">
                  Today, MHK Tech stands as a testament to what's possible when expertise meets passion. We're not just service providers; we're partners in our clients' success stories.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl flex items-center justify-center">
                  <div className="text-9xl">📖</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Mission</h3>
              <p className="text-gray-700">
                To empower organizations with transformative technology solutions that drive growth, efficiency, and innovation. We strive to be the catalyst that turns ambitious visions into measurable results.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">🔭</div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Vision</h3>
              <p className="text-gray-700">
                To be the world's most trusted technology partner, recognized for delivering exceptional solutions that shape the future of business and society. We envision a world where technology seamlessly enhances human potential.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-red-600">Our Values</h3>
              <p className="text-gray-700">
                Excellence, integrity, innovation, and client success form the foundation of everything we do. We believe in building lasting relationships based on trust, transparency, and mutual growth.
              </p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">🏆 Proven Excellence</h3>
                <p className="text-gray-700">
                  With over 15 years of experience and 500+ successful projects, we bring battle-tested expertise to every engagement. Our track record speaks for itself.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">🚀 Innovation First</h3>
                <p className="text-gray-700">
                  We don't just follow trends; we set them. Our R&D team constantly explores emerging technologies to ensure our clients stay ahead of the curve.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">🤝 Partnership Approach</h3>
                <p className="text-gray-700">
                  We view every client relationship as a partnership. Your success is our success, and we're committed to going above and beyond to achieve shared goals.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl">
                <h3 className="text-2xl font-bold mb-4">🌍 Global Reach, Local Touch</h3>
                <p className="text-gray-700">
                  Operating across 50+ countries, we bring global expertise while maintaining the personal attention and cultural sensitivity of a local partner.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="p-12 bg-gradient-to-r from-red-600 to-rose-600 rounded-3xl text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">Understand</h3>
                <p className="opacity-90">We deeply analyze your business challenges and objectives</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-3">Strategize</h3>
                <p className="opacity-90">We craft tailored solutions aligned with your goals</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold mb-3">Execute</h3>
                <p className="opacity-90">We deliver with precision and excellence</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-3">Optimize</h3>
                <p className="opacity-90">We continuously improve and evolve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;