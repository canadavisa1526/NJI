'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plane } from 'lucide-react';

const CountryFlags = () => {
  const countries = [
    {
      name: 'Canada',
      flag: 'https://flagcdn.com/w640/ca.png',
      description: 'Study in the Great White North'
    },
    {
      name: 'USA',
      flag: 'https://flagcdn.com/w640/us.png',
      description: 'Land of Opportunities'
    },
    {
      name: 'UK',
      flag: 'https://flagcdn.com/w640/gb.png',
      description: 'Excellence in Education'
    },
    {
      name: 'Australia',
      flag: 'https://flagcdn.com/w640/au.png',
      description: 'World-Class Universities'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="currentColor" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="url(#grid-gradient)" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Flying Planes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ 
            x: -100,
            y: Math.random() * 500,
            scale: 0.5 + Math.random() * 0.5
          }}
          animate={{ 
            x: '120vw',
            y: [
              Math.random() * 500,
              Math.random() * 500,
              Math.random() * 500
            ]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            y: {
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Plane className="text-indigo-500/20 dark:text-indigo-400/20 transform -rotate-45" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Study Destinations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choose from the world's top education destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={country.flag}
                  alt={`${country.name} Flag`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-xl font-bold">
                    {country.name}
                  </span>
                </motion.div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {country.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {country.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryFlags;