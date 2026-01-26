import React from "react";

// Placeholder logos (free logos for demo)
const logos = [
  { src: "https://via.placeholder.com/150x60?text=Brand+1", alt: "Brand 1" },
  { src: "https://via.placeholder.com/150x60?text=Brand+2", alt: "Brand 2" },
  { src: "https://via.placeholder.com/150x60?text=Brand+3", alt: "Brand 3" },
  { src: "https://via.placeholder.com/150x60?text=Brand+4", alt: "Brand 4" },
  { src: "https://via.placeholder.com/150x60?text=Brand+5", alt: "Brand 5" },
];

const LogoShowcase = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 bg-white">
      {/* Heading */}
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-10">
        The best brands choose MRA Developers
      </h2>

      {/* Logos Container */}
      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-24 sm:w-28 md:w-32 lg:w-36 max-w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoShowcase;
