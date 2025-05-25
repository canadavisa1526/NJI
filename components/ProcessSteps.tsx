"use client";

import { motion } from "framer-motion";
import { FileText, Users, CheckCircle, Plane } from "lucide-react";

// Custom SVG Components for each step with enhanced designs
const ConsultationSVG = () => (
  <motion.svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="consultationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAA71A" />
        <stop offset="100%" stopColor="#13294E" />
      </linearGradient>
      <linearGradient id="deskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AFC1DB" />
        <stop offset="100%" stopColor="#8FA8C8" />
      </linearGradient>
    </defs>

    {/* Background with subtle pattern */}
    <rect width="400" height="300" fill="#f8fafc" />
    <circle cx="50" cy="50" r="3" fill="#FAA71A" opacity="0.1" />
    <circle cx="350" cy="80" r="2" fill="#13294E" opacity="0.1" />
    <circle cx="80" cy="250" r="4" fill="#AFC1DB" opacity="0.1" />

    {/* Modern office desk with perspective */}
    <motion.path
      d="M40 200 L360 200 L340 280 L60 280 Z"
      fill="url(#deskGrad)"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />

    {/* Desk legs */}
    <rect x="70" y="240" width="8" height="40" fill="#8FA8C8" />
    <rect x="320" y="240" width="8" height="40" fill="#8FA8C8" />

    {/* Consultant (Professional) */}
    <motion.g
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Head */}
      <circle cx="140" cy="110" r="28" fill="#FAA71A" />
      {/* Hair */}
      <path
        d="M115 95 Q140 85 165 95 Q160 105 140 110 Q120 105 115 95"
        fill="#13294E"
      />
      {/* Body (suit) */}
      <rect x="115" y="138" width="50" height="70" rx="25" fill="#13294E" />
      {/* Tie */}
      <rect x="135" y="145" width="10" height="35" fill="#FAA71A" />
      {/* Arms */}
      <ellipse cx="105" cy="160" rx="12" ry="25" fill="#13294E" />
      <ellipse cx="175" cy="160" rx="12" ry="25" fill="#13294E" />
      {/* Hands */}
      <circle cx="100" cy="180" r="8" fill="#FAA71A" />
      <circle cx="180" cy="180" r="8" fill="#FAA71A" />
    </motion.g>

    {/* Client */}
    <motion.g
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* Head */}
      <circle cx="260" cy="110" r="28" fill="#13294E" />
      {/* Hair */}
      <path
        d="M235 95 Q260 85 285 95 Q280 105 260 110 Q240 105 235 95"
        fill="#AFC1DB"
      />
      {/* Body (casual) */}
      <rect x="235" y="138" width="50" height="70" rx="25" fill="#FAA71A" />
      {/* Arms */}
      <ellipse cx="225" cy="160" rx="12" ry="25" fill="#FAA71A" />
      <ellipse cx="295" cy="160" rx="12" ry="25" fill="#FAA71A" />
      {/* Hands */}
      <circle cx="220" cy="180" r="8" fill="#13294E" />
      <circle cx="300" cy="180" r="8" fill="#13294E" />
    </motion.g>

    {/* Enhanced speech bubbles with content */}
    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ellipse
        cx="110"
        cy="70"
        rx="35"
        ry="25"
        fill="white"
        stroke="#AFC1DB"
        strokeWidth="2"
      />
      <path
        d="M120 90 L125 100 L115 95 Z"
        fill="white"
        stroke="#AFC1DB"
        strokeWidth="1"
      />
      {/* Question marks in bubble */}
      <text
        x="110"
        y="75"
        textAnchor="middle"
        fill="#13294E"
        fontSize="16"
        fontWeight="bold"
      >
        ?
      </text>
    </motion.g>

    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1,
      }}
    >
      <ellipse
        cx="290"
        cy="70"
        rx="35"
        ry="25"
        fill="white"
        stroke="#AFC1DB"
        strokeWidth="2"
      />
      <path
        d="M280 90 L275 100 L285 95 Z"
        fill="white"
        stroke="#AFC1DB"
        strokeWidth="1"
      />
      {/* Checkmark in bubble */}
      <path
        d="M280 70 L285 75 L300 60"
        stroke="#FAA71A"
        strokeWidth="3"
        fill="none"
      />
    </motion.g>

    {/* Documents and laptop on desk */}
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {/* Laptop */}
      <rect x="170" y="205" width="60" height="35" rx="3" fill="#13294E" />
      <rect x="175" y="210" width="50" height="25" rx="2" fill="white" />
      <rect x="195" y="240" width="20" height="3" rx="1" fill="#AFC1DB" />

      {/* Documents stack */}
      <rect
        x="120"
        y="215"
        width="35"
        height="25"
        rx="2"
        fill="white"
        stroke="#AFC1DB"
      />
      <rect
        x="122"
        y="213"
        width="35"
        height="25"
        rx="2"
        fill="white"
        stroke="#AFC1DB"
      />
      <rect
        x="124"
        y="211"
        width="35"
        height="25"
        rx="2"
        fill="white"
        stroke="#AFC1DB"
      />

      {/* Pen */}
      <rect x="250" y="220" width="25" height="3" rx="1" fill="#FAA71A" />
      <circle cx="275" cy="221" r="2" fill="#13294E" />

      {/* Coffee cup */}
      <ellipse cx="280" cy="225" rx="8" ry="6" fill="#AFC1DB" />
      <rect x="272" y="225" width="16" height="15" fill="#AFC1DB" />
      <ellipse cx="280" cy="240" rx="8" ry="6" fill="#8FA8C8" />
      <path
        d="M288 230 Q295 230 295 235 Q295 240 288 240"
        stroke="#8FA8C8"
        strokeWidth="2"
        fill="none"
      />
    </motion.g>

    {/* Floating icons around the scene */}
    <motion.g
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="350" cy="150" r="15" fill="#FAA71A" opacity="0.2" />
      <path d="M345 150 L350 145 L355 150 L350 155 Z" fill="white" />
    </motion.g>

    <motion.g
      animate={{ rotate: -360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="50" cy="120" r="12" fill="#13294E" opacity="0.2" />
      <rect x="46" y="116" width="8" height="8" fill="white" rx="1" />
    </motion.g>
  </motion.svg>
);

const DocumentationSVG = () => (
  <motion.svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#13294E" />
        <stop offset="100%" stopColor="#AFC1DB" />
      </linearGradient>
      <linearGradient id="paperGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f8fafc" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="2"
          dy="4"
          stdDeviation="3"
          floodColor="#13294E"
          floodOpacity="0.2"
        />
      </filter>
    </defs>

    {/* Background with document pattern */}
    <rect width="400" height="300" fill="#f8fafc" />
    <circle cx="60" cy="60" r="2" fill="#FAA71A" opacity="0.1" />
    <circle cx="340" cy="40" r="3" fill="#13294E" opacity="0.1" />
    <circle cx="380" cy="260" r="2" fill="#AFC1DB" opacity="0.1" />

    {/* Desk surface */}
    <motion.rect
      x="0"
      y="220"
      width="400"
      height="80"
      fill="#AFC1DB"
      opacity="0.3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />

    {/* Main document with shadow */}
    <motion.g
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <rect
        x="120"
        y="40"
        width="160"
        height="220"
        rx="8"
        fill="url(#paperGrad)"
        stroke="#AFC1DB"
        strokeWidth="2"
        filter="url(#shadow)"
      />

      {/* Document header */}
      <rect x="130" y="55" width="140" height="25" rx="4" fill="#13294E" />
      <text
        x="200"
        y="72"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontWeight="bold"
      >
        VISA APPLICATION
      </text>

      {/* Form fields with labels */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Personal Information Section */}
        <text x="130" y="100" fill="#13294E" fontSize="10" fontWeight="bold">
          Personal Information:
        </text>
        <rect
          x="130"
          y="105"
          width="120"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />
        <rect
          x="130"
          y="118"
          width="100"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />
        <rect
          x="130"
          y="131"
          width="140"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />

        {/* Education Section */}
        <text x="130" y="155" fill="#13294E" fontSize="10" fontWeight="bold">
          Education:
        </text>
        <rect
          x="130"
          y="160"
          width="110"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />
        <rect
          x="130"
          y="173"
          width="130"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />

        {/* Experience Section */}
        <text x="130" y="197" fill="#13294E" fontSize="10" fontWeight="bold">
          Experience:
        </text>
        <rect
          x="130"
          y="202"
          width="125"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />
        <rect
          x="130"
          y="215"
          width="95"
          height="8"
          rx="2"
          fill="#AFC1DB"
          opacity="0.5"
        />

        {/* Signature area */}
        <text x="130" y="240" fill="#13294E" fontSize="10" fontWeight="bold">
          Signature:
        </text>
        <path
          d="M130 250 Q150 245 170 250 Q190 255 210 250"
          stroke="#FAA71A"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>
    </motion.g>

    {/* Floating documents stack */}
    <motion.g
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <rect
        x="50"
        y="120"
        width="60"
        height="80"
        rx="4"
        fill="white"
        stroke="#AFC1DB"
        filter="url(#shadow)"
      />
      <rect
        x="55"
        y="115"
        width="60"
        height="80"
        rx="4"
        fill="white"
        stroke="#AFC1DB"
      />
      <rect
        x="60"
        y="110"
        width="60"
        height="80"
        rx="4"
        fill="white"
        stroke="#AFC1DB"
      />

      {/* Document icons */}
      <circle cx="90" cy="140" r="8" fill="#FAA71A" opacity="0.3" />
      <path
        d="M85 140 L88 143 L95 136"
        stroke="#FAA71A"
        strokeWidth="2"
        fill="none"
      />

      <rect
        x="70"
        y="160"
        width="40"
        height="3"
        rx="1"
        fill="#AFC1DB"
        opacity="0.6"
      />
      <rect
        x="70"
        y="168"
        width="35"
        height="3"
        rx="1"
        fill="#AFC1DB"
        opacity="0.6"
      />
      <rect
        x="70"
        y="176"
        width="30"
        height="3"
        rx="1"
        fill="#AFC1DB"
        opacity="0.6"
      />
    </motion.g>

    {/* Verification checkmarks */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 200 }}
    >
      <circle cx="320" cy="80" r="18" fill="#FAA71A" />
      <motion.path
        d="M310 80 L316 86 L330 72"
        stroke="white"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      />
    </motion.g>

    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 200 }}
    >
      <circle cx="320" cy="130" r="18" fill="#FAA71A" />
      <motion.path
        d="M310 130 L316 136 L330 122"
        stroke="white"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      />
    </motion.g>

    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 1.4, type: "spring", stiffness: 200 }}
    >
      <circle cx="320" cy="180" r="18" fill="#FAA71A" />
      <motion.path
        d="M310 180 L316 186 L330 172"
        stroke="white"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
    </motion.g>

    {/* Floating verification badge */}
    <motion.g
      animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="350" cy="220" r="25" fill="#13294E" />
      <circle cx="350" cy="220" r="20" fill="#FAA71A" />
      <text
        x="350"
        y="225"
        textAnchor="middle"
        fill="white"
        fontSize="10"
        fontWeight="bold"
      >
        ✓
      </text>
      <text
        x="350"
        y="250"
        textAnchor="middle"
        fill="#13294E"
        fontSize="8"
        fontWeight="bold"
      >
        VERIFIED
      </text>
    </motion.g>

    {/* Pen with writing animation */}
    <motion.g
      animate={{ x: [0, 5, 0], rotate: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <rect x="290" y="240" width="30" height="4" rx="2" fill="#13294E" />
      <rect x="320" y="241" width="8" height="2" rx="1" fill="#FAA71A" />
      <circle cx="325" cy="242" r="2" fill="#AFC1DB" />
    </motion.g>
  </motion.svg>
);

const ApplicationSVG = () => (
  <motion.svg viewBox="0 0 400 300" className="w-full h-full">
    <defs>
      <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#AFC1DB" />
        <stop offset="100%" stopColor="#FAA71A" />
      </linearGradient>
      <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#13294E" />
        <stop offset="100%" stopColor="#1a365d" />
      </linearGradient>
      <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background with tech elements */}
    <rect width="400" height="300" fill="#f8fafc" />
    <circle cx="60" cy="40" r="2" fill="#FAA71A" opacity="0.15" />
    <circle cx="340" cy="60" r="3" fill="#13294E" opacity="0.1" />
    <circle cx="380" cy="280" r="2" fill="#AFC1DB" opacity="0.1" />
    <rect
      x="20"
      y="20"
      width="6"
      height="6"
      fill="#FAA71A"
      opacity="0.1"
      transform="rotate(45 23 23)"
    />

    {/* Desk surface with perspective */}
    <motion.ellipse
      cx="200"
      cy="270"
      rx="180"
      ry="25"
      fill="#AFC1DB"
      opacity="0.2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    />

    {/* Modern laptop setup */}
    <motion.g
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Laptop base with shadow */}
      <ellipse cx="200" cy="250" rx="90" ry="20" fill="#13294E" opacity="0.2" />
      <rect
        x="110"
        y="235"
        width="180"
        height="25"
        rx="12"
        fill="url(#screenGlow)"
      />
      <rect
        x="115"
        y="240"
        width="170"
        height="15"
        rx="8"
        fill="#AFC1DB"
        opacity="0.3"
      />

      {/* Screen with modern design */}
      <rect
        x="120"
        y="50"
        width="160"
        height="190"
        rx="15"
        fill="url(#screenGlow)"
      />
      <rect x="130" y="60" width="140" height="170" rx="10" fill="#f8fafc" />

      {/* Screen bezel and camera */}
      <rect
        x="125"
        y="55"
        width="150"
        height="180"
        rx="12"
        fill="none"
        stroke="#AFC1DB"
        strokeWidth="1"
        opacity="0.4"
      />
      <circle cx="200" cy="65" r="3" fill="#13294E" opacity="0.6" />
    </motion.g>

    {/* Application interface */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* Browser header */}
      <rect x="135" y="70" width="130" height="20" rx="5" fill="#13294E" />
      <circle cx="145" cy="80" r="3" fill="#ff5f56" />
      <circle cx="155" cy="80" r="3" fill="#ffbd2e" />
      <circle cx="165" cy="80" r="3" fill="#27ca3f" />
      <rect
        x="175"
        y="76"
        width="80"
        height="8"
        rx="4"
        fill="#AFC1DB"
        opacity="0.3"
      />

      {/* Page title */}
      <rect
        x="140"
        y="95"
        width="120"
        height="15"
        rx="3"
        fill="#FAA71A"
        opacity="0.2"
      />
      <text
        x="200"
        y="105"
        textAnchor="middle"
        fill="#13294E"
        fontSize="10"
        fontWeight="bold"
      >
        VISA APPLICATION PORTAL
      </text>

      {/* Progress indicator */}
      <rect
        x="140"
        y="115"
        width="120"
        height="4"
        rx="2"
        fill="#AFC1DB"
        opacity="0.3"
      />
      <motion.rect
        x="140"
        y="115"
        width="90"
        height="4"
        rx="2"
        fill="#FAA71A"
        initial={{ width: 0 }}
        animate={{ width: 90 }}
        transition={{ duration: 2, delay: 1.0 }}
      />
      <text x="265" y="118" fill="#13294E" fontSize="7">
        75%
      </text>
    </motion.g>

    {/* Form sections with realistic content */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      {/* Personal Information */}
      <text x="145" y="135" fill="#13294E" fontSize="8" fontWeight="bold">
        Personal Information
      </text>
      <motion.rect
        x="145"
        y="140"
        width="110"
        height="10"
        rx="2"
        fill="#AFC1DB"
        opacity="0.3"
        initial={{ width: 0 }}
        animate={{ width: 110 }}
        transition={{ duration: 1, delay: 1.2 }}
      />
      <motion.rect
        x="147"
        y="142"
        width="85"
        height="6"
        rx="1"
        fill="#13294E"
        opacity="0.7"
        initial={{ width: 0 }}
        animate={{ width: 85 }}
        transition={{ duration: 1.2, delay: 1.4 }}
      />

      {/* Education Details */}
      <text x="145" y="160" fill="#13294E" fontSize="8" fontWeight="bold">
        Education
      </text>
      <motion.rect
        x="145"
        y="165"
        width="110"
        height="10"
        rx="2"
        fill="#AFC1DB"
        opacity="0.3"
        initial={{ width: 0 }}
        animate={{ width: 110 }}
        transition={{ duration: 1, delay: 1.6 }}
      />
      <motion.rect
        x="147"
        y="167"
        width="70"
        height="6"
        rx="1"
        fill="#13294E"
        opacity="0.7"
        initial={{ width: 0 }}
        animate={{ width: 70 }}
        transition={{ duration: 1.2, delay: 1.8 }}
      />

      {/* Document Upload Section */}
      <text x="145" y="185" fill="#13294E" fontSize="8" fontWeight="bold">
        Documents
      </text>
      <rect
        x="145"
        y="190"
        width="110"
        height="25"
        rx="3"
        fill="#AFC1DB"
        opacity="0.1"
        stroke="#AFC1DB"
        strokeWidth="1"
        strokeDasharray="3,3"
      />

      {/* Uploaded files */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <rect
          x="150"
          y="195"
          width="25"
          height="6"
          rx="1"
          fill="#FAA71A"
          opacity="0.8"
        />
        <circle cx="155" cy="198" r="2" fill="white" />
        <text x="155" y="200" textAnchor="middle" fill="white" fontSize="4">
          ✓
        </text>
        <text x="180" y="200" fill="#13294E" fontSize="6">
          passport.pdf
        </text>

        <rect
          x="150"
          y="205"
          width="25"
          height="6"
          rx="1"
          fill="#FAA71A"
          opacity="0.8"
        />
        <circle cx="155" cy="208" r="2" fill="white" />
        <text x="155" y="210" textAnchor="middle" fill="white" fontSize="4">
          ✓
        </text>
        <text x="180" y="210" fill="#13294E" fontSize="6">
          degree.pdf
        </text>
      </motion.g>
    </motion.g>

    {/* Submit button with enhanced design */}
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2, type: "spring", stiffness: 200 }}
    >
      <rect
        x="175"
        y="220"
        width="50"
        height="12"
        rx="6"
        fill="#FAA71A"
        filter="url(#glow)"
      />
      <text
        x="200"
        y="228"
        textAnchor="middle"
        fill="white"
        fontSize="8"
        fontWeight="bold"
      >
        SUBMIT APPLICATION
      </text>

      {/* Button glow effect */}
      <motion.rect
        x="175"
        y="220"
        width="50"
        height="12"
        rx="6"
        fill="#FAA71A"
        opacity="0.4"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.g>

    {/* Cloud upload visualization */}
    <motion.g
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {/* Cloud shape */}
      <path
        d="M300 100 Q290 90 280 100 Q270 85 285 85 Q300 75 315 85 Q330 85 320 100 Q325 110 315 110 L285 110 Q275 110 280 100"
        fill="#AFC1DB"
        opacity="0.6"
      />

      {/* Upload arrow with animation */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M300 110 L300 95 M290 105 L300 95 L310 105"
          stroke="#FAA71A"
          strokeWidth="2"
          fill="none"
        />
      </motion.g>

      <text
        x="300"
        y="125"
        textAnchor="middle"
        fill="#13294E"
        fontSize="7"
        fontWeight="bold"
      >
        SECURE UPLOAD
      </text>
    </motion.g>

    {/* Success confirmation */}
    <motion.g
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 2.8, type: "spring", stiffness: 150 }}
    >
      <circle cx="330" cy="180" r="18" fill="#FAA71A" />
      <motion.path
        d="M320 180 L327 187 L340 174"
        stroke="white"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 3.0 }}
      />
      <text
        x="330"
        y="205"
        textAnchor="middle"
        fill="#13294E"
        fontSize="7"
        fontWeight="bold"
      >
        SUBMITTED
      </text>
    </motion.g>

    {/* Floating data particles */}
    <motion.g
      animate={{ y: [0, -15, 0], opacity: [0.2, 0.8, 0.2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="70" cy="120" r="2" fill="#FAA71A" />
      <circle cx="80" cy="140" r="1.5" fill="#13294E" />
      <circle cx="60" cy="160" r="1" fill="#AFC1DB" />
    </motion.g>

    <motion.g
      animate={{ y: [0, -12, 0], opacity: [0.2, 0.8, 0.2] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
    >
      <circle cx="360" cy="80" r="1.5" fill="#FAA71A" />
      <circle cx="370" cy="100" r="1" fill="#13294E" />
      <circle cx="350" cy="120" r="2" fill="#AFC1DB" />
    </motion.g>

    {/* Security badge */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 3.2 }}
    >
      <rect
        x="50"
        y="200"
        width="40"
        height="30"
        rx="5"
        fill="#13294E"
        opacity="0.1"
      />
      <path
        d="M70 210 L65 205 L75 205 Z M65 215 L75 215 M65 220 L75 220"
        stroke="#AFC1DB"
        strokeWidth="1"
        fill="none"
      />
      <text
        x="70"
        y="235"
        textAnchor="middle"
        fill="#13294E"
        fontSize="6"
        fontWeight="bold"
      >
        SSL SECURE
      </text>
    </motion.g>
  </motion.svg>
);

const ApprovalSVG = () => (
  <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 rounded-3xl">
    {/* Animated background patterns */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FAA71A]/20 to-transparent rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#13294E]/20 to-transparent rounded-full"
        animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* Main content */}
    <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
      {/* Passport/Document illustration */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-6"
      >
        {/* Document */}
        <div className="w-32 h-40 bg-gradient-to-b from-[#13294E] to-[#1e3a5f] rounded-lg shadow-xl relative overflow-hidden">
          {/* Document header */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-[#FAA71A] to-[#ff8c00] flex items-center justify-center">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Document content */}
          <div className="absolute top-14 left-3 right-3">
            <div className="space-y-2">
              <div className="h-2 bg-white/30 rounded w-3/4"></div>
              <div className="h-2 bg-white/20 rounded w-1/2"></div>
              <div className="h-2 bg-white/20 rounded w-2/3"></div>
            </div>

            {/* Photo placeholder */}
            <div className="mt-4 w-8 h-10 bg-white/20 rounded border border-white/30"></div>
          </div>

          {/* Approval stamp overlay */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              type: "spring",
              stiffness: 150,
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white/50">
              <motion.svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-white"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                <motion.path
                  d="M9 12l2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Success text */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-center"
      >
        <h3 className="text-xl font-bold text-[#13294E] mb-2">
          Visa Approved!
        </h3>
        <p className="text-gray-600 text-sm">
          Congratulations! Your application is successful
        </p>
      </motion.div>

      {/* Celebration elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Confetti */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0
                ? "bg-[#FAA71A]"
                : i % 3 === 1
                ? "bg-green-400"
                : "bg-[#13294E]"
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  </div>
);

const ProcessSteps = () => {
  const steps = [
    {
      icon: Users,
      title: "Initial Consultation",
      description:
        "Free consultation to understand your requirements and eligibility",
      svgComponent: ConsultationSVG,
    },
    {
      icon: FileText,
      title: "Documentation",
      description:
        "Complete assistance with document preparation and verification",
      svgComponent: DocumentationSVG,
    },
    {
      icon: CheckCircle,
      title: "Application Filing",
      description: "Expert handling of your visa application",
      svgComponent: ApplicationSVG,
    },
    {
      icon: Plane,
      title: "Visa Approval",
      description:
        "Support until successful visa approval and travel preparation",
      svgComponent: ApprovalSVG,
    },
  ];

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-full mb-4"
          >
            <span className="text-[#FAA71A] font-medium">How We Work</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-6"
          >
            Our{" "}
            <span className="text-[#FAA71A] relative">
              Process
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#FAA71A]/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A simple and transparent process to help you achieve your
            immigration goals with confidence and peace of mind
          </motion.p>
        </motion.div>

        {/* Progress bar for all steps */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="relative h-2 bg-[#AFC1DB]/20 rounded-full mb-16 overflow-hidden max-w-4xl mx-auto"
        >
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/70 rounded-full"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.8 }}
          />
          {steps.map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#FAA71A] z-10"
              style={{ left: `calc(${(i / (steps.length - 1)) * 100}% - 8px)` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.2 }}
            />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector lines between cards */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`connector-${i}`}
              className="hidden lg:block absolute top-1/3 h-0.5 bg-gradient-to-r from-[#FAA71A] to-[#FAA71A]/50 z-0"
              style={{
                left: `calc(${(i + 1) * 25}% - 4%)`,
                width: "8%",
                transform: "translateY(-50%)",
              }}
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "8%" }}
              transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
            >
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAA71A] rounded-full"
                animate={{ x: ["-50px", "0px"] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  repeatType: "loop",
                  repeatDelay: 0.5,
                }}
              />
            </motion.div>
          ))}

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Step number indicator with enhanced animated ring */}
              <div className="absolute -top-3 -left-3 z-10 w-16 h-16 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-[#FAA71A]/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#FAA71A] to-[#FAA71A]/80 flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {index + 1}
                </motion.div>
              </div>

              {/* Enhanced SVG container with improved hover effects */}
              <div className="relative rounded-t-xl overflow-hidden h-48 shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-[#13294E]/20 dark:to-[#13294E]/40">
                <motion.div
                  className="w-full h-full transition-all duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.svgComponent />
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#13294E]/10 via-transparent to-transparent"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Enhanced decorative element with subtle animation */}
                <motion.div
                  className="absolute bottom-2 right-2 w-12 h-12 opacity-20"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="25" fill="#FAA71A" />
                    <circle cx="50" cy="50" r="15" fill="white" opacity="0.3" />
                  </svg>
                </motion.div>
              </div>

              {/* Enhanced content area with better styling */}
              <div className="bg-white dark:bg-[#13294E]/90 rounded-b-xl p-6 border border-[#AFC1DB]/40 dark:border-[#FAA71A]/10 shadow-lg h-64 flex flex-col relative overflow-hidden">
                {/* Background decorative element */}
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-[#FAA71A]/5 dark:bg-[#FAA71A]/5 pointer-events-none" />

                <div className="flex items-center mb-4 relative z-10">
                  <motion.div
                    className="p-3 bg-[#FAA71A]/10 dark:bg-[#FAA71A]/20 rounded-lg mr-3"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(250, 167, 26, 0.3)",
                    }}
                  >
                    <step.icon className="h-6 w-6 text-[#FAA71A]" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#13294E] dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <div className="flex-grow relative z-10">
                  <p className="text-[#13294E]/80 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Enhanced step indicator with animated progress */}
                <div className="mt-4 pt-3 border-t border-[#AFC1DB]/30 dark:border-white/10 flex justify-between items-center relative z-10">
                  <span className="text-xs font-medium text-[#13294E]/60 dark:text-gray-400">
                    Step {index + 1} of {steps.length}
                  </span>
                  <div className="w-16 h-2 bg-[#AFC1DB]/30 dark:bg-[#AFC1DB]/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#FAA71A] rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${((index + 1) / steps.length) * 100}%`,
                      }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
