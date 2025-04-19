"use client";

import React from "react";
import { motion } from "framer-motion";
import { statsData } from "@/data/contact-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactStats() {
  return (
    <section className="py-8 md:py-12 bg-[#F8FAFC] dark:bg-[#1E3A8A]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white dark:bg-[#13294E] p-4 md:p-6 rounded-2xl shadow-xl">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#FAA71A] to-[#F97316] rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#13294E] dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-[#13294E]/70 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}