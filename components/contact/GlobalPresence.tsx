"use client";

import React from "react";
import { motion } from "framer-motion";
import { locations } from "@/data/contact-data";

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

export default function GlobalPresence() {
  return (
    <section className="py-8 md:py-16 bg-[#F8FAFC] dark:bg-[#1E3A8A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#13294E] dark:text-white">
            Our Global Presence
          </h2>
          <p className="text-base md:text-lg text-[#13294E]/80 dark:text-gray-300 max-w-2xl mx-auto">
            We have offices and partners across the globe to serve you better.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {locations.map(({ city, country, address, services }) => (
            <motion.div
              key={city}
              variants={fadeInUp}
              className="bg-white dark:bg-[#13294E] p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#13294E] dark:text-white">
                {city}, {country}
              </h3>
              <p className="text-sm md:text-base text-[#13294E]/70 dark:text-gray-300 mb-4">
                {address}
              </p>
              <h4 className="font-semibold mb-2 text-[#13294E] dark:text-white">
                Services:
              </h4>
              <ul className="list-disc list-inside text-sm md:text-base text-[#13294E]/70 dark:text-gray-300 space-y-1">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}