"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Globe2, Users } from "lucide-react";

const FeaturedSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Get personalized advice from education experts",
    },
    {
      icon: Award,
      title: "Top Universities",
      description: "Access to world-ranked institutions",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Connect with students worldwide",
    },
    {
      icon: Users,
      title: "Student Support",
      description: "24/7 assistance throughout your journey",
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-[#13294e] transition-colors overflow-hidden">
      {/* SVG Decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] opacity-20 dark:opacity-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#faa71a"
            d="M43.7,-56.1C57.8,-47.8,70.5,-34.4,73.3,-19.5C76.1,-4.6,69.1,12,59.5,25.4C49.9,38.7,37.7,48.7,24.7,54.9C11.8,61.1,-2,63.6,-16.1,60.6C-30.2,57.5,-44.6,49,-53.8,36.5C-63.1,23.9,-67.1,7.4,-65.6,-9.2C-64.1,-25.7,-57.1,-42.3,-44.9,-50.6C-32.7,-59,-16.4,-59,0.4,-59.5C17.2,-60,34.3,-61.1,43.7,-56.1Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] opacity-10 dark:opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="50" fill="#AFC1DB" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-[#faa71a]">Transform Your Future</span> with Global Education
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Take the first step towards your international education journey
              with our{" "}
              <span className="text-[#faa71a] font-semibold">expert support and guidance.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-xl transition-shadow bg-[#f9fafb] dark:bg-white/10 backdrop-blur-md border border-gray-100 dark:border-white/10"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-[#faa71a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side with Hover Light Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
                alt="Students studying"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />

              {/* Hover Light Glow */}
              <div className="absolute inset-0 pointer-events-none z-20 transition duration-500 ease-out group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />

              {/* Stats */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="bg-white/90 dark:bg-[#AFC1DB]/10 border border-gray-200 dark:border-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#faa71a]">
                        15,000+
                      </div>
                      <div className="text-sm text-gray-800 dark:text-white">
                        Students Placed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#faa71a]">
                        98%
                      </div>
                      <div className="text-sm text-gray-800 dark:text-white">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
