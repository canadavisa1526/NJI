"use client";

import { FC } from "react";
import Image from "next/image";

const VisaSection: FC = () => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-gray-900 transition-colors">
      {/* Animated flying plane */}
      <div className="absolute top-10 left-[-50px] w-full z-10 pointer-events-none">
        <div className="text-2xl sm:text-3xl md:text-4xl animate-plane-flight">✈️</div>
      </div>

      {/* Decorative blurred circles */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 bg-orange-300 rounded-bl-full opacity-30 z-0 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-purple-400 rounded-tr-full opacity-30 z-0 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block bg-orange-100 dark:bg-orange-800 text-orange-800 dark:text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm w-fit">
              Welcome to New Journey Immigration
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
              Your One-Stop Solution for Visa, Admission & IELTS Coaching
            </h1>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              At New Journey Immigration, we turn your study abroad dreams into
              reality with expert guidance in admissions, visas, IELTS coaching,
              GIC, education loans, accommodation, and flight bookings — all
              under one roof.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              With certified IELTS trainers, personalized support, and global
              reach through offices in Mehsana, Ahmedabad, and Toronto, we’re
              here to guide you every step of the way.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Count on us for 24/7 assistance, proven results, and a
              student-first approach. Start your global journey with a team
              that truly cares.
            </p>

            <div>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-orange-600 transition-all shadow-md">
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
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-orange-100/10 dark:from-gray-900/10 dark:to-orange-500/10 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes plane-flight {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(110vw);
            opacity: 0;
          }
        }

        .animate-plane-flight {
          animation: plane-flight 6s linear infinite;
          position: relative;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default VisaSection;
