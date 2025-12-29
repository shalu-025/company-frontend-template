import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Ready to Transform?</span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          TAKE THE LEAD
        </h2>
        <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light max-w-3xl mx-auto">
          Innovate. Accelerate. Transform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center items-center mb-12">
          <a
            href="/contact-us"
            className="group px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/our-products"
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
          >
            Explore Our Products
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">98% Client Retention</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">500+ Successful Deployments</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">24/7 Dedicated Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;