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
    { label: "SERVICES", sectionId: "services" },
    { label: "PORTFOLIO", path: "/portfolio" },
    { label: "TEAM", sectionId: "team" },
    { label: "CONTACT", path: "/contact" },
    { label: "BLOG", sectionId: "blog" },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
    setIsOpen(false);
  };

  // Mobile close handlers
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

  // Check if item is active
  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    return false;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
        style={{
  background: "linear-gradient(to bottom, rgba(40, 65, 165, 0.9), rgba(40, 65, 165, 0.75))"
}}

      >
        {/* Changed container to match StatHero width */}
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
                <button
                  key={item.label}
                  onClick={() =>
                    item.sectionId ? handleSectionClick(item.sectionId) : navigate(item.path)
                  }
                  className={`px-3 xl:px-4 py-2 font-medium transition-all duration-300 text-sm xl:text-base rounded-md ${
                    isActive(item)
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-5 py-2.5 bg-white text-blue-900 font-bold rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 shadow-md text-sm xl:text-base"
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

        {/* Mobile Menu Overlay */}
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
                className="fixed top-0 right-0 h-full w-full max-w-xs z-50 bg-blue-900 flex flex-col"
                style={{ backgroundColor: "linear-gradient(to bottom, rgba(40, 65, 165, 0.9), rgba(40, 65, 165, 0.75))" }}
              >
                {/* Mobile Menu Header */}
                <div className="p-4 border-b border-white/20 flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="/src/assets/MRA_developer.png"
                      alt="MRA Developers"
                      className="h-7"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
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
                    {navItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          if (item.sectionId) {
                            handleSectionClick(item.sectionId);
                          } else {
                            navigate(item.path);
                            setIsOpen(false);
                          }
                        }}
                        className={`w-full text-left py-3 px-4 rounded-lg font-medium transition-all ${
                          isActive(item)
                            ? "bg-white/20 text-white"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA Button */}
                <div className="p-4 border-t border-white/20">
                  <button
                    onClick={() => {
                      navigate("/contact");
                      setIsOpen(false);
                    }}
                    className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-md cursor-pointer"
                  >
                    Book a Free Discovery Call
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-14 sm:h-16 lg:h-20" />
    </>
  );
};

export default Navbar;` `