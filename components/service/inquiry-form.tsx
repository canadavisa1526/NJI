"use client";

import { useState } from "react";
import { Service } from "@/data/services-data";
import { Send, Check, AlertCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import api from "@/lib/api";

interface InquiryFormProps {
  services: Service[];
  defaultService?: string;
}

export default function InquiryForm({
  services,
  defaultService,
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService || "",
    message: "",
    howDidYouHear: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^\+?[0-9]{8,15}$/.test(formData.phone.replace(/[-()\s]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.howDidYouHear)
      newErrors.howDidYouHear = "Please select how you heard about us";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);

    if (validateForm()) {
      setIsSubmitting(true);

      // Create a clean copy of the form data to ensure all fields are included
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
        // Send the form data to our API endpoint
        const response = await api.post("/inquiry", formDataToSubmit);

        console.log("API response:", response.data);

        if (response.data.success) {
          // On successful submission
          console.log("Form submission successful!");
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: defaultService || "",
            message: "",
            howDidYouHear: "",
          });
          // Keep success message visible for 5 seconds
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          // Handle API error response
          console.error("API returned error:", response.data.error);
          setSubmissionError(
            response.data.error || "Failed to submit inquiry. Please try again."
          );
          setIsSubmitting(false);
        }
      } catch (error: any) {
        console.error("Error submitting form:", error);

        // More detailed error logging
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);

          setSubmissionError(
            `Server error: ${error.response.status}. Please try again later.`
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
          setSubmissionError(
            "No response from server. Please check your internet connection and try again."
          );
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
          setSubmissionError(
            "An error occurred while submitting your inquiry. Please try again later."
          );
        }
        setIsSubmitting(false);
      }
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-b from-[#ffffff] to-[#AFC1DB]/20 dark:from-[#13294e] dark:to-[#13294e]/80 p-4 rounded-lg flex items-start space-x-3"
        >
          <div className="mt-0.5 bg-green-100 dark:bg-green-800 rounded-full p-1">
            <Check className="h-4 w-4 text-green-600 dark:text-green-300" />
          </div>
          <div>
            <h4 className="font-medium text-green-800 dark:text-green-300">
              Thank you for your inquiry!
            </h4>
            <p className="text-sm text-green-700 dark:text-green-400">
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Name */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.name
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#AFC1DB]`}
              placeholder="John Doe"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.email
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#AFC1DB]`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.phone
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#AFC1DB]`}
              placeholder="+1 (123) 456-7890"
            />
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.phone}
              </motion.p>
            )}
          </div>

          {/* Service */}
          <div className="space-y-1 relative">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Service <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full appearance-none px-3 py-2 pr-10 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.service
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-[38px] pointer-events-none h-4 w-4 text-[#FAA71A]" />
            {errors.service && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.service}
              </motion.p>
            )}
          </div>

          {/* How Did You Hear About Us */}
          <div className="space-y-1 relative">
            <label
              htmlFor="howDidYouHear"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              How Did You Hear About Us <span className="text-red-500">*</span>
            </label>
            <select
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              className={`w-full appearance-none px-3 py-2 pr-10 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.howDidYouHear
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white`}
            >
              <option value="">Select an option</option>
              <option value="Google">Google</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend">Friend</option>
              <option value="Education Fair">Education Fair</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-[38px] pointer-events-none h-4 w-4 text-[#FAA71A]" />
            {errors.howDidYouHear && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.howDidYouHear}
              </motion.p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-1">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-3 py-2 bg-transparent border rounded-md shadow-sm focus:ring-[#FAA71A] focus:border-[#FAA71A] ${
                errors.message
                  ? "border-red-300 dark:border-red-500"
                  : "border-gray-300 dark:border-gray-600"
              } text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#AFC1DB]`}
              placeholder="Your inquiry details..."
            ></textarea>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 dark:text-red-400 text-xs mt-1 flex items-center"
              >
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* Error Message */}
          {submissionError && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded-md flex items-start space-x-2"
            >
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <span>{submissionError}</span>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#FAA71A] text-white rounded-md font-medium hover:bg-[#FAA71A]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FAA71A] transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <span>Submit Inquiry</span>
            {isSubmitting ? (
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="h-4 w-4" />
            )}
          </motion.button>
        </>
      )}
    </motion.form>
  );
}
