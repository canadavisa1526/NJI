'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { countriesData } from '@/data/countries-data';
// import { countriesData } from '@/app/data/countries-data';

interface ExploreCountriesSectionProps {
  currentCountry: string;
}

export default function ExploreCountriesSection({ currentCountry }: ExploreCountriesSectionProps) {
  const otherCountries = countriesData.filter(country => country.name !== currentCountry).slice(0, 3);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-white text-center mb-8">
          Explore Other <span className="text-[#FAA71A]">Destinations</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherCountries.map((country, index) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                href={`/countries/${country.slug}`}
                className="block group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                  <img 
                    src={country.flag} 
                    alt={country.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-xl font-bold text-white">{country.name}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {country.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index} 
                        className="bg-[#AFC1DB]/20 dark:bg-[#AFC1DB]/10 text-[#13294E] dark:text-white text-xs py-1 px-2 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-[#13294E] dark:bg-[#FAA71A] hover:bg-[#193966] dark:hover:bg-[#f39c00] text-white dark:text-[#13294E] py-2 rounded-lg font-medium text-sm group-hover:bg-[#FAA71A] group-hover:text-[#13294E] transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}