'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  country: {
    name: string;
    flag: string;
    description: string;
  };
}

export default function HeroSection({ country }: HeroSectionProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${country.flag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: scrolled ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 text-center">
          Study in {country.name}
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl text-center">
          {country.description}
        </p>
        
        <button 
          className="mt-8 bg-[#FAA71A] hover:bg-[#f39c00] text-[#13294E] font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          onClick={() => {
            const element = document.getElementById('inquire');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Inquire Now
        </button>
      </div>
    </div>
  );
}