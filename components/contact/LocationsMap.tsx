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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9353704200584!2d-79.7516899!3d43.7349013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d1b89e8bc41%3A0x1e0c0f1b1da4ee24!2sSteeles%20Ave%20W%2C%20Brampton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin"
  },
  {
    city: "Mehsana",
    country: "India",
    address: "20/C, Krishna Complex Nr. Radhanpur circle, mehsana-1, 384001",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.0197527762893!2d72.36701431496837!3d23.23159498484721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c5bb7bb%3A0x5074fe9e0c1c8bd!2sRadhanpur%20Circle%2C%20Mehsana%2C%20Gujarat%20384002!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin"
  },
  {
    city: "Ahmedabad",
    country: "India",
    address: "Vaishnodevi circle, SG Highway, Ahmedabad, 382421",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262773530762!2d72.36894214999999!3d23.215677449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b987c5bb7bb%3A0x5074fe9e0c1c8bd!2sVaishnodevi%20Circle%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1650532956589!5m2!1sen!2sin"
  }
];

export default function LocationsMap() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
            Find Us Around The World
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our offices are strategically located to provide you with the best immigration services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <motion.div
              key={location.city}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-400 to-pink-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {location.city}, {location.country}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
              <iframe 
                src={location.mapUrl}
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} Office Location`}
                className="w-full"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}