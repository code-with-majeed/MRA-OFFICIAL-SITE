import React from "react";
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
    name: "TAYYAB UMER",
    role: "UI/UX Designer",
    image: "/src/assets/tayyab.png",
    linkedin: "https://www.linkedin.com/in/tayyabumar/",
  },
  {
    name: "MUHAMMAD ASAD KAMAL SHAH",
    role: "MERN Stack Developer",
    image: "/src/assets/asad.png",
    linkedin: "https://www.linkedin.com/in/muhammad-asad-kamal-shah-076053318/",
  },
  {
    name: "Waseem Sajjad",
    role: "UI/UX Designer",
    image: "/src/assets/Waseem.jfif",
    linkedin: "https://www.linkedin.com/in/shabbir-hassan/",
  },
  {
    name: "MUHAMMAD ADIL",
    role: "AI Chatbot Developer",
    image: "/src/assets/adil.png",
    linkedin: "https://www.linkedin.com/in/m-adil-272262373/",
  },
  {
    name: "Maheen",
    role: "HR",
    image: "/src/assets/Hr.jfif",
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
    name: "Awais",
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
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 md:py-20 font-[Inter] overflow-hidden">
      {/* Container with same width as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 w-full">
        
        {/* UPPER SECTION */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16">
          {/* LEFT SIDE - centered on mobile, full width */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-sm font-medium tracking-wider text-[#1B388E] uppercase mb-2">
              TEAM
            </p>
            {/* Mobile heading (2 lines) */}
            <h2 className="block lg:hidden text-[32px] xs:text-[38px] sm:text-[48px] font-extrabold leading-[1.2] mb-8 md:mb-10">
              The Innovators<br />
              Behind <span className="text-black">MRA Developers</span>
            </h2>
            {/* Desktop heading (4 lines) */}
            <h2 className="hidden lg:block text-[38px] sm:text-[48px] md:text-[60px] lg:text-[65px] font-extrabold leading-[1.1] mb-8 md:mb-10">
              The <br /> Innovators <br /> Behind <br />
              <span className="text-black">MRA Developers</span>
            </h2>
          </div>

          {/* RIGHT SIDE - Mobile: stack vertically, Desktop: show 3 images */}
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
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
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
                  <div className="absolute bottom-4 left-4 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
                    <h3 className="text-lg font-semibold">{teamMembers[0].name}</h3>
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
                    <div className="absolute bottom-3 left-3 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
                      <h3 className="text-base font-semibold">{member.name}</h3>
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
                <div className="absolute bottom-3 left-3 text-white drop-shadow-[1px_1px_3px_rgba(0,0,0,0.6)]">
                  <h3 className="text-sm sm:text-base font-semibold">{member.name}</h3>
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
        `}</style>
      </div>
    </section>
  );
};

export default TeamSection;