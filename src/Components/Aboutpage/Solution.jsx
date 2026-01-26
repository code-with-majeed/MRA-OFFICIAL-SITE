import React from "react";

const Solution = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* LEFT */}
          <div className="lg:w-1/2">
            <p className="font-bold mb-4">
              Smart Digital Solutions Provider
            </p>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              We're a leader in innovative digital growth strategies
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:w-1/2">
            <p className="text-base leading-[30px] mb-6">
              With years of expertise, MRA Developers understands that every
              digital solution—whether web, mobile, AI, or marketing—carries its
              own strengths. But true impact comes when these solutions work
              together. That's why we deliver full-service strategies that
              integrate web development, mobile apps, AI, UI/UX, and digital
              marketing into one powerful ecosystem designed to boost visibility,
              drive conversions, and accelerate revenue growth.
            </p>

            <p className="font-bold underline cursor-pointer text-[#062397]">
              Explore Our Solutions
            </p>
          </div>

        </div>
      </div>

      {/* MARGIN IMAGE */}
      <img
        src="/src/assets/Margin (1).png"
        alt="Margin"
        className="w-full"
      />
    </div>
  );
};

export default Solution;