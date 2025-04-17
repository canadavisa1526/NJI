"use client";

import { useState, useEffect } from "react";

interface AutoSliderOptions {
  totalItems: number;
  visibleItems: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoSlideInterval?: number;
  initialIndex?: number;
}

export function useAutoSlider({
  totalItems,
  visibleItems,
  autoSlideInterval = 5000,
  initialIndex = 0,
}: AutoSliderOptions) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(visibleItems.desktop);

  // Function to handle pagination
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + totalItems) % totalItems
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (autoSlideInterval <= 0 || isPaused) return;
    
    const timer = setInterval(() => {
      paginate(1);
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [currentIndex, totalItems, autoSlideInterval, isPaused]);

  // Update visible count based on screen size
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(visibleItems.mobile);
      } else if (width < 1024) {
        setVisibleCount(visibleItems.tablet);
      } else {
        setVisibleCount(visibleItems.desktop);
      }
    };

    // Initial call
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleItems]);

  return {
    currentIndex,
    setCurrentIndex,
    direction,
    setDirection,
    paginate,
    isPaused,
    setIsPaused,
    visibleCount,
  };
}