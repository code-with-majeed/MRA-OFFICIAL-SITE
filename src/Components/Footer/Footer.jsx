import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaArrowUp,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const services = [
  ["Web & Mobile App Development", "E-Commerce Development"],
  ["Custom Software Solutions", "SEO & Digital Marketing"],
  ["UI/UX Design & Prototyping", "Cloud Solutions & Deployment"],
  ["AI & Automation Services", "Staff Augmentation"],
];

const navLinks = [
  "About",
  "Blog",
  "Career",
  "Team",
  "Success Stories",
  "Awards",
  "Contact",
];

const socialIcons = [
  {
    Icon: FaInstagram,
    color: "hover:text-[#1B388E]",
    link: "https://www.instagram.com/mra.devs/",
  },
  {
    Icon: FaTwitter,
    color: "hover:text-[#1B388E]",
    link: "https://twitter.com/mradevelopers",
  },
  {
    Icon: FaFacebookF,
    color: "hover:text-[#1B388E]",
    link: "https://www.facebook.com/mradevelopers",
  },
  {
    Icon: FaLinkedin,
    color: "hover:text-[#1B388E]",
    link: "https://www.linkedin.com/company/mradevs/posts/?feedView=all",
  },
  {
    Icon: FaYoutube,
    color: "hover:text-[#1B388E]",
    link: "https://www.youtube.com/@mra_developers",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="w-full relative bg-white">
      {/* Top Border Container - This creates the border effect */}
      <div className="relative">
        {/* Border line */}
        <div className="absolute top-0 left-0 right-0 h-0.5  z-40"></div>
        
        {/* Optional: Gradient overlay for a more prominent border */}
        <div className="absolute top-0 left-0 right-0 h-1  to-transparent opacity-30 z-30"></div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Gray Content Section - Fixed border issue */}
        <div className="relative bg-gray-200 rounded-t-3xl z-30 -top-10 lg:rounded-3xl pb-8 lg:pb-12 px-4 sm:px-6 lg:px-8">
        
          {/* Logo Section */}
          <motion.div
            className="flex justify-center lg:justify-start mb-10 lg:mb-12 px-2 pt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="https://mraportal.mradevelopers.com/assets/MRA%20logo%20blue-DnkCe1e_.png"
              alt="MRA Developers"
              className="h-10 lg:h-12 cursor-pointer hover:scale-105 transition"
              onClick={scrollToTop}
            />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 lg:mb-12 px-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((column, i) => (
              <motion.div key={i} className="space-y-4" variants={itemVariants}>
                {column.map((service, j) => (
                  <p
                    key={j}
                    className="text-sm lg:text-base text-gray-700 cursor-pointer hover:text-[#1B388E] transition-colors duration-200"
                  >
                    {service}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gray-300 my-8 lg:my-10 mx-2" />

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 lg:mb-10 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <span
                key={link}
                className="text-sm lg:text-base text-gray-700 cursor-pointer font-medium hover:text-[#1B388E] transition-colors duration-200 px-1"
              >
                {link}
              </span>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="h-px bg-gray-300 my-8 lg:my-10 mx-2" />

          {/* Bottom Section */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Copyright */}
            <span className="text-sm text-gray-600 text-center md:text-left order-2 md:order-1">
              © 2026 MRA Developers. <span className="font-bold">All rights reserved.</span>
            </span>

            {/* Social Icons */}
            <div className="flex gap-3 lg:gap-4 order-1 md:order-2 mb-4 md:mb-0">
              {socialIcons.map(({ Icon, color, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 lg:p-3 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Icon className={`text-base lg:text-lg text-gray-600 transition-colors duration-200 ${color}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-[#1B388E] text-white flex items-center justify-center shadow-xl z-50 hover:bg-blue-800 cursor-pointer transition-colors duration-200"
          >
            <FaArrowUp className="text-lg" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;