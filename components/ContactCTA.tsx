"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import AppointmentDialog from "./AppointmentDialog";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import dynamic from "next/dynamic";

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import paperPlaneAnim from "@/public/Animation-1.json";
// import paperPlane from "@/public/Animation-3.json";

const ContactCTA = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 border-t border-gray-200 dark:border-gray-700">
      {/* Decorative Dots */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-200 dark:bg-orange-500 rounded-full opacity-40 animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Flight SVG Path (Top) */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-40 z-0 pointer-events-none"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,100 C400,0 1040,200 1440,100"
          stroke="#fb923c"
          strokeWidth="2"
          strokeDasharray="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Plane animation (Left to Right) */}
      <motion.div
        className="absolute top-[100px] left-[-40px] z-10"
        initial={{ x: 0 }}
        animate={{ x: "1500px" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <Image
          src="https://www.svgrepo.com/show/370521/plane.svg"
          alt="Plane"
          width={40}
          height={40}
          className="rotate-[25deg] opacity-90"
        />
      </motion.div>

      {/* Flight SVG Path (Bottom) */}
      <motion.svg
        className="absolute bottom-0 right-0 w-full h-40 z-0 pointer-events-none"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M1440,100 C1040,200 400,0 0,100"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>

      {/* Plane animation (Right to Left) */}
      <motion.div
        className="absolute bottom-[100px] right-[-40px] z-10"
        initial={{ x: 0 }}
        animate={{ x: "-1500px" }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <Image
          src="https://www.svgheart.com/wp-content/uploads/2020/06/airplane-aircraft-clipart-free-svg-file.png"
          alt="Plane"
          width={35}
          height={35}
          className="rotate-[-20deg] opacity-90"
        />
      </motion.div>

      {/* Floating Lottie Animations */}
      <div className="absolute top-12 right-12 z-10 w-10 h-10 opacity-80 pointer-events-none">
        <Lottie animationData={paperPlaneAnim} loop />
      </div>
      <div className="absolute top-12 left-12 z-10 w-10 h-10 opacity-80 pointer-events-none">
        <Lottie animationData={paperPlaneAnim} loop />
      </div>

      {/* Main CTA Box */}
      <Tilt
        tiltMaxAngleX={6}
        tiltMaxAngleY={6}
        glareEnable={true}
        glareMaxOpacity={0.1}
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center bg-white dark:bg-gray-800 border border-orange-200 dark:border-orange-400 rounded-2xl p-10 shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
          >
            Ready to Begin Your New Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10"
          >
            Talk to our experts today and let your dream journey take flight.
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAppointmentOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all"
            >
              Book Free Consultation{" "}
              <ArrowRight className="inline ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </Tilt>

      {/* Modal */}
      <AppointmentDialog
        open={isAppointmentOpen}
        onOpenChange={setIsAppointmentOpen}
      />
    </section>
  );
};

export default ContactCTA;
