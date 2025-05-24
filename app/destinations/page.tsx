"use client";

import { motion } from "framer-motion";
import { countriesData } from "@/data/countries-data";
import { Play, MapPin, GraduationCap, Users, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DestinationsPage() {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#13294E] via-[#13294E]/90 to-[#AFC1DB]/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Explore Your Dream{" "}
              <span className="text-[#FAA71A]">Destinations</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#AFC1DB] max-w-3xl mx-auto">
              Discover the beauty and opportunities that await you in these incredible countries
            </p>
          </motion.div>

          {/* Country Selection Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {countriesData.map((country, index) => (
              <motion.button
                key={country.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedCountry(country)}
                className={`p-4 rounded-xl transition-all duration-300 ${
                  selectedCountry.slug === country.slug
                    ? "bg-[#FAA71A] text-[#13294E] shadow-lg scale-105"
                    : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    {country.name === "Canada" && "🇨🇦"}
                    {country.name === "United States" && "🇺🇸"}
                    {country.name === "United Kingdom" && "🇬🇧"}
                    {country.name === "Australia" && "🇦🇺"}
                    {country.name === "Germany" && "🇩🇪"}
                    {country.name === "New Zealand" && "🇳🇿"}
                  </div>
                  <p className="text-sm font-medium">{country.name}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Main Video Display */}
          <motion.div
            key={selectedCountry.slug}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Video Section */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  {selectedCountry.timelapseVideo ? (
                    <iframe
                      src={selectedCountry.timelapseVideo}
                      title={`${selectedCountry.name} Time-lapse`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#13294E] to-[#AFC1DB] flex items-center justify-center">
                      <div className="text-center text-white">
                        <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                        <p className="text-lg">Video Coming Soon</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Country Info */}
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-[#FAA71A] mr-2" />
                  <h2 className="text-3xl md:text-4xl font-bold">{selectedCountry.name}</h2>
                </div>
                
                <p className="text-lg text-[#AFC1DB] mb-6 leading-relaxed">
                  {selectedCountry.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 mx-auto mb-2 text-[#FAA71A]" />
                    <p className="text-sm text-[#AFC1DB]">Universities</p>
                    <p className="font-bold">{selectedCountry.stats.universities}</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Users className="h-6 w-6 mx-auto mb-2 text-[#FAA71A]" />
                    <p className="text-sm text-[#AFC1DB]">Students</p>
                    <p className="font-bold">{selectedCountry.stats.students}</p>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <Star className="h-6 w-6 mx-auto mb-2 text-[#FAA71A]" />
                    <p className="text-sm text-[#AFC1DB]">Success Rate</p>
                    <p className="font-bold">{selectedCountry.stats.success}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#FAA71A]/20 text-[#FAA71A] rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/country/${selectedCountry.slug}`}
                  className="inline-flex items-center px-6 py-3 bg-[#FAA71A] text-[#13294E] font-semibold rounded-lg hover:bg-[#f39c00] transition-colors duration-300"
                >
                  Learn More About {selectedCountry.name}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
