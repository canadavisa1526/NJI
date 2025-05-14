"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

// Partner logos
const partnerLogos = [
  {
    name: "LEAP",
    logo: "https://d14lg9nzq1d3lc.cloudfront.net/advance-website/assets/images/company-logo/logo.svg",
    darkLogo:
      "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/ziayplsjdeocjo3kfksb",
    description:
      "Leap Finance offers education loans, visa counseling, and financial products tailored for Indian students planning to study abroad.",
    link: "https://leapfinance.com/",
  },
  {
    name: "GEEBEE EDTECH PVT LTD",
    logo: "https://cdn.prod.website-files.com/61c9e5791e48c43d0e1b68dc/61c9e7f0896cbfe2c2063f3d_GeeBee%20Side%20Logo%20GBED%201.svg",
    darkLogo:
      "https://cdn.prod.website-files.com/61c9e5791e48c43d0e1b68dc/61c9e7f0896cbfe2c2063f3d_GeeBee%20Side%20Logo%20GBED%201.svg",
    description:
      "GeeBee Education provides expert guidance for overseas education, covering admissions, visas, test prep, and travel assistance.",
    link: "https://www.geebeeworld.com/",
  },
  {
    name: "Flywire",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuXguRW4ODLzhsFDHujdw2KS0f-piFJqv5w&s",
    darkLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuXguRW4ODLzhsFDHujdw2KS0f-piFJqv5w&s",
    description:
      "Flywire enables seamless international education payments, offering transparency and localized customer support.",
    link: "https://www.flywire.com/",
  },
  {
    name: "Pearson PTE",
    logo: "https://www.pearsonpte.com/assets/images/Logo.svg",
    darkLogo: "https://www.pearsonpte.com/assets/images/Logo.svg",
    description:
      "Pearson PTE is a globally recognized English proficiency test trusted by universities, governments, and employers.",
    link: "https://www.pearsonpte.com/",
  },
  {
    name: "British Council IELTS",
    logo: "https://files.delhievents.com/images/events/2017/march/British-Council-Logo.jpg",
    darkLogo:
      "https://files.delhievents.com/images/events/2017/march/British-Council-Logo.jpg",
    description:
      "British Council IELTS provides trusted English testing for study, work, and migration worldwide.",
    link: "https://www.britishcouncil.org/exam/ielts",
  },
  {
    name: "IDP IELTS",
    logo: "https://www.ieltsvisa.com/wp-content/uploads/2020/06/logo-idp-ielts-colour.png",
    darkLogo:
      "https://www.ieltsvisa.com/wp-content/uploads/2020/06/logo-idp-ielts-colour.png",
    description:
      "IDP co-owns IELTS and offers testing services alongside support for international education pathways.",
    link: "https://www.ielts.org/",
  },
];

const Partners = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Number of cards to show based on screen size
  const [visibleItems, setVisibleItems] = useState(3);

  // Auto-slider effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex + 1) % (partnerLogos.length - visibleItems + 1)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, visibleItems]);

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        if (width < 640) {
          setVisibleItems(1);
        } else if (width < 1024) {
          setVisibleItems(2);
        } else {
          setVisibleItems(3);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const sliderVariants = {
    animate: {
      x: `calc(-${currentIndex * (100 / visibleItems)}%)`,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
      },
    },
  };

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
            <span className="text-[#FAA71A] font-medium">
              Global Partnerships
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6"
          >
            Our <span className="text-[#FAA71A]">Trusted Partners</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300"
          >
            We collaborate with leading institutions in finance, education, and
            testing to provide comprehensive support for your international
            education journey.
          </motion.p>
        </div>

        {/* Partners auto-slider */}
        <div
          className="relative mb-16 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            variants={sliderVariants}
            animate="animate"
          >
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className="bg-white dark:bg-[#13294E]/80 rounded-xl shadow-lg transition-all duration-300 h-full
                  overflow-hidden border border-gray-100 dark:border-[#AFC1DB]/20 group hover:shadow-xl
                  transform hover:-translate-y-2"
                >
                  <Link
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center h-full">
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Slider indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: partnerLogos.length - visibleItems + 1 }).map(
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "bg-[#FAA71A] w-6"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-[#FAA71A]/50 dark:hover:bg-[#FAA71A]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              )
            )}
          </div>
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
            Need help with your international education journey?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Contact Our Expert Advisors
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
