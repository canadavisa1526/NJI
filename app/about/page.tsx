// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import {
//   GraduationCap,
//   Award,
//   Globe2,
//   Users,
//   MapPin,
//   Star,
//   Clock,
//   CheckCircle,
//   BookOpen,
//   Briefcase,
//   Target,
//   Heart,
//   Coffee,
//   Lightbulb,
//   Shield,
//   Rocket,
//   MessageSquare,
//   UserCheck,
//   Building,
//   Plane,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import type { Metadata } from "next";

// const metadata: Metadata = {
//   title:
//     "About New Journey Immigration - Your Trusted Education & Immigration Partner",
//   description:
//     "Learn about New Journey Immigration's commitment to excellence in education consulting, visa services, and IELTS coaching. Discover our expert team and global presence.",
//   keywords:
//     "education consultant, immigration services, IELTS coaching, study abroad, visa assistance, New Journey Immigration",
// };

// const AboutPage = () => {
//   const leaders = [
//     {
//       name: "John Smith",
//       role: "Founder & CEO",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
//       description:
//         "15+ years of experience in international education consulting",
//       expertise: [
//         "Education Strategy",
//         "Global Partnerships",
//         "Student Success",
//       ],
//     },
//     {
//       name: "Sarah Williams",
//       role: "Head of Immigration Services",
//       image:
//         "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
//       description:
//         "Certified Immigration Consultant with expertise in multiple countries",
//       expertise: ["Visa Processing", "Immigration Law", "Policy Advisory"],
//     },
//     {
//       name: "David Chen",
//       role: "Director of IELTS Training",
//       image:
//         "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
//       description: "IELTS trainer with 10+ years of experience",
//       expertise: [
//         "IELTS Preparation",
//         "Language Training",
//         "Academic Counseling",
//       ],
//     },
//   ];

//   const stats = [
//     { icon: Users, value: "15,000+", label: "Students Placed" },
//     { icon: Globe2, value: "50+", label: "Countries Covered" },
//     { icon: Award, value: "98%", label: "Success Rate" },
//     { icon: Star, value: "10+", label: "Years Experience" },
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Student-First Approach",
//       description:
//         "We prioritize our students' success and well-being above all else.",
//     },
//     {
//       icon: Target,
//       title: "Excellence",
//       description:
//         "We strive for excellence in every aspect of our service delivery.",
//     },
//     {
//       icon: Shield,
//       title: "Integrity",
//       description:
//         "We maintain the highest standards of professional ethics and transparency.",
//     },
//     {
//       icon: Rocket,
//       title: "Innovation",
//       description:
//         "We continuously evolve our services to meet changing global education needs.",
//     },
//   ];

//   const services = [
//     {
//       icon: BookOpen,
//       title: "Education Counseling",
//       description:
//         "Personalized guidance for choosing the right courses and institutions.",
//     },
//     {
//       icon: Plane,
//       title: "Visa Assistance",
//       description: "Expert support throughout your visa application process.",
//     },
//     {
//       icon: Building,
//       title: "Accommodation",
//       description:
//         "Help finding suitable and safe accommodation in your destination country.",
//     },
//     {
//       icon: MessageSquare,
//       title: "Language Training",
//       description: "Comprehensive IELTS and language preparation programs.",
//     },
//   ];

//   const testimonials = [
//     {
//       name: "Emily Chen",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
//       text: "New Journey Immigration made my dream of studying in Canada a reality. Their guidance was invaluable!",
//       destination: "University of Toronto",
//     },
//     {
//       name: "Rahul Patel",
//       image:
//         "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60",
//       text: "The IELTS training program helped me achieve my target score. Highly recommended!",
//       destination: "McGill University",
//     },
//     {
//       name: "Maria Garcia",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
//       text: "Professional, knowledgeable, and supportive throughout my immigration journey.",
//       destination: "University of British Columbia",
//     },
//   ];

//   const locations = [
//     {
//       city: "Mehsana",
//       country: "India",
//       address: "123 Main Street, Mehsana, Gujarat",
//       phone: "+91 XXXXXXXXXX",
//     },
//     {
//       city: "Ahmedabad",
//       country: "India",
//       address: "456 Business Hub, Ahmedabad, Gujarat",
//       phone: "+91 XXXXXXXXXX",
//     },
//     {
//       city: "Toronto",
//       country: "Canada",
//       address: "789 College Street, Toronto, ON",
//       phone: "+1 XXXXXXXXXX",
//     },
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-900">
//       {/* Hero Section */}
//       <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden">
//         <Image
//           src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
//           alt="About NJI"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-500/60 dark:from-blue-900/90 dark:to-orange-900/70" />
//         <div className="absolute inset-0 flex items-center">
//           <div className="responsive-container">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeInUp}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl px-4 sm:px-6"
//             >
//               <h1 className="responsive-heading font-bold text-white mb-4 sm:mb-6 leading-tight">
//                 Welcome to New Journey Immigration
//               </h1>
//               <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
//                 Your trusted partner for global education and immigration
//                 success
//               </p>
//               <Button className="theme-button" size="lg">
//                 Learn More
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="responsive-padding bg-blue-50 dark:bg-gray-800">
//         <div className="responsive-container">
//           <div className="stats-grid">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="theme-card p-4 sm:p-6 text-center"
//               >
//                 <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4 text-orange-500" />
//                 <div className="text-2xl sm:text-3xl font-bold theme-text-gradient mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="responsive-padding theme-section">
//         <div className="responsive-container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="order-2 lg:order-1"
//             >
//               <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 theme-text-gradient">
//                 Our Story
//               </h2>
//               <p className="responsive-text text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
//                 At New Journey Immigration, we are committed to turning your
//                 study abroad dreams into reality. We provide end-to-end services
//                 including admission guidance, visa assistance, GIC support,
//                 education loan consultation, accommodation arrangements, and
//                 flight bookings.
//               </p>
//               <p className="responsive-text text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
//                 Operating with a global presence and local expertise, our
//                 consultancy serves clients from all over the world. We have
//                 fully established branches in Mehsana and Ahmedabad (India) as
//                 well as Toronto (Canada).
//               </p>
//               <Button className="theme-button">
//                 Learn More About Our Journey
//               </Button>
//             </motion.div>
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2"
//             >
//               <Image
//                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
//                 alt="Our Team"
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Our Values Section */}
//       <section className="responsive-padding bg-blue-50 dark:bg-gray-800">
//         <div className="responsive-container">
//           <h2 className="section-title">Our Core Values</h2>
//           <p className="section-description">
//             These principles guide everything we do at New Journey Immigration
//           </p>
//           <div className="responsive-grid">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="feature-card text-center"
//               >
//                 <value.icon className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 text-orange-500" />
//                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
//                   {value.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Services Section */}
//       <section className="responsive-padding theme-section">
//         <div className="responsive-container">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-description">
//             Comprehensive support for your international education journey
//           </p>
//           <div className="responsive-grid">
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="feature-card"
//               >
//                 <service.icon className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-orange-500" />
//                 <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
//                   {service.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team Section */}
//       <section className="responsive-padding bg-blue-50 dark:bg-gray-800">
//         <div className="responsive-container">
//           <h2 className="section-title">Meet Our Leadership Team</h2>
//           <p className="section-description">
//             Our experienced team of professionals is dedicated to helping you
//             achieve your global education and immigration goals.
//           </p>

//           <div className="responsive-grid-3">
//             {leaders.map((leader, index) => (
//               <motion.div
//                 key={leader.name}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="theme-card p-4 sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="relative h-48 sm:h-56 md:h-72 mb-4 sm:mb-6 rounded-xl overflow-hidden">
//                   <Image
//                     src={leader.image}
//                     alt={leader.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <h3 className="text-xl sm:text-2xl font-bold mb-2">
//                   {leader.name}
//                 </h3>
//                 <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium">
//                   {leader.role}
//                 </p>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
//                   {leader.description}
//                 </p>
//                 <div className="space-y-2 sm:space-y-3">
//                   {leader.expertise.map((skill) => (
//                     <div
//                       key={skill}
//                       className="flex items-center text-sm sm:text-base text-gray-600 dark:text-gray-300"
//                     >
//                       <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2 sm:mr-3 flex-shrink-0" />
//                       {skill}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="responsive-padding theme-section">
//         <div className="responsive-container">
//           <h2 className="section-title">Student Success Stories</h2>
//           <p className="section-description">
//             Hear from our students who have achieved their dreams
//           </p>

//           <div className="responsive-grid-3">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.name}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="theme-card p-4 sm:p-6 md:p-8"
//               >
//                 <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 mb-4 sm:mb-6 mx-auto rounded-full overflow-hidden">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 italic">
//                   "{testimonial.text}"
//                 </p>
//                 <h3 className="text-lg sm:text-xl font-bold mb-1">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-blue-600 dark:text-blue-400">
//                   {testimonial.destination}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Global Presence Section */}
//       <section className="responsive-padding bg-blue-50 dark:bg-gray-800">
//         <div className="responsive-container">
//           <h2 className="section-title">Our Global Presence</h2>
//           <p className="section-description">
//             Find us at our offices across India and Canada
//           </p>

//           <div className="responsive-grid-3">
//             {locations.map((location, index) => (
//               <motion.div
//                 key={location.city}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="theme-card p-4 sm:p-6 md:p-8 hover:scale-105 transition-transform duration-300"
//               >
//                 <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-orange-500 mb-4 sm:mb-6" />
//                 <h3 className="text-xl sm:text-2xl font-bold mb-2">
//                   {location.city}
//                 </h3>
//                 <p className="text-blue-600 dark:text-blue-400 mb-4 sm:mb-6 font-medium">
//                   {location.country}
//                 </p>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">
//                   {location.address}
//                 </p>
//                 <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
//                   {location.phone}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="responsive-padding theme-section">
//         <div className="responsive-container text-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto px-4"
//           >
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 theme-text-gradient">
//               Ready to Start Your Journey?
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
//               Contact us today to begin your international education adventure
//               with expert guidance every step of the way.
//             </p>
//             <Button className="theme-button mx-auto" size="lg">
//               Get Started Today
//             </Button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Globe2,
  Users,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  BookOpen,
  Briefcase,
  Target,
  Heart,
  Coffee,
  Lightbulb,
  Shield,
  Rocket,
  MessageSquare,
  UserCheck,
  Building,
  Plane,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const leaders = [
  {
    name: "Karan Bhojak",
    role: "Director & CEO",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
    description:
      "Driven by a strong belief that success isn't just about crossing borders but about making meaningful connections, Karan's leadership is grounded in a mindset that blends vision with empathy.",
    expertise: ["Strategic Leadership", "Immigration Consulting", "Business Development"],
  },
  {
    name: "Dimple Nayak",
    role: "Visa Specialist & Director of Canada Branch",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
    description:
      "With over 20 years of experience in the immigration industry, Dimple is a highly respected expert in Canadian immigration processes.",
    expertise: ["Canadian Immigration", "Visa Processing", "Client Relations"],
  },
  {
    name: "Vinay Bhojak",
    role: "Branch Manager (North Gujarat)",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60",
    description:
      "Playing an instrumental role in ensuring our services are streamlined and effective across North Gujarat operations.",
    expertise: ["Branch Operations", "Team Management", "Process Optimization"],
  },
  {
    name: "Monika Nayak",
    role: "Account Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60",
    description:
      "The financial backbone of New Journey Immigration, ensuring precision and transparency in all financial operations.",
    expertise: ["Financial Management", "Client Transactions", "Process Efficiency"],
  },
];

const stats = [
  { icon: Users, value: "28,000+", label: "Students Enrolled" },
  { icon: Globe2, value: "50+", label: "Countries Covered" },
  { icon: Award, value: "99%", label: "Success Rate" },
  { icon: Star, value: "5+", label: "Years Experience" },
];

const values = [
  {
    icon: Heart,
    title: "Integrity First",
    description: "No hidden information. No misleading advice. Just clear, truthful guidance.",
  },
  {
    icon: Target,
    title: "Client-Centered Service",
    description: "We listen, understand, and tailor solutions to your unique goals.",
  },
  {
    icon: Shield,
    title: "End-to-End Support",
    description: "From your first inquiry to your final destination—and beyond.",
  },
  {
    icon: Globe2,
    title: "Global Expertise",
    description: "International reach, grounded in Indian values.",
  },
];

const services = [
  {
    icon: BookOpen,
    title: "Education Counseling",
    description: "Expert guidance for choosing the right courses and institutions abroad.",
  },
  {
    icon: Plane,
    title: "Visa Services",
    description: "Comprehensive support for study permits, PR, and visitor visas.",
  },
  {
    icon: Building,
    title: "Settlement Services",
    description: "Assistance with accommodation, banking, and local orientation.",
  },
  {
    icon: MessageSquare,
    title: "IELTS Training",
    description: "Professional coaching to achieve your target scores.",
  },
  {
    icon: Briefcase,
    title: "Career Guidance",
    description: "Support for post-study work opportunities and career planning.",
  },
  {
    icon: Coffee,
    title: "Student Support",
    description: "Ongoing assistance throughout your academic journey.",
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description: "Expert advice on immigration laws and regulations.",
  },
  {
    icon: Lightbulb,
    title: "Consultation",
    description: "Personalized guidance for your unique situation.",
  },
];

const locations = [
  {
    city: "Mehsana",
    country: "India",
    address: "123 Main Street, Mehsana, Gujarat",
    phone: "+91 XXXXXXXXXX",
  },
  {
    city: "Ahmedabad",
    country: "India",
    address: "456 Business Hub, Ahmedabad, Gujarat",
    phone: "+91 XXXXXXXXXX",
  },
  {
    city: "Toronto",
    country: "Canada",
    address: "789 College Street, Toronto, ON",
    phone: "+1 XXXXXXXXXX",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
          alt="About NJI"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="responsive-container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="hero-title">
                Welcome to New Journey Immigration
              </h1>
              <p className="hero-description">
                Your trusted partner in education and immigration success since 2018
              </p>
              <Button className="theme-button" size="lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="responsive-padding bg-white dark:bg-gray-900">
        <div className="responsive-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="stats-grid"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="stat-card"
              >
                <div className="icon-gradient inline-block mb-6">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-extrabold theme-text-gradient mb-3">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="responsive-padding bg-gray-50 dark:bg-gray-800">
        <div className="responsive-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 theme-text-gradient">
                From a Small Town Dream to a Global Vision
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                <p className="responsive-text">
                  New Journey Immigration began its journey in 2018, in the heart of Mehsana, Gujarat, India. 
                  What started as a modest one-person operation quickly grew into a trusted name in immigration 
                  and travel services.
                </p>
                <p className="responsive-text">
                  In 2022, we proudly opened our international branch in Toronto, Canada. This expansion 
                  allowed us to serve clients more closely, especially international students and families 
                  starting new lives in Canada.
                </p>
                <p className="responsive-text">
                  By 2025, we launched our second Indian branch in Ahmedabad, Gujarat, further expanding 
                  our reach while keeping our head office in Mehsana—where our story began and our values 
                  remain deeply rooted.
                </p>
              </div>
              <Button className="theme-button mt-10">
                Read Our Full Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-image"
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="responsive-padding bg-white dark:bg-gray-900">
        <div className="responsive-container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-description">
            These principles guide everything we do at New Journey Immigration
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="responsive-grid"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                className="value-card"
              >
                <div className="icon-gradient inline-block mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {value.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="responsive-padding bg-gray-50 dark:bg-gray-800">
        <div className="responsive-container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive support for your international education and immigration journey
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                className="service-card"
              >
                <div className="icon-gradient inline-block mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="responsive-padding bg-white dark:bg-gray-900">
        <div className="responsive-container">
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-description">
            Dedicated professionals committed to your success
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="responsive-grid-3 lg:grid-cols-4"
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={scaleIn}
                className="team-card"
              >
                <div className="team-image">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4 text-lg">{leader.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {leader.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {leader.expertise.map((skill) => (
                    <span key={skill} className="expertise-tag">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="responsive-padding bg-gray-50 dark:bg-gray-800">
        <div className="responsive-container">
          <h2 className="section-title">Our Global Presence</h2>
          <p className="section-description">
            Find us at our offices across India and Canada
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerChildren}
            viewport={{ once: true }}
            className="responsive-grid-3"
          >
            {locations.map((location) => (
              <motion.div
                key={location.city}
                variants={scaleIn}
                className="location-card"
              >
                <div className="icon-gradient inline-block mb-6">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{location.city}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-6 text-xl">
                  {location.country}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                  {location.address}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                  {location.phone}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="responsive-padding bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="responsive-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-extrabold mb-6 text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact us today to begin your international education adventure
              with expert guidance every step of the way.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-10 py-6 rounded-xl transform hover:scale-105 transition-all duration-300">
              Get Started Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}