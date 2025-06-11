import { NextPageContext } from 'next';
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RefreshCw, Mail, Search } from "lucide-react";
import Head from "next/head";

interface ErrorProps {
  statusCode: number;
  hasGetInitialPropsRun?: boolean;
  err?: Error;
}

function Error({ statusCode }: ErrorProps) {
  const is404 = statusCode === 404;
  const is500 = statusCode === 500;

  const getErrorContent = () => {
    if (is404) {
      return {
        title: "Page Not Found",
        description: "Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.",
        pageTitle: "Page Not Found - New Journey Immigration"
      };
    } else if (is500) {
      return {
        title: "Server Error",
        description: "Oops! Something went wrong on our end. We're working hard to fix this issue. Please try again in a few moments.",
        pageTitle: "Server Error - New Journey Immigration"
      };
    } else {
      return {
        title: "An Error Occurred",
        description: `An error ${statusCode} occurred on the server. Please try again or contact support if the problem persists.`,
        pageTitle: `Error ${statusCode} - New Journey Immigration`
      };
    }
  };

  const { title, description, pageTitle } = getErrorContent();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-[#13294E] flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated Error Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-black text-[#FAA71A] mb-4">
              {statusCode}
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
              {title}
            </h2>
            
            <p className="text-lg text-[#13294E] dark:text-[#AFC1DB] max-w-md mx-auto">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              {is500 ? (
                <motion.button
                  onClick={() => window.location.reload()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-[#FAA71A] text-[#13294E] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Try Again</span>
                </motion.button>
              ) : (
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
              )}

              {is404 ? (
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
              ) : (
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
              )}
            </div>

            {/* Additional Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-12 pt-8 border-t border-[#AFC1DB]"
            >
              {is404 ? (
                <>
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
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-[#13294E] dark:text-[#AFC1DB] mb-4">
                    Need Help?
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
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
