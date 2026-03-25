import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  {
    label: "TEAM OF EXPERTS",
    heading: "Dedicated IT Specialists",
    paragraph:
      "Our team of software engineers, developers, and IT consultants are always ready to provide expert guidance. From custom web and mobile applications to enterprise solutions, we ensure your technology goals are met with precision and professionalism.",
  },
  {
    label: "TRANSPARENCY",
    heading: "Clear Project Insights",
    paragraph:
      "We maintain complete transparency in every phase of software development. You will always have visibility into project timelines, milestones, and deliverables, ensuring collaboration is smooth and expectations are aligned.",
  },
  {
    label: "RESULTS",
    heading: "Measurable IT Success",
    paragraph:
      "Our solutions are designed to deliver real impact. From improving system efficiency to deploying scalable applications, we focus on measurable outcomes that accelerate business growth and enhance operational performance.",
  },
];

const Business = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewAllClick = () => {
    const sectionId = "StatsHero";
    const el = document.getElementById(sectionId);
    
    if (el) {
      // Already on the home page, scroll directly
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      // Navigate to home page with hash
      navigate("/#" + sectionId);
    }
  };
  // Solid brand color
  const brandColor = "#1B388E";

  return (
    <div className="bg-white -mb-5">
      <div className={`max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 space-y-5 xs:space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Top Section: Card + Right Content */}
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch animate-fadeIn">
          {/* Left Card */}
          <div className="flex flex-col w-full lg:w-1/2 animate-slideLeft">
            {/* Buttons attached to card */}
            <div className="flex rounded-t-2xl overflow-hidden">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-2 xs:px-3 cursor-pointer sm:px-4  py-2 xs:py-3 sm:py-3 font-bold transition-all duration-300 flex-1 text-center text-xs xs:text-xs sm:text-sm md:text-base ${
                    activeTab === index ? "text-gray-300" : "text-gray-800"
                  }`}
                  style={
                    activeTab === index
                      ? { backgroundColor: brandColor }
                      : { backgroundColor: "transparent" }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Card with solid brand color background */}
            <div 
              className="rounded-b-2xl px-4 xs:px-5 py-3 xs:py-4 sm:p-6 md:p-8 lg:p-10 flex-1 animate-tabContent "
              style={{ backgroundColor: brandColor }}
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4 text-gray-300">
                {tabs[activeTab].heading}
              </h2>
              <p className="text-xs xs:text-sm sm:text-sm md:text-base pt-5 text-gray-300">
                {tabs[activeTab].paragraph}
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full lg:w-1/2 justify-between animate-slideRight text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4">
                Why MRA Developers is Your Top Choice
              </h2>
              <p className="text-gray-700 mb-3 xs:mb-4 sm:mb-4 md:mb-6 text-xs xs:text-sm sm:text-sm md:text-base">
                We are more than just a tech company we're your trusted full-service digital solutions partner. Backed by client satisfaction and proven results, we deliver end-to-end services designed to accelerate your growth. From web and mobile app development, AI solutions, and UI/UX design to digital marketing, SEO, and cloud deployment, our team ensures that every aspect of your digital presence is handled with innovation and expertise. With MRA Developers, you get a partner who is committed to turning your ideas into impactful solutions.
              </p>
              <div className="flex justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="bg-[#1B388E] text-white px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg hover:bg-[#082375] transition-all duration-300 transform hover:shadow-lg text-xs xs:text-sm sm:text-sm md:text-base cursor-pointer"
                >
                  Get Proposal →
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Success Stories + Two Images */}
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch animate-fadeIn delay-300">
          {/* Left Success Stories */}
          <div className="flex flex-col w-full lg:w-1/2 justify-between animate-slideLeft text-center lg:text-left">
            <div>
              <h3 className="text-xs xs:text-xs sm:text-sm uppercase font-bold tracking-widest mb-1 xs:mb-2 text-[#1B388E]">
                SUCCESS STORIES
              </h3>
              <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4">
                Our work drives businesses forward
              </h2>
              <div className="flex justify-center lg:justify-start">
                <button 
                  onClick={handleViewAllClick}
                  className="text-[#1B388E] mt-6 font-bold cursor-pointer transition-all duration-300 text-xs xs:text-sm sm:text-sm md:text-base relative group">
                  View All
                  <span className="absolute bottom-0 left-0 h-1 bg-[#1B388E] w-0 group-hover:w-full transition-all duration-300" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 w-full lg:w-1/2 animate-slideRight">
            <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64">
              <img
                src="/src/assets/social.jpg"
                alt="Success Story 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64">
              <img
                src="/src/assets/Section.png"
                alt="Success Story 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Animation Styles */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slideRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes tabContent {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-slideLeft {
            animation: slideLeft 0.8s ease-out forwards;
          }
          
          .animate-slideRight {
            animation: slideRight 0.8s ease-out forwards;
          }
          
          .animate-tabContent {
            animation: tabContent 0.4s ease-out forwards;
          }
          
          .delay-300 {
            animation-delay: 200ms;
          }
          
          @media (min-width: 640px) {
            .delay-300 {
              animation-delay: 300ms;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Business;