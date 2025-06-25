"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Target, Heart, Globe } from "lucide-react";

const OurStorySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      location: "Mehsana, Gujarat, India",
      description: "Started as a modest one-person operation with just one desk and a vision to help people navigate their journeys with honesty and clarity.",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      year: "2022",
      title: "International Expansion",
      location: "Toronto, Canada",
      description: "Opened our international branch in Toronto, allowing us to serve clients more closely, especially international students and families starting new lives in Canada.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      year: "2025",
      title: "Regional Growth",
      location: "Ahmedabad, Gujarat",
      description: "Launched our second Indian branch in Ahmedabad, further expanding our reach and accessibility across the region while keeping our head office in Mehsana.",
      icon: <Users className="h-6 w-6" />,
    },
  ];

  const purposePoints = [
    {
      title: "Transparent Guidance",
      description: "Providing clear, honest advice without hidden agendas or unexpected fees.",
      icon: <Target className="h-5 w-5" />,
    },
    {
      title: "One-Stop Solution",
      description: "From visa applications to relocation support, we handle everything under one roof.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Client-Focused Approach",
      description: "Every client is treated like family with personalized attention and expert knowledge.",
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#AFC1DB]/20 via-white to-[#faa71a]/10 dark:from-[#13294e]/20 dark:via-[#13294e] dark:to-[#faa71a]/5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block bg-gradient-to-r from-[#faa71a] to-amber-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#13294e] dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From a Small Town Dream to a Global Vision
          </p>
        </motion.div>

        {/* Main Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* Left Column - Story Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                New Journey Immigration began its journey in 2018, in the heart of Mehsana, Gujarat, India. What started as a modest one-person operation quickly grew into a trusted name in immigration and travel services. With just one desk and a vision to help people navigate their journeys with honesty and clarity, the foundation was laid for something much bigger.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                In those early days, every client was welcomed like family. The office was managed entirely by our founder, who handled everything from consultations to operations. The goal was simple but powerful: to create a place where people could get real guidance—not just paperwork support, but genuine, step-by-step help with no hidden agendas.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                As word spread and client success stories multiplied, New Journey Immigration evolved from a local office to a growing brand. With growing demand and immense client support, we took our next big step.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="bg-white dark:bg-[#13294e] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-[#13294e] dark:text-white">{item.title}</h3>
                          <span className="text-2xl font-bold text-[#faa71a]">{item.year}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-3">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Purpose Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#13294e] dark:text-white mb-4">
              The Purpose Behind Our Work
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Before stepping into this industry, we took time to understand it. After extensive market analysis, one common issue stood out: many people were struggling to find the right consultation and honest support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {purposePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-[#13294e] rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#faa71a] to-amber-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#13294e] dark:text-white mb-3">{point.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Today and Beyond Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-[#13294e] to-[#1e3a5f] dark:from-[#0f1f3a] dark:to-[#1a2d4a] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#faa71a] rounded-full mix-blend-multiply filter blur-xl" />
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#AFC1DB] rounded-full mix-blend-multiply filter blur-xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Today and Beyond
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    With branches in Mehsana, Ahmedabad, and Toronto, we continue to serve hundreds of clients with personalized attention, expert knowledge, and a commitment to doing what's right.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Whether it's study permits, permanent residency, visitor visas, or travel planning, we're proud to be the trusted partner for individuals and families around the world.
                  </p>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-[#faa71a]">Our Mission</h4>
                  <p className="text-gray-200 leading-relaxed">
                    Because at New Journey Immigration, we believe that a successful journey begins with the right guidance—and we're here to walk with you, every step of the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection; 