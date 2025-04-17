"use client";

import React, { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface AutoSliderProps {
  children: ReactNode;
  currentIndex: number;
  totalItems: number;
  visibleItems: number;
  onChangeIndex: (newIndex: number, direction: number) => void;
  autoSlideInterval?: number;
}

export default function AutoSlider({
  children,
  currentIndex,
  totalItems,
  visibleItems,
  onChangeIndex,
  autoSlideInterval = 5000,
}: AutoSliderProps) {
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (autoSlideInterval <= 0 || isPaused) return;
    
    const timer = setInterval(() => {
      const newIndex = (currentIndex + 1) % totalItems;
      onChangeIndex(newIndex, 1);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, totalItems, autoSlideInterval, onChangeIndex, isPaused]);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        {children}
      </div>
      
      <div className="hidden sm:block">
        <button
          onClick={() => {
            const newIndex = (currentIndex - 1 + totalItems) % totalItems;
            onChangeIndex(newIndex, -1);
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 lg:-translate-x-1/2 
                    bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg
                    text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          aria-label="Previous slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={() => {
            const newIndex = (currentIndex + 1) % totalItems;
            onChangeIndex(newIndex, 1);
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 lg:translate-x-1/2 
                    bg-white/80 dark:bg-gray-800/80 p-3 rounded-full shadow-lg
                    text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          aria-label="Next slide"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
    </div>
  );
}