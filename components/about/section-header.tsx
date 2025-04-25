"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500">
          {title}
        </span>
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    </motion.div>
  );
}