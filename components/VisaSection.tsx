"use client";

import { FC } from "react";
import Image from "next/image";

const VisaSection: FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-[#13294E] transition-colors">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-[#FAA71A] rounded-bl-full opacity-30 z-0" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#AFC1DB] rounded-tr-full opacity-30 z-0" />
      <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block bg-[#FAA71A] dark:bg-[#AFC1DB] text-[#13294E] dark:text-[#13294E] px-4 py-1 rounded-full text-sm font-semibold shadow-sm w-fit">
              Welcome to New Journey Immigration
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#13294E] dark:text-white leading-snug">
              Complete Visa & IELTS Services Under One Roof
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We help turn your study abroad dreams into reality with complete
              services — from admissions and visas to GIC, education loans,
              accommodations, and flights.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Whether you're applying to Canada, the UK, or Australia, our
              experienced team ensures a smooth and stress-free journey tailored
              to your needs.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our certified IELTS instructors offer personalized coaching to
              help you reach your desired band scores and get into top
              institutions abroad.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              With offices in Mehsana, Ahmedabad, and Toronto, we provide both
              local expertise and global reach to support students at every
              stage.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Available 24/7, our team is always here to guide, support, and
              answer your questions — from your first step to your final
              destination.
            </p>

            {/* <div>
              <button className="bg-[#FAA71A] text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#e69c14] transition-all shadow-md">
                Get Free Consultation
              </button>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="flex justify-center relative">
            <div className="relative w-[32rem] h-[32rem] rounded-full overflow-hidden shadow-xl group transform transition-transform hover:scale-105">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Happy international students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-[#FAA71A]/20 to-white/30 mix-blend-overlay" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;
