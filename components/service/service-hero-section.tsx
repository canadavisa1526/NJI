"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Service } from "@/data/services-data";

interface ServiceHeroSectionProps {
  service: Service;
  onOpenInquiry?: () => void;
}

export default function ServiceHeroSection({
  service,
  onOpenInquiry,
}: ServiceHeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide images
  useEffect(() => {
    if (service.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % service.images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [service.images.length]);

  // Get first few benefits for display
  const displayBenefits = service.benefits.slice(0, 6);

  return (
    <section className="relative min-h-screen bg-white dark:bg-[#13294E] overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#FAA71A] opacity-5" />

        {/* Animated Grid Pattern */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="opacity-20"
          >
            <defs>
              <pattern
                id="heroGrid"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#13294E"
                  strokeWidth="0.5"
                  opacity="0.4"
                />
              </pattern>
              <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FAA71A" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            <rect width="100%" height="100%" fill="url(#gridFade)" />
          </svg>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        {/* Large Gradient Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-[#FAA71A] opacity-10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-[#AFC1DB] opacity-10 rounded-full blur-2xl"
        />

        {/* Medium Floating Shapes */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#13294E] opacity-10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-[#FAA71A] opacity-10 rounded-full blur-xl"
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 right-1/3 w-16 h-16 border-2 border-[#FAA71A] opacity-30 rotate-45 blur-sm"
        />
        <motion.div
          animate={{
            rotate: [0, -360],
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
          className="absolute bottom-1/4 left-1/3 w-12 h-12 border-2 border-[#AFC1DB] opacity-40 rounded-full blur-sm"
        />

        {/* Particle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -120, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className={`absolute w-3 h-3 bg-[#FAA71A] rounded-full blur-sm`}
            style={{
              left: `${15 + i * 10}%`,
              bottom: "5%",
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 py-20 max-w-7xl">
        {/* Full Width Image Slider - Top Priority */}
        {service.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#AFC1DB]">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#FAA71A] rounded-full opacity-20 blur-2xl z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#AFC1DB] rounded-full opacity-15 blur-2xl z-10" />

              {/* Image Container - Full Width */}
              <div className="relative h-[70vh] min-h-[500px] bg-[#AFC1DB] dark:bg-[#13294E]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={service.images[currentImageIndex]}
                      alt={`${service.title} - Professional Service`}
                      fill
                      className="object-cover"
                      priority={currentImageIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              

                {/* Service Title Overlay */}
                <div className="absolute top-4 right-4 bg-[#FAA71A] rounded-lg px-4 py-2 shadow-lg z-20">
                  <h2 className="text-[#13294E] font-semibold text-sm">
                    {service.title.split(" - ")[0]}
                  </h2>
                </div>

                {/* Content Overlay */}
                

                {/* Image Indicators */}
                {service.images.length > 1 && (
                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                    {service.images.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-[#FAA71A] w-10"
                            : "bg-[#AFC1DB] hover:bg-white"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Hero Content - Below Images */}
        <div className="text-center mb-12 space-y-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-xs text-[#13294E] dark:text-[#AFC1DB]"
          >
            <Link href="/" className="hover:text-[#FAA71A] transition-colors">
              Home
            </Link>
            <ArrowRight className="w-3 h-3" />
            <span className="text-[#13294E] dark:text-[#AFC1DB] font-medium">
              {service.title.split(" - ")[0]}
            </span>
          </motion.div>

          {/* Enhanced Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-md">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-gradient-to-r from-[#FAA71A] to-[#13294E] rounded-full mr-2"
              />
              <span className="text-gray-600 dark:text-gray-400 font-medium text-xs">
                Professional Immigration Services
              </span>
            </div>
          </motion.div>

          {/* Enhanced Title with Refined Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight relative z-10"
              >
                {service.title
                  .split(" - ")[0]
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                className="relative"
              >
                <span className="block text-base md:text-lg lg:text-xl font-semibold mt-1 bg-gradient-to-r from-[#FAA71A] to-[#13294E] bg-clip-text text-transparent">
                  Made Simple
                </span>
                {/* Decorative underline */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="h-0.5 bg-gradient-to-r from-[#FAA71A] to-[#13294E] rounded-full mt-1 mx-auto max-w-32"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto"
            >
              {service.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6"
            >
              <motion.button
                onClick={onOpenInquiry}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-gradient-to-r from-[#FAA71A] to-[#13294E] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="text-xs">Get Free Consultation</span>
                <ArrowRight className="w-3 h-3" />
              </motion.button>

              <motion.a
                href="tel:+917623043499"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-[#FAA71A] text-gray-700 dark:text-gray-300 hover:text-[#FAA71A] font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="text-xs">Call Now</span>
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-500 mt-4"
            >
              <div className="flex items-center space-x-1.5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-gray-200/50 dark:border-gray-700/50">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                />
                
              </div>
              <div className="flex items-center space-x-1.5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-gray-200/50 dark:border-gray-700/50">
                
              </div>
              <div className="flex items-center space-x-1.5 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full px-2.5 py-1 border border-gray-200/50 dark:border-gray-700/50">
                
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="w-full">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-center mb-6"
              >
                <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-[#FAA71A]/10 to-[#13294E]/10 rounded-full mb-3">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    Why Choose Our Services
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Professional {service.title.split(" - ")[0]} Solutions
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  Experience excellence with our comprehensive immigration
                  services
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="group flex items-start space-x-3 p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-[#FAA71A]/5 hover:to-[#13294E]/5 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-[#FAA71A]/30 hover:shadow-md"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FAA71A] to-[#13294E] flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {benefit.replace(
                          /^[🌐📝💼🤝💬🔒🛡️✍️📄🎯🧳💳📋✨👨‍👩‍👧‍👦📋💰🌍⚡📞🔒💬🏠👶💑📝🏥🛂✈️🎓👨‍👩‍👧‍👦🌍📱💼🛂🧳🔄🛡️📋⚡🎯🏆👨‍🏫📊🎯💻📝🗣️✍️📚⏰🔄📱]+\s*/,
                          ""
                        )}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
