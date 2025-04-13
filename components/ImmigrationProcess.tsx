"use client";
import { GraduationCap, Globe2, Users2, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReactCountryFlag from "react-country-flag";

const ImmigrationProcess = () => {
  const countryFlags = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "In", name: "India" },
    { code: "AU", name: "Australia" },
    { code: "NZ", name: "New Zealand" },
    { code: "DE", name: "Germany" },
  ];

  return (
    <section className="py-16 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Use a grid that stacks on smaller devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left-side content with slide down animation */}
          <div className="space-y-8 animate-slideDown">
            <div>
              <span className="text-red-600 dark:text-red-500 font-medium mb-2 flex items-center">
                <Globe2 className="h-5 w-5 mr-2" />
                TRUSTED IMMIGRATION PARTNER
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mt-2">
                Our simple approach to immigration process
              </h2>
            </div>

            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
              We are trusted immigration consultants who can handle your case and our professional registered agents will assist you with your visa application.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Globe2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Access to worldwide opportunities with our extensive network.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Users2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dedicated professionals to guide you every step of the way.
                  </p>
                </div>
              </div>
            </div>

           
          </div>

          {/* Right-side content */}
          <div className="relative">
            {/* Background flying planes with takeoff animation */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Plane
                className="absolute text-blue-400/30 h-12 w-12 fly-plane animate-takeoff"
              />
              <Plane
                className="absolute text-blue-400/30 h-12 w-12 fly-plane-delayed animate-takeoff"
              />
            </div>

            {/* Orbiting country icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              {countryFlags.map((country, index) => {
                // Calculate angle for even distribution around the center
                const angle = (360 / countryFlags.length) * index;
                return (
                  <div
                    key={country.code}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translate(120px) rotate(-${angle}deg)`,
                      animation: `orbit 15s linear infinite`,
                      animationDelay: `${index * (15 / countryFlags.length)}s`,
                    }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform cursor-pointer">
                      <ReactCountryFlag
                        countryCode={country.code}
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                        title={country.name}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center passport image with float animation */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto m-4 p-4 animate-float z-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Passport and travel documents"
                className="rounded-full w-full h-full object-cover shadow-xl hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Flight connection between two country flags */}
            {countryFlags.length >= 2 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex flex-col items-center space-y-2">
         
                  <div className="animate-takeoff">
                    <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationProcess;
