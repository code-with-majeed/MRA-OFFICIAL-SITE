import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Homepage/Index";
import About from "./Components/Aboutpage/Index";
import ContactUs from "./Components/Auth/ContactUs/Index";

/* ================================
   SCROLL HANDLER (GLOBAL)
================================ */
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = (sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return false;
      const yOffset = -80; // Account for fixed navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      return true;
    };

    const targetId = location.hash?.replace("#", "") || location.state?.scrollTo;

    if (targetId) {
      let attempts = 0;
      const maxAttempts = 8;

      const tryScroll = () => {
        attempts += 1;
        const didScroll = scrollToSection(targetId);
        if (!didScroll && attempts < maxAttempts) {
          window.setTimeout(tryScroll, 60);
        }
      };

      tryScroll();
      return;
    }

    // Default behavior: scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.hash, location.state?.scrollTo]);

  return null;
};

/* ================================
   MAIN APP
================================ */
const App = () => {
  return (
    <Router>
      {/* 🔹 Apply overflow-x-hidden here */}
      <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
        <Navbar />
        <ScrollHandler />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="colored"
          className="mt-10"
        />

        {/* 🔹 Main content wrapper */}
        <div className="flex-1 max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
