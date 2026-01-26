import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto mt-10 px-3 xs:px-4 sm:px-6 lg:px-8 py-12 md:py-16 pt-0">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          
          {/* LEFT CONTENT */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            variants={slideInFromLeft}
          >
            <motion.p 
              className="font-bold mb-3 text-sm sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              About Us
            </motion.p>
            <motion.h2 
              className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight md:leading-tight lg:leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Smart Tech for Smarter Business Growth
            </motion.h2>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div 
            className="lg:w-1/2 flex justify-center overflow-hidden rounded-xl"
            variants={slideInFromRight}
          >
            <motion.img
              src="/src/assets/pexels.jpg.png"
              alt="About"
              className="w-full rounded-xl h-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>

        </motion.div>
      </div>

      {/* MARGIN IMAGE - Now constrained to same width */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full overflow-hidden rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn}
        >
          <img
            src="/src/assets/Margin (1).png"
            alt="Margin"
            className="w-full h-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      </div>

      {/* DESCRIPTION TEXT */}
      <motion.div 
        className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="w-full font-bold text-sm sm:text-base leading-[1.6] md:leading-[33px] text-center lg:text-left px-4 sm:px-0">
          MRA Developers was founded with a vision to empower businesses through
          smart technology and digital innovation. Starting with core expertise
          in web and app development, we have steadily expanded our services to
          include AI solutions, UI/UX design, eCommerce platforms, and digital
          marketing. Today, we proudly partner with startups, SMEs, and global
          enterprises across diverse industries. Our focus remains on delivering
          scalable, impactful, and future-ready solutions that help businesses
          grow and thrive in the digital era.
        </p>
      </motion.div>

      {/* BOTTOM IMAGE */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <motion.div 
          className="w-full flex justify-center overflow-hidden rounded-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.img
            src="/src/assets/pexels-moe-magners-7495294-1024x417.jpg.png"
            alt="Team"
            className="w-full h-auto object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          />
        </motion.div>
      </div>

    </div>
  );
};

export default About;