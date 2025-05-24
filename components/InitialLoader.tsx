"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Globe, GraduationCap, Award } from "lucide-react";

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    // Show loader for 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#13294E] via-[#1a365d] to-[#13294E] overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full" />
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#FAA71A]/30 rounded-full" />
            <div className="absolute top-1/2 left-10 w-16 h-16 border border-white/10 rounded-full" />
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-[#FAA71A]/20 rounded-full" />
          </div>

          <div className="text-center relative z-10">
            {/* Enhanced Logo/Brand */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative">
                {/* Main Globe */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-4 relative"
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FAA71A] to-[#e8961a] flex items-center justify-center shadow-2xl">
                    <Globe className="w-12 h-12 text-white" />
                  </div>

                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <GraduationCap className="w-4 h-4 text-[#FAA71A]" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Flying Plane */}
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4"
                >
                  <div className="relative">
                    <Plane className="w-8 h-8 text-white transform rotate-45" />
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute top-1/2 right-0 w-6 h-0.5 bg-white/50 transform -translate-y-1/2"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Brand Name */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                New Journey Immigration
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FAA71A] to-yellow-300 mx-auto rounded-full" />
            </motion.div>

            {/* Enhanced Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-300 text-lg md:text-xl mb-8 font-medium"
            >
              Your Gateway to Global Opportunities
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="w-64 mx-auto"
            >
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Loading...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FAA71A] to-yellow-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8"
            >
              <div className="flex justify-center space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="w-3 h-3 bg-[#FAA71A] rounded-full"
                  />
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mt-8 flex justify-center space-x-8 text-white/80 text-sm"
            >
              <div className="text-center">
                <div className="font-bold text-[#FAA71A]">15,000+</div>
                <div>Students</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FAA71A]">50+</div>
                <div>Countries</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[#FAA71A]">99%</div>
                <div>Success</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
