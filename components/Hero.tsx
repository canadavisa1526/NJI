'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, GraduationCap, Globe2, Award, Users, Sparkles, BookOpen, Target, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConsultationDialog from './ConsultationDialog';
import { useState } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const stats = [
    { icon: GraduationCap, value: '15,000+', label: 'Students Placed' },
    { icon: Globe2, value: '50+', label: 'Countries' },
    { icon: Award, value: '98%', label: 'Success Rate' },
    { icon: Users, value: '24/7', label: 'Support' },
  ];

  return (
    <div ref={containerRef}>
      <section className="relative min-h-screen pt-20">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://res.cloudinary.com/dka63iohc/video/upload/v1743511417/6013002_People_Person_1920x1080_vz6omj.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          
          {/* Flying planes */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: -100,
                y: 100 + (i * 200)
              }}
              animate={{ 
                x: '120vw',
                y: [100 + (i * 200), 50 + (i * 200), 100 + (i * 200)]
              }}
              transition={{
                duration: 20 - (i * 2),
                repeat: Infinity,
                ease: "linear",
                y: {
                  duration: 10 - i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <Plane className="h-8 w-8 text-white/30 transform -rotate-45" />
              <motion.div
                className="absolute top-1/2 right-0 h-0.5 w-20 origin-left"
                style={{
                  background: "linear-gradient(to right, rgba(255,255,255,0.3), transparent)"
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          ))}

          {/* Animated dots */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
              <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-white">Transform Your Future with NJI Education</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Gateway to
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                Global Education Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful students who have achieved their dreams with NJI's
              expert guidance and comprehensive support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold border border-white/30"
                onClick={() => setIsConsultationOpen(true)}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Button>
            
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm text-white mb-4">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/10"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 192L48 197.3C96 203 192 213 288 192C384 171 480 117 576 117.3C672 117 768 171 864 197.3C960 224 1056 224 1152 208C1248 192 1344 160 1392 144L1440 128V320H1392C1344 320 1248 320 1152 320C1056 320 960 320 864 320C768 320 672 320 576 320C480 320 384 320 288 320C192 320 96 320 48 320H0V192Z"
              fill="currentColor"
            />
          </svg>
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