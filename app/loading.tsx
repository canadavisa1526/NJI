"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Globe2 } from "lucide-react";
import Image from "next/image";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let minLoadingTimer: NodeJS.Timeout;
    let pageLoadedTime = 0;
    let minLoadingTime = 3000; // Minimum 1 second loading time

    // Track when the page is fully loaded
    const handleLoad = () => {
      pageLoadedTime = Date.now();
    };

    if (typeof window !== "undefined") {
      // Listen for page load event
      window.addEventListener("load", handleLoad);

      // Start progress animation
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 4; // Increment by 4% each time to reach ~100% in 2.5s
        });
      }, 100);

      // Set minimum loading time
      minLoadingTimer = setTimeout(() => {
        const currentTime = Date.now();
        const timeElapsed = pageLoadedTime ? currentTime - pageLoadedTime : 0;

        // If page has loaded and minimum time has passed, hide loader
        if (pageLoadedTime && timeElapsed >= minLoadingTime) {
          setIsVisible(false);
        } else {
          // If page has loaded but minimum time hasn't passed yet, wait the remaining time
          const remainingTime = Math.max(0, minLoadingTime - timeElapsed);
          if (remainingTime > 0) {
            setTimeout(() => setIsVisible(false), remainingTime);
          } else {
            setIsVisible(false);
          }
        }
      }, 2500); // Still keep max loading time at 2.5s
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
      clearTimeout(minLoadingTimer);
      if (progressInterval) clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#13294E] via-[#13294E]/95 to-[#0b1a32] backdrop-blur-md flex items-center justify-center z-50">
      <div className="relative w-full h-full overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#AFC1DB"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Decorative circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FAA71A]/5"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#AFC1DB]/5"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -15, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 -right-20 w-40 h-40 rounded-full bg-[#FAA71A]/3"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -5, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0,
              }}
              animate={{
                y: [
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                  Math.random() * 100 + "%",
                ],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              {i % 3 === 0 ? (
                <GraduationCap className="h-8 w-8 text-[#FAA71A]/30" />
              ) : i % 3 === 1 ? (
                <BookOpen className="h-8 w-8 text-[#FAA71A]/30" />
              ) : (
                <Globe2 className="h-8 w-8 text-[#FAA71A]/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-md">
            <motion.div
              className="mb-10"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.8,
              }}
            >
              <div className="relative w-36 h-36 mx-auto">
                {/* Decorative dots around the logo */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-[#FAA71A]"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${
                        i * 30
                      }deg) translateY(-60px) translateX(-50%)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Outer spinning ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[#FAA71A]"
                  animate={{
                    rotate: 360,
                    borderWidth: ["4px", "2px", "4px"],
                    boxShadow: [
                      "0 0 10px rgba(250, 167, 26, 0.3)",
                      "0 0 20px rgba(250, 167, 26, 0.5)",
                      "0 0 10px rgba(250, 167, 26, 0.3)",
                    ],
                  }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    borderWidth: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    boxShadow: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Middle spinning ring */}
                <motion.div
                  className="absolute inset-3 rounded-full border-2 border-[#AFC1DB]"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1],
                    borderColor: ["#AFC1DB", "#FAA71A", "#AFC1DB"],
                  }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    borderColor: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Inner spinning ring */}
                <motion.div
                  className="absolute inset-6 rounded-full border-1 border-[#13294E]/30"
                  animate={{
                    rotate: 180,
                    scale: [1, 0.9, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Logo container */}
                <div className="absolute inset-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                  <div className="relative w-full h-full">
                    <Image
                      src="/svg/Asset_3.svg"
                      alt="NJI Education Logo"
                      fill
                      className="object-contain p-1"
                      priority
                    />
                  </div>
                </div>

                {/* Pulsing glow effect */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-[#FAA71A]/20 -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    boxShadow: [
                      "0 0 20px rgba(250, 167, 26, 0.2)",
                      "0 0 40px rgba(250, 167, 26, 0.4)",
                      "0 0 20px rgba(250, 167, 26, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white">
                New Journey Immigration
              </h2>
              <h3 className="text-xl font-medium text-[#FAA71A] mt-1">
                Education Consultancy
              </h3>
            </motion.div>

            <motion.p
              className="text-[#AFC1DB] mb-6 text-sm max-w-xs mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your trusted partner for international education and immigration
              services
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="relative h-2 bg-[#13294E]/50 rounded-full w-64 mx-auto overflow-hidden shadow-inner"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#13294E] via-[#FAA71A] to-[#FAA71A] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />

              {/* Shimmering effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>

            <motion.div
              className="mt-3 text-sm text-[#AFC1DB] font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-[#FAA71A]">{progress}%</span> Loading your
              experience...
            </motion.div>

            {/* Footer credit */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="bg-[#13294E]/50 backdrop-blur-sm py-3 px-4 rounded-lg inline-block shadow-lg border border-[#AFC1DB]/10">
                <div className="text-[#AFC1DB] text-sm font-medium">
                  Designed and developed by{" "}
                  <span className="text-[#FAA71A]">V&V Digital</span>
                </div>
                <div className="mt-1 text-xs text-white/70 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  +91 70462 72137
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
