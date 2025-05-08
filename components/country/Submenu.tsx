"use client";

import { useState, useEffect } from "react";

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setScrolled(window.scrollY > 50);

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
  }, [sections]);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 text-xs ${
        scrolled
          ? "bg-[#13294E]/95 backdrop-blur-sm dark:bg-gray-900/95"
          : "bg-[#13294E] dark:bg-gray-900"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2">
        {/* Mobile toggle */}
        <div className="md:hidden py-1 flex justify-between items-center">
          <span className="text-[#FAA71A] font-semibold text-sm">Quick Navigation</span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
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
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
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
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
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
