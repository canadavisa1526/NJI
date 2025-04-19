"use client";
import { motion } from "framer-motion";
import { values } from "@/data/aboutData";

const ValuesSection = () => {
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#13294e] relative">
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
            Our Core Values
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The principles that guide us in delivering excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {value.title == "Excellence" ? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative bg-white dark:bg-[#13294e]/80 p-6 md:p-8 rounded-2xl shadow-xl h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#faa71a] to-amber-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#13294e] dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {value.description}
                      <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-300" />
                  <div className="relative bg-white dark:bg-[#13294e]/80 p-6 md:p-8 rounded-2xl shadow-xl h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#faa71a] to-amber-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#13294e] dark:text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
