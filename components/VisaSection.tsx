'use client';

import { FC } from 'react';
import Image from 'next/image';

const VisaSection: FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors">
      {/* Decorative SVGs */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-green-400 rounded-bl-full opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-purple-400 rounded-tr-full opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm w-fit">
              Welcome to Shreehari
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
              Best Visa Consultant in Ahmedabad
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Shreehari is the best IELTS Coaching & Visa Consultant in Ahmedabad, Mehsana, NGES Patan, Rajkot – Gujarat and Canada. We offer top-tier student visa & immigration services across Gujarat with multiple branches.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Our team of certified experts offers personalized assistance for 
              <strong className="text-blue-600 dark:text-blue-400 font-medium"> IELTS coaching </strong> 
              and visa processing. With experienced counselors, we help students fulfill their dreams of 
              <strong className="text-blue-600 dark:text-blue-400 font-medium"> studying abroad</strong>.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              Our goal is to match students’ profiles to the right course and country—maximizing success.
            </p>

            <div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all shadow-md">
                Get Free Consultation
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl group transform transition-transform hover:scale-105">
              <Image
                src="https://img.freepik.com/free-photo/happy-teenagers-with-crossed-arms_1098-2583.jpg?t=st=1744564541~exp=1744568141~hmac=e0e36cc3b55e7143f7c8a1eb1181fa2119ec96b959e9df3b0bc5860d3d317ec8&w=826"
                alt="Happy international students"
                layout="fill"
                objectFit="cover"
                className="grayscale dark:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-purple-200/10 dark:from-gray-900/10 dark:to-blue-500/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
