import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import About from './About'
import Smart from "../Homepage/Smart";
import Values from './Values';
import Solution from './Solution';
import Team from './Team';
// import Cridentials from './Cridentials';
// import LogoSection from './LogoSection';

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
    <div className="min-h-screen -mt-5 bg-gradient-to-b from-purple-50 to-white">
      <div id="About">
        <About/>
      </div>
      <div id="Values">
        <Values/>
      </div>
      {/* <LogoSection/> */}
      <div id="Solution">
        <Solution/>
      </div>
      <div id="team">
        <Team/>
      </div>
      {/* <div id="Credentials">
        <Cridentials/>
      </div>
      {/* About ka content */}
      <div id="Testimonials">
        <Smart />
      </div>
    </div>
  )
}

export default Index
