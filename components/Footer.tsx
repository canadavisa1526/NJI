// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.png"; // Adjust path if needed
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-background text-black dark:bg-background dark:text-white transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">

//           {/* Logo + Tagline */}
//           <div className="flex flex-col justify-between h-full">
//             <div className="flex items-center space-x-3 mb-4">
//               <div className="relative w-12 h-12 sm:w-14 sm:h-14">
//                 <Image
//                   src={Logo}
//                   alt="New Journey Immigrations Logo"
//                   fill
//                   className="object-contain rounded-full"
//                 />
//               </div>
//               <div>
//                 <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
//                   New Journey Immigrations
//                 </h3>
//                 <p className="text-xs sm:text-sm text-black dark:text-white">
//                   Begin your global journey with confidence.
//                 </p>
//               </div>
//             </div>
//             <p className="text-sm leading-relaxed text-black dark:text-white">
//               We are your trusted partner for global opportunities — providing expert immigration, study, and visa support to help you succeed abroad.
//             </p>
//             <div className="flex space-x-4 mt-4">
//               {[
//                 { href: "#", icon: Facebook },
//                 { href: "#", icon: Twitter },
//                 { href: "#", icon: Instagram },
//                 { href: "#", icon: Linkedin },
//               ].map(({ href, icon: Icon }, index) => (
//                 <Link key={index} href={href} className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
//                   <Icon className="h-5 w-5 text-black dark:text-white" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
//               Explore
//             </h4>
//             <ul className="space-y-2 text-sm text-black dark:text-white">
//               {["About Us", "Our Services", "Blog", "Contact"].map((link, index) => (
//                 <li key={index}>
//                   <Link href={`/${link.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
//               Visa Services
//             </h4>
//             <ul className="space-y-2 text-sm text-black dark:text-white">
//               {["Student Visa", "Work Visa", "Tourist Visa", "Business Visa"].map((service, index) => (
//                 <li key={index}>
//                   <Link href="#" className="hover:text-gray-500 dark:hover:text-gray-300 transition-colors">{service}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-black dark:text-white">
//               Contact Us
//             </h4>
//             <ul className="space-y-4 text-sm text-black dark:text-white">
//               {[
//                 { icon: Phone, text: "+1 234 567 8900" },
//                 { icon: Mail, text: "info@newjourneyimmigrations.com" },
//                 { icon: MapPin, text: "123 Business Street, Suite 100, City, Country" },
//               ].map(({ icon: Icon, text }, index) => (
//                 <li key={index} className="flex items-center">
//                   <Icon className="h-5 w-5 mr-2 text-black dark:text-white" />
//                   <span>{text}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-border mt-12 pt-8 text-center text-sm text-black dark:text-white">
//           &copy; {currentYear} New Journey Immigrations. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const featureLinks = [
    { name: "About us", href: "/about" },
    { name: "Study in Canada", href: "/country/canada" },
    { name: "Study in USA", href: "/country/usa" },
    { name: "Study in Australia", href: "/country/australia" },
    { name: "Study in UK", href: "/country/uk" },
    { name: "IELTS Coaching", href: "#" },
    { name: "PTE Coaching", href: "#" },
    { name: "Student Visa", href: "#" },
    { name: "PR Visa", href: "#" },
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

  const indiaLocations = ["Mehsana", "Ahmedabad", "Patan", "Rajkot"];
  const canadaLocations = ["Toronto"];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-blue-950 dark:from-gray-950 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-600 rounded-full animate-pulse" />
                <div className="absolute inset-0.5 bg-gray-900 rounded-full" />
                {/* <GraduationCap className="absolute inset-0 m-2 text-orange-500" /> */}
                <Image
                  src="https://nji-gamma.vercel.app/_next/static/media/logo.decdbc27.png"
                  alt="logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                New Journey Immigration
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for global education and immigration success.
              We provide comprehensive support for students aspiring to study
              abroad with expert guidance at every step.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Feature Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {featureLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-orange-500 font-semibold mb-3">
                  India Office
                </h4>
                <p className="flex items-start space-x-3 text-gray-300 mb-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-orange-500" />
                  <span>123 Main Street, Mehsana, Gujarat, India</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3 mb-2">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span>info@nji.com</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>+91 XXXXXXXXXX</span>
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-semibold mb-3">
                  Canada Office
                </h4>
                <p className="flex items-start space-x-3 text-gray-300 mb-2">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-1 text-orange-500" />
                  <span>789 College Street, Toronto, ON</span>
                </p>
                <p className="text-gray-300 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>+1 XXXXXXXXXX</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Locations */}
        {/* <div className="mt-16 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
            Our Global Presence
          </h3>
          <div className="space-y-4 text-center">
            <div>
              <span className="text-orange-500 font-semibold">India:</span>{' '}
              <span className="text-gray-300">{indiaLocations.join(' • ')}</span>
            </div>
            <div>
              <span className="text-orange-500 font-semibold">Canada:</span>{' '}
              <span className="text-gray-300">{canadaLocations.join(' • ')}</span>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {currentYear} New Journey Immigration. All rights reserved |{" "}
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
