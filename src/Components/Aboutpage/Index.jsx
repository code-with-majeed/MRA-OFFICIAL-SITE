import React from 'react'
import About from './About'
import Smart from "../Homepage/Smart";
import Values from './Values';
import Solution from './Solution';
import Team from './Team';
import Cridentials from './Cridentials';
import LogoSection from './LogoSection';

const Index = () => {
  return (
    <div className="min-h-screen -mt-5 bg-gradient-to-b from-purple-50 to-white">
      <About/>
      <Values/>
      <LogoSection/>
      <Solution/>
      <Team/>
      <Cridentials/>
      {/* About ka content */}
      <Smart />
    </div>
  )
}

export default Index
