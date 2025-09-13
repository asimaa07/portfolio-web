import React from "react";
import { TypeAnimation } from "react-type-animation";
import SplinePage from "./Spline";
import SecondHeero from "./SecondHeero";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#183EC2] via-[#608BC1] to-[#EAEEFE] overflow-hidden font-montserrat">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>
      <div className="relative flex flex-col items-center justify-center text-center w-full max-w-2xl animate-fade-in">
        <SplinePage />
        <SecondHeero />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-hidden z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C150,80 350,20 600,40 C850,60 1050,10 1200,40 L1200,100 L0,100 Z"
            fill="#FFFFFF"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
