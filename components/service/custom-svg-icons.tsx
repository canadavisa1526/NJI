"use client";

import { motion } from "framer-motion";

// Background Decorative SVGs
export const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating Geometric Shapes */}
    <motion.div
      animate={{ 
        rotate: 360,
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 20, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute top-20 left-10 w-32 h-32 opacity-10"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon 
          points="50,10 90,90 10,90" 
          fill="url(#gradient1)"
          className="drop-shadow-lg"
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAA71A" />
            <stop offset="100%" stopColor="#13294E" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>

    <motion.div
      animate={{ 
        rotate: -360,
        y: [0, -20, 0]
      }}
      transition={{ 
        duration: 15, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="absolute top-1/3 right-20 w-24 h-24 opacity-15"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="40" fill="url(#gradient2)" />
        <defs>
          <radialGradient id="gradient2">
            <stop offset="0%" stopColor="#AFC1DB" />
            <stop offset="100%" stopColor="#13294E" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>

    <motion.div
      animate={{ 
        rotate: 180,
        x: [0, 30, 0]
      }}
      transition={{ 
        duration: 25, 
        repeat: Infinity, 
        ease: "linear" 
      }}
      className="absolute bottom-32 left-1/4 w-20 h-20 opacity-10"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect x="20" y="20" width="60" height="60" rx="10" fill="url(#gradient3)" />
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAA71A" />
            <stop offset="100%" stopColor="#AFC1DB" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  </div>
);

// Service Process Icons
export const ProcessIcons = {
  consultation: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="35" r="15" fill="#FAA71A" />
      <path d="M25 65 Q50 45 75 65 L75 85 Q50 75 25 85 Z" fill="#13294E" />
      <circle cx="40" cy="25" r="3" fill="white" />
      <circle cx="60" cy="25" r="3" fill="white" />
      <path d="M45 40 Q50 45 55 40" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  
  documentation: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <rect x="20" y="15" width="60" height="70" rx="5" fill="#AFC1DB" />
      <rect x="25" y="20" width="50" height="60" rx="3" fill="white" />
      <line x1="30" y1="30" x2="65" y2="30" stroke="#13294E" strokeWidth="2" />
      <line x1="30" y1="40" x2="60" y2="40" stroke="#13294E" strokeWidth="2" />
      <line x1="30" y1="50" x2="55" y2="50" stroke="#13294E" strokeWidth="2" />
      <circle cx="70" cy="25" r="8" fill="#FAA71A" />
      <path d="M66 25 L69 28 L74 21" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  ),
  
  submission: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="35" fill="url(#submitGradient)" />
      <path d="M35 50 L45 60 L65 40" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5,5">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <defs>
        <linearGradient id="submitGradient">
          <stop offset="0%" stopColor="#FAA71A" />
          <stop offset="100%" stopColor="#13294E" />
        </linearGradient>
      </defs>
    </svg>
  ),
  
  approval: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="35" fill="#13294E" />
      <path d="M30 50 L45 65 L70 35" stroke="#FAA71A" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="#AFC1DB" strokeWidth="2" opacity="0.5" />
      <g>
        <circle cx="35" cy="25" r="2" fill="#FAA71A" opacity="0.7">
          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="75" r="2" fill="#FAA71A" opacity="0.7">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="25" r="2" fill="#AFC1DB" opacity="0.7">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
};

// Form Decoration SVGs
export const FormDecorations = {
  topLeft: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path d="M0 0 Q50 25 100 0 L100 50 Q75 25 100 100 L50 100 Q25 75 0 100 Z" fill="url(#formGradient1)" />
      <defs>
        <linearGradient id="formGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAA71A" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#13294E" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  ),
  
  bottomRight: (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="80" cy="80" r="30" fill="url(#formGradient2)" />
      <circle cx="60" cy="60" r="20" fill="url(#formGradient3)" />
      <defs>
        <radialGradient id="formGradient2">
          <stop offset="0%" stopColor="#AFC1DB" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#13294E" stopOpacity="0.05" />
        </radialGradient>
        <radialGradient id="formGradient3">
          <stop offset="0%" stopColor="#FAA71A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#AFC1DB" stopOpacity="0.03" />
        </radialGradient>
      </defs>
    </svg>
  )
};

// Success Indicators
export const SuccessIndicators = {
  checkmark: (
    <motion.svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <circle cx="50" cy="50" r="45" fill="url(#successGradient)" />
      <motion.path 
        d="M25 50 L40 65 L75 30" 
        stroke="white" 
        strokeWidth="6" 
        fill="none" 
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <defs>
        <linearGradient id="successGradient">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#16a34a" />
        </linearGradient>
      </defs>
    </motion.svg>
  ),
  
  star: (
    <motion.svg 
      viewBox="0 0 100 100" 
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    >
      <path 
        d="M50 10 L60 35 L85 35 L67 52 L75 77 L50 65 L25 77 L33 52 L15 35 L40 35 Z" 
        fill="url(#starGradient)" 
      />
      <defs>
        <linearGradient id="starGradient">
          <stop offset="0%" stopColor="#FAA71A" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </motion.svg>
  )
};

// Hero Section Background
export const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg viewBox="0 0 1200 800" className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAA71A" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#AFC1DB" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#13294E" stopOpacity="0.1" />
        </linearGradient>
        <pattern id="heroPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="1" fill="#13294E" opacity="0.1" />
        </pattern>
      </defs>
      
      <rect width="100%" height="100%" fill="url(#heroPattern)" />
      
      <motion.path
        d="M0 400 Q300 200 600 400 T1200 400 L1200 800 L0 800 Z"
        fill="url(#heroGradient)"
        animate={{ d: [
          "M0 400 Q300 200 600 400 T1200 400 L1200 800 L0 800 Z",
          "M0 450 Q300 250 600 450 T1200 350 L1200 800 L0 800 Z",
          "M0 400 Q300 200 600 400 T1200 400 L1200 800 L0 800 Z"
        ]}}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  </div>
);


