'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Plane, Cloud, MapPin } from 'lucide-react';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const destinations = [
    { x: '20%', y: '30%', label: 'Canada' },
    { x: '40%', y: '60%', label: 'USA' },
    { x: '60%', y: '40%', label: 'UK' },
    { x: '80%', y: '70%', label: 'Australia' }
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-700/30 backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-full h-full overflow-hidden">
        {/* World map background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Destination points */}
        {destinations.map((dest, index) => (
          <motion.div
            key={dest.label}
            className="absolute"
            style={{ left: dest.x, top: dest.y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <div className="relative">
              <MapPin className="h-6 w-6 text-white" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-sm">
                {dest.label}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Flying planes */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: -100,
              y: 100 + (i * 200),
              rotate: 0
            }}
            animate={{ 
              x: dimensions.width + 100,
              y: [100 + (i * 200), 50 + (i * 200), 100 + (i * 200)],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 8 - i,
              repeat: Infinity,
              ease: "linear",
              y: {
                duration: 4 - i,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 4 - i,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Plane className="h-8 w-8 text-white transform -rotate-45" />
            <motion.div
              className="absolute top-1/2 right-0 h-0.5 w-20 origin-left"
              style={{
                background: "linear-gradient(to right, white, transparent)"
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        ))}

        {/* Clouds */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: -100,
              y: Math.random() * dimensions.height,
              opacity: 0.3
            }}
            animate={{ 
              x: dimensions.width + 100,
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Cloud className={`h-${12 + i * 2} w-${12 + i * 2} text-white/30`} />
          </motion.div>
        ))}

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-24 h-24 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: 360
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <div className="absolute inset-1 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
                  <Plane className="h-12 w-12 text-white transform -rotate-45" />
                </div>
              </div>
            </motion.div>
            
            <motion.h2
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              NJI Education
            </motion.h2>
            
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;