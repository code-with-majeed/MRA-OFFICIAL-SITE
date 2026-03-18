import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", sectionId: "StatsHero", targetPage: "/" },
    { label: "PORTFOLIO", sectionId: "Business", targetPage: "/" },
    { label: "TEAM", sectionId: "team", targetPage: "/about" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOG", sectionId: "Blogs", targetPage: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (item) => {
    setIsOpen(false);

    if (item.sectionId && item.targetPage) {
      // Build a hash link to the target section and navigate.
      const targetUrl = `${item.targetPage}#${item.sectionId}`;

      // If already on the target page, we can just update the hash and scroll
      if (location.pathname === item.targetPage) {
        navigate(targetUrl, { replace: false });
      } else {
        // Navigate to the target page with hash, scroll will be handled globally by ScrollHandler.
        navigate(targetUrl, { replace: false });
      }

      return;
    }

    if (item.path) {
      // For path-based navigation
      navigate(item.path);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".mobile-menu-container")) setIsOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const isActive = (item) => item.path && location.pathname === item.path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-br from-blue-900 to-blue-900 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src="/src/assets/MRA_developer.png"
                alt="MRA Developers"
                className="h-8 sm:h-9 md:h-10 w-auto"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleSectionClick(item)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-1 xl:px-2 py-1 transition-all duration-300 text-sm xl:text-base rounded-md relative group text-white/90 hover:text-white cursor-pointer"
                >
                  {item.label}
                  {/* Professional full-width underline hover effect */}
                  <span className="absolute bottom-1 left-2 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-90 origin-left transition-transform duration-300 rounded-full" />
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-5 py-2.5 text-[#1B388E] bg-white font-semibold rounded-lg cursor-pointer hover:bg-[#cbcdd2] transition-all duration-300 shadow-lg hover:shadow-xl text-sm xl:text-base"
              >
                Book a Free Call
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="lg:hidden p-2 rounded-lg hover:bg-blue-800/50 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-white" />
              ) : (
                <FiMenu className="h-6 w-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay & Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black lg:hidden"
                onClick={() => setIsOpen(false)}
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 h-full w-full sm:max-w-sm z-50 flex flex-col mobile-menu-container"
                style={{
                  background: "linear-gradient(130deg, #293EA0 15.32%, #0A80FE 78.37%)",
                }}
              >
                {/* Mobile Menu Header */}
                <div className="p-4 border-b border-white/20 flex items-center justify-between">
                  <img
                    src="/src/assets/MRA_developer.png"
                    alt="MRA Developers"
                    className="h-7"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-blue-800 rounded-lg"
                    aria-label="Close menu"
                  >
                    <FiX className="h-6 w-6 text-white" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.label}
                        onClick={() => handleSectionClick(item)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 8 }}
                        className="w-full text-left py-3 px-4 rounded-lg font-medium transition-all relative group text-white/90 hover:text-white"
                      >
                        {item.label}
                        {/* Professional full-width underline effect */}
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-white/20">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigate("/contact");
                      setIsOpen(false);
                    }}
                    className="w-full py-3 text-[#1B388E] font-semibold bg-white rounded-lg hover:bg-[#082375] transition-all shadow-md cursor-pointer"
                  >
                    Book a Free Discovery Call
                  </motion.button>
                </div>

              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer – offsets fixed navbar */}
      <div className="h-14 sm:h-16 lg:h-20" />
    </>
  );
};

export default Navbar;