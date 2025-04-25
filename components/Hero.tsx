"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  Globe2,
  Award,
  Users,
  Sparkles,
  BookOpen,
  Plane,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "./ConsultationDialog";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const waveWidth = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Animate stats
    const stats = [15000, 50, 99, 24];
    stats.forEach((target, index) => {
      animate(0, target, {
        duration: 2,
        onUpdate: (value) => {
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(value);
            return newCounts;
          });
        },
      });
    });
  }, []);

  const stats = [
    {
      icon: GraduationCap,
      value: 15000,
      label: "Students Placed",
      suffix: "+",
    },
    { icon: Globe2, value: 50, label: "Countries", suffix: "+" },
    { icon: Award, value: 99, label: "Success Rate", suffix: "%" },
    { icon: Users, value: 24, label: "Support", suffix: "/7" },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <section className="relative h-[70vh] md:h-[80vh]">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              className="absolute w-full md:w-auto md:min-w-full h-full object-cover md:object-center"
              autoPlay
              muted
              loop
              playsInline
              style={{
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <source
                src="https://res.cloudinary.com/dka63iohc/video/upload/v1744996007/nji-hero_ltq8dm.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
          </div>

          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute hidden md:block"
              initial={{ x: -100, y: 100 + i * 200 }}
              animate={{
                x: "120vw",
                y: [100 + i * 200, 50 + i * 200, 100 + i * 200],
              }}
              transition={{
                duration: 20 - i * 2,
                repeat: Infinity,
                ease: "linear",
                y: {
                  duration: 10 - i,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Plane className="h-8 w-8 text-white/30 transform -rotate-45" />
              <motion.div
                className="absolute top-1/2 right-0 h-0.5 w-20 origin-left"
                style={{
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.3), transparent)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          ))}

          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 md:mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-white">
                Transform Your Future with NJI Education
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-[#FAA71A] backdrop-blur-md hover:bg-[#FAA71A]/80 text-white font-semibold border-none shadow-lg"
                onClick={() => setIsConsultationOpen(true)}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <div className="absolute bottom-5 left-0 right-0 z-10 px-2">
          <div className="mx-auto">
            {/* Increased gap from gap-2 to gap-8 */}
            <div className="flex justify-around gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center justify-center text-center w-[70px] md:w-[80px]"
                >
                  <motion.div
                    className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#FAA71A] to-[#FAA71A]/50 text-white mb-1 hover:scale-110 transition-transform shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <stat.icon className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                  <motion.div
                    className="text-sm md:text-base font-bold text-white"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {counts[index]}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-[10px] md:text-xs text-white/80 line-clamp-1 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Gradient Wave */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 z-0"
          style={{ width: waveWidth }}
        >
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#13294E" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#13294E" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              d="M0 192L48 197.3C96 203 192 213 288 192C384 171 480 117 576 117.3C672 117 768 171 864 197.3C960 224 1056 224 1152 208C1248 192 1344 160 1392 144L1440 128V320H0V192Z"
            />
          </svg>
        </motion.div>
      </section>

      <ConsultationDialog
        open={isConsultationOpen}
        onOpenChange={setIsConsultationOpen}
      />
    </div>
  );
};

export default Hero;
