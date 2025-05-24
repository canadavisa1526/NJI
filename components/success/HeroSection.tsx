'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SuccessHero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#13294E] to-[#1A3A6C]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FAA71A]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#AFC1DB]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#FAA71A]">Success</span> Stories
            </h1>
            <p className="text-lg md:text-xl text-[#AFC1DB] mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover how we&apos;ve helped thousands of individuals achieve their dreams of studying, working, and living abroad. Real stories, real results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-[#13294E] font-semibold rounded-lg transition-colors duration-300">
                Book a Consultation
              </button>
              <button className="px-6 py-3 bg-transparent border-2 border-[#AFC1DB] text-white hover:bg-white/10 font-semibold rounded-lg transition-colors duration-300">
                View All Stories
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/success-collage.jpg"
                alt="Success Stories Collage"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13294E]/80 to-transparent"></div>

              {/* Success badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <p className="text-[#13294E] font-bold">1000+ Study Visas</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-6 right-6 bg-[#FAA71A]/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
              >
                <p className="text-white font-bold">500+ PR Approvals</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHero;
