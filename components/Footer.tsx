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
} from "lucide-react";
import Image from "next/image";
import LightLogo from "@/public/svg/Asset_4.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    { name: "FAQs", href: "" },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-16">
        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden">
          {/* Company Info - Mobile */}
          <div className="mb-6">
            <Link href="/" className="flex justify-center items-center mb-3">
              <LogoSVG />
            </Link>
            <p className="text-gray-300 mb-4 text-center text-sm">
              Your trusted partner for global education and immigration success.
              We provide comprehensive support for students aspiring to study
              abroad with expert guidance at every step.
            </p>
            <div className="flex justify-center space-x-4">
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

          {/* Links Section - Mobile */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* Quick Links - Mobile */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <ul className="space-y-1.5">
                {featureLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#faa71a] flex items-center transition-colors text-sm"
                    >
                      <span className="w-1 h-1 bg-[#faa71a] rounded-full mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services - Mobile */}
            <div>
              <h3 className="text-base font-semibold text-white mb-3 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent">
                Our Services
              </h3>
              <ul className="space-y-1.5">
                {quickLinks.slice(0, 5).map((link) => (
                  <li key={link.name}>
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-[#faa71a] flex items-center transition-colors text-sm"
                      >
                        <span className="w-1 h-1 bg-[#faa71a] rounded-full mr-2" />
                        {link.name}
                      </Link>
                    ) : (
                      <span className="text-gray-300 flex items-center text-sm">
                        <span className="w-1 h-1 bg-[#faa71a] rounded-full mr-2" />
                        {link.name}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info - Mobile */}
          <div className="mb-6">
            <h3 className="text-base font-semibold text-white mb-4 bg-gradient-to-r from-[#faa71a] to-orange-600 bg-clip-text text-transparent text-center">
              Contact Us
            </h3>
            <div className="space-y-3">
              {/* India Office */}
              <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                <h4 className="text-[#faa71a] font-semibold mb-2 text-sm">
                  🇮🇳 India Office
                </h4>
                <div className="space-y-1">
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">📍</span>
                    <span>Mehsana, India</span>
                  </p>
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">✉️</span>
                    <span>support@newjourneyworld.com</span>
                  </p>
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">📞</span>
                    <span>+91 7623 043 499</span>
                  </p>
                </div>
              </div>

              {/* Canada Office */}
              <div className="bg-gray-800/30 rounded-lg p-3 text-center">
                <h4 className="text-[#faa71a] font-semibold mb-2 text-sm">
                  🇨🇦 Canada Office
                </h4>
                <div className="space-y-1">
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">📍</span>
                    <span>Steels Ave W, Brampton, ON, Canada, L6Y 2R7</span>
                  </p>
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">✉️</span>
                    <span>support@newjourneyworld.com</span>
                  </p>
                  <p className="text-gray-300 text-xs flex items-center justify-center">
                    <span className="mr-2">📞</span>
                    <span>+1 437-663-5437</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Copyright Section */}
          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-center text-xs mb-4">
              © {currentYear} New Journey Immigration. All rights reserved
            </p>

            {/* Links Section */}
            <div className="space-y-3">
              {/* Terms & Privacy */}
              <div className="bg-gray-800/20 rounded-lg p-3">
                <h4 className="text-white font-semibold mb-2 text-center text-xs">
                  Legal
                </h4>
                <div className="flex flex-col items-center space-y-2">
                  <Link
                    href="/privacy-policy"
                    className="text-gray-300 hover:text-[#faa71a] transition-colors text-xs font-medium"
                  >
                    📄 Privacy Policy
                  </Link>
                  <Link
                    href="/terms-of-service"
                    className="text-gray-300 hover:text-[#faa71a] transition-colors text-xs font-medium"
                  >
                    📋 Terms of Service
                  </Link>
                </div>
              </div>

              {/* Developer Credit */}
              <div className="bg-gray-800/20 rounded-lg p-3 text-center">
                <h4 className="text-white font-semibold mb-1 text-xs">
                  Website
                </h4>
                <p className="text-gray-300 text-xs">
                  Design and Developed by{" "}
                  <Link
                    href="https://wa.me/917046272137"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#faa71a] hover:text-orange-500 transition-colors"
                  >
                    V&V Digital
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Keep Original */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
                  {link.href ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-[#faa71a] flex items-center transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-[#faa71a] rounded-full mr-2" />
                      {link.name}
                    </Link>
                  ) : (
                    <span className="text-gray-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#faa71a] rounded-full mr-2" />
                      {link.name}
                    </span>
                  )}
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

        {/* Desktop/Tablet Copyright - Hidden on Mobile */}
        <div className="hidden md:block mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © {currentYear} New Journey Immigration. All rights reserved
            </p>

            {/* Desktop: Horizontal layout */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
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
              </div>

              {/* Separator - visible on sm+ */}
              <span className="text-gray-400 hidden sm:inline">|</span>

              <div className="text-gray-400 text-center sm:text-left">
                Design and Developed by{" "}
                <Link
                  href="https://wa.me/917046272137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#faa71a] hover:text-orange-500 transition-colors"
                >
                  V&V Digital
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
