"use client";

import { useState, useEffect, useRef } from "react";

interface SubmenuProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export default function Submenu({ sections }: SubmenuProps) {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollPosition = currentScrollY + 100;
      setScrolled(currentScrollY > 50);

      // Determine scroll direction and hide/show submenu accordingly
      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100 &&
        !menuOpen
      ) {
        // Scrolling down, not at the top, and mobile menu is closed
        setVisible(false);
      } else {
        // Scrolling up, at the top, or mobile menu is open
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, menuOpen]);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 text-xs ${
        scrolled
          ? "bg-[#13294E]/95 backdrop-blur-sm dark:bg-gray-900/95"
          : "bg-[#13294E] dark:bg-gray-900"
      } ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2">
        {/* Mobile toggle */}
        <div className="md:hidden py-1 flex justify-between items-center">
          <span className="text-[#FAA71A] font-semibold text-sm">
            Quick Navigation
          </span>
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setVisible(true); // Ensure submenu is visible when toggling menu
            }}
            className="bg-[#FAA71A] text-[#13294E] px-2 py-1 rounded focus:outline-none text-sm"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[300px]" : "max-h-0"
          }`}
        >
          <ul className="py-1 space-y-1 px-1 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`block w-full text-left px-3 py-1.5 rounded transition ${
                    activeSection === section.id
                      ? "bg-[#FAA71A] text-[#13294E] font-medium shadow-sm"
                      : "text-[#AFC1DB] hover:bg-[#AFC1DB]/10 hover:text-white"
                  }`}
                  onClick={() => {
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMenuOpen(false);
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:block py-1">
          <ul className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`px-4 py-1.5 rounded-full transition text-sm ${
                    activeSection === section.id
                      ? "bg-[#FAA71A] text-[#13294E] font-medium shadow-sm"
                      : "text-[#AFC1DB] hover:bg-[#AFC1DB]/10 hover:text-white"
                  }`}
                  onClick={() => {
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
