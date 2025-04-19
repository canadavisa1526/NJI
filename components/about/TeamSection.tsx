"use client";
import { motion } from "framer-motion";
import { teamMembers } from "@/data/aboutData";
import { cn } from "@/lib/utils";
import Image from "next/image";

const TeamSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/30 to-white dark:from-[#13294e]/90 dark:to-[#13294e] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="w-full max-w-sm flex flex-col bg-white dark:bg-[#13294e] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
                {/* Slightly taller image container */}
                <div className="relative w-full h-72">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13294e]/60 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-300" />
                </div>

                {/* Slightly taller content box */}
                <div className="flex-1 p-6 flex flex-col justify-between min-h-[160px]">
                  <div>
                    <h3 className="text-2xl font-bold text-[#13294e] dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#faa71a] font-semibold text-lg">
                      {member.role}
                    </p>
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
