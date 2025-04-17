"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, GraduationCap, Users, Star } from "lucide-react";
import { type Country } from "@/types/country";
import { cn } from "@/lib/utils";

interface CountryCardProps {
  country: Country;
  direction: number;
  onSwipe: (newDirection: number) => void;
}

export default function CountryCard({ country, direction, onSwipe }: CountryCardProps) {
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
    initial: { 
      scale: 0.95,
      y: 10, 
      opacity: 0.8
    },
    animate: { 
      scale: 1, 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
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

  return (
    <Link href={`/country/${country.slug}`}>
      <motion.div
        custom={direction}
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={cardVariants}
        className={cn(
          "bg-white dark:bg-gray-800/90 rounded-xl shadow-lg overflow-hidden group backdrop-blur-sm",
          "transition-all duration-300 h-full flex flex-col",
          "border border-gray-100 dark:border-gray-700/40",
          "hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-800/30"
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={country.flag}
            alt={`${country.name} landscape`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
        <div className="p-6 flex-1 flex flex-col">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-600 dark:text-gray-300 mb-4 flex-grow"
          >
            {country.description}
          </motion.p>
          <div className="grid grid-cols-3 gap-4 mt-auto">
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
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}