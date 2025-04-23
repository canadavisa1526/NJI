"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

export function SubNavbar() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'Top Institutions', href: '#institutions' },
    { label: 'Top Courses', href: '#courses' },
    { label: 'Job Opportunities', href: '#jobs' },
    { label: 'Cost', href: '#cost' },
    { label: 'Success Stories', href: '#success-stories' },
    { label: 'FAQ', href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Make navbar sticky after hero section
      const heroHeight = 500; // Approximate hero height
      setIsSticky(window.scrollY > heroHeight);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Add some buffer to make the highlighting feel more natural
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={cn(
      "w-full bg-background/80 backdrop-blur-md border-b border-border z-30 transition-all duration-300",
      isSticky ? "sticky top-0 shadow-md" : ""
    )}>
      <div className="container py-2">
        <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground"
          >
            Sections <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              size="sm"
              className={cn(
                "whitespace-nowrap transition-all",
                activeSection === item.href.substring(1)
                  ? "text-[#FAA71A] font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}