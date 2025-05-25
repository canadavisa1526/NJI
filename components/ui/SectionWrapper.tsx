"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "gradient" | "dark" | "pattern";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  background = "white",
  padding = "lg",
  id,
}: SectionWrapperProps) {
  const backgroundClasses = {
    white: "bg-white dark:bg-gray-900",
    gray: "bg-gray-50 dark:bg-gray-800",
    gradient: "bg-gradient-to-br from-[#13294E]/5 to-[#FAA71A]/5 dark:from-[#13294E]/20 dark:to-[#FAA71A]/20",
    dark: "bg-[#13294E] dark:bg-[#0d1b34]",
    pattern: "bg-gray-50 dark:bg-gray-800 relative overflow-hidden",
  };

  const paddingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-24",
    xl: "py-20 md:py-32",
  };

  return (
    <section
      id={id}
      className={`relative ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      {/* Pattern Background for pattern type */}
      {background === "pattern" && (
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FAA71A' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      )}

      {/* Floating decorative elements for gradient background */}
      {background === "gradient" && (
        <>
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#FAA71A]/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#13294E]/10 rounded-full blur-xl"></div>
        </>
      )}

      {/* Content with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}

// Enhanced Section Title Component
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[#FAA71A] font-semibold text-sm md:text-base uppercase tracking-wider mb-3"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#13294E] dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

// Enhanced Container Component
interface ContainerProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

export function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-8xl",
    full: "max-w-full",
  };

  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
