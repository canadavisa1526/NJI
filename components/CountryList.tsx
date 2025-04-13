"use client";

import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MapPin, GraduationCap, Briefcase, Users, Star } from "lucide-react";
import Link from "next/link";

const CountryList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const controls = useAnimation();

  const countries = [
    {
      name: "Canada",
      slug: "canada",
      flag: "https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc=",
      description: "World-class education and quality of life",
      features: [
        "Express Entry",
        "Study Permits",
        "Work Permits",
        "Family Sponsorship",
      ],
      stats: {
        universities: "100+",
        students: "15K+",
        success: "98%",
      },
    },
    {
      name: "United States",
      slug: "usa",
      flag: "https://png.pngtree.com/thumb_back/fh260/background/20241112/pngtree-usa-new-york-city-silhouette-at-sunset-image_16541830.jpg",
      description: "Land of opportunities and innovation",
      features: ["H1-B Visa", "Student Visa", "Green Card", "Business Visa"],
      stats: {
        universities: "200+",
        students: "20K+",
        success: "96%",
      },
    },
    {
      name: "United Kingdom",
      slug: "uk",
      flag: "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=800&auto=format&fit=crop&q=60",
      description: "Rich heritage and academic excellence",
      features: [
        "Skilled Worker Visa",
        "Student Visa",
        "Family Visa",
        "Innovator Visa",
      ],
      stats: {
        universities: "150+",
        students: "18K+",
        success: "97%",
      },
    },
    {
      name: "Australia",
      slug: "australia",
      flag: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&auto=format&fit=crop&q=60",
      description: "Beautiful landscapes and high living standards",
      features: [
        "Skilled Migration",
        "Student Visa",
        "Working Holiday",
        "Partner Visa",
      ],
      stats: {
        universities: "80+",
        students: "12K+",
        success: "95%",
      },
    },
    {
      name: "New Zealand",
      slug: "new-zealand",
      flag: "https://cdn.britannica.com/25/180825-050-B4693350/Wellington-Harbour-New-Zealand.jpg",
      description: "Breathtaking nature and world-class universities",
      features: ["Student Visa", "Work to Residence", "Skilled Migrant Visa"],
      stats: {
        universities: "30+",
        students: "5K+",
        success: "94%",
      },
    },
    {
      name: "Germany",
      slug: "germany",
      flag: "https://t3.ftcdn.net/jpg/00/84/15/38/360_F_84153835_k3tFP45bb2TVC9t4N84fpAo41cbNKzyv.jpg",
      description: "Engineering hub with free education options",
      features: [
        "Free Education",
        "Job Seeker Visa",
        "Blue Card",
        "Student Visa",
      ],
      stats: {
        universities: "120+",
        students: "14K+",
        success: "93%",
      },
    },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const cardVariants = {
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + countries.length) % countries.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleCountries = [
    countries[currentIndex],
    countries[(currentIndex + 1) % countries.length],
    countries[(currentIndex + 2) % countries.length],
    countries[(currentIndex + 3) % countries.length],
  ];

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
          <AnimatePresence initial={false} custom={direction}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visibleCountries.map((country, index) => (
                <Link href={`/country/${country.slug}`} key={country.name}>
                  <motion.div
                    key={`${country.name}-${index}`}
                    custom={direction}
                    variants={{
                      ...slideVariants,
                      ...cardVariants,
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    whileHover="hover"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                      scale: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
                  >
                    <div className="relative h-48">
                      <img
                        src={country.flag}
                        alt={`${country.name} Flag`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-5 w-5 text-orange-500" />
                          <h3 className="text-2xl font-bold text-white">
                            {country.name}
                          </h3>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 dark:text-gray-300 mb-4"
                      >
                        {country.description}
                      </motion.p>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          {
                            icon: GraduationCap,
                            label: "Universities",
                            value: country.stats.universities,
                          },
                          {
                            icon: Users,
                            label: "Students",
                            value: country.stats.students,
                          },
                          {
                            icon: Star,
                            label: "Success",
                            value: country.stats.success,
                          },
                        ].map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            custom={i}
                            variants={statsVariants}
                            initial="initial"
                            animate="animate"
                            className="text-center"
                          >
                            <stat.icon className="h-6 w-6 mx-auto mb-2 text-orange-500" />
                            <p className="text-sm font-semibold">
                              {stat.value}
                            </p>
                            <p className="text-xs text-gray-500">
                              {stat.label}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {countries.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-orange-500 shadow-lg shadow-orange-500/50"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-orange-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryList;
