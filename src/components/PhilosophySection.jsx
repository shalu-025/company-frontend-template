import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-orange-600 font-semibold mb-4 uppercase tracking-wider text-sm">
              OUR PHILOSOPHY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bridging Human Intuition with
              <br />
              <span className="text-orange-600">Machine Intelligence</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              MHK Tech isn't just a vendor; we are architects of the future. We believe that complexity should be handled by machines, leaving creativity and strategy to humans.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our multidisciplinary team of engineers, data scientists, and strategists work in unison to deliver platforms that are not only powerful but intuitive and sustainable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">CLIENT RETENTION</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
                <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">DEPLOYMENTS</div>
              </div>
            </div>

            {/* CEO Info */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-2xl font-bold">
                  RK
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">Rajesh Kota</h4>
                  <p className="text-gray-600 mb-2">Principal & CEO</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experienced in developing and implementing Cloud, AI, ML, ETL, BI, and MDM solutions. 
                    Master of Science from Monash University.
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/kotarajesh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-orange-600 hover:text-orange-700 font-semibold text-sm"
                  >
                    View LinkedIn Profile →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-orange-100">
              {/* Mock browser preview */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-xs text-gray-500">
                    mhktechinc.com
                  </div>
                </div>
                
                {/* Content preview */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8">
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-sm">Data Engineering</div>
                          <div className="text-xs text-gray-500">Transform raw data</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-purple-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-sm">AI Solutions</div>
                          <div className="text-xs text-gray-500">Intelligent automation</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-bold text-sm">Enterprise Security</div>
                          <div className="text-xs text-gray-500">Bank-grade protection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border border-orange-100">
                <p className="text-gray-700 italic mb-4">
                  "MHK Tech transformed our data infrastructure in weeks, not months."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold">
                    SJ
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Sarah Jenkins</div>
                    <div className="text-xs text-gray-600">CTO, FinCorp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;