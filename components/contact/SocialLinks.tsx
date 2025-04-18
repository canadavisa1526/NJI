"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, DivideIcon as LucideIcon } from "lucide-react";
import { socialLinks } from "@/data/social-links-data";

const iconMap: Record<string, LucideIcon> = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {socialLinks.map(({ title, url, icon }) => {
        const Icon = iconMap[icon];
        if (!Icon) return null;

        return (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-colors duration-300"
          >
            <Icon className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              {title}
            </span>
          </a>
        );
      })}
    </div>
  );
}