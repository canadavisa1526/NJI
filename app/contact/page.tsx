"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Users,
  Globe,
  Target,
  Briefcase,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Building,
  GraduationCap,
  Award,
  Star,
  Heart,
  Shield,
  Coffee,
  Sparkles,
} from "lucide-react";

function Contact() {
  const [activeTab, setActiveTab] = useState("student");

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+91 98765 43210"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@example.com", "support@example.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-2PM"],
    },
  ];

  const locations = [
    {
      city: "New York",
      country: "USA",
      address: "123 Business Avenue, NY 10001",
      services: [
        "Immigration Services",
        "Student Counseling",
        "Visa Processing",
      ],
    },
    {
      city: "London",
      country: "UK",
      address: "456 Corporate Lane, EC1A 1BB",
      services: ["Business Immigration", "Family Visas", "Settlement Services"],
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "789 Success Street, M5V 2T6",
      services: ["Express Entry", "Study Permits", "Work Permits"],
    },
  ];

  const partnerBenefits = [
    {
      icon: Globe,
      title: "Global Network",
      description: "Access our worldwide network of immigration professionals",
    },
    {
      icon: Target,
      title: "Market Access",
      description: "Expand your reach into new international markets",
    },
    {
      icon: Award,
      title: "Growth Support",
      description: "Benefit from our proven business growth strategies",
    },
    {
      icon: Shield,
      title: "Expert Training",
      description: "Receive comprehensive training and ongoing support",
    },
  ];

  const stats = [
    { icon: Users, value: "28,000+", label: "Successful Cases" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Star, value: "5+", label: "Years Experience" },
    { icon: Heart, value: "99%", label: "Success Rate" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-200/30 dark:bg-orange-900/20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-200/30 dark:bg-pink-900/20 animate-blob animation-delay-4000" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="container mx-auto px-4 relative z-10"
        >
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              >
                {contactInfo.map(({ icon: Icon, title, details }) => (
                  <motion.div
                    key={title}
                    variants={fadeInUp}
                    className="theme-card p-6 flex flex-col items-center text-center"
                  >
                    <Icon className="w-10 h-10 text-orange-500 mb-4" />
                    <h4 className="text-lg font-semibold mb-2">{title}</h4>
                    {details.map((detail) => (
                      <p
                        key={detail}
                        className="text-gray-600 dark:text-gray-300"
                      >
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="relative group"
              >
                <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
                <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-4">
                    <stat.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold theme-text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-12 space-x-4">
              <button
                onClick={() => setActiveTab("student")}
                className={`theme-tab ${
                  activeTab === "contact"
                    ? "theme-tab-active"
                    : "theme-tab-inactive"
                }`}
              >
                <MessageSquare className="w-4 h-4 inline-block mr-2" />
                Student Services
              </button>
              <button
                onClick={() => setActiveTab("partner")}
                className={`theme-tab ${
                  activeTab === "partner"
                    ? "theme-tab-active"
                    : "theme-tab-inactive"
                }`}
              >
                <Building className="w-4 h-4 inline-block mr-2" />
                Become a Partner
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Form Section */}
              <div className="theme-card p-8">
                <h2 className="text-3xl font-bold mb-8 theme-text-gradient">
                  {activeTab === "contact" && "Send us a Message"}
                  {activeTab === "partner" && "Partner With Us"}
                  {activeTab === "student" && "Student Inquiry"}
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="theme-label">First Name</label>
                      <input
                        type="text"
                        className="theme-input"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="theme-label">Last Name</label>
                      <input
                        type="text"
                        className="theme-input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="theme-label">Email</label>
                    <input
                      type="email"
                      className="theme-input"
                      placeholder="john@example.com"
                    />
                  </div>
                  {activeTab === "partner" && (
                    <>
                      <div>
                        <label className="theme-label">Company Name</label>
                        <input
                          type="text"
                          className="theme-input"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label className="theme-label">Job Title</label>
                        <input
                          type="text"
                          className="theme-input"
                          placeholder="Your Position"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "student" && (
                    <>
                      <div>
                        <label className="theme-label">Course Interest</label>
                        <input
                          type="text"
                          className="theme-input"
                          placeholder="Desired Course/Program"
                        />
                      </div>
                      <div>
                        <label className="theme-label">Preferred Country</label>
                        <input
                          type="text"
                          className="theme-input"
                          placeholder="Study Destination"
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="theme-label">Message</label>
                    <textarea
                      className="theme-input min-h-[150px]"
                      placeholder={
                        activeTab === "contact"
                          ? "How can we help you?"
                          : activeTab === "partner"
                          ? "Tell us about your partnership interests"
                          : "Tell us about your study abroad goals"
                      }
                    />
                  </div>

                  <button className="w-full theme-button py-3 px-6 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    {activeTab === "contact" && "Send Message"}
                    {activeTab === "partner" && "Submit Partnership Request"}
                    {activeTab === "student" && "Submit Inquiry"}
                  </button>
                </form>
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                <div className="theme-card p-8">
                  <h3 className="text-2xl font-bold mb-6 theme-text-gradient">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Expert guidance from certified consultants",
                      "Personalized attention to your needs",
                      "Comprehensive support services",
                      "High success rate in visa approvals",
                      "Global network of partners",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600 dark:text-gray-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="theme-card p-8">
                  <h3 className="text-2xl font-bold mb-6 theme-text-gradient">
                    Connect With Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Linkedin, label: "LinkedIn" },
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-colors duration-300"
                      >
                        <Icon className="w-5 h-5 text-orange-500" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      {activeTab === "partner" && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 theme-text-gradient">
                Partnership Benefits
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join our network and grow your business with us
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {partnerBenefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  className="theme-card p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-6">
                    <benefit.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      {/* Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 theme-text-gradient">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We have offices and partners across the globe to serve you better.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {locations.map(({ city, country, address, services }) => (
              <motion.div
                key={city}
                variants={fadeInUp}
                className="theme-card p-6"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {city}, {country}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {address}
                </p>
                <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">
                  Services:
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
