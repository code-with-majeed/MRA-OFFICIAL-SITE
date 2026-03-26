import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// Import your PNG images (adjust paths to match your folder structure)
import awxImg from "../../assets/AWX.png";
import gdpImg from "../../assets/GDP.png";
import marketTrendsImg from "../../assets/Growth.png";
import fourthImg from "../../assets/coding.png";

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
          className="w-5 h-5 md:w-6 md:h-6"
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

// Dummy reviews data
const reviewsData = [
  {
    id: 1,
    name: "Edward Kennedy",
    role: "Director, Client Experience",
    rating: 5,
    comment:
      "The entire staff at Numerique has been phenomenal. They are quick with their replies and incredibly helpful.",
    image: "/src/assets/reviws-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    rating: 5,
    comment:
      "MRA's team transformed our digital presence. Their strategies boosted our engagement by 200% in just three months.",
    image: "/src/assets/reviews-2.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Marketing Head, InnovateLabs",
    rating: 5,
    comment:
      "Professional, responsive, and results-driven. Highly recommend their consultation services.",
    image: "/src/assets/reviews-3.jpg",
  },
  {
    id: 4,
    name: "Lisa Wong",
    role: "Founder, CreativeStudio",
    rating: 5,
    comment:
      "They don't just deliver; they care about your success. A true partner in growth.",
    image: "/src/assets/reviws-1.jpg",
  },
  {
    id: 5,
    name: "David Miller",
    role: "Product Manager, FinCorp",
    rating: 5,
    comment:
      "The team's expertise in SEO and PPC is unmatched. Our ROI has never been better.",
    image: "/src/assets/reviews-2.jpg",
  },
];

const Smart = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const reviewImages = [
    "/src/assets/reviws-1.jpg",
    "/src/assets/reviews-2.jpg",
    "/src/assets/reviews-3.jpg",
  ];

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="w-full bg-white py-8 md:py-12 z-10">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="flex justify-center mb-8 md:mb-12 lg:mb-16"
          style={{ transform: "scaleY(-1)" }}
        >
          <h2 className="text-center w-full max-w-[90%] sm:max-w-[85%] md:max-w-[810px] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight">
            What our happy customers are saying
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Quote Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="p-4 sm:p-6 md:p-8 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl mb-3 md:mb-4">
                <FaQuoteLeft className="text-[#1B388E] w-10 h-10 mb-6 transform rotate-180 mx-auto md:mx-0" />
              </h3>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-3 md:mb-4 italic leading-relaxed">
                "The entire staff at Numerique has been phenomenal. They are quick with their replies and incredibly helpful."
              </p>
              <div>
                <p className="font-bold text-base sm:text-lg md:text-xl">Edward Kennedy</p>
                <p className="text-gray-500 text-sm md:text-base">Director, Client Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-4 md:gap-6 w-full lg:w-auto text-center lg:text-left"
          >
            <motion.img
              src="/src/assets/Line-arrow-2.svg.png"
              alt="beep line"
              className="h-24 sm:h-28 md:h-32 lg:h-40 mb-2 md:mb-4"
              animate={floatAnimation.animate}
            />

            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full">
              <div className="flex flex-col items-center">
                <StarRating count={5} />
                <p className="text-gray-700 font-semibold text-sm md:text-base mt-1">
                  5,000+ Reviews
                </p>
              </div>

              <div className="flex items-center -space-x-3 md:-space-x-4">
                {reviewImages.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`review ${index + 1}`}
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow-md"
                    style={{ zIndex: 40 - index * 10 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>

              {/* View all reviews button */}
              <motion.div
                onClick={toggleModal}
                className="flex items-center text-[#1B388E] font-semibold gap-1 cursor-pointer text-sm md:text-base"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <p>View all reviews</p>
                <IoIosArrowRoundForward className="text-lg md:text-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Purple Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full mt-8 sm:mt-12 md:mt-16 -mb-15"
        >
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 py-8 sm:py-10 md:py-12 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
              {/* Top Content */}
              <div className="flex flex-col lg:flex-row items-start justify-between gap-4 sm:gap-6 md:gap-8 text-center lg:text-left">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-snug md:leading-tight">
                    Grow faster with MRA's smart digital solutions.
                  </h2>
                </div>

                <div className="flex flex-col text-center md:text-right lg:items-end w-full lg:w-auto">
                  <p className="mb-2 text-gray-700 text-base sm:text-lg">
                    Have a project in mind? Speak with our experts now.
                  </p>
                  <motion.p
                    className="font-bold mb-3 md:mb-4 text-xl sm:text-2xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    +923111321677
                  </motion.p>
                  <motion.button
                    onClick={() => navigate("/contact")}
                    className="
                      bg-[#1B388E]
                      text-white
                      px-3 sm:px-4
                      py-2 sm:py-2.5
                      rounded-lg
                      cursor-pointer
                      flex items-center justify-center gap-1.5
                      hover:bg-[#082375]
                      shadow-md hover:shadow-lg
                      text-xs sm:text-sm font-semibold
                      w-full lg:w-auto
                      transition-all duration-300
                    "
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    CALL YOUR FREE CONSULTATION
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                      <IoIosArrowRoundForward className="text-base sm:text-lg" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>

              {/* Image */}
              <motion.img
                src="/src/assets/Margin (1).png"
                alt="Margin"
                className="w-full mt-4 sm:mt-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />

              {/* Bottom Partner & ROAS Section */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="py-6 sm:py-8 md:py-10 flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 md:gap-8"
              >
                {/* Left - Partners with PNG images (four icons) */}
                <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                    A partner, not a vendor
                  </h3>
                  {/* Single row on all devices using flex-row */}
                  <div className="flex flex-row justify-center items-center gap-4 flex-nowrap">
                    <img
                      src={awxImg}
                      alt="AWX"
                      className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <img
                      src={gdpImg}
                      alt="GDP"
                      className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <img
                      src={marketTrendsImg}
                      alt="Market Trends"
                      className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <img
                      src={fourthImg}
                      alt="Fourth Icon"
                      className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                </motion.div>

                {/* Right - ROAS */}
                <motion.div
                  variants={itemVariants}
                  className="flex-1 flex flex-col justify-end text-center md:text-right lg:items-end lg:text-right mt-4 lg:mt-0"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                    6.7{" "}
                    <span className="text-base sm:text-lg md:text-xl font-normal">
                      / Average ROAS
                    </span>
                  </h2>
                  <p className="mt-1 sm:mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
                    across our 100+ Global Clients on SEO, PPC & Social
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal for All Reviews */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 overflow-hidden bg-white rounded-2xl shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  Customer Reviews
                </h3>
                <button
                  onClick={toggleModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <IoClose className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviewsData.map((review) => (
                    <div
                      key={review.id}
                      className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                        />
                        <div>
                          <p className="font-semibold text-gray-800">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                      <StarRating count={review.rating} />
                      <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                        "{review.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Smart;