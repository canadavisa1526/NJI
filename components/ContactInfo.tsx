import React from "react";

const ContactInfo = () => {
  return (
    <div className="py-16 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Working Hours */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center bg-gray-100 dark:bg-white/5 p-6 rounded-xl shadow-md dark:shadow-lg w-full max-w-md">
              <div className="h-14 w-14 bg-indigo-100 dark:bg-indigo-600/20 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Working Hours
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Monday to Saturday • 10 AM - 7 PM
                </p>
              </div>
            </div>
          </div>

          {/* Email Info */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex items-center bg-gray-100 dark:bg-white/5 p-6 rounded-xl shadow-md dark:shadow-lg w-full max-w-md">
              <div className="h-14 w-14 bg-pink-100 dark:bg-pink-500/20 rounded-full flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600 dark:text-pink-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Email Us
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  info@nji.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
