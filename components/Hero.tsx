"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  GraduationCap,
  Globe2,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ConsultationDialog from "./ConsultationDialog";
import Image from "next/image";

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
  const [showLogoAnimation, setShowLogoAnimation] = useState(true);
  const [videoStarted, setVideoStarted] = useState(false);
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
      const video = videoRef.current;

      const handleVideoStart = () => {
        setVideoStarted(true);
        // Hide logo animation after 3 seconds
        setTimeout(() => {
          setShowLogoAnimation(false);
        }, 3000);
      };

      const handleVideoPlay = () => {
        handleVideoStart();
      };

      video.addEventListener("play", handleVideoPlay);
      video.addEventListener("loadeddata", handleVideoStart);

      video.play();

      return () => {
        video.removeEventListener("play", handleVideoPlay);
        video.removeEventListener("loadeddata", handleVideoStart);
      };
    }
  }, []);

  // Update dot count based on screen size
  useEffect(() => {
    setDotCount(isMobile ? 25 : 50);
  }, [isMobile]);

  const stats = [
    {
      icon: GraduationCap,
      value: "17250+",
      label: "Students Placed",
      numericValue: "17250",
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
      value: "96%",
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
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] xl:h-[90vh] pt-8 md:pt-20 pb-16 md:pb-52 flex flex-col">
        {/* High Quality Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover object-center min-w-full min-h-full"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/hero-poster.jpg"
          >
            {/* High quality video source */}
            <source
              src="https://res.cloudinary.com/dka63iohc/video/upload/v1748663327/SH-abroad_1_pykail.mp4"
              type="video/mp4"
            />
            {/* Fallback medium quality */}
            <source
              src="https://res.cloudinary.com/dka63iohc/video/upload/v1748663327/SH-abroad_1_pykail.mp4"
              type="video/mp4"
            />
            {/* Fallback for browsers that don't support video */}
            <Image
              src="/hero-fallback.jpg"
              alt="Global destinations background"
              fill
              className="object-cover"
              priority
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        </div>

        {/* Stats section - smaller and positioned inside the wave */}
        <div className="absolute bottom-4 md:bottom-12 left-0 right-0 z-20 px-2 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-xl p-1.5 md:p-3 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-5 h-5 md:w-10 md:h-10 rounded-full bg-[#FAA71A]/30 text-[#FAA71A] mb-0.5 md:mb-2 hover:scale-110 transition-transform">
                    <stat.icon className="h-2.5 w-2.5 md:h-5 md:w-5" />
                  </div>
                  <div className="text-base md:text-2xl font-bold text-white mb-0 md:mb-1">
                    {stat.numericValue === "24/7" ? (
                      "24/7"
                    ) : (
                      <CountUp
                        end={stat.numericValue}
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    )}
                  </div>
                  <div className="text-[8px] md:text-sm text-gray-200 leading-tight font-medium">
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
