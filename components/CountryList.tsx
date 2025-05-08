"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { countriesData } from "@/data/countries-data";
import CountryCard from "./country-card";

const visibleCount = 4;

export default function CountryList() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setDirection(1);
      setStartIndex((prev) => (prev + 1) % countriesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [startIndex, isPaused]);

  const visibleCountries = Array.from({ length: visibleCount }, (_, i) => {
    const index = (startIndex + i) % countriesData.length;
    return countriesData[index];
  });

  const slideVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      x: 50,
    },
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      x: -50,
    },
  };

  return (
    <section
      className="py-12 bg-gradient-to-b from-white/50 to-[#AFC1DB]/20 dark:from-[#13294E]/50 dark:to-[#13294E]/20 relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,167,26,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 text-[#FAA71A] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Featured Destinations
          </span>
          <h2 className="text-3xl font-bold text-[#13294E] dark:text-white mb-4">
            Popular Immigration
            <span className="block text-[#FAA71A] mt-2">Destinations</span>
          </h2>
          <p className="text-lg text-[#13294E]/80 dark:text-[#AFC1DB] max-w-2xl mx-auto">
            Discover world-class opportunities in these leading destinations
          </p>
        </div>

        <div className="relative min-h-[320px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleCountries.map((country, index) => (
                <motion.div
                  key={`${country.name}-${startIndex + index}`}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <CountryCard 
                    country={country} 
                    direction={direction} 
                    onSwipe={() => console.log(`Swiped on ${country.name}`)} 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
