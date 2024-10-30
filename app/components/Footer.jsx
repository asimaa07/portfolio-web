import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#7AB2B2_100%)]" id="Contact">
      <div className="items-center">
        <h2 className="text-2xl sm:text-5xl text-center font-bold text-gray-700 mb-4">{`I'd Love To Hear Good News From You,`}</h2>
        <h2 className="text-3xl sm:text-5xl text-center font-bold bg-gradient-to-l from-[#CBDCEB] to-[#133E87] text-transparent bg-clip-text mb-4">Let's Work Together!</h2>
        
        <div className="flex items-center space-x-2 sm:pt-6 justify-center">
          <EnvelopeIcon className="h-5 w-5 text-gray-600" />
          <p className="text-center font-medium sm:text-2xl">Asmasadiah91@gmail.com</p>
        </div>

        <a
          href="mailto:asmasadiah91@gmail.com"
          className="mt-6 p-2 rounded-full w-[200px] bg-[#608BC1] text-white shadow-xl hover:bg-[#133E87] text-center font-semibold block mx-auto"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Footer;
