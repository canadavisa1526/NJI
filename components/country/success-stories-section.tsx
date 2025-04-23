"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { DetailedCountry } from '@/types/country';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SuccessStoriesSectionProps {
  country: DetailedCountry;
}

export function SuccessStoriesSection({ country }: SuccessStoriesSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = country.successStories.length;
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideShow = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = null;
    }
  };

  const goToSlide = (index: number) => {
    stopSlideShow();
    setCurrentSlide(index);
    startSlideShow();
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, []);

  return (
    <section id="success-stories" className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
          Success Stories
        </h2>
        <p className="text-lg text-muted-foreground mb-10">
          Real experiences from students who achieved their dreams with our guidance.
        </p>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {country.successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 p-6 md:p-10 bg-[#13294E]/5 rounded-xl">
                    <div className="md:col-span-2 flex flex-col items-center justify-center">
                      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#FAA71A]">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-bold mt-4 text-center">{story.name}</h3>
                      <p className="text-sm text-muted-foreground text-center mt-1">{story.course}</p>
                      <p className="text-sm text-muted-foreground text-center">{story.institution}, {story.year}</p>
                    </div>
                    
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <Quote className="text-[#FAA71A] w-10 h-10 mb-4" />
                      <blockquote className="text-lg md:text-xl italic mb-6">
                        {story.quote}
                      </blockquote>
                      <div className="mt-auto pt-4 text-sm text-right text-muted-foreground">
                        A New Journey Immigration Success Story
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-[#13294E]/80 flex items-center justify-center text-[#13294E] dark:text-white shadow-md hover:bg-white dark:hover:bg-[#13294E] transition-all"
            aria-label="Previous story"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 dark:bg-[#13294E]/80 flex items-center justify-center text-[#13294E] dark:text-white shadow-md hover:bg-white dark:hover:bg-[#13294E] transition-all"
            aria-label="Next story"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {country.successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentSlide === index 
                    ? "bg-[#FAA71A] w-6" 
                    : "bg-[#13294E]/20 hover:bg-[#13294E]/40"
                )}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}