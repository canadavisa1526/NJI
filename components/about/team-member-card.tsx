"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Linkedin,
  Mail,
  Twitter,
  Globe,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="relative flex flex-col h-full bg-white dark:bg-[#13294E] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#AFC1DB]/20">
        {/* Decorative SVG elements */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10 dark:opacity-5 pointer-events-none">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" fill="#FAA71A" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 dark:opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#AFC1DB"
              d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        {/* Image with overlay */}
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Hover overlay with social links */}
        </div>

        {/* Content area */}
        <div className="p-6 flex flex-col flex-grow relative">
          {/* Name and role */}
          <div className="space-y-1 mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#FAA71A] dark:group-hover:text-[#FAA71A] transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm font-medium text-[#FAA71A]">{role}</p>
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {bio}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
