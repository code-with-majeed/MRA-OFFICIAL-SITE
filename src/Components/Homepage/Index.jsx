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
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // Clear state to avoid repeat scroll
      window.history.replaceState({}, document.title);
    }
  }, [location]);

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
