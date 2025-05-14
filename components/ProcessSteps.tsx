"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Users, CheckCircle, Plane } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Users,
      title: "Initial Consultation",
      description:
        "Free consultation to understand your requirements and eligibility",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      icon: FileText,
      title: "Documentation",
      description:
        "Complete assistance with document preparation and verification",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1746720827/paper_2_q9w4zp.jpg",
    },
    {
      icon: CheckCircle,
      title: "Application Filing",
      description: "Expert handling of your visa application",
      image:
        "https://res.cloudinary.com/dka63iohc/image/upload/v1746720611/form_i4zlky.jpg",
    },
    {
      icon: Plane,
      title: "Visa Approval",
      description:
        "Support until successful visa approval and travel preparation",
      image:
        "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#13294e] relative overflow-hidden">
      {/* Enhanced Decorative SVG shapes with animations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 right-0 w-64 h-64 -translate-y-1/4 translate-x-1/4 opacity-10 dark:opacity-5 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FAA71A"
            d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{
          duration: 2.5,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-0 left-0 w-80 h-80 translate-y-1/4 -translate-x-1/4 opacity-10 dark:opacity-5 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#AFC1DB"
            d="M39.9,-51.6C50.4,-42.8,56.9,-29.1,59.5,-15.1C62.2,-1.1,61,13.2,54.8,24.5C48.6,35.8,37.4,44.1,24.8,51.2C12.2,58.3,-1.8,64.2,-14.8,62C-27.8,59.8,-39.7,49.5,-47.2,37.3C-54.7,25.1,-57.8,10.9,-57.2,-3.1C-56.6,-17.1,-52.3,-31,-43.3,-40.1C-34.3,-49.3,-20.6,-53.7,-6.3,-46.7C8,-39.7,29.3,-60.4,39.9,-51.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-3 pointer-events-none"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#13294E" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-full mb-4"
          >
            <span className="text-[#FAA71A] font-medium">How We Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-6"
          >
            Our{" "}
            <span className="text-[#FAA71A] relative">
              Process
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#FAA71A]/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A simple and transparent process to help you achieve your
            immigration goals with confidence and peace of mind
          </motion.p>
        </motion.div>

        {/* Progress bar for all steps */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative h-2 bg-[#AFC1DB]/20 rounded-full mb-16 overflow-hidden max-w-4xl mx-auto"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/70 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#FAA71A] z-10"
              style={{ left: `calc(${(i / (steps.length - 1)) * 100}% - 8px)` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2 }}
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector lines between cards */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`connector-${i}`}
              className="hidden lg:block absolute top-1/3 h-0.5 bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/50 z-0"
              style={{
                left: `calc(${(i + 1) * 25}% - 4%)`,
                width: "8%",
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "8%" }}
              transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAA71A] rounded-full"
                animate={{ x: ["-50px", "0px"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  repeatType: "loop",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
          ))}

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Step number indicator with enhanced animated ring */}
              <div className="absolute -top-3 -left-3 z-10 w-16 h-16 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FAA71A]/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#FAA71A] to-[#FAA71A]/80 flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Enhanced image container with improved hover effects */}
              <div className="relative rounded-t-xl overflow-hidden h-48 shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#13294E]/90 via-[#13294E]/40 to-transparent"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Enhanced decorative element */}
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-30"
                  animate={{
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="30" fill="#FAA71A" />
                  </svg>
                </motion.div>
              </div>

              {/* Enhanced content area with better styling */}
              <div className="bg-white dark:bg-[#13294E]/90 rounded-b-xl p-6 border border-[#AFC1DB]/40 dark:border-[#FAA71A]/10 shadow-lg h-64 flex flex-col relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-[#FAA71A]/5 dark:bg-[#FAA71A]/5 pointer-events-none" />

                <div className="flex items-center mb-4 relative z-10">
                  <motion.div
                    className="p-3 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-lg mr-3"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(250, 167, 26, 0.3)",
                    }}
                  >
                    <step.icon className="h-6 w-6 text-[#FAA71A]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#13294E] dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <div className="flex-grow relative z-10">
                  <p className="text-[#13294E]/80 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Enhanced step indicator with animated progress */}
                <div className="mt-4 pt-3 border-t border-[#AFC1DB]/30 dark:border-white/10 flex justify-between items-center relative z-10">
                  <span className="text-xs font-medium text-[#13294E]/60 dark:text-gray-400">
                    Step {index + 1} of {steps.length}
                  </span>
                  <div className="w-16 h-2 bg-[#AFC1DB]/30 dark:bg-[#AFC1DB]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#FAA71A] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${((index + 1) / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
