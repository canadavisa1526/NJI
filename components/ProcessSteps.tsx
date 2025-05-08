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
      {/* Decorative SVG shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/4 translate-x-1/4 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FAA71A"
            d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-80 h-80 translate-y-1/4 -translate-x-1/4 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#AFC1DB"
            d="M39.9,-51.6C50.4,-42.8,56.9,-29.1,59.5,-15.1C62.2,-1.1,61,13.2,54.8,24.5C48.6,35.8,37.4,44.1,24.8,51.2C12.2,58.3,-1.8,64.2,-14.8,62C-27.8,59.8,-39.7,49.5,-47.2,37.3C-54.7,25.1,-57.8,10.9,-57.2,-3.1C-56.6,-17.1,-52.3,-31,-43.3,-40.1C-34.3,-49.3,-20.6,-53.7,-6.3,-46.7C8,-39.7,29.3,-60.4,39.9,-51.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-5 dark:opacity-3 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="#13294E" />
        </svg>
      </div>

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

          <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-6">
            Our <span className="text-[#FAA71A]">Process</span>
          </h2>

          <p className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto">
            A simple and transparent process to help you achieve your
            immigration goals with confidence and peace of mind
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Step number indicator with animated ring */}
              <div className="absolute -top-3 -left-3 z-10 w-16 h-16 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#faa71a]/20 animate-ping opacity-75 duration-1000 group-hover:opacity-100"></div>
                <div className="absolute w-14 h-14 rounded-full bg-[#faa71a] flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Image container with fixed height and object-position:top */}
              <div className="relative rounded-t-xl overflow-hidden h-48 shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                {/* Small decorative SVG in corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-30">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="30" fill="#FAA71A" />
                  </svg>
                </div>
              </div>

              {/* Content area with fixed height */}
              <div className="bg-white dark:bg-[#13294e]/80 rounded-b-xl p-6 border border-[#AFC1DB]/40 dark:border-white/10 shadow-lg h-64 flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-lg mr-3">
                    <step.icon className="h-6 w-6 text-[#faa71a]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#13294e] dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <div className="flex-grow">
                  {step.title === "Application Filing" ? (
                    <>
                      <p className="text-[#13294e]/80 dark:text-gray-300">
                        {step.description}
                      </p>
                    </>
                  ) : (
                    <p className="text-[#13294e]/80 dark:text-gray-300">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Step indicator */}
                <div className="mt-4 pt-3 border-t border-[#AFC1DB]/30 dark:border-white/10 flex justify-between items-center">
                  <span className="text-xs font-medium text-[#13294e]/60 dark:text-gray-400">
                    Step {index + 1} of {steps.length}
                  </span>
                  <div className="w-8 h-1 bg-[#FAA71A] rounded-full"></div>
                </div>
              </div>

              {/* Connector Line for Desktop */}
              {
                // index < steps.length - 1 && (
                //   <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-[#faa71a] to-[#ffc95f] dark:from-[#faa71a]/80 dark:to-[#faa71a]/30 -translate-y-1/2 transform translate-x-4 z-10">
                //     {/* Animated dots */}
                //     <motion.div
                //       className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#faa71a] rounded-full shadow-sm"
                //       animate={{ x: [0, 100, 0] }}
                //       transition={{
                //         repeat: Infinity,
                //         duration: 3,
                //         ease: "linear",
                //       }}
                //     />
                //     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#faa71a] rounded-full shadow-sm" />
                //   </div>
                // )
              }
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
