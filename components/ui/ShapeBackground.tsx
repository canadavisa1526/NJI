'use client';

import { motion } from 'framer-motion';

export const ShapeBackground = () => {
  const shapeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    visible: {
      opacity: 0.15,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const rotateVariants = {
    hidden: { rotate: -10 },
    visible: { 
      rotate: 15,
      transition: { 
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
        <motion.div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#faa71a]/10"
          initial="hidden"
          variants={shapeVariants}
          animate="visible"
          whileHover="visible"
        />
        
        <motion.div
          className="absolute -top-16 -left-16 w-40 h-40 bg-[#13294e]/10 rotate-45"
          initial="hidden"
          variants={rotateVariants}
          animate="visible"
          whileHover="visible"
        />
        
        <motion.div
          className="absolute top-1/4 right-8 w-12 h-12 bg-[#faa71a]/5 rounded-lg"
          initial={{ opacity: 0, y: -15 }}
          animate={{ 
            opacity: 0.6, 
            y: 0,
            transition: { duration: 0.5, delay: 0.2 }
          }}
        />
        
        <motion.div
          className="absolute bottom-1/3 left-10 w-8 h-8 bg-[#13294e]/5 rounded-md"
          initial={{ opacity: 0, x: 10 }}
          animate={{ 
            opacity: 0.5, 
            x: 0,
            transition: { duration: 0.5, delay: 0.3 }
          }}
        />
      </div>
    </div>
  );
};