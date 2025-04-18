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
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="relative group"
            >
              <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-4">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
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