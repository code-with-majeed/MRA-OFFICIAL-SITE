import React from "react";
import { useNavigate } from "react-router-dom";
import logoSvg1 from "../../assets/jolie-1.svg.svg";
import logoSvg2 from "../../assets/tecnologia.svg.svg";
import logoSvg3 from "../../assets/caridad.svg (1).svg";
import logoSvg4 from "../../assets/F7.svg.svg";
import logoSvg5 from "../../assets/petmania.svg.svg";
import logoSvg6 from "../../assets/Scuola_Logo_OnlyTop-1.svg.svg";

const Solution = () => {
  const navigate = useNavigate();
  const logos = [
    { src: logoSvg1, alt: "Jolie" },
    { src: logoSvg2, alt: "Tecnologia" },
    { src: logoSvg3, alt: "Caridad" },
    { src: logoSvg4, alt: "F7" },
    { src: logoSvg5, alt: "Petmania" },
    { src: logoSvg6, alt: "Scuola" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* LEFT - centered on mobile */}
          <div className="lg:w-1/2 text-center lg:text-left ">
            <p className="font-bold mb-4 text-[#1B388E]">Smart Digital Solutions Provider</p>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              We're a leader in innovative digital growth strategies
            </h2>
          </div>

          {/* RIGHT - centered on mobile */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-base leading-[30px] mb-6">
              With years of expertise, MRA Developers understands that every
              digital solution—whether web, mobile, AI, or marketing—carries its
              own strengths. But true impact comes when these solutions work
              together. That's why we deliver full-service strategies that
              integrate web development, mobile apps, AI, UI/UX, and digital
              marketing into one powerful ecosystem designed to boost visibility,
              drive conversions, and accelerate revenue growth.
            </p>

            <p className="font-bold underline cursor-pointer text-[#1B388E]" onClick={() => navigate("/#StatsHero")}>
              Explore Our Solutions
            </p>
          </div>
        </div>
      </div>

      {/* LOGO SHOWCASE SECTION */}
       

      {/* /* MARGIN IMAGE */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
  <img
    src="/src/assets/Margin (1).png"
    alt="Margin"
    className="w-full h-auto object-cover"
  />
</div>
    </div>
  );
};

export default Solution;