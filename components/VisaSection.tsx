"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { ShapePattern } from "./shape-patterns";
import {
  GraduationCap,
  Globe2,
  Plane,
  Award,
  Sparkles,
  BookOpen,
} from "lucide-react";

const VisaSection: FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-[#13294E] transition-colors min-h-[70vh] flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#FAA71A] rounded-bl-full opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#AFC1DB] rounded-tr-full opacity-30 z-0" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-[#FAA71A] rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-64 h-64 bg-[#13294E] rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-64 h-64 bg-[#AFC1DB] rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>

      {/* Pattern Background */}
      <ShapePattern variant="circles" color="#FAA71A" className="opacity-5" />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[15%] right-[10%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1 }}
        >
          <GraduationCap className="w-8 h-8 text-[#FAA71A]" />
        </motion.div>
        <motion.div
          className="absolute bottom-[20%] left-[15%]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* <Globe2 className="w-8 h-8 text-[#AFC1DB]" /> */}
        </motion.div>
        <motion.div
          className="absolute top-[40%] left-[5%]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* <BookOpen className="w-6 h-6 text-[#FAA71A]" /> */}
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] right-[8%]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Award className="w-7 h-7 text-[#AFC1DB]" />
        </motion.div>

        {/* Flying Plane Animation */}
        <motion.div
          className="absolute"
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{
            x: ["-10vw", "110vw"],
            y: ["40vh", "30vh"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatDelay: 10,
          }}
        >
          <Plane className="w-8 h-8 text-[#FAA71A] rotate-12" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block bg-[#FAA71A] dark:bg-[#AFC1DB] text-[#13294E] dark:text-[#13294E] px-4 py-1 rounded-full text-sm font-semibold shadow-md w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to New Journey Immigration
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13294E] dark:text-white leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Complete Visa & IELTS Services Under One Roof
            </motion.h1>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-[#FAA71A] mt-1 flex-shrink-0" />
                <span>
                  We help turn your study abroad dreams into reality with
                  complete services — from admissions and visas to GIC,
                  education loans, accommodations, and flights.
                </span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-[#FAA71A] mt-1 flex-shrink-0" />
                <span>
                  Whether you're applying to Canada, the UK, or Australia, our
                  experienced team ensures a smooth and stress-free journey
                  tailored to your needs.
                </span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-[#FAA71A] mt-1 flex-shrink-0" />
                <span>
                  Our certified IELTS instructors offer personalized coaching to
                  help you reach your desired band scores and get into top
                  institutions abroad.
                </span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-[#FAA71A] mt-1 flex-shrink-0" />
                <span>
                  With offices in Mehsana, Ahmedabad, and Toronto, we provide
                  both local expertise and global reach to support students at
                  every stage.
                </span>
              </p>

              <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-[#FAA71A] mt-1 flex-shrink-0" />
                <span>
                  Available 24/7, our team is always here to guide, support, and
                  answer your questions — from your first step to your final
                  destination.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* <button className="bg-[#FAA71A] text-[#13294E] px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#e69c14] transition-all shadow-md flex items-center gap-2 mt-4">
                <Plane className="w-4 h-4" />
                Get Free Consultation
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[32rem] h-[32rem] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden shadow-2xl group transform transition-all duration-500 hover:rounded-[40%_60%_60%_40%/40%_40%_60%_60%] hover:rotate-3">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Happy international students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#13294E]/30 via-[#FAA71A]/20 to-[#AFC1DB]/30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none" />

              {/* Image Border Animation */}
              <motion.div
                className="absolute inset-0 border-4 border-[#FAA71A] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-0 group-hover:opacity-40 transition-opacity"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
