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
    // 🔹 Agar Home ke kisi section par scroll karna ho
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } 
    // 🔹 Normal page navigation
    else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [location.pathname]);

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
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
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
