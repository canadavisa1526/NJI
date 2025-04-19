"use client";
import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";
import { locations } from "@/data/aboutData";

const Card = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#AFC1DB]/20 to-white dark:from-[#13294e]/80 dark:to-[#13294e] relative">
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
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help with your immigration needs. Reach out to our
            team for expert guidance and personalized support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.city}
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white dark:bg-[#13294e] rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#faa71a]/10 to-amber-600/10 rounded-bl-full" />
                <div className="flex items-start mb-6">
                  <div className="p-2 md:p-3 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#13294e] dark:text-white mb-1">
                      {location.city}, {location.country}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {location.address}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {location.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-[#13294e] dark:group-hover:text-[#faa71a] transition-colors duration-300"
                    >
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-[#faa71a] mr-3" />
                      <span className="text-sm md:text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
