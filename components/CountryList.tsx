"use client";

import { motion } from "framer-motion";
import { countriesData } from "@/data/countries-data";
import CountryCard from "./country-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { type Country } from "@/types/country";

export default function CountryList() {
  return (
    <section className="py-12 bg-gradient-to-b from-white/50 to-[#AFC1DB]/20 dark:from-[#13294E]/50 dark:to-[#13294E]/20 relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,167,26,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 text-[#FAA71A] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Featured Destinations
          </span>
          <h2 className="text-3xl font-bold text-[#13294E] dark:text-white mb-4">
            Popular Immigration
            <span className="block text-[#FAA71A] mt-2">Destinations</span>
          </h2>
          <p className="text-lg text-[#13294E]/80 dark:text-[#AFC1DB] max-w-2xl mx-auto">
            Discover world-class opportunities in these leading destinations
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active bg-[#faa71a]",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-12"
          >
            {countriesData.map((country: Country, index: number) => (
              <SwiperSlide key={`${country.name}-${index}`}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <CountryCard
                    country={country}
                    direction={1}
                    onSwipe={() => console.log(`Swiped on ${country.name}`)}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
