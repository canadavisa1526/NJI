"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import LightLogo from "@/public/svg/Asset_4.svg";
import DarkLogo from "@/public/svg/Asset_1.svg";
import { useTheme } from "next-themes";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme, resolvedTheme } = useTheme();
  const isDark = theme === "dark" || resolvedTheme === "dark";

  const featureLinks = [
    { name: "About us", href: "/about" },
    { name: "Study in Canada", href: "/country/canada" },
    { name: "Study in USA", href: "/country/usa" },
    { name: "Study in Australia", href: "/country/australia" },
    { name: "Study in UK", href: "/country/uk" },
    { name: "IELTS Coaching", href: "/services/coaching" },
    { name: "Insurance", href: "/services/insurance" },
    { name: "Visitor Visa", href: "/services/visitor-visa" },
    { name: "PR Visa", href: "/services/permanent-residency" },
  ];

  const quickLinks = [
    { name: "Free Consultation", href: "#" },
    { name: "Success Stories", href: "#" },
    { name: "University Partners", href: "#" },
    { name: "Career Guidance", href: "#" },
    { name: "Study Resources", href: "#" },
    { name: "Immigration News", href: "#" },
    { name: "FAQs", href: "#" },
  ];

  const LogoSVG = () => (
    <div className="flex items-center">
      <div className="relative w-40 h-16 sm:w-48 sm:h-18 md:w-52 md:h-20">
        <Image
          src={LightLogo}
          alt="New Journey Immigration Logo"
          fill
          className="object-contain"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, 208px"
          priority
        />
      </div>
    </div>
  );

  return (
    <footer className="bg-[#13294e] dark:bg-[#0d1b34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <LogoSVG />
            </Link>
            <p className="text-gray-300 mb-6">
              Your trusted partner for global education and immigration success.
              We provide comprehensive support for students aspiring to study
              abroad with expert guidance at every step.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/share/1BTpFournw/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/new.journey.holiday?igsh=MXNlZ216bTdmOHJjZw=="
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtube.com/@newjourneyimmigration?si=6xMRoyH27YPEdRvi"
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/newjourney-i/about/"
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Feature Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#faa71a] flex items-center transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#faa71a] rounded-full mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#faa71a] flex items-center transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-[#faa71a] rounded-full mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-[#faa71a] font-semibold mb-3">
                  India Office
                </h4>
                <p className="flex items-start space-x-3 text-gray-300 mb-2">
                  <MapPin className="h-5 w-5 mt-1 text-[#faa71a]" />
                  <span>Mehsana, India</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 mb-2">
                  <Mail className="h-5 w-5 text-[#faa71a]" />
                  <span>support@newjourneyworld.com</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#faa71a]" />
                  <span>+91 7623 043 499</span>
                </p>
              </div>

              <div>
                <h4 className="text-[#faa71a] font-semibold mb-3">
                  Canada Office
                </h4>
                <p className="flex items-start space-x-3 text-gray-300 mb-2">
                  <MapPin className="h-5 w-5 mt-1 text-[#faa71a]" />
                  <span>Steels Ave W, Brampton,ON, Canada, L6Y 2R7</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 mb-2">
                  <Mail className="h-5 w-5 text-[#faa71a]" />
                  <span>support@newjourneyworld.com</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#faa71a]" />
                  <span>+1 437-663-5437</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} New Journey Immigration. All rights reserved
            </p>

            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-[#faa71a] transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">
                Design and Developed by{" "}
                <Link
                  href="https://wa.me/917046272137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#faa71a] hover:text-orange-500 transition-colors"
                >
                  V&V Digital
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
