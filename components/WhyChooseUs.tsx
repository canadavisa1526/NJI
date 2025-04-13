'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ShieldCheck,
  Users,
  Clock,
  Award,
  CheckCircle,
  ThumbsUp,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Certified',
    description: 'Registered immigration consultants with proven expertise',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Dedicated professionals with years of experience',
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Efficient handling of visa applications and paperwork',
  },
  {
    icon: Award,
    title: 'High Success Rate',
    description: '98% visa approval success rate across multiple countries',
  },
  {
    icon: CheckCircle,
    title: 'End-to-End Support',
    description: 'From application to settlement, we’ve got you covered',
  },
  {
    icon: ThumbsUp,
    title: 'Personalized Service',
    description: 'We understand your goals and tailor every step accordingly',
  },
];

const chunkSize = 3;

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < reasons.length; i += chunkSize) {
    slides.push(reasons.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slideVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative SVG Background */}
      <svg className="absolute top-0 left-0 w-72 h-72 text-orange-100 dark:text-orange-900/10" fill="currentColor" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-96 h-96 text-blue-100 dark:text-blue-900/10" fill="currentColor" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="100" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Why Choose <span className="text-orange-500">New Journey Immigration</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're committed to making your immigration journey smooth, secure, and successful.
          </p>
        </div>

        {/* Animated Card Slider */}
        <div className="h-[320px] sm:h-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {slides[currentIndex].map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-orange-100 dark:border-orange-900/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <reason.icon className="w-9 h-9 text-orange-500" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
