"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const locations = [
  {
    city: "Brampton",
    country: "Canada",
    address: "Steels Ave W, Brampton, ON, Canada, L6Y 2R7",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9353704200584!2d-79.7516899!3d43.7349013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d1b89e8bc41%3A0x1e0c0f1b1da4ee24!2sSteeles%20Ave%20W%2C%20Brampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin",
  },
  {
    city: "Mehsana",
    country: "India",
    address: "20/C, Krishna Complex Nr. Radhanpur circle, mehsana-1, 384001",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0197527762893!2d72.36701431496837!3d23.23159498484721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c5bb7bb%3A0x5074fe9e0c1c8bd!2sRadhanpur%20Circle%2C%20Mehsana%2C%20Gujarat%20384002!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin",
  },
  {
    city: "Ahmedabad",
    country: "India",
    address: "Vaishnodevi circle, SG Highway, Ahmedabad, 382421",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262773530762!2d72.36894214999999!3d23.215677449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c5bb7bb%3A0x5074fe9e0c1c8bd!2sVaishnodevi%20Circle%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin",
  },
];

export default function LocationsMap() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-[#13294E]">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#13294E] dark:text-white">
            Find Us Around The World
          </h2>
          <p className="text-base md:text-lg text-[#13294E]/80 dark:text-gray-300 max-w-2xl mx-auto">
            Our offices are strategically located to provide you with the best
            immigration services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {locations.map((location) => (
            <motion.div
              key={location.city}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-[#AFC1DB] dark:bg-[#1E3A8A] rounded-2xl shadow-md overflow-hidden"
            >
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#FAA71A] to-[#F97316] p-3 rounded-lg shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-[#13294E] dark:text-white">
                      {location.city}, {location.country}
                    </h3>
                    <p className="text-sm text-[#13294E]/80 dark:text-gray-300">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
              <iframe
                src={location.mapUrl}
                width="100%"
                height="250"
                className="w-full rounded-b-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} Office Location`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
