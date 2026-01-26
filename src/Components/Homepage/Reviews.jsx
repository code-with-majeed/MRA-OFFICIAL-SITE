import React, { useEffect, useState } from "react";
import { BiLogoAudible } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";

// Professional Star Component
const StarRating = ({ count = 5 }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, idx) => (
        <svg
          key={idx}
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFD700"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="#FFD700"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.75l-6.16 3.24 1.18-6.88L2 9.99l6.9-1L12 3l3.1 5.99 6.9 1-5 4.12 1.18 6.88z"
          />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-12 md:py-20 lg:py-24 overflow-hidden">
      {/* Container with same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP REVIEWS ================= */}
        <div
          className={`flex justify-center items-center gap-6 sm:gap-10 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">5,000</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Projects Delivered</p>
          </div>

          <div className="hidden sm:block h-10 w-px bg-gray-300" />

          <div className="flex flex-col items-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">5,000</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Trusted by Businesses</p>
          </div>

          <div className="hidden sm:block h-10 w-px bg-gray-300" />

          <div className="flex flex-col items-center">
            {/* Professional Stars */}
            <StarRating count={5} />
            <p className="text-gray-700 font-semibold text-xs sm:text-sm mt-1">
              5,000+ Reviews
            </p>
          </div>
        </div>

        {/* ================= HEADING / CONTENT ================= */}
        <div
          className={`w-full mt-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <p className="text-xs uppercase font-bold text-[#2181F8] mb-3 tracking-wider">
                What we do
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                We Solve Complex <br className="hidden sm:inline" />
                Digital Challenges
              </h2>
            </div>

            <div className="lg:w-1/2">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                At MRA Developers, we go beyond code to create real business impact.
                Our team blends technical excellence with measurable growth
                strategies.
              </p>
              <a
                href="#"
                className="inline-block mt-4 font-bold text-[#155DFC] hover:translate-x-2 transition-transform"
              >
                More about us →
              </a>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Audiences
                </h4>
                <BiLogoAudible className="text-[#062397] text-3xl" />
              </div>
              <p className="text-gray-600 text-sm">
                We harness advanced data insights and modern tools to help you reach the right audience at the right time, maximizing engagement and conversions.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-100 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Analytics
                </h4>
                <SiGoogleanalytics className="text-[#062397] text-3xl" />
              </div>
              <p className="text-gray-600 text-sm">
                Our tailored analytics solutions transform raw data into powerful strategies. We track, measure, and optimize performance to fuel business decisions with clarity.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 delay-200 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Revenue
                </h4>
                <BsCurrencyDollar className="text-[#062397] text-3xl" />
              </div>
              <p className="text-gray-600 text-sm">
                Every solution we build is designed with your growth in mind. From digital products to enterprise platforms, we focus on driving sustainable results and long-term success.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;