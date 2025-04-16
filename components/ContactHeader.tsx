import React from "react";
import DecorativeElements from "./DecorativeElements";

const ContactHeader = () => {
  return (
    <div className="relative overflow-hidden bg-shreehari-blue text-white dark:bg-gray-900 dark:text-white py-16 pattern-bg">
      <DecorativeElements />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-block px-6 py-2 rounded-full bg-shreehari-purple/20 dark:bg-shreehari-purple/30 mb-6">
            <span className="font-medium">Contact</span>
          </div>

          {/* Phone Number */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            +91 95740 08581
          </h1>

          {/* Address */}
          <p className="text-lg max-w-2xl mx-auto text-white/80 dark:text-gray-300">
            A 403, Shivalik Yash, Opp. Shastrinagar BRTS Bus Stand, 132' Ring
            Road, Naranpura, Ahmedabad 380013, Gujarat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHeader;
