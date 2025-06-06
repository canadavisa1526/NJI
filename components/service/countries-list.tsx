"use client";

import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface CountriesListProps {
  countries: string[];
}

// Define a type for the flag data
interface FlagData {
  [key: string]: string;
}

export default function CountriesList({ countries }: CountriesListProps) {
  const [flagMap, setFlagMap] = useState<FlagData>({});

  useEffect(() => {
    // Fetch flag URLs from the API
    const fetchFlags = async () => {
      const newFlagMap: FlagData = {};
      for (const country of countries) {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${country}`
          );
          if (!response.ok) {
            console.error(`Failed to fetch flag for ${country}`);
            continue;
          }
          const data = await response.json();
          if (data && data[0] && data[0].flags && data[0].flags.svg) {
            newFlagMap[country] = data[0].flags.svg;
          } else {
            console.error(`No flag found for ${country}`);
          }
        } catch (error) {
          console.error(`Error fetching flag for ${country}:`, error);
        }
      }
      setFlagMap(newFlagMap);
    };

    fetchFlags();
  }, [countries]);

  if (!countries.length) return null;

  const isGlobal =
    countries.length === 1 &&
    (countries[0] === "Global Coverage" ||
      countries[0] === "Worldwide Destinations" ||
      countries[0] === "Global Financial Services" ||
      countries[0].includes("Global") ||
      countries[0].includes("Worldwide"));

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#13294E] dark:text-white mb-6">
          {isGlobal ? "Global Coverage" : "Countries We Serve"}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Trusted immigration services across multiple destinations
        </p>
      </div>

      {isGlobal ? (
        <div className="relative bg-gradient-to-br from-[#13294E] to-[#FAA71A] rounded-3xl p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <Globe className="h-20 w-20 mx-auto mb-6 opacity-90" />
            <h3 className="text-3xl font-bold mb-4">Worldwide Service</h3>
            <p className="text-xl opacity-90">{countries[0]}</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#FAA71A]/30"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {flagMap[country] ? (
                    <div className="relative w-10 h-7 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={flagMap[country]}
                        alt={`${country} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-7 bg-gradient-to-br from-[#FAA71A] to-[#13294E] rounded-lg flex items-center justify-center shadow-md">
                      <MapPin className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-semibold group-hover:text-[#13294E] dark:group-hover:text-white transition-colors">
                  {country}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
