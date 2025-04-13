"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png"; // Adjust path if needed
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-black dark:bg-background dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">

          {/* Logo + Tagline */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14">
                <Image
                  src={Logo}
                  alt="New Journey Immigrations Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                  New Journey Immigrations
                </h3>
                <p className="text-xs sm:text-sm text-black dark:text-white">
                  Begin your global journey with confidence.
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-black dark:text-white">
              We are your trusted partner for global opportunities — providing expert immigration, study, and visa support to help you succeed abroad.
            </p>
            <div className="flex space-x-4 mt-4">
              {[
                { href: "#", icon: Facebook },
                { href: "#", icon: Twitter },
                { href: "#", icon: Instagram },
                { href: "#", icon: Linkedin },
              ].map(({ href, icon: Icon }, index) => (
                <Link key={index} href={href} className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                  <Icon className="h-5 w-5 text-black dark:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-black dark:text-white">
              {["About Us", "Our Services", "Blog", "Contact"].map((link, index) => (
                <li key={index}>
                  <Link href={`/${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Visa Services
            </h4>
            <ul className="space-y-2 text-sm text-black dark:text-white">
              {["Student Visa", "Work Visa", "Tourist Visa", "Business Visa"].map((service, index) => (
                <li key={index}>
                  <Link href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-black dark:text-white">
              {[
                { icon: Phone, text: "+1 234 567 8900" },
                { icon: Mail, text: "info@newjourneyimmigrations.com" },
                { icon: MapPin, text: "123 Business Street, Suite 100, City, Country" },
              ].map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-center">
                  <Icon className="h-5 w-5 mr-2 text-black dark:text-white" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-black dark:text-white">
          &copy; {currentYear} New Journey Immigrations. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
