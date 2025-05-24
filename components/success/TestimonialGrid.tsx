"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialGrid = () => {
  const testimonials = [
    {
      name: "Ananya Patel",
      role: "Student",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
      quote:
        "New Journey Immigration helped me secure admission to my dream university in Canada. Their guidance throughout the visa process was invaluable.",
      rating: 5,
    },
    {
      name: "Rahul Sharma",
      role: "IT Professional",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
      quote:
        "Thanks to New Journey, my PR application was approved in record time. Their attention to detail and personalized approach made all the difference.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Healthcare Worker",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
      quote: `'The team at New Journey guided me through every step of my UK work visa application. I'm now working at a prestigious hospital in London.'`,
      rating: 5,
    },
    {
      name: "Vikram Malhotra",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=800&auto=format&fit=crop&q=60",
      quote: `New Journey's expertise in business immigration helped me establish my company in Australia. Their knowledge of the process was exceptional.`,
      rating: 5,
    },
    {
      name: "Neha Gupta",
      role: "Research Scholar",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60",
      quote: `'I received a full scholarship for my PhD program in Germany with New Journey's help. Their academic counseling was top-notch.'`,
      rating: 5,
    },
    {
      name: "Arjun Singh",
      role: "Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
      quote:
        "New Journey made my dream of working in the USA a reality. Their IELTS coaching and visa guidance were excellent.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-[#FAA71A] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from our clients about their experiences and success
            with New Journey Immigration
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 border border-[#AFC1DB]/30 hover:shadow-xl transition-all duration-300 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#13294E] flex items-center justify-center shadow-lg">
                <FaQuoteLeft className="text-[#FAA71A] text-lg" />
              </div>

              <div className="flex items-center mb-4 mt-2">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-[#FAA71A]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#13294E]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#FAA71A] mr-1" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
