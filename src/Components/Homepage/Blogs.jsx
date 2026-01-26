import React from 'react'
import { TiArrowUp } from "react-icons/ti";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const insights = [
  {
    image: "/src/assets/image-2.png",
    date: "Jan, 2026",
    content: `The evolution of live-stream
content and short-form video:
a look at the TikTok revolution`
  },
  {
    image: "/src/assets/image-3.png",
    date: "Jan, 2026",
    content: `The Metaverse boom: brands
unite and Apple takes a rain
check.`
  },
  {
    image: "/src/assets/image-4.png",
    date: "Jan, 2026",
    content: `Verify your site is protecting
your business.`
  },
]

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div id="Blog" className="py-4 xs:py-6 sm:py-8 md:py-12 lg:py-16 bg-gray-50">
      {/* Container with same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* Heading with animation */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
          <h2 className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">Think further with our</h2>
          <h2 className="font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">expert insights.</h2>
        </div>

        {/* Cards with staggered animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {insights.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-md hover:shadow-xl overflow-hidden flex flex-col min-h-[240px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] xl:min-h-[460px] transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {/* Image with hover animation */}
              <div className="overflow-hidden h-36 xs:h-40 sm:h-44 md:h-48 lg:h-52 xl:h-64">
                <img
                  src={item.image}
                  alt={`Insight ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col flex-grow px-4 xs:px-5 sm:px-6 lg:px-8 py-3 xs:py-4 sm:py-5 lg:py-6">
                <p className="text-xs xs:text-xs sm:text-sm md:text-base text-[#000000B2] mb-2 xs:mb-3 sm:mb-4"> 
                  {item.date}
                  <span className="inline-block ml-2 xs:ml-3 h-px w-6 xs:w-8 bg-gray-300 align-middle"></span>
                </p>

                <p className="text-black text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
                
                {/* Read more indicator */}
                <div className="mt-auto pt-3 xs:pt-4">
                  <div className="flex items-center text-blue-600 text-xs xs:text-sm sm:text-base font-medium transition-transform group-hover:translate-x-2 duration-300">
                    Read more
                    <IoIosArrowRoundForward className="ml-1 text-base xs:text-lg sm:text-xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with animations */}
        <div 
          className="w-full bg-gradient-to-r from-[#e8e8f0] to-[#f0f0f8] mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-20 py-8 xs:py-10 sm:py-12 md:py-14 lg:py-20 rounded-none xs:rounded-lg sm:rounded-xl lg:rounded-2xl animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-start mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2 xs:px-0">
              The proof is in the numbers
            </h2>

            {/* Cards Wrapper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10">
              {/* Card 1 */}
              <div 
                className="text-center p-4 xs:p-5 sm:p-6 lg:p-8 transition-all duration-500"
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto flex flex-col items-center justify-center rounded-full border-2 border-[#062397] font-bold text-base xs:text-lg sm:text-xl md:text-2xl mb-3 xs:mb-4 sm:mb-6 animate-pulse-once">
                  <span className='font-bold'>45%</span>
                  <TiArrowUp className="text-[#062397] text-sm xs:text-base sm:text-lg md:text-xl mt-0.5 xs:mt-1" />
                </div>
                <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg px-2 xs:px-0">
                  Average boost in efficiency & performance for our clients
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="text-center p-4 xs:p-5 sm:p-6 lg:p-8 duration-500"
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto flex flex-col items-center justify-center rounded-full border-2 border-[#062397] font-bold text-base xs:text-lg sm:text-xl md:text-2xl mb-3 xs:mb-4 sm:mb-6 animate-pulse-once" 
                  style={{ animationDelay: '100ms' }}>
                  <span className='font-bold'>100%</span>
                  <TiArrowUp className="text-[#062397] text-sm xs:text-base sm:text-lg md:text-xl mt-0.5 xs:mt-1" />
                </div>
                <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg px-2 xs:px-0">
                  Trusted by global clients with a skilled & certified development team
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="text-center p-4 xs:p-5 sm:p-6 lg:p-8 duration-500"
              >
                <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto flex flex-col items-center justify-center rounded-full border-2 border-[#062397] font-bold text-base xs:text-lg sm:text-xl md:text-2xl mb-3 xs:mb-4 sm:mb-6 animate-pulse-once">
                  <span className='font-bold'>81%</span>
                  <TiArrowUp className="text-[#062397] text-sm xs:text-base sm:text-lg md:text-xl mt-0.5 xs:mt-1" />
                </div>
                <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg px-2 xs:px-0">
                  Project success rate higher than industry standards
                </p>
              </div>

              {/* Card 4 (CTA Card) */}
              <div 
                className="bg-gradient-to-br from-purple-100 to-blue-100 text-center p-4 xs:p-5 sm:p-6 lg:p-8 rounded-lg xs:rounded-xl md:rounded-2xl shadow-md hover:shadow-lg flex flex-col items-center justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: '1000ms' }}
              >
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold animate-count-up">
                  320,000+
                </h2>

                <p className="text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg px-2 xs:px-0">
                  Leads & users generated through our solutions so far
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 cursor-pointer text-white text-xs xs:text-sm px-3 xs:px-4 sm:px-5 md:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-lg flex items-center gap-1 xs:gap-2 hover:from-blue-700 hover:to-blue-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  CONTACT US
                  <IoIosArrowRoundForward className="text-base xs:text-lg sm:text-xl animate-bounce-horizontal" />
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseOnce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceHorizontal {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-once {
          animation: pulseOnce 2s ease-in-out;
        }
        
        .animate-count-up {
          animation: countUp 1.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-horizontal {
          animation: bounceHorizontal 2s infinite;
        }
        
        /* Responsive animation adjustments */
        @media (max-width: 480px) {
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounceHorizontal {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(3px);
            }
          }
        }
        
        /* Large screens */
        @media (min-width: 1536px) {
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up,
          .animate-pulse-once,
          .animate-count-up,
          .animate-bounce-horizontal,
          .hover\\:-translate-y-1,
          .hover\\:-translate-y-2,
          .hover\\:-translate-y-3,
          .hover\\:scale-105,
          .hover\\:scale-110,
          .group-hover\\:scale-110,
          .group-hover\\:translate-x-2 {
            animation: none !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Blogs