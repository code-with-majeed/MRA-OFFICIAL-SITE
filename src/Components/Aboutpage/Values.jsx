import React from "react";
import { motion } from "framer-motion";
import { WiDayLightWind } from "react-icons/wi";
import { FaPinterest } from "react-icons/fa6";
import { SiSimplenote } from "react-icons/si";
import { SiPaperspace } from "react-icons/si";

const Values = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardHover = {
    rest: { 
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconAnimation = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      }
    }
  };

  return (
    <div className="w-full py-12 md:py-16 lg:py-20">
      {/* Everything in same container as navbar */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        
        {/* HEADING */}
        <motion.h2 
          className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center mb-10 sm:mb-12 md:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          Our Values
        </motion.h2>

        {/* CARDS - Removed extra container wrapper */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          
          {/* CARD 1 */}
          <motion.div 
            className="w-full h-auto min-h-[300px] sm:min-h-[373px] rounded-[34px] bg-white shadow-md flex flex-col items-start p-5 sm:p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5 }
              },
              hover: cardHover.hover
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconAnimation}
            >
              <WiDayLightWind className="text-4xl text-[#062397] mb-4" />
            </motion.div>
            <motion.h6 
              className="font-bold text-lg mb-2 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              Transparency
            </motion.h6>
            <motion.p 
              className="font-light text-sm leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              At MRA Developers, we believe in openness and honesty. We clearly
              communicate what we promise and always deliver on it — no hidden
              agendas, just genuine partnerships.
            </motion.p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div 
            className="w-full h-auto min-h-[300px] sm:min-h-[373px] rounded-[34px] bg-white shadow-md flex flex-col items-start p-5 sm:p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.1 }
              },
              hover: cardHover.hover
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconAnimation}
            >
              <FaPinterest className="text-4xl text-[#062397] mb-4" />
            </motion.div>
            <motion.h6 
              className="font-bold text-lg mb-2 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Integrity
            </motion.h6>
            <motion.p 
              className="font-light text-sm leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              We build trust through honesty and accountability. Every project we take on is handled with responsibility, professionalism, and a commitment to the highest standards.
            </motion.p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div 
            className="w-full h-auto min-h-[300px] sm:min-h-[373px] rounded-[34px] bg-white shadow-md flex flex-col items-start p-5 sm:p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.2 }
              },
              hover: cardHover.hover
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconAnimation}
            >
              <SiSimplenote className="text-4xl text-[#062397] mb-4" />
            </motion.div>
            <motion.h6 
              className="font-bold text-lg mb-2 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Simplicity
            </motion.h6>
            <motion.p 
              className="font-light text-sm leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Technology can be complex, but we make it simple. Our team focuses on clear, practical solutions that solve real problems without unnecessary complications.
            </motion.p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div 
            className="w-full h-auto min-h-[300px] sm:min-h-[373px] rounded-[34px] bg-white shadow-md flex flex-col items-start p-5 sm:p-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover="hover"
            animate="rest"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.5, delay: 0.3 }
              },
              hover: cardHover.hover
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={iconAnimation}
            >
              <SiPaperspace className="text-4xl text-[#062397] mb-4" />
            </motion.div>
            <motion.h6 
              className="font-bold text-lg mb-2 text-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Performance
            </motion.h6>
            <motion.p 
              className="font-light text-sm leading-relaxed text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              We don't just create digital solutions we create measurable impact. Every strategy, design, or line of code is built to drive results, growth, and long-term success for our clients.
            </motion.p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default Values;