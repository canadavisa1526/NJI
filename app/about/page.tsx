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
//   History,
//   Users2,
//   Trophy,
//   Quote,
//   Sparkles,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const AboutPage = () => {
//   // Stats data
//   const stats = [
//     { icon: Users2, value: "28,000+", label: "Successful Cases" },
//     { icon: Globe2, value: "50+", label: "Countries Served" },
//     { icon: Trophy, value: "5+", label: "Years Experience" },
//     { icon: Star, value: "99%", label: "Success Rate" },
//   ];

//   // Values data
//   const values = [
//     {
//       icon: Heart,
//       title: "Client-Centric Approach",
//       description:
//         "Your success is our priority. We provide personalized solutions tailored to your unique needs.",
//     },
//     {
//       icon: Shield,
//       title: "Integrity & Transparency",
//       description:
//         "We believe in honest communication and maintaining the highest ethical standards.",
//     },
//     {
//       icon: Target,
//       title: "Excellence",
//       description:
//         "We strive for excellence in every aspect of our service delivery.",
//     },
//     {
//       icon: Users,
//       title: "Cultural Sensitivity",
//       description:
//         "We respect and embrace cultural differences in our global community.",
//     },
//   ];

//   // Global presence data
//   const locations = [
//     {
//       city: "Mehsana",
//       country: "India",
//       address: "City Center, Mehsana",
//       services: [
//         "Immigration Services",
//         "IELTS Coaching",
//         "Student Counseling",
//       ],
//     },
//     {
//       city: "Toronto",
//       country: "Canada",
//       address: "Downtown Toronto",
//       services: [
//         "Immigration Processing",
//         "Settlement Services",
//         "Job Assistance",
//       ],
//     },
//     {
//       city: "Sydney",
//       country: "Australia",
//       address: "CBD Sydney",
//       services: ["Student Services", "Visa Processing", "Career Guidance"],
//     },
//   ];

//   const founder = {
//     name: "Karan Bhojak",
//     role: "Founder & CEO",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
//     quote: "Immigration shouldn't be overwhelming, it should be empowering.",
//     description: `Driven by a strong belief that success isn't just about crossing borders but about making meaningful connections, Karan Bhojak's journey in founding New Journey Immigration began with a simple yet powerful idea. With years of hands-on experience in the industry, he recognized that the immigration field lacked true transparency and personalized support.

//     Under his leadership, what started as a modest one-person operation in Mehsana has grown into a trusted international brand. Karan's vision of providing clear, honest guidance has shaped NJI's core values and operational philosophy. His hands-on approach and commitment to client success have been instrumental in building a team that shares his passion for making immigration accessible and empowering.`,
//     achievements: [
//       "Pioneer in transparent immigration services",
//       "Expanded operations to multiple countries",
//       "Built a team of certified experts",
//       "Established international partnerships",
//     ],
//   };

//   const teamMembers = [
//     {
//       name: "Dimple Nayak",
//       role: "Visa Specialist & Director of Canada Branch",
//       image: "/team/dimple.jpeg",
//       description:
//         "20+ years of experience in Canadian immigration processes, guiding clients with personalized, transparent advice.",
//       expertise: [
//         "Canadian Immigration",
//         "Visa Processing",
//         "Client Relations",
//       ],
//     },
//     {
//       name: "Vinay Bhojak",
//       role: "Branch Manager (North Gujarat)",
//       image: "/team/vinay.JPG",
//       description:
//         "Instrumental in streamlining operations and ensuring outstanding client service in North Gujarat.",
//       expertise: ["Branch Operations", "Client Service", "Process Improvement"],
//     },
//     {
//       name: "Monika Nayak",
//       role: "Account Manager",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
//       description:
//         "Financial backbone of NJI, ensuring precision and transparency in all financial operations.",
//       expertise: [
//         "Financial Management",
//         "Client Transactions",
//         "Process Optimization",
//       ],
//     },
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   const scaleIn = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 },
//   };

//   return (
//     <div className="min-h-screen overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
//             alt="About Us Hero"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

//           {/* Decorative Elements */}
//           <div className="absolute inset-0 opacity-30">
//             <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
//             <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
//             <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
//           </div>
//         </div>

//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <span className="inline-block text-orange-400 text-lg font-semibold mb-4">
//               Welcome to New Journey Immigration
//             </span>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
//               Your Journey,{" "}
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-600">
//                 Our Commitment
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
//               Transforming dreams into reality through expert guidance and
//               unwavering support
//             </p>
//             <div className="flex items-center justify-center gap-4">
//               <Button
//                 size="lg"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
//               >
//                 Start Your Journey
//               </Button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//           <motion.div
//             animate={{
//               y: [0, 10, 0],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//             className="w-6 h-10 border-2 border-white rounded-full p-1"
//           >
//             <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto animate-scroll" />
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-24 bg-gradient-to-b from-white to-orange-50 dark:from-gray-900 dark:to-gray-800 relative">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={scaleIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1, duration: 0.5 }}
//                 className="relative group"
//               >
//                 <div className="absolute inset-0 bg-orange-100 dark:bg-orange-900/30 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
//                 <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                     <stat.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <div className="text-4xl font-bold bg-[#13294E] bg-clip-text text-transparent mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-600 dark:text-gray-400 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founder Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-orange-50/90 to-blue-50/90 dark:from-orange-950/90 dark:to-blue-950/90" />
//           <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm font-semibold px-6 py-2 rounded-full mb-4">
//               Our Visionary Leader
//             </span>
//             <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-4">
//               Meet Our Founder
//             </h2>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-600 rounded-3xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
//               <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
//                 <Image
//                   src={founder.image}
//                   alt={founder.name}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
//                 <div className="absolute bottom-4 left-4 right-4 px-4">
//                   <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
//                     {/* <Quote className="h-6 w-6 text-orange-500 mb-2" /> */}
//                     <p className="text-sm text-gray-900 dark:text-white italic text-center">
//                       "{founder.quote}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               variants={fadeInUp}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <div>
//                 <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//                   {founder.name}
//                 </h3>
//                 <p className="text-xl text-orange-500 font-semibold mb-8">
//                   {founder.role}
//                 </p>
//                 <div className="prose dark:prose-invert max-w-none space-y-6">
//                   {founder.description.split("\n\n").map((paragraph, index) => (
//                     <p
//                       key={index}
//                       className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
//                     >
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
//                   Key Achievements
//                 </h4>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {founder.achievements.map((achievement, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 }}
//                       className="group"
//                     >
//                       <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
//                         <div className="flex-shrink-0">
//                           <div className="p-2 bg-gradient-to-r from-orange-400 to-pink-600 rounded-lg transform group-hover:scale-110 transition-transform duration-300">
//                             <Sparkles className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                         <span className="text-gray-700 dark:text-gray-300 font-medium">
//                           {achievement}
//                         </span>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-24 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-950/30 dark:to-blue-950/30 relative">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent mb-6">
//               Our Leadership Team
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Meet the experts who make your immigration journey successful
//             </p>
//           </motion.div>

//           <div className="space-y-20">
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={member.name}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={fadeInUp}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className={cn(
//                   "flex flex-col items-stretch group h-auto",
//                   "gap-12",
//                   "lg:flex-row",
//                   index % 2 === 0 ? "" : "lg:flex-row-reverse"
//                 )}
//               >
//                 <div className="w-full lg:w-1/2 h-full relative group flex items-center">
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-600 rounded-3xl transform rotate-6 group-hover:rotate-0 transition-transform duration-300" />
//                   <div className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-full"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>

//                 {/* Content Container */}
//                 <div className="w-full lg:w-1/2 h-full">
//                   <div className="bg-white dark:bg-gray-800 h-full rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
//                     <div className="space-y-4">
//                       <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
//                         {member.name}
//                       </h3>
//                       <p className="text-xl text-orange-500 font-semibold">
//                         {member.role}
//                       </p>
//                       <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed line-clamp-4">
//                         {member.description}
//                       </p>
//                     </div>

//                     <div className="mt-6 space-y-4">
//                       <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
//                         Areas of Expertise
//                       </h4>
//                       <div className="grid grid-cols-1 gap-3">
//                         {member.expertise.slice(0, 3).map((skill) => (
//                           <div
//                             key={skill}
//                             className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 p-4 rounded-xl group-hover:shadow-md transition-all duration-300"
//                           >
//                             <div className="flex-shrink-0">
//                               <div className="p-2 bg-gradient-to-r from-orange-400 to-pink-600 rounded-lg">
//                                 <CheckCircle className="h-5 w-5 text-white" />
//                               </div>
//                             </div>
//                             <span className="text-gray-700 dark:text-gray-300 font-medium">
//                               {skill}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-24 bg-white dark:bg-gray-900 relative">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//               Our Core Values
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               The principles that guide us in delivering excellence
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={scaleIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="relative">
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-600 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300" />
//                   <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-600 rounded-xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
//                       <value.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
//                       {value.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Global Presence Section */}
//       <section className="py-24 bg-gradient-to-r from-orange-50 to-blue-50 dark:from-orange-950/30 dark:to-blue-950/30 relative">
//         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={fadeInUp}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//               Global Presence
//             </h2>
//             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               Serving clients worldwide with local expertise
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {locations.map((location, index) => (
//               <motion.div
//                 key={location.city}
//                 initial="hidden"
//                 whileInView="visible"
//                 variants={scaleIn}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group"
//               >
//                 <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02]">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-bl-full" />
//                   <div className="flex items-start mb-6">
//                     <div className="p-3 bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
//                       <MapPin className="h-6 w-6 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
//                         {location.city}, {location.country}
//                       </h3>
//                       <p className="text-gray-600 dark:text-gray-300">
//                         {location.address}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     {location.services.map((service) => (
//                       <div
//                         key={service}
//                         className="flex items-center text-gray-600 dark:text-gray-300 group-hover:text-orange-500 transition-colors duration-300"
//                       >
//                         <CheckCircle className="h-5 w-5 text-orange-500 mr-3" />
//                         <span className="text-base">{service}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;

import React from 'react';
import HeroSection from '@/components/about/HeroSection';
import StatsSection from '@/components/about/StatsSection';
import FounderSection from '@/components/about/FounderSection';
// import TeamSection from '@/components/about/TeamSection';
import ValuesSection from '@/components/about/ValuesSection';
import GlobalPresenceSection from '@/components/about/GlobalPresenceSection';
import { TeamSection } from '@/components/about/team-section';

const AboutPage = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FounderSection />
      {/* <TeamSection /> */}
      <TeamSection/>
      <ValuesSection />
      <GlobalPresenceSection />
    </div>
  );
};

export default AboutPage;