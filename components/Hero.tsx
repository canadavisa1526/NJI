"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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
    <div ref={ref} className="text-3xl font-bold text-white mb-2">
      {isNumeric ? (isInView ? count.toLocaleString() : "0") + suffix : end}
    </div>
  );
};

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

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
      <section className="relative min-h-screen pt-20 pb-52">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
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
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

          {/* Flying Planes */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: -100,
                y: 100 + i * 200,
              }}
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

          {/* Animated Dots */}
          {[...Array(50)].map((_, i) => (
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
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-white">
                Transform Your Future with NJI Education
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-[#FAA71A] backdrop-blur-md hover:bg-white/30 text-white font-semibold border border-white/30"
                onClick={() => setIsConsultationOpen(true)}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats - now at the bottom */}

        {/* Gradient Wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
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
              d="M0 192L48 197.3C96 203 192 213 288 192C384 171 480 117 576 117.3C672 117 768 171 864 197.3C960 224 1056 224 1152 208C1248 192 1344 160 1392 144L1440 128V320H0V192Z"
            />
          </svg>
        </div>
        <div className="absolute bottom-3 left-0 right-0 z-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FAA71A]/20 text-[#FAA71A] mb-4 hover:scale-110 transition-transform">
                  <stat.icon className="h-6 w-6" />
                </div>
                <CountUp
                  end={stat.numericValue}
                  suffix={stat.suffix}
                  duration={2.5}
                />
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
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
