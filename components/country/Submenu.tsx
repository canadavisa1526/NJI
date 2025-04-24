'use client';

import { useState, useEffect } from 'react';

interface SubmenuProps {
  sections: {
    id: string;
    label: string;
  }[];
}

export default function Submenu({ sections }: SubmenuProps) {
  const [activeSection, setActiveSection] = useState('');
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#13294E]/95 backdrop-blur-sm dark:bg-gray-900/95' : 'bg-[#13294E] dark:bg-gray-900'
    }`}>
      <div className="container mx-auto px-4">
        {/* Mobile menu toggle */}
        <div className="md:hidden py-4 flex justify-between items-center">
          <span className="font-semibold text-[#FAA71A]">Quick Navigation</span>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-[#FAA71A] text-[#13294E] p-2 rounded-lg focus:outline-none hover:bg-[#f39c00] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}>
          <ul className="py-2 space-y-2 px-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-[#FAA71A] text-[#13294E] font-semibold shadow-lg transform scale-[1.02]'
                      : 'text-[#AFC1DB] hover:bg-[#AFC1DB]/10 hover:text-white'
                  }`}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
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
        <div className="hidden md:block py-4">
          <ul className="flex flex-wrap justify-center gap-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`px-6 py-2.5 rounded-full transition-all duration-200 transform ${
                    activeSection === section.id
                      ? 'bg-[#FAA71A] text-[#13294E] font-semibold scale-105 shadow-lg'
                      : 'text-[#AFC1DB] hover:bg-[#AFC1DB]/10 hover:text-white hover:scale-105'
                  }`}
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
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