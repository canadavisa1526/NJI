"use client";
import React, { useState } from "react";
import ConsultationDialog from "./ConsultationDialog";
// import ConsultationDialog from "@/components/ConsultationDialog";

const ContactForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="py-16 bg-shreehari-lavender">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Dialog Trigger */}
          <div className="flex items-center justify-center">
            <ConsultationDialog open={open} onOpenChange={setOpen} />
          </div>

          {/* Right side - Get in touch */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Get in touch <span className="text-shreehari-blue">with us</span>
            </h2>
            <p className="text-gray-600 mb-6">
              If you are interested and have the desire, then do get back to us
              immediately by filling up the basic data form.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Become a <span className="text-shreehari-purple">NJI</span>
              </h3>
              <p className="text-gray-600 mb-4">
                Cities where we are looking to offer franchisees:
              </p>

              <div className="space-y-2">
                {["VADODARA", "SURAT", "MUMBAI"].map((city) => (
                  <div className="flex items-center" key={city}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 px-6 py-3 bg-shreehari-blue text-white font-medium rounded-md hover:bg-blue-800 transition duration-300">
                Become Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
