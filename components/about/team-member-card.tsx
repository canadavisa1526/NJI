"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TeamMemberCardProps {
  index: number;
  name: string;
  role: string;

  image: string;
}

export function TeamMemberCard({
    index,
  name,
  role,
 
  image,
 
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
      <div className="relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="aspect-[4/5] relative overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm font-medium text-amber-600 dark:text-amber-400">
              {role}
            </p>
          </div>

          {/* <p className="text-sm text-slate-600 dark:text-slate-300 flex-grow mb-4">
            {bio}
          </p> */}

          {/* {socialLinks && (
            <div className="flex items-center gap-2 pt-3 border-t border-slate-200 dark:border-slate-700">
              {socialLinks.linkedin && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-full text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400"
                >
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.twitter && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-full text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400"
                >
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {socialLinks.email && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-8 w-8 rounded-full text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400"
                >
                  <a href={`mailto:${socialLinks.email}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
}
