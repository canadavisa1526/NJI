"use client";

import React from "react";
import { motion } from "framer-motion";
import { partnerBenefits } from "@/data/contact-data";

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

export default function PartnerBenefits() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/20 to-white dark:from-[#13294e]/80 dark:to-[#13294e] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294e] dark:text-white mb-6">
            Partnership Benefits
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join our network and grow your business with us
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] h-full text-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#FAA71A] to-[#F97316] rounded-xl mb-4 md:mb-6 z-10 relative">
                  <benefit.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#13294e] dark:text-white z-10 relative">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 z-10 relative">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
