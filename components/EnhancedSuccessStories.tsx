"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Plane } from "lucide-react";
import { useTheme } from "next-themes";

const EnhancedSuccessStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stories = [
    {
      name: "Hardik Khandav",
      country: "Canada",
      flag: "🇨🇦",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366190/hardik_s0epvq.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60",
    },
   
    {
      name: " Janvi Chavan",
      country: "United Kingdom",
      flag: "🇬🇧",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366159/janvi_whsxns.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
    },
    {
      name: "Neel Modi",
      country: "New Zealand",
      flag: "🇳🇿",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366131/neel_kv5tsp.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60",
    },
    {
      name: "Yash Pandit",
      country: "Germany",
      flag: "🇩🇪",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366137/yash_fqj296.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
    },
    {
      name: "Ayush Patel",
      country: "USA",
      flag: "🇺🇸",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366225/ayush_whqccb.jpg",
      imageFallback:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366225/ayush_whqccb.jpg",
    },
    {
      name: "Mihir patel",
      country: "Singapore",
      flag: "🇸🇬",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1747366153/mihir_smhmfq.jpg",
      imageFallback:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=60",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden bg-gradient-to-b from-white dark:from-[#13294E]/90 to-[#AFC1DB]/20 dark:to-[#13294E]/70 theme-section"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Top left blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#13294E] dark:bg-[#FAA71A]"
        />

        {/* Bottom right blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#FAA71A] dark:bg-[#AFC1DB]"
        />

        {/* Flying planes */}
        <motion.div
          initial={{ x: -100, y: 50, opacity: 0 }}
          animate={{ x: "calc(100vw + 100px)", y: -100, opacity: [0, 1, 1, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0"
        >
          <Plane className="text-[#13294E] dark:text-[#FAA71A] text-4xl transform rotate-45" />
        </motion.div>

        <motion.div
          initial={{ x: "calc(100vw + 100px)", y: 200, opacity: 0 }}
          animate={{ x: -100, y: 300, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute top-1/2 right-0"
        >
          <Plane className="text-[#FAA71A] dark:text-[#AFC1DB] text-3xl transform -rotate-45" />
        </motion.div>

        {/* Dotted world map in background */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('/world-map-dots.png')] bg-no-repeat bg-center bg-contain" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16 relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#13294E]/10 dark:bg-[#AFC1DB]/20 rounded-full blur-xl"></div>

          {/* Small decorative planes */}
          <motion.div
            className="absolute top-0 left-1/4 opacity-20"
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Plane className="text-[#13294E] dark:text-[#FAA71A] w-8 h-8" />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-1/4 opacity-20"
            animate={{
              x: [0, -20, 0],
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Plane className="text-[#FAA71A] dark:text-[#AFC1DB] w-6 h-6" />
          </motion.div>

          {/* Main icon */}
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#13294E] to-[#13294E]/80 dark:from-[#13294E]/90 dark:to-[#13294E] p-5 shadow-lg border-4 border-white dark:border-[#13294E]/80">
              <Plane className="text-[#FAA71A] text-4xl" />
            </div>

            {/* Animated ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#FAA71A]/30 dark:border-[#FAA71A]/50"
              animate={{ scale: [1, 1.1, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>

          {/* Title with gradient */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-[#13294E] to-[#13294E]/80 dark:from-[#AFC1DB] dark:to-[#AFC1DB]/80 bg-clip-text text-transparent">
              Success
            </span>
            <span className="text-[#FAA71A]"> Stories</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/50"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
          </motion.h2>
        </motion.div>

        <Swiper
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="success-swiper py-10"
        >
          {stories.map((story, index) => (
            <SwiperSlide key={story.name}>
              <motion.div
                variants={itemVariants}
                className="h-full"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#AFC1DB]/20 h-full">
                  <div className="relative h-[50vh] md:h-[70vh]">
                    <Image
                      src={story.image}
                      alt={`${story.name} Success Story`}
                      fill
                      className="object-cover"
                      priority={index < 2}
                      onError={(e) => {
                        // Fallback to alternative image if main image fails to load
                        e.currentTarget.src = story.imageFallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13294E]/80 to-transparent"></div>

                    {/* Country flag badge */}
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg flex items-center space-x-2">
                      <span className="text-xl">{story.flag}</span>
                      <span className="font-medium text-[#13294E] text-base">
                        {story.country}
                      </span>
                    </div>

                    {/* Name at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#13294E] to-transparent">
                      <h3 className="text-white text-3xl font-bold tracking-wide">
                        {story.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default EnhancedSuccessStories;
