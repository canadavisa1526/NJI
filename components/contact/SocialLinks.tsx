"use client";

import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/social-links-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
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

export default function SocialLinks() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-4"
    >
      <br />
      {socialLinks.map((socialLink) => (
        <motion.a
          key={socialLink.title}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          style={{ color: socialLink.color }}
          aria-label={socialLink.title}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          
        >
          <socialLink.icon className="w-6 h-6" />
        </motion.a>
      ))}
      <br />
    </motion.div>
  );
}
