import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const borderVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + (i * 0.1),
        duration: 0.4
      }
    })
  };

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-br from-blue-900 to-blue-900  -mt-20 pb-6 flex flex-col justify-center items-center text-white relative overflow-hidden"
      // style={{
      //   background: "linear-gradient(130deg, #293EA0 15.32%, #0A80FE 78.37%)",
      // }}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-5 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 blur-xl"
        animate={{
          x: [0, 15, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 blur-xl"
        animate={{
          x: [0, -10, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Heading Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="w-full max-w-6xl px-2 sm:px-4 text-center flex flex-col items-center justify-center flex-1"
      >
        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-3 px-2 leading-tight">
              Level up your{" "}
              <motion.span
                variants={borderVariants}
                className="inline-block border-2 rounded-full px-2 py-0.5 sm:px-3 sm:py-1 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl mt-1"
              >
                Business
              </motion.span>
            </h1>
            
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold px-2 flex flex-wrap items-center justify-center gap-1 sm:gap-2 leading-tight">
              with
              <span className="flex items-center gap-1 text-yellow-300 ml-1">
                <FaArrowRight className="text-base sm:text-xl" /> 
                MRA's digital solutions
              </span>
            </h2>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full max-w-6xl px-2 sm:px-4 text-center mb-6 md:mb-8"
      >
        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6"
        >
          <span className="font-semibold px-1 sm:px-2">Trusted by</span>
          <span className="text-gray-300 font-normal">industry leading companies worldwide</span>
        </motion.p>

        {/* Icons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="px-2"
        >
          <ul className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {[
              { icon: FaBolt, text: "Boltshift" },
              { icon: FaImages, text: "Lightbox" },
              { icon: FaCode, text: "FeatherDev" },
              { icon: FaGlobe, text: "Spherule" },
              { icon: FaBook, text: "Nietzsche" }
            ].map((item, index) => (
              <motion.li
                key={index}
                custom={index}
                variants={iconVariants}
                className="flex flex-row items-center gap-1 sm:gap-2 opacity-80 hover:opacity-100 transition-opacity duration-300 p-1"
                whileHover={!isMobile ? { scale: 1.05, y: -3 } : {}}
                whileTap={isMobile ? { scale: 0.95 } : {}}
              >
                <item.icon 
                  size={isMobile ? 16 : 24} 
                  className="text-white/90"
                />
                <h5 className="text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
                  {item.text}
                </h5>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Floating Arrow for mobile */}
      {isMobile && (
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/60 rounded-full mt-1"></div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;