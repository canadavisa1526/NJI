"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Service } from "@/data/services-data";

interface ServiceHeaderProps {
  service: Service;
}

export default function ServiceHeader({ service }: ServiceHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#13294E] dark:bg-gray-900"
          : "py-32 bg-gradient-to-r from-[#13294E] via-[#13294E]/95 to-[#13294E]/90 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      }`}
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="header-grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="#AFC1DB"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-grid)" />
        </svg>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#FAA71A]/15 rounded-full blur-xl dark:bg-[#FAA71A]/25"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-10 right-10 w-64 h-64 bg-[#AFC1DB]/15 rounded-full blur-xl dark:bg-[#AFC1DB]/25"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#13294e]/95 via-[#13294e]/85 to-[#13294e]/95" />

      {/* Animated blobs */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#faa71a] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-[#AFC1DB] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-[#faa71a]/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Diagonal shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#FAA71A]/10 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#AFC1DB]/10 rounded-tr-full" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center text-white/80 mb-2 text-sm"
          >
            <Link href="/" className="hover:text-[#FAA71A] transition-colors">
              Home
            </Link>
            {/* <ArrowRight className="mx-2 h-3 w-3" />
            <Link href="/services" className="hover:text-[#FAA71A] transition-colors">
              Services
            </Link> */}
            <ArrowRight className="mx-2 h-3 w-3" />
            <span className="text-white/60">{service.title}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/90 max-w-3xl"
          >
            {service.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
