"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const SecondHeero = () => {
  return (
    <section className="">
      <h1 className="mb-6 transform -translate-y-10 text-4xl md:text-6xl font-bold  text-[#EAE3D2]  bg-clip-text leading-tight">
        Hello, I&apos;m <span className="text-[#013237]">Asma</span>
        <br />
        <span className="bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Mobile Developer",
              2000,
              "UI/UX Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="transform -translate-y-10 text-[#12223f] font-medium md:text-lg lg:text-xl mb-8 md:mb-10 bg-white/60 rounded-xl px-6 py-4 shadow-lg backdrop-blur-sm mx-4 sm:mx-0">
        Transforming ideas into digital experiences with code, design, and
        creativity.
      </p>

      <div className="transform -translate-y-12 flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/6283811404951"
          className="py-3 px-8 rounded-full bg-gradient-to-r from-[#183EC2] to-[#608BC1] text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Hire Me
        </a>
        <a
          href="/images/CV_ASMA SADIYAH.pdf"
          download
          className="py-3 px-8 rounded-full bg-gradient-to-r from-[#608BC1] to-[#EAEEFE] text-[#183EC2] font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default SecondHeero;
