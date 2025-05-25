"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Users,
  Clock,
  Award,
  CheckCircle,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description: "Registered immigration consultants with proven expertise",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient handling of visa applications and paperwork",
  },
  {
    icon: Award,
    title: "High Success Rate",
    description: "98% visa approval success rate across multiple countries",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Support",
    description: "From application to settlement, we’ve got you covered",
  },
  {
    icon: ThumbsUp,
    title: "Personalized Service",
    description: "We understand your goals and tailor every step accordingly",
  },
];

const chunkSize = 3;

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [];
  for (let i = 0; i < reasons.length; i += chunkSize) {
    slides.push(reasons.slice(i, i + chunkSize));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const slideVariants = {
    enter: { opacity: 0, y: 30 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="py-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FAA71A] to-[#f39c00] rounded-full mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#13294e] dark:text-white mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#FAA71A] to-[#f39c00] bg-clip-text text-transparent">
              New Journey Immigration
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We&apos;re committed to making your immigration journey smooth,
            secure, and successful with personalized guidance every step of the
            way.
          </p>
        </motion.div>

        {/* Animated Cards */}
        <div className="h-[320px] sm:h-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {slides[currentIndex].map((reason) => (
                <div
                  key={reason.title}
                  className="bg-white dark:bg-[#13294e] rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 border border-[#faa71a]/20 dark:border-[#faa71a]/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <reason.icon className="w-9 h-9 text-[#faa71a]" />
                    <h3 className="text-xl font-semibold text-[#13294e] dark:text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-[#13294e]/80 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
