"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface ServiceTestimonialsProps {
  serviceType: string;
}

const serviceTestimonials = {
  "visitor-visa": [
    {
      name: "Amanpreet K.",
      location: "Punjab, India",
      service: "Canada Visitor Visa",
      rating: 5,
      content:
        "New Journey Immigration handled my visitor visa to Canada with such professionalism. The entire process was smooth and stress-free!",
      image: "/testimonials/amanpreet.jpg",
    },
    {
      name: "Faisal R.",
      location: "Dubai, UAE",
      service: "UK Business Visa",
      rating: 5,
      content:
        "I needed to attend a business conference in the UK. They got my visa approved within 10 days. Thank you so much!",
      image: "/testimonials/faisal.jpg",
    },
    {
      name: "Monica G.",
      location: "Philippines",
      service: "Schengen Visa",
      rating: 5,
      content:
        "Their support for my Schengen application was perfect. Highly recommended!",
      image: "/testimonials/monica.jpg",
    },
    {
      name: "Anita Patel",
      location: "Ahmedabad, India",
      service: "UK Tourist Visa",
      rating: 5,
      content:
        "I was worried about my UK visa application, but New Journey Immigration handled everything perfectly. Their expertise and attention to detail made all the difference. Got my visa without any issues!",
      image: "/testimonials/anita.jpg",
    },
  ],
  "dependent-visa": [
    {
      name: "Meera Singh",
      location: "Chandigarh, India",
      service: "Canada Spouse Visa",
      rating: 5,
      content:
        "Thanks to New Journey Immigration, I was able to join my husband in Canada. The team helped us with all the documentation and made the complex process simple. We are now happily reunited!",
      image: "/testimonials/meera.jpg",
    },
    {
      name: "Vikram Reddy",
      location: "Hyderabad, India",
      service: "Australia Partner Visa",
      rating: 5,
      content:
        "The dependent visa process seemed overwhelming, but the experts at New Journey Immigration guided us through every step. My wife and children are now with me in Australia. Excellent service!",
      image: "/testimonials/vikram.jpg",
    },
  ],
  "work-permit": [
    {
      name: "Amit Gupta",
      location: "Bangalore, India",
      service: "Canada Work Permit",
      rating: 5,
      content:
        "Got my Canada work permit approved in record time! The team at New Journey Immigration is highly professional and knowledgeable. They made my dream of working in Canada a reality.",
      image: "/testimonials/amit.jpg",
    },
    {
      name: "Sneha Joshi",
      location: "Pune, India",
      service: "Australia Work Visa",
      rating: 5,
      content:
        "Fantastic experience with New Journey Immigration for my Australia work visa. Their expertise in handling complex cases is remarkable. I am now successfully working in Melbourne!",
      image: "/testimonials/sneha.jpg",
    },
  ],
  coaching: [
    {
      name: "Rohit Sharma",
      location: "Jaipur, India",
      service: "IELTS Coaching",
      rating: 5,
      content:
        "Achieved my target IELTS score of 8.0 with their excellent coaching program. The trainers are experienced and the study material is comprehensive. Highly recommend for IELTS preparation!",
      image: "/testimonials/rohit.jpg",
    },
    {
      name: "Kavya Nair",
      location: "Kochi, India",
      service: "PTE Coaching",
      rating: 5,
      content:
        "The PTE coaching at New Journey Immigration is outstanding. I scored 79+ in all modules and achieved my immigration goals. The mock tests and personalized feedback were extremely helpful.",
      image: "/testimonials/kavya.jpg",
    },
  ],
  default: [
    {
      name: "Patel Axay",
      location: "Gujarat, India",
      service: "PGWP Application",
      rating: 5,
      content:
        "When I decided to apply for my PGWP, I turned to New Journey Immigration, and I'm so glad I did. The team made the entire process straightforward and stress-free. They were meticulous with every detail, kept me updated regularly, and provided clear instructions.",
      image: "/testimonials/axay.jpg",
    },
    {
      name: "Sarah Johnson",
      location: "Toronto, Canada",
      service: "Family Sponsorship",
      rating: 5,
      content:
        "Excellent service from start to finish. The team was professional, knowledgeable, and always available to answer our questions. We successfully brought our family to Canada thanks to their expertise.",
      image: "/testimonials/sarah.jpg",
    },
  ],
};

export default function ServiceTestimonials({
  serviceType,
}: ServiceTestimonialsProps) {
  const testimonials =
    serviceTestimonials[serviceType as keyof typeof serviceTestimonials] ||
    serviceTestimonials.default;

  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-[#13294E] dark:text-white mb-6 border-b border-[#AFC1DB] dark:border-gray-700 pb-2">
          Success Stories
        </h2>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-[#AFC1DB]/20 dark:border-gray-700 h-full"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-[#FAA71A]/30" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#FAA71A] fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FAA71A] to-[#13294E] rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#13294E] dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                      <p className="text-xs text-[#FAA71A] font-medium">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
