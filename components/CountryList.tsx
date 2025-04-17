"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { countriesData } from "@/data/countries-data";
import { useAutoSlider } from "@/hooks/use-auto-slider";
import AutoSlider from "./ui/auto-slider";
import CountryCard from "./country-card";

export default function CountryList() {
  const {
    currentIndex,
    setCurrentIndex,
    direction,
    setDirection,
    paginate,
    isPaused,
    setIsPaused,
    visibleCount,
  } = useAutoSlider({
    totalItems: countriesData.length,
    visibleItems: {
      mobile: 1,
      tablet: 2,
      desktop: 4,
    },
    autoSlideInterval: 5000,
  });

  // Get visible countries based on current index
  const visibleCountries = Array.from({ length: 4 }, (_, i) => {
    const index = (currentIndex + i) % countriesData.length;
    return countriesData[index];
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,137,51,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            Global Opportunities
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Explore Your Dream
            <span className="block text-orange-500 mt-2">Destinations</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover world-class education and career opportunities in these
            leading destinations
          </p>
        </motion.div>

        <div className="relative">
          <AutoSlider
            currentIndex={currentIndex}
            totalItems={countriesData.length}
            visibleItems={visibleCount}
            onChangeIndex={(newIndex, newDirection) => {
              setDirection(newDirection);
              setCurrentIndex(newIndex);
            }}
            autoSlideInterval={5000}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visibleCountries.map((country, index) => (
                <motion.div
                  key={`${country.name}-${index}`}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.5 }}
                  className={index >= visibleCount ? "hidden" : ""}
                >
                  <CountryCard
                    country={country}
                    direction={direction}
                    onSwipe={paginate}
                  />
                </motion.div>
              ))}
            </div>
          </AutoSlider>

          {/* {/* Navigation Controls */}

          {/* Progress Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {Array.from({ length: countriesData.length }, (_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const newDirection = i > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(i);
                }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-orange-500 w-6"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
