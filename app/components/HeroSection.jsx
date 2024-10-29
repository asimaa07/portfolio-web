"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="pt-10 relative lg:py-16 font-montserrat w-full overflow-x-hidden h-[700px] mx-0 px-0 bg-[radial-gradient(ellipse_70%_20%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="grid grid-cols-1 sm:grid-cols-12 justify-center items-center lg:mt-6">
        
        {/* Teks dan Tombol */}
        <div className="col-span-7 pt-6 sm:pl-20 order-2 sm:order-1">
          <h1 className="font-montserrat mb-4 text-4xl lg:text-6xl font-bold items-center text-center sm:text-left bg-gradient-to-r from-black to-gray-400 text-transparent bg-clip-text">
            <span className="text-[#608BC1]">
              Hello, I'm Asma <br/> 
            </span>
            Web Developer
          </h1>
          <p className="text-[#12223f] font-medium sm:text-lg lg:text-xl p-6 text-center sm:text-left sm:p-2 sm:font-semibold">
          Let's bring your ideas to life with code and creativity!
          </p>
        </div>
        <div className="col-span-7 sm:col-span-12 order-3 flex justify-center sm:justify-start pt-4 sm:pl-20">
          <a href="https://wa.me/6283811404951" className="mr-4 ml-2 py-3 rounded-full w-[200px] bg-gray-700 text-white shadow-xl hover:bg-black text-center">
            Hire Me
          </a>
          <a 
            href="/cv/Asma-CV.pdf" 
            download 
            className="mr-2 ml-4 py-3 rounded-full w-[200px] bg-gray-700 text-white shadow-xl hover:bg-black text-center flex justify-center items-center"
          >
            Download CV
          </a>
        </div>

        {/* Gambar */}
        <div className="col-span-5 place-self-center mt-10 lg:mt-6 order-1 sm:order-2">
          <div className="rounded-full bg-white w-[220px] h-[220px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center">
            <Image
              src="/images/sticker.png"
              alt="Sticker"
              width={290}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
