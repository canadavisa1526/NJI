"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
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

// CountUp component to animate numbers from 0 to target value
const CountUp = ({
  end,
  suffix = "",
  duration = 2,
}: {
  end: string;
  suffix?: string;
  duration?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [count, setCount] = useState(0);

  // Parse the numeric part of the end value
  const numericEnd = parseInt(end.replace(/,/g, "").replace(/\D/g, ""));
  const isNumeric = !isNaN(numericEnd) && end !== "24/7"; // Special case for 24/7

  useEffect(() => {
    // Reset counter when component mounts or goes out of view
    if (!isInView) {
      setCount(0);
      return;
    }

    // Start animation when in view
    if (!isNumeric) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * numericEnd);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, numericEnd, duration, isNumeric]);

  return (
    <div
      ref={ref}
      className="text-xl md:text-3xl font-bold text-white mb-0.5 md:mb-2"
    >
      {isNumeric ? (isInView ? count.toLocaleString() : "0") + suffix : end}
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [dotCount, setDotCount] = useState(50);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  // Update dot count based on screen size
  useEffect(() => {
    setDotCount(isMobile ? 25 : 50);
  }, [isMobile]);

  const stats = [
    {
      icon: GraduationCap,
      value: "15,000+",
      label: "Students Placed",
      numericValue: "15000",
      suffix: "+",
    },
    {
      icon: Globe2,
      value: "50+",
      label: "Countries",
      numericValue: "50",
      suffix: "+",
    },
    {
      icon: Award,
      value: "99%",
      label: "Success Rate",
      numericValue: "99",
      suffix: "%",
    },
    {
      icon: Users,
      value: "24/7",
      label: "Support",
      numericValue: "24/7",
      suffix: "",
    },
  ];

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <section className="relative h-[50vh] md:h-[70vh] pt-12 md:pt-20 pb-24 md:pb-52 flex flex-col">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://res.cloudinary.com/dka63iohc/video/upload/v1744996007/nji-hero_ltq8dm.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/30 md:bg-black/20 backdrop-blur-[2px]" />

          {/* Flying Planes - Hide on small screens, show on medium and up */}
          {/* <div className="hidden md:block">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: -100,
                  y: 100 + i * 150,
                }}
                animate={{
                  x: "120vw",
                  y: [100 + i * 150, 50 + i * 150, 100 + i * 150],
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
                <Plane className="h-6 w-6 md:h-8 md:w-8 text-white/30 transform -rotate-45" />
                <motion.div
                  className="absolute top-1/2 right-0 h-0.5 w-12 md:w-20 origin-left"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(255,255,255,0.3), transparent)",
                  }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{
                    scaleX: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </div> */}

          {/* Animated Dots - Fewer on mobile */}
          {/* {[...Array(dotCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))} */}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-32 flex-grow flex items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 md:mb-8">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-yellow-300 mr-1.5 md:mr-2" />
              <span className="text-white text-sm md:text-base">
                Transform Your Future with NJI Education
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <Button
                size="lg"
                className="bg-[#FAA71A] backdrop-blur-md hover:bg-white/30 text-white font-semibold border border-white/30 text-sm md:text-base py-5 px-4"
                onClick={() => setIsConsultationOpen(true)}
              >
                <BookOpen className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats - now at the bottom with improved responsive layout */}

        {/* Gradient Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1440 280"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#13294E" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill="url(#waveGradient)"
              fillOpacity="1"
              d="M0 72L48 77.3C96 83 192 93 288 72C384 51 480 0 576 0.3C672 0 768 51 864 77.3C960 104 1056 104 1152 88C1248 72 1344 40 1392 24L1440 8V363H0V72Z"
            />
          </svg>
        </div>

        {/* Stats section with improved responsive layout */}
        <div className="absolute bottom-2 md:bottom-3 left-0 right-0 z-10 px-3 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="backdrop-blur-sm rounded-lg p-1.5 md:p-4"
                >
                  <div className="inline-flex items-center justify-center w-7 h-7 md:w-12 md:h-12 rounded-full bg-[#FAA71A]/20 text-[#FAA71A] mb-1 md:mb-4 hover:scale-110 transition-transform">
                    <stat.icon className="h-3.5 w-3.5 md:h-6 md:w-6" />
                  </div>
                  <CountUp
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                  <div className="text-[10px] md:text-base text-gray-200 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConsultationDialog
        open={isConsultationOpen}
        onOpenChange={setIsConsultationOpen}
      />
    </div>
  );
};

export default Hero;
