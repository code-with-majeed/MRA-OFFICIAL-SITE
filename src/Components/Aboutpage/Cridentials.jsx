import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";


const Cridentials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 }
    },
    hover: {
      scale: 1.05,
      x: 5,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const navigate = useNavigate();
  return (
      
      <div ref={ref} className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      {/* Image */}
      <motion.img 
        src="/src/assets/Margin (1).png" 
        alt="Margin"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full mb-6 sm:mb-8 md:mb-10 lg:mb-12"
      />
      
      {/* Main Container */}
      <motion.div 
        className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Heading - Only visible on large screens */}
        <motion.div 
          className="hidden lg:block w-[160px]"
          variants={itemVariants}
        >
          <h3 className='font-bold text-xl lg:text-2xl leading-tight'>
            Credentials:
          </h3>
        </motion.div>

        {/* Mobile Heading - Only visible on small screens */}
        <motion.div 
          className="lg:hidden w-full text-center mb-4"
          variants={itemVariants}
        >
          <h3 className='font-bold text-xl sm:text-2xl'>
            Credentials & recognitio:
          </h3>
        </motion.div>

        {/* Center Logos */}
        <motion.div 
          className="logo flex flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 w-full lg:w-auto"
          variants={itemVariants}
        >
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.img
              key={index}
              src={`/src/assets/logo-${index}.png`}
              alt={`logo-${index}`}
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain transition-transform duration-200"
              variants={logoVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover="hover"
            />
          ))}
        </motion.div>

        {/* Right Button */}
        <motion.button
  variants={buttonVariants}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  whileHover="hover"
  whileTap="tap"
  onClick={() => navigate("/contact")}   // ✅ ADD THIS
  className="bg-gradient-to-r from-blue-800 to-blue-900 cursor-pointer text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1 sm:gap-2 hover:from-blue-800 hover:to-blue-900 shadow-md text-xs sm:text-sm md:text-base font-medium w-full sm:w-auto lg:w-auto mt-2 sm:mt-0"
>
  Get Proposal
  <IoIosArrowRoundForward className="text-base sm:text-lg md:text-xl" />
</motion.button>

      </motion.div>
    </div>
  )
}

export default Cridentials