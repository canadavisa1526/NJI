"use client";
import dynamic from "next/dynamic";

const Button = dynamic(
  () => import("@/components/ui/button").then((mod) => mod.Button),
  {
    ssr: false,
  }
);

import Image from "next/image";
import Logo from "@/public/logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
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
} from "lucide-react";
// const Button = dynamic(() => import("@/components/ui/button"), { ssr: false });

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import AppointmentDialog from "./AppointmentDialog";
import ConsultationDialog from "./ConsultationDialog";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { theme, setTheme } = useTheme();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when screen size changes
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

  const navItems = [
    {
      title: "Study Programs",
      icon: GraduationCap,
      submenu: [
        { title: "Undergraduate", icon: School },
        { title: "Postgraduate", icon: BookOpen },
        { title: "Research", icon: Lightbulb },
        { title: "Professional", icon: Target },
        { title: "Short Courses", icon: Rocket },
      ],
    },
    {
      title: "Destinations",
      icon: Globe2,
      submenu: [
        { title: "Study in Canada", icon: MapPin },
        { title: "Study in USA", icon: MapPin },
        { title: "Study in UK", icon: MapPin },
        { title: "Study in Australia", icon: MapPin },
        { title: "View All", icon: Sparkles },
      ],
    },
    {
      title: "About Us",
      icon: Info,
      href: "/about",
    },
    
    {
      title: "Contact",
      icon: Phone,
      onClick: () => setIsConsultationOpen(true),
    },
  ];
  const LogoSVG = () => (
    <div className="flex items-center space-x-3">
      <div className="relative w-16 h-16 sm:w-14 sm:h-14">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-blue-600 animate-pulse z-0" />
        
        {/* Inner Circle Background */}
        <div className="absolute inset-0.5 rounded-full bg-white dark:bg-gray-900 z-10" />
        
        {/* Logo Image */}
        <Image
          src={Logo}
          alt="logo"
          fill
          className="object-contain rounded-full z-20"
        />
      </div>
  
      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
          IMMIGRATION
        </span>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Your Education Journey
        </span>
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
      transition={{ duration: 0.3 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    className={`px-3 lg:px-4 py-2 flex items-center space-x-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 rounded-lg ${
                      scrolled
                        ? "hover:bg-orange-50 dark:hover:bg-orange-900/20"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`px-3 lg:px-4 py-2 flex items-center space-x-2 text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200 rounded-lg ${
                      scrolled
                        ? "hover:bg-orange-50 dark:hover:bg-orange-900/20"
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
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-black/5">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href="#"
                          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 hover:text-orange-500 transition-colors duration-200"
                        >
                          <subItem.icon className="h-4 w-4 mr-2" />
                          <span>{subItem.title}</span>
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
                <Sun className="h-5 w-5 text-orange-500" />
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
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsAppointmentOpen(true)}
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
                <Sun className="h-5 w-5 text-orange-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-700" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`text-gray-700 dark:text-gray-300 p-2 rounded-lg transition-colors duration-200 ${
                scrolled
                  ? "hover:bg-orange-50 dark:hover:bg-orange-900/20"
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
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.title} className="block">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-2 w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 rounded-lg transition-colors duration-200"
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
                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/50 rounded-lg transition-colors duration-200"
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
                          className="pl-4 mt-2 space-y-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href="#"
                              className="flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 px-4 py-1.5 rounded-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              <subItem.icon className="h-4 w-4 mr-2" />
                              <span>{subItem.title}</span>
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
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  onClick={() => {
                    setIsAppointmentOpen(true);
                    setIsOpen(false);
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
