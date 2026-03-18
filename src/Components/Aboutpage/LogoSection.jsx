import React from "react";
import logoSvg1 from "../../assets/jolie-1.svg.svg";
import logoSvg2 from "../../assets/tecnologia.svg.svg";
import logoSvg3 from "../../assets/caridad.svg (1).svg";
import logoSvg4 from "../../assets/F7.svg.svg";
import logoSvg5 from "../../assets/petmania.svg.svg";
import logoSvg6 from "../../assets/Scuola_Logo_OnlyTop-1.svg.svg";

const LogoShowcase = () => {
  const logos = [
    { src: logoSvg1, alt: "Jolie" },
    { src: logoSvg2, alt: "Tecnologia" },
    { src: logoSvg3, alt: "Caridad" },
    { src: logoSvg4, alt: "F7" },
    { src: logoSvg5, alt: "Petmania" },
    { src: logoSvg6, alt: "Scuola" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
          The best brands choose MRA Developers
        </h2>
       <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
  {logos.map((logo, index) => (
    <div
      key={index}
      className="flex justify-center items-center flex-1 min-w-[100px] max-w-[150px] sm:min-w-[120px] sm:max-w-[160px] md:min-w-[140px] md:max-w-[180px]"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="w-full h-auto object-contain"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default LogoShowcase;