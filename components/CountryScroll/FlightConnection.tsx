"use client";

import { Plane } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlightConnectionProps {
  className?: string;
}

export const FlightConnection = ({ className }: FlightConnectionProps) => {
  const [animationOffset, setAnimationOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset((prev) => (prev + 2) % 100);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn("relative flex items-center justify-center w-12", className)}>
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#FAA71A]/50 to-transparent dark:via-[#FAA71A]/30" />
      <div 
        className="absolute transition-all duration-300"
        style={{
          left: `${animationOffset}%`,
          transform: `translateX(-50%) rotate(45deg) scale(${animationOffset > 50 ? '0.8' : '1'})`,
          opacity: animationOffset > 80 ? 0 : 1
        }}
      >
        <Plane 
          size={14} 
          className="text-[#FAA71A] animate-pulse" 
          fill="#FAA71A"
        />
      </div>
    </div>
  );
};

export default FlightConnection;