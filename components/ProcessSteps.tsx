"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Users, CheckCircle, Plane } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      icon: Users,
      title: "Initial Consultation",
      description:
        "Free consultation to understand your requirements and eligibility",
      image:
        "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: FileText,
      title: "Documentation",
      description:
        "Complete assistance with document preparation and verification",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: CheckCircle,
      title: "Application Filing",
      description: "Expert handling of your visa application submission",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
    },
    {
      icon: Plane,
      title: "Visa Approval",
      description:
        "Support until successful visa approval and travel preparation",
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#13294e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#13294e] dark:text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-[#13294e]/80 dark:text-gray-300 max-w-3xl mx-auto">
            A simple and transparent process to help you achieve your
            immigration goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-[4/3] shadow-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-[#faa71a] rounded-full flex items-center justify-center text-white font-bold shadow-md">
                  {index + 1}
                </div>
              </div>

              <div className="bg-[#AFC1DB]/20 dark:bg-white/5 rounded-xl p-6 border border-[#AFC1DB]/40 dark:border-white/10">
                <div className="flex items-center mb-4">
                  <step.icon className="h-8 w-8 text-[#faa71a] mr-3" />
                  <h3 className="text-xl font-semibold text-[#13294e] dark:text-white">
                    {step.title}
                  </h3>
                </div>
                {step.title == "Application Filing" ? (<>
                
                  <p className="text-[#13294e]/80 dark:text-gray-300">
                    {step.description} 
                   
                  </p>
                   <br />
                   
                   </>
                ) : (
                  <p className="text-[#13294e]/80 dark:text-gray-300">
                    {step.description}
                  </p>
                )}
              </div>

              {/* Connector Line for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-[#faa71a] to-[#ffc95f] dark:from-[#faa71a]/80 dark:to-[#faa71a]/30 -translate-y-1/2 transform translate-x-4">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#faa71a] rounded-full shadow-sm" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
