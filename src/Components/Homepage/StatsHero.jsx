import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // 👈 added
import {
  FaLaptopCode, FaCloud, FaMobileAlt, FaDatabase, FaShieldAlt, FaBolt
} from "react-icons/fa";
import { Users, Code2, Award, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Custom Software Development",
    description:
      "Tailored solutions built from scratch to meet your unique business requirements and scale with your growth.",
    points: [
      "Full-stack development",
      "Legacy system modernization",
      "API development & integration",
      "Microservices architecture",
    ],
  },
  {
    id: 2,
    icon: <FaCloud className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Cloud Migration & DevOps",
    description:
      "Seamlessly migrate to the cloud and implement robust DevOps practices for enhanced efficiency and scalability.",
    points: [
      "AWS/Azure/GCP migration",
      "CI/CD pipeline setup",
      "Infrastructure as Code",
      "Monitoring & optimization",
    ],
  },
  {
    id: 3,
    icon: <FaMobileAlt className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    points: [
      "iOS & Android native",
      "React Native & Flutter",
      "App Store optimization",
      "Mobile UI/UX design",
    ],
  },
  {
    id: 4,
    icon: <FaDatabase className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Data Analytics & AI",
    description:
      "Harness the power of your data with advanced analytics, machine learning, and AI-driven insights.",
    points: [
      "Data pipeline development",
      "Machine learning models",
      "Business intelligence",
      "Predictive analytics",
    ],
  },
  {
    id: 5,
    icon: <FaShieldAlt className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security measures to protect your digital assets and ensure compliance with industry standards.",
    points: [
      "Security audits & testing",
      "Compliance frameworks",
      "Identity management",
      "Incident response",
    ],
  },
  {
    id: 6,
    icon: <FaBolt className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7" />,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business processes and technology stack.",
    points: [
      "Process automation",
      "System integration",
      "Digital strategy",
      "Change management",
    ],
  },
];

// StatCard Component
const StatCard = ({ icon, value, title, desc }) => {
  return (
    <div className="bg-white rounded-xl xs:rounded-2xl shadow-md p-4 xs:p-5 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn">
      <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 mx-auto mb-3 xs:mb-4 flex items-center justify-center rounded-full bg-blue-50 animate-pulse-slow">
        {icon}
      </div>
      <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-bold text-[#0B1B3B]">{value}</h3>
      <p className="font-semibold text-sm xs:text-base mt-1">{title}</p>
      <p className="text-xs xs:text-sm text-[#0B1B3B] mt-1">{desc}</p>
    </div>
  );
};

const StatHero = () => {
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();      // 👈 to read state
  const navigate = useNavigate();      // 👈 to clear state

  // 👇 Scroll to section when navigating from another page
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        // Small delay to ensure the DOM is fully rendered
        setTimeout(() => {
          const yOffset = -80; // matches navbar height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
      // Clear the state so that a manual refresh doesn't repeat the scroll
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="overflow-hidden">
      {/* StatsHero Section (TOP) */}
      <section className="w-full bg-[#F4F6FF] py-6 xs:py-8 sm:py-10 md:py-14 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative">
          {/* Hero Image */}
          <div className="relative rounded-xl xs:rounded-2xl md:rounded-3xl overflow-hidden animate-slideUp">
            <img
              src="/src/assets/mra img.png"
              alt="Team Work"
              className="w-full h-48 xs:h-56 sm:h-64 md:h-80 lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 xs:px-4">
              <h2 className="text-white text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight xs:leading-tight sm:leading-tight animate-slideUp text-center">
                Numbers That Speak <br className="hidden xs:block" /> Our Success
              </h2>
              <p className="text-white/90 w-full max-w-2xl mt-2 xs:mt-3 md:mt-4 text-xs xs:text-sm sm:text-base md:text-base px-2 animate-slideUp delay-100">
                Our track record demonstrates our commitment to excellence and client
                satisfaction across all our projects.
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="relative z-10 -mt-12 xs:-mt-14 sm:-mt-16 md:-mt-20 lg:-mt-24 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 px-1 xs:px-2 sm:px-0 animate-fadeIn delay-200">
            <StatCard
              icon={<Users className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6" />}
              value="500+"
              title="Happy Clients"
              desc="Trusted by companies worldwide"
            />
            <StatCard
              icon={<Code2 className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6" />}
              value="1200+"
              title="Projects Delivered"
              desc="Successfully completed projects"
            />
            <StatCard
              icon={<Award className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6" />}
              value="98%"
              title="Success Rate"
              desc="Client satisfaction guaranteed"
            />
            <StatCard
              icon={<Clock className="text-[#1B388E] w-5 h-5 xs:w-6 xs:h-6" />}
              value="24/7"
              title="Support Available"
              desc="Round-the-clock assistance"
            />
          </div>
        </div>
      </section>

      {/* Services Section (BOTTOM) */}
      <section id="Services" className="bg-gray-50 py-6 xs:py-8 sm:py-10 md:py-14 px-3 xs:px-4 sm:px-6 lg:px-8 animate-fadeIn delay-300">
        <div className="max-w-7xl mx-auto mb-6 xs:mb-8 sm:mb-10 md:mb-12 flex flex-col justify-start text-center lg:text-left">
          <p className="text-[#1B388E] font-bold text-sm xs:text-base mb-1 xs:mb-2 animate-slideUp">Our Services</p>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 animate-slideUp delay-100">
            Comprehensive Technology Solutions for Your Business
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 grid-cols-1 xs:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-4 xs:p-5 sm:p-6 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeIn text-center xs:text-center sm:text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon wrapper - centered on mobile, left on desktop */}
              <div className="mb-3 xs:mb-4 flex justify-center xs:justify-center sm:justify-start">
                {service.icon}
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base md:text-base">{service.description}</p>
              <ul className="mb-4 space-y-1 xs:space-y-2 flex flex-col items-center xs:items-center sm:items-start">
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700 text-xs xs:text-sm sm:text-base md:text-base"
                  >
                    <span className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 text-[#1B388E] mt-0.5 xs:mt-0">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openModal(service)}
                className="text-[#1B388E] cursor-pointer font-medium border border-[#1B388E] rounded-lg py-2 xs:py-2.5 md:py-2.5 flex items-center justify-center hover:bg-[#062397] hover:text-white transition-all duration-300 w-full text-sm xs:text-base"
              >
                Learn More <span className="ml-1 xs:ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-5 border-b">
              <h3 className="text-xl font-bold text-gray-900">{selectedService.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-50">
                  {selectedService.icon}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{selectedService.description}</p>
              <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {selectedService.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="w-5 h-5 mr-2 text-[#1B388E] flex-shrink-0">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 border-t flex justify-end">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-[#1B388E] cursor-pointer text-white rounded-lg hover:bg-[#1B388E] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS for animations */}
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  );
};

export default StatHero;