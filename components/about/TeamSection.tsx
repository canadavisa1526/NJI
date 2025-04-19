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
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/30 to-white dark:from-[#13294e]/90 dark:to-[#13294e] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -left-20 w-96 h-96 bg-[#faa71a]/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-32 w-[500px] h-[500px] bg-[#13294e]/10 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [-50, 0, -50],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-[#faa71a]/5 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            y: [-20, 20, -20],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl bg-[#13294e]/5 dark:bg-white/5">
                {/* Decorative corner shapes */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#faa71a]/10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#13294e]/10 dark:bg-white/10 rounded-tr-full transform -translate-x-16 translate-y-16 group-hover:-translate-x-14 group-hover:translate-y-14 transition-transform duration-700" />
                
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#13294e]/80 via-transparent to-[#faa71a]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image */}
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  src={member.image}
                  alt={member.name}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {/* Text background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13294e]/95 via-[#13294e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white transform group-hover:scale-105 transition-transform duration-500">
                      {member.name}
                    </h3>
                    <p className="text-[#faa71a] font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {member.role}
                    </p>
                    {/* <p className="text-white/90 mt-3 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200 line-clamp-3">
                      {member.bio}
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