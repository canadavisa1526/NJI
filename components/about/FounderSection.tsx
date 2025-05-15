"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { founder } from "@/data/aboutData";

const FounderSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AFC1DB]/30 to-white/90 dark:from-[#13294e]/90 dark:to-[#13294e]/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-gradient-to-r from-[#faa71a] to-amber-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4">
            Our Visionary Leader
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294e] dark:text-white mb-4">
            Meet Our Founder
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="relative group"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-3xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300"
              style={{
                maxWidth: "90%",
                margin: "0 auto",
                left: "5%",
                right: "5%"
              }}
            />
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300"
              initial={{ perspective: 1000, rotateX: 1, rotateY: -1 }}
              whileHover={{ rotateX: 0, rotateY: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{
                position: "relative",
                maxWidth: "90%", /* Ensure container isn't too wide */
                margin: "0 auto" /* Center the container */
              }}
            >
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover object-[center_20%]"
                style={{
                  transform: "scale(1.25)",  /* Increased scale to crop sides more */
                  transformOrigin: "center 15%", /* Adjusted to focus more on face */
                  filter: "brightness(1.05) contrast(1.05) saturate(1.05)",
                  /* Clip the image on left and right sides */
                  clipPath: "inset(0 12% 0 12%)" /* Increased cropping */
                }}
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13294e]/80 via-[#13294e]/30 to-transparent pointer-events-none shadow-inner" />

              {/* 3D effect shadow */}
              <div className="absolute inset-0 shadow-[inset_0_-10px_20px_rgba(0,0,0,0.2)] pointer-events-none z-10"></div>

              {/* 3D effect highlight */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 pointer-events-none z-5"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 px-4">
                <div className="bg-white/90 dark:bg-[#13294e]/90 backdrop-blur-md rounded-xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                  <p className="text-sm text-[#13294e] dark:text-white italic text-center">
                    "{founder.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#13294e] dark:text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-xl text-[#faa71a] font-semibold mb-6 md:mb-8">
                {founder.role}
              </p>
              <div className="prose dark:prose-invert max-w-none space-y-4 md:space-y-6">
                {founder.description.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6">
              <h4 className="text-xl md:text-2xl font-semibold text-[#13294e] dark:text-white">
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {founder.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center space-x-4 bg-[#faa71a]/10 dark:bg-[#faa71a]/20 rounded-xl p-3 md:p-4 hover:shadow-lg transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div className="p-2 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                          <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                      </div>
                      <span className="text-sm md:text-base text-[#13294e] dark:text-gray-200 font-medium">
                        {achievement}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
