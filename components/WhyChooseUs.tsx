"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Users,
  Clock,
  Award,
  CheckCircle,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description: "Registered immigration consultants with proven expertise",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient handling of visa applications and paperwork",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "98% visa approval success rate across multiple countries",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Support",
    description: "From application to settlement, we’ve got you covered",
  },
  {
    icon: ThumbsUp,
    title: "Personalized Service",
    description: "We understand your goals and tailor every step accordingly",
  },
];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic chunk size based on screen size
  const getChunkSize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };

  const [chunkSize, setChunkSize] = useState(getChunkSize);

  const slides = [];
  for (let i = 0; i < reasons.length; i += chunkSize) {
    slides.push(reasons.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const handleResize = () => {
      const newChunkSize = getChunkSize();
      setChunkSize(newChunkSize);
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      },
      isMobile ? 3000 : 5000
    ); // Faster transitions on mobile
    return () => clearInterval(interval);
  }, [slides.length, isMobile]);

  const slideVariants = {
    enter: { opacity: 0, y: isMobile ? 20 : 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: isMobile ? -20 : -30 },
  };

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#FAA71A] to-[#f39c00] rounded-full mb-3 xs:mb-4 sm:mb-6">
            <Award className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#13294e] dark:text-white mb-2 xs:mb-3 sm:mb-4 px-1 xs:px-2 leading-tight">
            <span className="block xs:inline">Why Choose </span>
            <span className="bg-gradient-to-r from-[#FAA71A] to-[#f39c00] bg-clip-text text-transparent block xs:inline">
              New Journey Immigration
            </span>
            <span className="block xs:inline">?</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-[#13294e]/80 dark:text-gray-300 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 xs:px-4">
            We&apos;re committed to making your immigration journey smooth,
            secure, and successful with personalized guidance every step of the
            way.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="relative">
          {/* Mobile Progress Indicators */}
          {isMobile && slides.length > 1 && (
            <div className="flex justify-center mb-4 xs:mb-6">
              <div className="flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#faa71a] scale-125"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="min-h-[280px] xs:min-h-[320px] sm:min-h-[350px] md:min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: isMobile ? 0.4 : 0.6 }}
                className={`grid gap-3 xs:gap-4 sm:gap-6 md:gap-8 ${
                  isMobile
                    ? "grid-cols-1"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {slides[currentIndex].map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-[#13294e] rounded-lg xs:rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-md xs:shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#faa71a]/20 dark:border-[#faa71a]/10 h-full group hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-start gap-2 xs:gap-3 sm:gap-4 mb-2 xs:mb-3 sm:mb-4">
                      <div className="flex-shrink-0 p-1 xs:p-2 sm:p-0">
                        <reason.icon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 text-[#faa71a] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-[#13294e] dark:text-white leading-tight break-words">
                          {reason.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs xs:text-sm sm:text-base text-[#13294e]/80 dark:text-gray-300 leading-relaxed pl-8 xs:pl-9 sm:pl-0">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows for larger screens */}
          {!isMobile && slides.length > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex(
                    currentIndex === 0 ? slides.length - 1 : currentIndex - 1
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-[#13294e] p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#faa71a]/20 hover:border-[#faa71a]/40 group"
                aria-label="Previous slide"
              >
                <svg
                  className="w-5 h-5 text-[#faa71a] group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % slides.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-[#13294e] p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[#faa71a]/20 hover:border-[#faa71a]/40 group"
                aria-label="Next slide"
              >
                <svg
                  className="w-5 h-5 text-[#faa71a] group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
