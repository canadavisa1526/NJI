"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/data/aboutData";
import Image from "next/image";

const TeamSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/30 to-white dark:from-[#13294e] dark:to-[#13294e] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294e] dark:text-white mb-6">
            Our Leadership Team
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the experts who make your immigration journey successful
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {teamMembers.map((member, index) => (
  <motion.div
    key={member.name}
    initial="hidden"
    whileInView="visible"
    variants={fadeInUp}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    className="relative group"
  >
    {/* Less rotated gradient border */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#faa71a] to-amber-500 transform rotate-3 scale-105 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500 ease-out -z-10 shadow-2xl" />

    {/* Image Card */}
    <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 bg-white dark:bg-[#1e2a47]">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#13294e]/70 via-[#13294e]/40 to-transparent dark:from-black dark:via-black/60 dark:to-black/10" />
      <div className="absolute bottom-4 left-4 right-4 px-4">
        <div className="bg-white dark:bg-[#13294e] backdrop-blur-md rounded-xl p-1 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-lg font-bold text-[#13294e] dark:text-white text-center">
            {member.name}
          </h3>
          {/* <p className="text-[#faa71a] font-semibold text-sm text-center mt-1">
            {member.role}
          </p> */}
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

export default TeamSection;
