"use client";

import { useEffect, useRef, useState } from "react";
import { countries } from "@/data/countries";
import CountryCard from "./CountryCard";
import FlightConnection from "./FlightConnection";
import { cn } from "@/lib/utils";

export const CountrySlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);

  const countriesSet = [...countries, ...countries];

  useEffect(() => {
    if (!scrollRef.current || !isScrolling) return;
  
    let animationId: number;
    let lastTimestamp: number;
    const scrollSpeed = 0.1; // Slower speed for ultra-smooth scrolling
  
    const scroll = (timestamp: number) => {
      if (!scrollRef.current) return;
  
      if (lastTimestamp) {
        const deltaTime = timestamp - lastTimestamp;
        const scrollAmount = scrollSpeed * deltaTime;
  
        scrollRef.current.scrollLeft += scrollAmount;
  
        if (
          scrollRef.current.scrollLeft >=
          (scrollRef.current.scrollWidth - scrollRef.current.clientWidth) * 0.9
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
  
      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(scroll);
    };
  
    animationId = requestAnimationFrame(scroll);
  
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isScrolling]);
  

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-[#AFC1DB]/20 via-white/30 to-[#AFC1DB]/20 dark:from-[#13294E]/20 dark:via-[#13294E]/5 dark:to-[#13294E]/20 py-6 rounded-2xl backdrop-blur-sm">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden px-4"
        onMouseEnter={() => setIsScrolling(false)}
        onMouseLeave={() => setIsScrolling(true)}
        onTouchStart={() => setIsScrolling(false)}
        onTouchEnd={() => setIsScrolling(true)}
      >
        {countriesSet.map((country, index) => (
          <div key={`${country.code}-${index}`} className="flex items-center">
            <CountryCard country={country} />
            <FlightConnection />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySlider;
