"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Free initial consultation",
    "Dedicated case manager",
    "Regular application status updates",
    "Document verification assistance",
    "Interview preparation support",
    "Post-landing services",
    "Multi-language support",
    "Flexible payment options",
  ];

  return (
    <section className="py-20 bg-[#ffffff] dark:bg-[#13294e] relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#faa71a]/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#AFC1DB]/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-6">
              Benefits of Choosing Our Services
            </h2>
            <p className="text-lg text-[#13294e]/80 dark:text-gray-300 mb-8">
              Experience hassle-free immigration with our comprehensive range of
              benefits designed to make your journey smooth and successful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-[#faa71a]" />
                  </div>
                  <span className="text-[#13294e] dark:text-white">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60"
                alt="Immigration Benefits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/90 dark:bg-[#13294e]/90 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-[#13294e] dark:text-white mb-2">
                    Start Your Journey Today
                  </h3>
                  <p className="text-[#13294e]/80 dark:text-gray-300">
                    Let us help you achieve your immigration goals with our
                    expert guidance and support.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
