import React, { useState, useEffect } from "react";

const tabs = [
  {
    label: "TEAM OF EXPERTS",
    heading: "Friendly team of experts",
    paragraph:
      "Our experts and professionals are never more than an email or a phone call away. Or, if you prefer to talk face to face, drop by our office to discuss your plans and goals over a cup of coffee. We are here for you.",
  },
  {
    label: "TRANSPARENCY",
    heading: "Transparent Communication",
    paragraph:
      "We believe in complete transparency. You'll always know the progress, challenges, and milestones of your project. No hidden agendas, just clear collaboration.",
  },
  {
    label: "RESULTS",
    heading: "Proven Results",
    paragraph:
      "Our track record speaks for itself. From boosting engagement rates to increasing revenue, we deliver measurable results that matter to your business growth.",
  },
];

const Business = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-white">
      <div className={`max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
                  className={`px-2 xs:px-3 cursor-pointer sm:px-4 py-2 xs:py-3 sm:py-3 font-bold transition-all duration-300 flex-1 text-center text-xs xs:text-xs sm:text-sm md:text-base ${
                    activeTab === index
                      ? "text-white"
                      : " text-gray-800"
                  }`}
                  style={activeTab === index ? {
                    background: "linear-gradient(to bottom, rgba(40, 65, 165, 0.9), rgba(40, 65, 165, 0.75))"
                  } : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Card */}
            <div 
              className="text-white rounded-b-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 flex-1 animate-tabContent"
              style={{
                background: "linear-gradient(to bottom, rgba(40, 65, 165, 0.9), rgba(40, 65, 165, 0.75))"
              }}
            >
              <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4 ">{tabs[activeTab].heading}</h2>
              <p className=" text-xs xs:text-sm sm:text-sm md:text-base">{tabs[activeTab].paragraph}</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col w-full lg:w-1/2 justify-between animate-slideRight">
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4">
                Why MRA Developers is Your Top Choice
              </h2>
              <p className="text-gray-700 mb-3 xs:mb-4 sm:mb-4 md:mb-6 text-xs xs:text-sm sm:text-sm md:text-base">
                We are more than just a tech company we're your trusted full-service digital solutions partner. Backed by client satisfaction and proven results, we deliver end-to-end services designed to accelerate your growth. From web and mobile app development, AI solutions, and UI/UX design to digital marketing, SEO, and cloud deployment, our team ensures that every aspect of your digital presence is handled with innovation and expertise. With MRA Developers, you get a partner who is committed to turning your ideas into impactful solutions.
              </p>
              <button className="bg-blue-600 text-white px-3 xs:px-4 sm:px-5 md:px-6 py-2 xs:py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg text-xs xs:text-sm sm:text-sm md:text-base">
                Get Proposal →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Success Stories + Two Images */}
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch animate-fadeIn delay-300">
          {/* Left Success Stories */}
          <div className="flex flex-col w-full lg:w-1/2 justify-between animate-slideLeft">
            <div>
              <h3 className="text-xs xs:text-xs sm:text-sm uppercase font-bold tracking-widest mb-1 xs:mb-2 text-gray-600">
                SUCCESS STORIES
              </h3>
              <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 xs:mb-3 sm:mb-3 md:mb-4">
                Our work drives businesses forward
              </h2>
              <button className="text-[#2181F8] mt-30 font-bold cursor-pointer underline hover:text-blue-700 transition-colors duration-300 text-xs xs:text-sm sm:text-sm md:text-base">
                View All
              </button>
            </div>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:gap-6 w-full lg:w-1/2 animate-slideRight">
            <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group">
              <img
                src="/src/assets/Section-1.png"
                alt="Success Story 1"
                className="w-full h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl md:rounded-[40px] lg:rounded-[50px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 group">
              <img
                src="/src/assets/Section.png"
                alt="Success Story 2"
                className="w-full h-40 xs:h-44 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
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