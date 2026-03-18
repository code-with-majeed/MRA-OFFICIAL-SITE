import React, { useEffect, useState } from "react";
import { BiLogoAudible } from "react-icons/bi";
import { SiGoogleanalytics } from "react-icons/si";
import { BsCurrencyDollar } from "react-icons/bs";
import { motion } from "framer-motion";
import vecimg from '../../assets/Vector1.png';

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
    <section className="w-full bg-gray-50 py-10 md:py-14 lg:py-16 overflow-hidden">
      {/* Container with same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* ================= TOP REVIEWS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0 }} className="flex flex-col items-center min-w-[120px]">
            <motion.h4 className="text-xl sm:text-2xl md:text-3xl font-bold" whileHover={{ scale: 1.1 }}>5,000</motion.h4>
            <p className="text-gray-600 text-xs sm:text-sm">Projects Delivered</p>
          </motion.div>

          <div className="hidden sm:block h-10 w-px bg-gray-300" />

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex flex-col items-center min-w-[120px]">
            <motion.h4 className="text-xl sm:text-2xl md:text-3xl font-bold" whileHover={{ scale: 1.1 }}>5,000</motion.h4>
            <p className="text-gray-600 text-xs sm:text-sm">Trusted by Businesses</p>
          </motion.div>

          <div className="hidden sm:block h-10 w-px bg-gray-300" />

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center min-w-[120px]">
            {/* Professional Stars */}
            <StarRating count={5} />
            <p className="text-gray-700 font-semibold text-xs sm:text-sm mt-1">
              5,000+ Reviews
            </p>
          </motion.div>
        </motion.div>

        {/* ================= VECTOR IMAGE BELOW STATS ================= */}
        <div className="w-full mt-6 md:mt-10 flex justify-center">
          <img 
            src={vecimg} 
            alt="Decorative vector" 
            className="max-w-full h-auto"
          />
        </div>

        {/* ================= HEADING / CONTENT ================= */}
          <div
            className={`w-full mt-12 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-1/2 text-center lg:text-left">
                <p className="text-xs uppercase font-bold text-[#1B388E] mb-3 tracking-wider">
                  What we do
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                  We Solve Complex <br className="hidden sm:inline" />
                  Digital Challenges
                </h2>
              </div>

            <div className="lg:w-1/2 text-center lg:text-left">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">
                At MRA Developers, we go beyond code to create real business impact.
                Our team blends technical excellence with measurable growth
                strategies.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="inline-block mt-4 font-bold text-[#1B388E] hover:translate-x-2 transition-transform"
                >
                  More about us →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= CARDS ================= */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(27, 56, 142, 0.15)" }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:border-[#1B388E] transition-all duration-300 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Audiences
                </h4>
                <BiLogoAudible className="text-[#1B388E] text-3xl sm:text-4xl" />
              </div>
              <p className="text-gray-600 text-sm">
                We harness advanced data insights and modern tools to help you reach the right audience at the right time, maximizing engagement and conversions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(27, 56, 142, 0.15)" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:border-[#1B388E] transition-all duration-300 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Analytics
                </h4>
                <SiGoogleanalytics className="text-[#1B388E] text-3xl sm:text-4xl" />
              </div>
              <p className="text-gray-600 text-sm">
                Our tailored analytics solutions transform raw data into powerful strategies. We track, measure, and optimize performance to fuel business decisions with clarity.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(27, 56, 142, 0.15)" }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className={`bg-white p-4 rounded-xl border border-gray-200 hover:border-[#1B388E] transition-all duration-300 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex justify-between mb-3">
                <h4 className="text-base sm:text-lg font-bold">
                  Smarter <br /> Revenue
                </h4>
                <BsCurrencyDollar className="text-[#1B388E] text-3xl sm:text-4xl" />
              </div>
              <p className="text-gray-600 text-sm">
                Every solution we build is designed with your growth in mind. From digital products to enterprise platforms, we focus on driving sustainable results and long-term success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;