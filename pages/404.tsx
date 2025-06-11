import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - New Journey Immigration</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to New Journey Immigration homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-[#13294E] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black text-[#FAA71A] mb-4">
              404
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
              Page Not Found
            </h2>
            
            <p className="text-lg text-[#13294E] dark:text-[#AFC1DB] max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-[#FAA71A] text-[#13294E] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </motion.button>
              </Link>

              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 border-2 border-[#AFC1DB] text-[#13294E] dark:text-[#AFC1DB] px-6 py-3 rounded-lg font-semibold hover:border-[#FAA71A] hover:text-[#FAA71A] transition-colors"
                >
                  <Search className="w-5 h-5" />
                  <span>Browse Services</span>
                </motion.button>
              </Link>
            </div>

            {/* Popular Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-[#AFC1DB]"
            >
              <h3 className="text-lg font-semibold text-[#13294E] dark:text-[#AFC1DB] mb-4">
                Popular Pages
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "Visitor Visa", href: "/services/visitor-visa" },
                  { name: "Study Visa", href: "/services/study-visa" },
                  { name: "Work Permit", href: "/services/work-permit" },
                  { name: "About Us", href: "/about" },
                  { name: "Contact", href: "/contact" }
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#FAA71A] hover:text-[#13294E] dark:hover:text-[#AFC1DB] transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
