"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Check,
  AlertCircle,
  Phone,
  Mail,
  MessageCircle,
  User,
  ChevronDown,
} from "lucide-react";
import { Service } from "@/data/services-data";
import api from "@/lib/api";

interface IntegratedInquiryFormProps {
  services: Service[];
  defaultService?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export default function IntegratedInquiryForm({
  services,
  defaultService,
  isModal = false,
  onClose,
}: IntegratedInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
    howDidYouHear: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Scroll behavior for sticky form (only when not modal)
  useEffect(() => {
    if (isModal) {
      setIsSticky(false);
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isNearFooter = scrollY + windowHeight > documentHeight - 500;

      setIsSticky(scrollY > windowHeight * 0.5);
      setIsVisible(!isNearFooter);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isModal]);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a clean copy of the form data with timestamp
    const formDataToSubmit = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service,
      message: formData.message.trim(),
      howDidYouHear: formData.howDidYouHear,
      // Add a timestamp for tracking
      timestamp: new Date().toISOString(),
    };

    console.log("Form submitted:", formDataToSubmit);

    try {
      // Send the form data to our API endpoint (same as other forms)
      const response = await api.post("/inquiry", formDataToSubmit);

      console.log("API response:", response.data);

      if (response.data.success) {
        console.log("Form submission successful!");
        setSubmitStatus("success");
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: defaultService || "",
            message: "",
            howDidYouHear: "",
          });
          setSubmitStatus("idle");
          // Close modal after successful submission
          if (isModal && onClose) {
            onClose();
          }
        }, 2000);
      } else {
        console.error("API returned error:", response.data.error);
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: isModal ? 0 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isModal ? 0 : 100 }}
          className={`${
            isModal
              ? "w-full"
              : isSticky
              ? "fixed top-20 right-6 z-40 w-96"
              : "relative w-full max-w-md mx-auto"
          } transition-all duration-300`}
        >
          <div className={`relative bg-white dark:bg-gray-800 ${isModal ? 'rounded-none' : 'rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700'} overflow-hidden`}>
            {/* Background Decorations - only show when not modal */}
            {!isModal && (
              <>
                <div
                  className="absolute top-0 left-0 w-20 h-20 rounded-br-3xl opacity-10"
                  style={{ backgroundColor: "#FAA71A" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl opacity-10"
                  style={{ backgroundColor: "#AFC1DB" }}
                ></div>
              </>
            )}

            {/* Header - simplified for modal */}
            {!isModal && (
              <div
                className="relative p-6 text-white shadow-lg"
                style={{ backgroundColor: "#13294E" }}
              >
              <div className="flex items-center space-x-3 mb-2">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "rgba(250,167,26,0.2)" }}
                >
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Get Free Consultation</h3>
                  <p className="text-sm opacity-90">
                    Expert guidance awaits you
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs opacity-90">
                <div className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-3 h-3" />
                  <span>Expert advice</span>
                </div>
              </div>
              </div>
            )}

            {/* Form Fields */}
            <div className="relative p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white placeholder-[#AFC1DB] dark:placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white placeholder-[#AFC1DB] dark:placeholder-gray-400"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white placeholder-[#AFC1DB] dark:placeholder-gray-400"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white appearance-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  rows={3}
                  className="w-full px-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white placeholder-[#AFC1DB] dark:placeholder-gray-400 resize-none"
                />

                {/* How did you hear */}
                <select
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#AFC1DB]/50 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FAA71A] focus:border-[#FAA71A] bg-white dark:bg-gray-700 text-[#13294E] dark:text-white"
                >
                  <option value="">How did you hear about us?</option>
                  <option value="Google">Google</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Friend">Friend</option>
                  <option value="Walk-in">Walk-in</option>
                  <option value="Other">Other</option>
                </select>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 ${
                    submitStatus === "success"
                      ? "bg-green-500 hover:bg-green-600"
                      : submitStatus === "error"
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-[#FAA71A] hover:bg-[#13294E]"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : submitStatus === "success" ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Message Sent!</span>
                      </>
                    ) : submitStatus === "error" ? (
                      <>
                        <AlertCircle className="w-4 h-4" />
                        <span>Try Again</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </div>
                </motion.button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">Or contact us directly:</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-1 text-[#FAA71A] hover:text-[#13294E]"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:hello@newjourneyimmigration.com"
                    className="flex items-center space-x-1 text-[#FAA71A] hover:text-[#13294E]"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
