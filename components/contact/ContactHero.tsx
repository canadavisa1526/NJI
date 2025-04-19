"use client";

import React from "react";
import { motion } from "framer-motion";
import { contactInfo } from "@/data/contact-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#AFC1DB]/20 to-white dark:from-[#13294E]/80 dark:to-[#13294E] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#FAA71A]/20 dark:bg-[#FAA71A]/10 rounded-full animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-[#FAA71A]/20 dark:bg-[#FAA71A]/10 rounded-full animate-blob animation-delay-4000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294E] dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help with your immigration needs. Reach out to our
            team for expert guidance and personalized support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {contactInfo.map(({ icon: Icon, title, details }, index) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-[#13294E] p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] h-full text-center flex flex-col items-center justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
                <div className="p-3 bg-gradient-to-r from-[#faa71a] to-amber-500 rounded-xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold text-[#13294E] dark:text-white mb-2">
                  {title}
                </h4>
                <div className="space-y-1">
                  {details.map((detail) => (
                    <p
                      key={detail}
                      className="text-sm md:text-base text-gray-700 dark:text-white/90"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
