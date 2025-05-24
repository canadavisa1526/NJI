"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, GraduationCap, Users, Star } from "lucide-react";
import { type Country } from "@/types/country";
import { cn } from "@/lib/utils";

interface CountryCardProps {
  country: Country;
  direction: number;
  onSwipe: (newDirection: number) => void;
}

export default function CountryCard({ country, direction, onSwipe }: CountryCardProps) {
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

  return (
    <Link href={`/country/${country.slug}`}>
      <motion.div
        initial="initial"
        animate="animate"
        whileHover="hover"
        variants={cardVariants}
        className={cn(
          "bg-white dark:bg-[#13294E]/90 rounded-xl shadow-lg overflow-hidden group backdrop-blur-sm",
          "transition-all duration-300 h-full flex flex-col",
          "border border-[#AFC1DB]/20 dark:border-[#13294E]/40",
          "hover:shadow-xl hover:border-[#FAA71A]/20 dark:hover:border-[#FAA71A]/30"
        )}
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={country.flag}
            alt={`${country.name} landscape`}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#13294E]/60 via-[#13294E]/20 to-transparent" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute bottom-4 left-4 right-4"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#FAA71A]" />
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
            className="text-[#13294E]/80 dark:text-[#AFC1DB] mb-4 flex-grow"
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
                <stat.icon className="h-6 w-6 mx-auto mb-2 text-[#FAA71A]" />
                <p className="text-sm font-semibold text-[#13294E] dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs text-[#13294E]/60 dark:text-[#AFC1DB]/60">
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