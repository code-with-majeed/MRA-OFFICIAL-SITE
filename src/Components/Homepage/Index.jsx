import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import Reviews from "./Reviews";
import StatsHero from "./StatsHero";
import Business from "./Business";
import Blogs from "./Blogs";
import Smart from "./Smart";

const Index = () => {
  const location = useLocation();

  // Scroll to section if state passed from Navbar
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) {
          const yOffset = -80; // Account for fixed navbar
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      // Clear state to avoid repeat scroll
      window.history.replaceState({}, document.title);
    }
  }, [location.state?.scrollTo]);

  return (
    <div>
      {/* Hero Section */}
      <div id="Hero">
        <Hero />
      </div>

      {/* Reviews Section */}
      <div id="Reviews">
        <Reviews />
      </div>

      {/* Stats Hero Section */}
      <div id="StatsHero">
        <StatsHero />
      </div>

      {/* Business Section */}
      <div id="Business">
        <Business />
      </div>

      {/* Blogs Section */}
      <div id="Blogs">
        <Blogs />
      </div>

      {/* Smart Section / Testimonials */}
      <div id="Smart">
        <Smart />
      </div>
    </div>
  );
};

export default Index;
