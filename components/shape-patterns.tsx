"use client";

import React from "react";
import { motion } from "framer-motion";

interface ShapesProps {
  className?: string;
  variant?: "dots" | "circles" | "grid" | "waves" | "triangles";
  color?: string;
  animate?: boolean;
}

export function ShapePattern({
  className = "",
  variant = "dots",
  color = "#f97316", 
  animate = true,
}: ShapesProps) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.3,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.3 },
      },
    },
  };

  switch (variant) {
    case "dots":
      return (
        <div
          className={`absolute inset-0 opacity-10 ${className}`}
          style={{ color }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="dots"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      );

    case "circles":
      return (
        <div
          className={`absolute inset-0 opacity-10 overflow-hidden ${className}`}
          style={{ color }}
        >
          {animate ? (
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
            >
              <motion.circle
                cx="20"
                cy="20"
                r="15"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                variants={draw}
              />
              <motion.circle
                cx="80"
                cy="80"
                r="20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                variants={draw}
              />
              <motion.circle
                cx="15"
                cy="75"
                r="10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                variants={draw}
              />
              <motion.circle
                cx="90"
                cy="20"
                r="8"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                variants={draw}
              />
            </motion.svg>
          ) : (
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="20"
                cy="20"
                r="15"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx="80"
                cy="80"
                r="20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx="15"
                cy="75"
                r="10"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle
                cx="90"
                cy="20"
                r="8"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
            </svg>
          )}
        </div>
      );

    case "grid":
      return (
        <div
          className={`absolute inset-0 opacity-10 ${className}`}
          style={{ color }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      );

    case "waves":
      return (
        <div
          className={`absolute inset-0 opacity-10 ${className}`}
          style={{ color }}
        >
          {animate ? (
            <motion.svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              initial="hidden"
              animate="visible"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 1.5 }}
              />
              <motion.path
                d="M0,60 C20,45 40,65 60,55 C80,45 100,65 100,55 L100,100 L0,100 Z"
                fill="currentColor"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.2 }}
              />
            </motion.svg>
          ) : (
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0,50 C20,60 40,40 60,50 C80,60 100,40 100,50 L100,100 L0,100 Z"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M0,60 C20,45 40,65 60,55 C80,45 100,65 100,55 L100,100 L0,100 Z"
                fill="currentColor"
                opacity="0.1"
              />
            </svg>
          )}
        </div>
      );

    case "triangles":
      return (
        <div
          className={`absolute inset-0 opacity-10 ${className}`}
          style={{ color }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="triangles"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M5,0 L10,10 L0,10 Z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#triangles)" />
          </svg>
        </div>
      );

    default:
      return (
        <div
          className={`absolute inset-0 opacity-10 ${className}`}
          style={{ color }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="default-dots"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#default-dots)" />
          </svg>
        </div>
      );
  }
}
