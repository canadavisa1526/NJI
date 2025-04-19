"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student at University of Toronto",
      content:
        "The guidance I received was invaluable. They helped me achieve my dream of studying in Canada.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer in Australia",
      content:
        "Professional service throughout my PR application process. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Medical Professional in UK",
      content:
        "Excellent support for my work visa application. The team was very knowledgeable.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#13294e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto">
            Read about the experiences of people we've helped achieve their
            immigration goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#AFC1DB]/20 dark:bg-white/5 border border-[#AFC1DB]/30 dark:border-white/10 rounded-xl p-6 shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-[#faa71a] fill-current"
                  />
                ))}
              </div>
              <p className="text-[#13294e]/80 dark:text-gray-300 mb-4 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-[#13294e] dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-[#13294e]/60 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
