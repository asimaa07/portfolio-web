import React from 'react';

const AboutMe = () => {
  return (
    <div className="relative bg-white py-12 w-full overflow-hidden" id="AboutMe">
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      {/* Gradient Circles */}
      <div className="absolute top-10 left-[-50px] h-64 w-64 bg-gradient-to-r from-[#F3F3E0] to-[#B3E2A7] rounded-full opacity-30 z-0 blur-xl"></div>
      <div className="absolute bottom-0 right-[-50px] h-64 w-64 bg-gradient-to-r from-[#F3F3E0] to-[#608BC1] rounded-full opacity-30 z-0 blur-xl"></div>

      <div className="relative max-w-4xl mx-auto bg-white shadow-custom rounded-lg p-8 z-10">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-[#608BC1] to-[#133E87] text-transparent bg-clip-text mb-4 text-center sm:text-left">About Me</h2>
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="rounded-full shadow-md h-40 w-40 object-cover"
            />
          </div>
          {/* Description */}
          <div className="md:w-2/3 md:pl-8">
            <p className="text-gray-600 text-lg mb-4 font-montserrat">
              Hi, I'm <span className="font-semibold text-gray-800">Asma</span>. 
              I'm a passionate web developer with a love for crafting beautiful, user-friendly websites. 
              With a strong foundation in front-end technologies like React and Tailwind CSS, 
              I enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="text-gray-600 text-lg">
              When I'm not coding, I love exploring new technologies, 
              learning about design trends, and collaborating with other developers.
            </p>
          </div>
        </div>
        {/* Skills */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h3>
          <ul className="flex flex-wrap">
            <li className="bg-[#8EACCD] text-white px-4 py-2 rounded-full mr-2 mb-2 font-medium">React</li>
            <li className="bg-[#7AB2B2] text-white px-4 py-2 rounded-full mr-2 mb-2 font-medium">Tailwind CSS</li>
            <li className="bg-[#D2E0FB] text-black px-4 py-2 rounded-full mr-2 mb-2 font-medium">JavaScript</li>
            <li className="bg-[#8EACCD] text-white px-4 py-2 rounded-full mr-2 mb-2 font-medium">HTML & CSS</li>
            <li className="bg-[#8EACCD] text-white px-4 py-2 rounded-full mr-2 mb-2 font-medium">UI/UX Design</li>
            <li className="bg-[#7AB2B2] text-white px-4 py-2 rounded-full mr-2 mb-2 font-medium">Flutter</li>
            <li className="bg-[#D2E0FB] text-black px-4 py-2 rounded-full mr-2 mb-2 font-medium">Python</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
