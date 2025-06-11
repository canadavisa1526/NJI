import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RefreshCw, Mail } from "lucide-react";
import Head from "next/head";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Server Error - New Journey Immigration</title>
        <meta name="description" content="Something went wrong on our end. We're working to fix it. Contact New Journey Immigration for assistance." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-[#13294E] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 500 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black text-[#FAA71A] mb-4">
              500
            </h1>
            <div className="w-32 h-1 bg-[#AFC1DB] mx-auto rounded-full"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#13294E] dark:text-[#AFC1DB]">
              Server Error
            </h2>
            
            <p className="text-lg text-[#13294E] dark:text-[#AFC1DB] max-w-md mx-auto">
              Oops! Something went wrong on our end. We're working hard to fix this issue. Please try again in a few moments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                onClick={() => window.location.reload()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-[#FAA71A] text-[#13294E] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Try Again</span>
              </motion.button>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border-2 border-[#AFC1DB] text-[#13294E] dark:text-[#AFC1DB] px-6 py-3 rounded-lg font-semibold hover:border-[#FAA71A] hover:text-[#FAA71A] transition-colors"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </motion.button>
              </Link>
            </div>

            {/* Contact Support */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-[#AFC1DB]"
            >
              <h3 className="text-lg font-semibold text-[#13294E] dark:text-[#AFC1DB] mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-[#13294E] dark:text-[#AFC1DB] mb-4">
                If this problem persists, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:info@newjourneyimmigration.com"
                  className="flex items-center space-x-2 text-[#FAA71A] hover:text-[#13294E] dark:hover:text-[#AFC1DB] transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@newjourneyimmigration.com</span>
                </a>
                <a
                  href="tel:+917623043499"
                  className="text-[#FAA71A] hover:text-[#13294E] dark:hover:text-[#AFC1DB] transition-colors font-medium"
                >
                  +91 76230 43499
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
