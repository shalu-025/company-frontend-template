import React from 'react';
import { motion } from 'framer-motion';

const GlobalReachSection = () => {
  // 🔒 FINAL – Exact, locked coordinates for YOUR map
  const locations = [
  {
    city: 'Kitchener, Canada',
    top: '16%',
    left: '20%',
  },
  {
    city: 'Spring, TX, USA',
    top: '39%',
    left: '18%',
  },
  {
    city: 'Hyderabad, India',
    top: '45%',
    left: '70%',
  },
];


  return (
    <section className="py-32 bg-[#E3F2FD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold font-poppins text-slate-900 mb-4">
          Global Reach
        </h2>

        <p className="text-slate-600 mb-16 max-w-2xl mx-auto font-dm-sans text-lg">
          Transforming businesses across time zones. We are everywhere you need us to be.
        </p>

        {/* Map Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[2/1] bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
          
          {/* World Map */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat" />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-transparent" />

          {/* Markers */}
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                top: loc.top,
                left: loc.left,
                transform: 'translate(-50%, -50%)', // ⭐ CRITICAL FIX
              }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: 'spring', stiffness: 120 }}
            >
              <div className="relative group cursor-pointer">
                
                {/* Pulse Dot */}
                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.25)] animate-pulse" />

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: -36 }}
                  transition={{ delay: 0.4 + idx * 0.15 }}
                  className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                >
                  {loc.city}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
