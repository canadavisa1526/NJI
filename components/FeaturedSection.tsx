"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Award, Globe2, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const isNumeric = !isNaN(numericEnd);

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
    <div ref={ref} className="text-2xl font-bold text-[#faa71a]">
      {isNumeric ? (isInView ? count.toLocaleString() : "0") + suffix : end}
    </div>
  );
};

const FeaturedSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Get personalized advice from education experts",
    },
    {
      icon: Award,
      title: "Top Universities",
      description: "Access to world-ranked institutions",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description: "Connect with students worldwide",
    },
    {
      icon: Users,
      title: "Student Support",
      description: "24/7 assistance throughout your journey",
    },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-[#faa71a]">Transform Your Future</span> with
              Global Education
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
              Take the first step towards your international education journey
              with our{" "}
              <span className="text-[#faa71a] font-semibold">
                expert support and guidance.
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-xl transition-shadow bg-[#f9fafb] dark:bg-white/10 backdrop-blur-md border border-gray-100 dark:border-white/10"
                >
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-[#faa71a]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side with Hover Light Effect */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60"
                alt="Students studying"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />

              {/* Hover Light Glow */}
              <div className="absolute inset-0 pointer-events-none z-20 transition duration-500 ease-out group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />

              {/* Stats */}
              <div className="absolute bottom-8 left-8 right-8 z-30">
                <div className="bg-white/90 dark:bg-[#AFC1DB]/10 border border-gray-200 dark:border-white/20 backdrop-blur-md rounded-xl p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <CountUp end="17250" suffix="+" duration={2.5} />
                      <div className="text-sm text-gray-800 dark:text-white">
                        Students Placed
                      </div>
                    </div>
                    <div className="text-center">
                      <CountUp end="96" suffix="%" duration={2.5} />
                      <div className="text-sm text-gray-800 dark:text-white">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
