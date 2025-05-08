"use client";

import LightLogo from "@/public/svg/Asset_4.svg";
import DarkLogo from "@/public/svg/Asset_3.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Globe2,
  Building2,
  Phone,
  Sun,
  Moon,
  School,
  Library,
  Award,
  Users,
  FileText,
  BarChart,
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Rocket,
  Target,
  Sparkles,
  MapPin,
  Info,
  Banknote,
} from "lucide-react";

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => mod.Button),
  {
    ssr: false,
  }
);

import AppointmentDialog from "./AppointmentDialog";
import ConsultationDialog from "./ConsultationDialog";
import { NavItem } from "@/types/navbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down (with a threshold)
      // But always show at the top of the page
      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY + 10) {
        // Add threshold to prevent flickering
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems: NavItem[] = [
    // {
    //   title: "Study Programs",
    //   icon: GraduationCap,
    //   submenu: [
    //     {
    //       title: "Undergraduate",
    //       icon: School,
    //       href: "/programs/undergraduate",
    //       description: "Bachelor's degree programs for high school graduates",
    //     },
    //     {
    //       title: "Postgraduate",
    //       icon: BookOpen,
    //       href: "/programs/postgraduate",
    //       description: "Master's and doctoral programs for graduates",
    //     },
    //     {
    //       title: "Research",
    //       icon: Lightbulb,
    //       href: "/programs/research",
    //       description: "Research opportunities and PhD programs",
    //     },
    //     {
    //       title: "Professional",
    //       icon: Target,
    //       href: "/programs/professional",
    //       description: "Career-focused certification programs",
    //     },
    //     {
    //       title: "Short Courses",
    //       icon: Rocket,
    //       href: "/programs/short-courses",
    //       description: "Intensive short-term learning programs",
    //     },
    //   ],
    // },
    {
      title: "Destinations",
      icon: Globe2,
      submenu: [
        {
          title: "Study in Canada",
          icon: MapPin,
          href: "/country/canada",
          description: "World-class education in a multicultural environment",
        },
        {
          title: "Study in USA",
          icon: MapPin,
          href: "/country/usa",
          description: "Top-ranked universities and diverse opportunities",
        },
        {
          title: "Study in UK",
          icon: MapPin,
          href: "/country/uk",
          description: "Traditional excellence in education",
        },
        {
          title: "Study in Australia",
          icon: MapPin,
          href: "/country/australia",
          description: "Quality education in a beautiful setting",
        },
        {
          title: "Study in Germany",
          icon: MapPin,
          href: "/country/germany",
          description: "Innovation and engineering excellence",
        },
        {
          title: "Study in New Zealand",
          icon: MapPin,
          href: "/country/new-zealand",
          description: "Quality education in a scenic environment",
        },
      ],
    },
    {
      title: "About Us",
      icon: Info,
      href: "/about",
    },

    {
      title: "Other Services",
      icon: Building2,
      submenu: [
        {
          title: "Visitor Visa",
          icon: FileText,
          href: "/services/visitor-visa",
        },
        {
          title: "Dependent Visa",
          icon: FileText,
          href: "/services/dependent-visa",
        },
        { title: "Insurance", icon: FileText, href: "/services/insurance" },
        { title: "Air Ticket", icon: FileText, href: "/services/air-ticket" },
        {
          title: "Finance (Forex and Loan)",
          icon: Banknote,
          href: "/services/finance",
        },
        { title: "Work Permit", icon: FileText, href: "/services/work-permit" },
        {
          title: "Permanent Residency",
          icon: FileText,
          href: "/services/permanent-residency",
        },
        { title: "Coaching", icon: Users, href: "/services/coaching" },
      ],
    },

    {
      title: "Contact",
      icon: Phone,
      onClick: () => setIsConsultationOpen(true),
      href: "/contact",
    },
  ];

  const isDark = theme === "dark" || resolvedTheme === "dark";
  const LogoSVG = () => (
    <div className="flex items-center">
      <div className="relative w-48 h-16 sm:w-36 sm:h-12 md:w-60 md:h-20">
        <div className="absolute inset-0 flex items-center justify-center z-20 overflow-hidden">
          <Image
            src={isDark ? LightLogo : DarkLogo}
            alt="logo"
            fill
            className="object-contain z-20"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </div>
    </div>
  );

  const toggleSubmenu = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#13294E]/90 backdrop-blur-lg shadow-lg"
          : "bg-white/90 dark:bg-[#13294E]/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-3">
              <LogoSVG />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 lg:px-4 py-2 flex items-center space-x-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-[#FAA71A] dark:hover:text-[#FAA71A] transition-colors duration-200 rounded-lg ${
                      scrolled
                        ? "hover:bg-[#FAA71A]/10 dark:hover:bg-[#AFC1DB]/10"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`px-3 lg:px-4 py-2 flex items-center space-x-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-[#FAA71A] dark:hover:text-[#FAA71A] transition-colors duration-200 rounded-lg ${
                      scrolled
                        ? "hover:bg-[#FAA71A]/10 dark:hover:bg-[#AFC1DB]/10"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                    {item.submenu && (
                      <ChevronDown className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" />
                    )}
                  </button>
                )}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div
                      className={`p-4 bg-white/90 dark:bg-[#13294E]/90 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-black/5 ${
                        item.submenu.length > 4
                          ? "w-[600px] grid grid-cols-2 gap-2"
                          : "w-[300px]"
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="flex flex-col p-3 rounded-lg hover:bg-[#FAA71A]/10 dark:hover:bg-[#FAA71A]/20 transition-colors duration-200 group/item"
                        >
                          <div className="flex items-center space-x-2">
                            <subItem.icon className="h-5 w-5 text-[#FAA71A] dark:text-[#FAA71A]" />
                            <span className="font-medium text-gray-900 dark:text-gray-100 group-hover/item:text-[#FAA71A] dark:group-hover/item:text-[#FAA71A]">
                              {subItem.title}
                            </span>
                          </div>
                          {subItem.description && (
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                              {subItem.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[#FAA71A]" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="hidden lg:block"
            >
              <Button
                className="bg-[#FAA71A] hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  // setIsAppointmentOpen(true)
                  window.open(
                    "https://calendly.com/canada-visa1526/15-minute-meeting-clone",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Book Consultation
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="md:hidden flex items-center">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="mr-2"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-[#FAA71A]" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-700 dark:text-gray-300 p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "hover:bg-[#FAA71A]/10 dark:hover:bg-[#FAA71A]/20"
                  : "hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#13294E]/95 backdrop-blur-lg shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.title} className="block">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-[#FAA71A]/10 dark:hover:bg-[#FAA71A]/20 hover:text-[#FAA71A] dark:hover:text-[#FAA71A] rounded-lg transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.submenu) {
                          toggleSubmenu(item.title);
                        } else {
                          item.onClick?.();
                          setIsOpen(false);
                        }
                      }}
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-[#FAA71A]/10 dark:hover:bg-[#FAA71A]/20 hover:text-[#FAA71A] dark:hover:text-[#FAA71A] rounded-lg transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </div>
                      {item.submenu && (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}
                  {item.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === item.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="grid grid-cols-1 gap-2 pl-4 mt-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex flex-col p-2 rounded-lg hover:bg-[#FAA71A]/10 dark:hover:bg-[#FAA71A]/20 transition-colors duration-200"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="flex items-center space-x-2">
                                <subItem.icon className="h-4 w-4 text-[#FAA71A]" />
                                <span className="text-gray-900 dark:text-gray-100">
                                  {subItem.title}
                                </span>
                              </div>
                              {subItem.description && (
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 pl-6">
                                  {subItem.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
              <div className="px-3 py-2">
                <Button
                  className="w-full bg-[#FAA71A] hover:bg-[#FAA71A]/90 text-white shadow-md"
                  onClick={() => {
                    window.open(
                      "https://calendly.com/canada-visa1526/15-minute-meeting-clone",
                      "_blank"
                    );
                    // setIsAppointmentOpen(true);
                    // setIsOpen(false);
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AppointmentDialog
        open={isAppointmentOpen}
        onOpenChange={setIsAppointmentOpen}
      />
      <ConsultationDialog
        open={isConsultationOpen}
        onOpenChange={setIsConsultationOpen}
      />
    </motion.nav>
  );
};

export default Navbar;
