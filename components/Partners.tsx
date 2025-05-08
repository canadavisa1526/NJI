"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

// Partner logos
const partnerLogos = [
  {
    name: "LEAP",
    logo: "/images/partners/leap-logo.svg",
    darkLogo: "/images/partners/leap-logo-dark.svg",
    description:
      "Education loans and financial services for international students",
    link: "https://leapfinance.com/",
  },
  {
    name: "GEEBEE EDTECH PVT LTD",
    logo: "/images/partners/geebee-logo.svg",
    darkLogo: "/images/partners/geebee-logo-dark.svg",
    description:
      "Comprehensive education technology solutions for global education",
    link: "https://www.geebeeworld.com/",
  },
  {
    name: "Flywire",
    logo: "/images/partners/flywire-logo.svg",
    darkLogo: "/images/partners/flywire-logo-dark.svg",
    description: "Simplified international payment solutions for education",
    link: "https://www.flywire.com/",
  },
];

const Partners = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="py-20 bg-white dark:bg-[#13294E] transition-colors relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Orange blob */}
        <svg
          className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] opacity-10 dark:opacity-5"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FAA71A"
            d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Light blue circle */}
        <svg
          className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] opacity-10 dark:opacity-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" fill="#AFC1DB" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-full mb-4"
          >
            <span className="text-[#FAA71A] font-medium">Trusted Partners</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            Our Financial <span className="text-[#FAA71A]">Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300"
          >
            We collaborate with leading financial institutions to provide you
            with the best options for funding your international education
            journey.
          </motion.p>
        </div>

        {/* Partners grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnerLogos.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white dark:bg-[#13294E]/80 rounded-xl shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 dark:border-[#AFC1DB]/20 group"
            >
              <Link
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
                  <div className="h-16 sm:h-18 md:h-20 w-full flex items-center justify-center mb-6 relative">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={isDark ? partner.darkLogo : partner.logo}
                          alt={partner.name}
                          width={160}
                          height={60}
                          className="object-contain max-h-16 sm:max-h-18 md:max-h-20 transition-all duration-300 filter group-hover:brightness-110"
                        />
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 text-center">
                    {partner.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center">
                    {partner.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Need help with financing your education abroad?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Us For Financial Guidance
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
