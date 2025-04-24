import { MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";
import CountrySlider from "../CountryScroll/CountrySlider";

interface CountriesListProps {
  countries: string[];
}

export default function CountriesList({ countries }: CountriesListProps) {
  if (!countries.length) return null;

  const isGlobal =
    countries.length === 1 &&
    (countries[0] === "Global Coverage" ||
      countries[0] === "Worldwide Destinations" ||
      countries[0] === "Global Financial Services" ||
      countries[0].includes("Global") ||
      countries[0].includes("Worldwide"));

  return (
    <>
      <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
        {isGlobal ? "Coverage" : "Countries Covered"}
      </h2>
      {/* <CountrySlider /> */}
      {isGlobal ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#13294E]/5 to-[#13294E]/10 dark:from-[#13294E]/20 dark:to-[#13294E]/30 rounded-lg"
        >
          <Globe className="h-6 w-6 text-[#13294E] dark:text-[#FAA71A]" />
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            {countries[0]}
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 p-3 rounded-md bg-gray-50 dark:bg-gray-800 border border-[#AFC1DB]/20 dark:border-gray-700 transition-all hover:border-[#AFC1DB] dark:hover:border-[#FAA71A]/50 hover:shadow-sm"
            >
              <MapPin className="h-4 w-4 text-[#FAA71A]" />
              <span className="text-gray-700 dark:text-gray-300">
                {country}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
