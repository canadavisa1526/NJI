"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactHero() {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-[#13294e]">
      {/* Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#faa71a]/20 dark:bg-[#faa71a]/10 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#faa71a]/20 dark:bg-[#faa71a]/10 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="container mx-auto px-4 relative z-10"
      >
        <section className="py-16">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#13294e] dark:text-white">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We're here to help with your immigration needs. Reach out to our
              team for expert guidance and personalized support.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map(({ icon: Icon, title, details }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                className="bg-[#adcaf3] dark:bg-[#649eef] text-[#13294e] dark:text-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <Icon className="w-10 h-10 text-[#faa71a] mb-4" />
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                {details.map((detail) => (
                  <p key={detail} className="text-sm opacity-90">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>
    </section>
  );
}
