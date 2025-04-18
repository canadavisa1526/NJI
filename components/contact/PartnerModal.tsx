"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    designation: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    targetCountries: "",
    businessAge: "",
    visasPerYear: "",
    referenceSource: "",
    website: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    // Show success message and close modal
    alert("Thank you for your interest! We'll get back to you soon.");
    onClose();
  };

  const formFields = [
    { name: "businessName", label: "Business Entity Name", type: "text", required: true },
    { name: "ownerName", label: "Name of Business Owner", type: "text", required: true },
    { 
      name: "designation", 
      label: "Designation", 
      type: "select", 
      required: true,
      options: ["Proprietor/Owner", "Director", "Partner", "Other Decision Maker"] 
    },
    { name: "mobile", label: "Mobile Number", type: "tel", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "address", label: "Business Address", type: "textarea" },
    { name: "city", label: "City", type: "text" },
    { name: "state", label: "State/Province", type: "text" },
    { name: "zipCode", label: "Zip/Postal Code", type: "text" },
    { name: "country", label: "Country", type: "text" },
    { name: "targetCountries", label: "Target Countries", type: "text", placeholder: "Which countries do you plan to work with us?" },
    { name: "businessAge", label: "Business Age", type: "text", placeholder: "How old is your organization?" },
    { name: "visasPerYear", label: "Visas Per Year", type: "number", placeholder: "How many student visas do you process annually?" },
    { 
      name: "referenceSource", 
      label: "How did you find us?", 
      type: "select",
      options: ["Search Engine", "Social Media", "Referral", "Event", "Other"] 
    },
    { name: "website", label: "Website/Social Media", type: "text", placeholder: "Your website or social media pages" },
  ];

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 25, stiffness: 500 } },
    exit: { opacity: 0, y: 50 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalContentVariants}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
                Become Our Partner
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Please fill out the form below to join our partner network. We'll review your application and get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.map((field) => (
                    <div key={field.name} className={field.name === "address" ? "md:col-span-2" : ""}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === "select" ? (
                        <select
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                        >
                          <option value="">Select {field.label}</option>
                          {field.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                          rows={3}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          placeholder={field.placeholder}
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}