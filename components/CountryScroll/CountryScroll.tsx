// 'use client';

// import { motion } from "framer-motion";
// import Marquee from "react-fast-marquee";
// import { Flag, Users } from "lucide-react";
// import CountryCard from "./CountryCard";
// import FlightConnection from "./FlightConnection";


// const countryConnections = [
//   { 
//     from: { name: "Canada", code: "CA" },
//     to: { name: "United States", code: "US" }
//   },
//   { 
//     from: { name: "United States", code: "US" },
//     to: { name: "United Kingdom", code: "UK" }
//   },
//   { 
//     from: { name: "United Kingdom", code: "UK" },
//     to: { name: "France", code: "FR" }
//   },
//   { 
//     from: { name: "France", code: "FR" },
//     to: { name: "Germany", code: "DE" }
//   },
//   { 
//     from: { name: "Germany", code: "DE" },
//     to: { name: "Netherlands", code: "NL" }
//   },
//   { 
//     from: { name: "Netherlands", code: "NL" },
//     to: { name: "Sweden", code: "SE" }
//   },
//   { 
//     from: { name: "Sweden", code: "SE" },
//     to: { name: "Ireland", code: "IE" }
//   },
//   { 
//     from: { name: "Ireland", code: "IE" },
//     to: { name: "Australia", code: "AU" }
//   },
//   { 
//     from: { name: "Australia", code: "AU" },
//     to: { name: "New Zealand", code: "NZ" }
//   },
//   { 
//     from: { name: "New Zealand", code: "NZ" },
//     to: { name: "Canada", code: "CA" }
//   },
// ];

// const CountryScroll = () => {
//   return (
//     <section className="py-12 bg-gradient-to-b from-[#AFC1DB] to-[#D0DFF0] dark:from-[#13294E] dark:to-[#0A1A33]">
//       <motion.div 
//         className="container mx-auto px-4 mb-8"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="flex flex-col items-center">
//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mb-3"
//           >
//             <Users className="w-12 h-12 text-[#FAA71A]" />
//           </motion.div>
          
//           <motion.h2 
//             className="text-3xl md:text-4xl font-bold text-center text-[#13294E] dark:text-white mb-3"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.3 }}
//           >
//             Immigration Connections
//           </motion.h2>
          
//           <motion.p 
//             className="text-center text-[#13294E]/80 dark:text-gray-300 max-w-2xl"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.4 }}
//           >
//             Discover immigration pathways and connections between these leading countries
//           </motion.p>
//         </div>
//       </motion.div>
      
//       <div className="mb-12">
//         <Marquee
//           speed={30}
//           gradient={true}
//           gradientColor="#AFC1DB"
//           gradientWidth={100}
//           className="py-6"
//         >
//           <div className="flex space-x-8 px-4">
//             {countryConnections.map((connection, index) => (
//               <CountryCard 
//                 key={`${connection.from.code}-${index}`} 
//                 name={connection.from.name} 
//                 code={connection.from.code}
//                 index={index}
//               />
//             ))}
//           </div>
//         </Marquee>
//       </div>
      
//       <motion.div 
//         className="bg-white/30 dark:bg-[#13294E]/30 py-8 backdrop-blur-sm"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.5 }}
//       >
//         <div className="container mx-auto px-4">
//           <h3 className="text-xl md:text-2xl font-semibold text-center text-[#13294E] dark:text-white mb-6">
//             Immigration Pathways
//           </h3>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {countryConnections.map((connection, index) => (
//               <motion.div 
//                 key={`connection-${index}`}
//                 className="bg-white/70 dark:bg-[#1E3A6E]/70 p-4 rounded-lg shadow-md border-2 border-[#649EEF]/20"
//                 whileHover={{ 
//                   scale: 1.02,
//                   boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
//                   borderColor: "#649EEF"
//                 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: 0.1 * index }}
//               >
//                 <FlightConnection
//                   fromCountry={connection.from.name} 
//                   toCountry={connection.to.name} 
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default CountryScroll;