"use client";
import { motion } from "framer-motion";
import { stats } from "@/data/aboutData";

const StatsSection = () => {
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#AFC1DB]/20 dark:from-[#13294e] dark:to-[#13294e]/90 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-[#faa71a] dark:bg-[#faa71a]/50 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative bg-white dark:bg-[#13294e] p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#faa71a] to-amber-600 rounded-xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-[#13294e] dark:text-white mb-2">
                  {stat.value}
                </div>
                {stat.label == "Success  Rate" ? (
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                    <br />
                  </div>
                ) : (
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
