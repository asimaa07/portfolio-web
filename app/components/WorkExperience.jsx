import React from 'react';

const WorkExperience = () => {
  const educationData = [
    {
      company: 'KawanBantu',
      position: 'Front End Developer Intern',
      year: '2024',
      description: 'Developing the KawanBantu website and fixing bugs to improve functionality and user experience.',
    },
    {
      company: 'Ministry of Religious Affairs',
      position: 'Mobile Developer Intern',
      year: '2024',
      description: 'Developed a mobile application to detect MRZ data from passport photos, convert it to text, and integrate it with an API for streamlined data processing and verification.',
    },
    {
        company: 'Solusi Digital Coding Academy',
        position: 'Coding Module Author',
        year: '2023',
        description: 'Created teaching modules for children coding classes, focusing on introducing programming concepts using the Lua language.',
      },
  ];

  return (
    <div className="pt-12 px-6 font-montserrat">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-[#608BC1] to-[#133E87] text-transparent bg-clip-text mb-8 text-center">Work Experience</h2>
        
        <div className="relative border-l-4 border-[#7AB2B2] ml-6">
          {educationData.map((education, index) => (
            <div key={index} className="mb-8 ml-8">
              <div className="absolute w-4 h-4 bg-[#7AB2B2] rounded-full -left-6"></div>
              
              <h3 className="text-xl font-semibold text-gray-800">{education.company}</h3>
              <p className="text-gray-600">{education.position} | {education.year}</p>
              <p className="text-gray-500 mt-2">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
