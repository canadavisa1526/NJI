"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  MessageCircle, // Using MessageCircle instead of deprecated Twitter
  Globe,
  MapPin,
  Phone,
} from "lucide-react";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  email?: string;
  website?: string;
}

interface TeamMemberCardProps {
  index: number;
  name: string;
  role: string;
  bio?: string;
  location?: string;
  phone?: string;
  image: string;
  socialLinks?: SocialLinks;
}

export function TeamMemberCard({
  index,
  name,
  role,
  bio,
  location,
  phone,
  image,
  socialLinks,
}: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Subtle animated background elements with more professional styling */}
      <motion.div
        className="absolute -top-6 -right-6 w-32 h-32 bg-[#FAA71A]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#AFC1DB]/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Professional gradient border with subtle animation */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#faa71a]/90 via-amber-500/80 to-[#AFC1DB]/90 -z-10 shadow-xl"
        initial={{ rotate: 2, scale: 1.03 }}
        whileHover={{ rotate: 0, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />

      <div className="relative flex flex-col h-full bg-white dark:bg-[#13294E] rounded-3xl overflow-hidden shadow-xl backdrop-blur-sm border border-gray-100/30 dark:border-white/5">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-3 pointer-events-none">
          <motion.svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: 5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <circle cx="50" cy="50" r="50" fill="#FAA71A" />
          </motion.svg>
        </div>
        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-5 dark:opacity-3 pointer-events-none">
          <motion.svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ rotate: -5 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <path
              fill="#AFC1DB"
              d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
              transform="translate(100 100)"
            />
          </motion.svg>
        </div>

        {/* Image with professional overlay styling */}
        <motion.div
          className={`relative overflow-hidden ${
            name === "Monika" ? "h-[360px]" : "h-[350px]"
          }`}
          whileHover={
            name === "Monika"
              ? { scale: 1.01, rotateX: 0, rotateY: 0 }
              : { scale: 1.01 }
          }
          initial={
            name === "Monika"
              ? { perspective: 1000, rotateX: 2, rotateY: -1 }
              : {}
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Subtle corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#FAA71A]/60 to-transparent opacity-60 z-10 clip-corner"></div>

          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-all duration-1000 ease-out ${
              // Adjust position for Monika's image to fit better
              name === "Monika" ? "object-[center_10%]" : "object-center"
            }`}
            style={{
              transform:
                name === "Monika"
                  ? "scale3d(0.92, 0.92, 1.05) perspective(1000px) rotateX(2deg)"
                  : "scale(1.01)",
              transformOrigin:
                name === "Monika" ? "center 10%" : "center center",
              filter:
                name === "Monika" ? "brightness(1.05) contrast(1.02)" : "none",
            }}
          />

          {/* Professional gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#13294e]/90 via-[#13294e]/30 to-transparent dark:from-black/90 dark:via-black/40 dark:to-black/5 ${
              name === "Monika" ? "shadow-inner" : ""
            }`}
          />

          {/* 3D effect shadow for Monika's image */}
          {name === "Monika" && (
            <div className="absolute inset-0 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)] pointer-events-none z-10"></div>
          )}

          {/* Subtle accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FAA71A] via-amber-500 to-[#AFC1DB]"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* 3D effect highlight for Monika's image */}
          {name === "Monika" && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none z-5"
              initial={{ opacity: 0.3 }}
              animate={{
                opacity: [0.3, 0.4, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>

        {/* Content area with professional styling */}
        <div className="p-6 flex flex-col flex-grow relative">
          {/* Name and role with professional styling */}
          <motion.div
            className="space-y-1 mb-4 relative"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-[3px] h-12 bg-gradient-to-b from-[#FAA71A] to-amber-600 rounded-full"
              initial={{ scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FAA71A] dark:group-hover:text-[#FAA71A] transition-colors duration-300 pl-2">
              {name}
            </h3>
            <p className="text-sm font-medium text-[#FAA71A] pl-2">{role}</p>
          </motion.div>

          {/* Bio with professional styling */}
          {bio && (
            <motion.div
              className="relative mb-5 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all duration-500 leading-relaxed">
                {bio}
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white dark:from-[#13294E] to-transparent group-hover:opacity-0 transition-opacity duration-500"></div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
