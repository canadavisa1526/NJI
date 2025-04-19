"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/313691/pexels-photo-313691.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#13294e]/90 via-[#13294e]/70 to-[#13294e]/90" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#faa71a] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-40 right-20 w-64 h-64 bg-[#AFC1DB] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-[#faa71a]/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <span className="inline-block text-[#faa71a] text-lg font-semibold mb-4">
            Welcome to New Journey Immigration
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Your Journey,{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#faa71a] to-amber-500">
              Our Commitment
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Transforming dreams into reality through expert guidance and
            unwavering support
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-[#faa71a] hover:bg-amber-600 text-[#13294e] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full p-1"
        >
          <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-scroll" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;