import React, { useState, useEffect, useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "MALIK RASHID ALI",
    role: "CEO & Founder",
    image: "/src/assets/Umar and adeel DP 1.png",
    linkedin: "https://www.linkedin.com/in/rashid-ali-2ba733366/",
  },
  {
    name: "ADEEL KHAN",
    role: "Back-end Engineer",
    image: "/src/assets/Umar and adeel DP (1) 1.png",
    linkedin: "https://www.linkedin.com/in/madeel802/",
  },
  {
    name: "UMAR FAROOQ",
    role: "Technical Lead",
    image: "/src/assets/umer.png",
    linkedin: "https://www.linkedin.com/in/umar-farooq/",
  },
  {
    name: "Tayyab Umer",
    role: "UI/UX Designer",
    image: "/src/assets/tayyab.png",
    linkedin: "https://www.linkedin.com/in/tayyabumar/",
  },
  {
    name: "Muhammad Asad Kamal",
    role: "MERN Stack Developer",
    image: "/src/assets/asad.png",
    linkedin: "https://www.linkedin.com/in/muhammad-asad-kamal-shah-076053318/",
  },
  {
    name: "Waseem Sajjad",
    role: "UI/UX Designer",
    image: "/src/assets/Waseem.jfif",
    linkedin: "https://www.linkedin.com/in/waseemsajjad123/",
  },
  {
    name: "Muhammad Adil",
    role: "AI Chatbot Developer",
    image: "/src/assets/adil.png",
    linkedin: "https://www.linkedin.com/in/m-adil-272262373/",
  },
  {
    name: "Maheen Munawar",
    role: "HR",
    image: "/src/assets/maheen.png",
    linkedin: "https://www.linkedin.com/in/maheen-munawar-18a917318/",
  },
  {
    name: "Musfarah Wajid",
    role: "QA",
    image: "/src/assets/Musfarah.jfif",
    linkedin: "https://www.linkedin.com/in/musfarah-wajid-b34083362/",
  },
  {
    name: "Mariyum Khurshid",
    role: "Flutter Developer",
    image: "/src/assets/Maryam.jfif",
    linkedin: "https://www.linkedin.com/in/mariyum-khurshid-009198249/",
  },
  {
    name: "Abdul Majeed",
    role: "Front-end Developer",
    image: "/src/assets/Majeed.jpeg",
    linkedin: "https://www.linkedin.com/in/abdul-majeed-137746382/",
  },
  {
    name: "Muhammad Awais",
    role: "Full-stack Developer",
    image: "/src/assets/Awais.jfif",
    linkedin: "https://www.linkedin.com/in/muhammad-awais-577958316/",
  },
  {
    name: "Zain Javed",
    role: "Full-stack Developer",
    image: "/src/assets/Zain.jfif",
    linkedin: "https://www.linkedin.com/in/zain-javed-514733274/",
  },
];

const TeamSection = () => {
  // State for typing animation (character count)
  const [mobileCharCount, setMobileCharCount] = useState(0);
  const [desktopCharCount, setDesktopCharCount] = useState(0);

  // Refs to store timeouts for cleanup
  const mobileTimeout = useRef(null);
  const desktopTimeout = useRef(null);

  // Full text for mobile (single line)
  const mobileFullText = "The Innovators Behind MRA Developers";

  // Desktop lines (each as a separate string)
  const desktopLines = ["The", "Innovators", "Behind", "MRA Developers"];
  const desktopLengths = desktopLines.map(line => line.length);
  const totalDesktopChars = desktopLengths.reduce((a, b) => a + b, 0);

  // Typing speed (ms per character)
  const typingSpeed = 100;

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (mobileTimeout.current) clearTimeout(mobileTimeout.current);
      if (desktopTimeout.current) clearTimeout(desktopTimeout.current);
    };
  }, []);

  // Mobile typing effect (letter by letter, infinite loop with no pause)
  useEffect(() => {
    if (mobileTimeout.current) clearTimeout(mobileTimeout.current);

    mobileTimeout.current = setTimeout(() => {
      setMobileCharCount(prev => {
        const next = prev + 1;
        if (next > mobileFullText.length) {
          // Instantly restart from 0
          return 0;
        }
        return next;
      });
    }, typingSpeed);

    return () => {
      if (mobileTimeout.current) clearTimeout(mobileTimeout.current);
    };
  }, [mobileCharCount, mobileFullText.length, typingSpeed]);

  // Desktop typing effect (letter by letter across all lines, infinite loop with no pause)
  useEffect(() => {
    if (desktopTimeout.current) clearTimeout(desktopTimeout.current);

    desktopTimeout.current = setTimeout(() => {
      setDesktopCharCount(prev => {
        const next = prev + 1;
        if (next > totalDesktopChars) {
          // Instantly restart from 0
          return 0;
        }
        return next;
      });
    }, typingSpeed);

    return () => {
      if (desktopTimeout.current) clearTimeout(desktopTimeout.current);
    };
  }, [desktopCharCount, totalDesktopChars, typingSpeed]);

  // Compute desktop line texts based on current character count
  const getDesktopLines = () => {
    let remaining = desktopCharCount;
    const line1 = desktopLines[0].slice(0, Math.min(remaining, desktopLengths[0]));
    remaining = Math.max(0, remaining - desktopLengths[0]);

    const line2 = remaining > 0 ? desktopLines[1].slice(0, Math.min(remaining, desktopLengths[1])) : "";
    remaining = Math.max(0, remaining - desktopLengths[1]);

    const line3 = remaining > 0 ? desktopLines[2].slice(0, Math.min(remaining, desktopLengths[2])) : "";
    remaining = Math.max(0, remaining - desktopLengths[2]);

    const line4 = remaining > 0 ? desktopLines[3].slice(0, Math.min(remaining, desktopLengths[3])) : "";

    return { line1, line2, line3, line4 };
  };

  const { line1, line2, line3, line4 } = getDesktopLines();

  // Helper to get conditional classes for long names (updated for responsiveness)
  const getNameClasses = (name, context = 'default') => {
    const isLongName = name === "Muhammad Asad Kamal";
    
    if (isLongName) {
      if (context === 'mobile') return "text-xs sm:text-sm font-semibold break-words max-w-full";
      if (context === 'desktopMain') return "text-sm font-semibold break-words max-w-full";
      if (context === 'scrollbar') return "text-[10px] sm:text-xs font-semibold break-words max-w-full";
      return "text-sm font-semibold break-words max-w-full";
    }
    
    // Default classes for other names (unchanged)
    if (context === 'mobile') return "text-lg font-semibold whitespace-nowrap";
    if (context === 'desktopMain') return "text-base font-semibold whitespace-nowrap";
    if (context === 'scrollbar') return "text-sm sm:text-base font-semibold whitespace-nowrap";
    return "text-sm font-semibold whitespace-nowrap";
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-20 font-[Inter] overflow-hidden">
      {/* Container with same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        
        {/* UPPER SECTION */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-16">
          {/* LEFT SIDE - centered on mobile, full width */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left h-full">
            <p className="w-full text-sm font-medium tracking-wider text-[#1B388E] uppercase mb-2">
              TEAM
            </p>

            {/* Mobile heading: two lines, centered, responsive font sizes */}
            <h2 className="w-full block lg:hidden text-2xl sm:text-3xl md:text-4xl font-extrabold text-center break-words max-w-full mb-4 md:mb-10 min-h-[4rem]">
              {mobileFullText.slice(0, mobileCharCount)}
              <span className="animate-pulse">|</span>
            </h2>

            {/* Desktop heading with looping letter-by-letter animation (across lines) */}
            <h2 className="hidden lg:block text-[38px] sm:text-[48px] md:text-[60px] lg:text-[65px] font-extrabold leading-[1.1] mb-8 md:mb-10">
              {/* Each line always contains either text or a non-breaking space to maintain constant height */}
              <div>{line1 || '\u00A0'}</div>
              <div>{line2 || '\u00A0'}</div>
              <div>{line3 || '\u00A0'}</div>
              <div>
                <span className="text-black">{line4 || '\u00A0'}</span>
                <span className="animate-pulse">|</span>
              </div>
            </h2>
          </div>

          {/* RIGHT SIDE - unchanged */}
          <div className="w-full lg:w-1/2">
            {/* MOBILE LAYOUT - All 3 cards full width */}
            <div className="flex flex-col gap-6 lg:hidden">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div 
                  key={index}
                  className="relative w-full rounded-[20px] overflow-hidden shadow-lg bg-white"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)] right-4">
                    <h3 className={getNameClasses(member.name, 'mobile')}>{member.name}</h3>
                    <p className="text-xs opacity-90">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-[#1B388E] hover:bg-[#051474] text-white transition"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              ))}
            </div>

            {/* DESKTOP LAYOUT - Original 3 image layout */}
            <div className="hidden lg:flex flex-col items-center gap-8 md:gap-10">
              {/* Top single image */}
              <div className="w-[260px] rounded-[30px]">
                <div className="relative rounded-[40px] overflow-hidden shadow-lg bg-white">
                  <img
                    src={teamMembers[0].image}
                    alt={teamMembers[0].name}
                    className="w-full h-[250px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)] right-4">
                    <h3 className={getNameClasses(teamMembers[0].name, 'desktopMain')}>{teamMembers[0].name}</h3>
                    <p className="text-sm opacity-90">{teamMembers[0].role}</p>
                  </div>
                  <a
                    href={teamMembers[0].linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 w-7 h-7 flex items-center justify-center rounded-full bg-[#1B388E] hover:bg-[#08257d] text-white transition"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </div>
              </div>

              {/* Two images below top */}
              <div className="flex justify-center gap-6">
                {teamMembers.slice(1, 3).map((member, index) => (
                  <div
                    key={index}
                    className="relative w-[260px] rounded-[30px] overflow-hidden shadow-lg bg-white"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-[250px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)] right-3">
                      <h3 className={getNameClasses(member.name, 'desktopMain')}>{member.name}</h3>
                      <p className="text-xs opacity-90">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 w-6 h-6 flex items-center justify-center rounded-full bg-[#1B388E] hover:bg-[#08257d] text-white transition"
                    >
                      <FaLinkedinIn size={12} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AUTO-SCROLL BAR */}
        <div className="w-full overflow-hidden mt-12 md:mt-16">
          <div className="flex gap-5 sm:gap-8 animate-scroll-x">
            {[...teamMembers.slice(3), ...teamMembers.slice(3)].map((member, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] rounded-[20px] md:rounded-[25px] overflow-hidden shadow-lg bg-white"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[180px] sm:h-[200px] md:h-[230px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)] right-3">
                  <h3 className={getNameClasses(member.name, 'scrollbar')}>{member.name}</h3>
                  <p className="text-[10px] sm:text-xs opacity-90">{member.role}</p>
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-[#1B388E] hover:bg-[#072374] text-white transition"
                >
                  <FaLinkedinIn size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Animation */}
        <style>{`
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-x {
            display: flex;
            width: max-content;
            animation: scroll-x 30s linear infinite;
          }
          .animate-pulse {
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TeamSection;