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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
            Our Global Presence
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We have offices and partners across the globe to serve you better.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {locations.map(({ city, country, address, services }) => (
            <motion.div
              key={city}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">
                {city}, {country}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {address}
              </p>
              <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
                Services:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
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