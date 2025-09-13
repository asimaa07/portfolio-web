"use client";
import React, { useState } from "react";

const projectData = [
  {
    title: "Koperasi Desa Merah Putih",
    description:
      "Koperasi Desa Merah Putih is a community-based cooperative platform that aims to empower local farmers and promote sustainable agriculture.",
    imageUrl: "/images/koperasi.png",
    demoLink: "https://koperasi.berasumkm.id",
    techStack: ["Typescript", "React.js", "Tailwind"],
  },
  {
    title: "PaDi UMKM",
    description:
      "PaDi UMKM is a digital platform that connects local MSMEs with customers, providing a marketplace for products and services.",
    imageUrl: "/images/padi.png",
    demoLink: "https://padi.umkm.id",
    techStack: ["Typescript", "React.js", "Tailwind"],
  },
  {
    title: "DeliCook",
    description:
      "DeliCook is a web-based recipe platform that provides a wide selection of recipes from various cuisines.",
    imageUrl: "/images/delicook.png",
    link: "https://github.com/asimaa07/Recipeweb",
    demoLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7270694047709573120/",
    techStack: ["Typescript", "React.js", "Laravel", "Filament", "MySQL"],
  },
  {
    title: "KawanBantu",
    description:
      "KawanBantu is a SaaS for nonprofits, enabling easy and secure fundraising campaign management.",
    imageUrl: "/images/kbt.png",
    demoLink: "https://www.kawanbantu.com/",
    techStack: ["Typescript", "Next.Js", "Tailwind"],
  },
  {
    title: "BioVisa Indonesia",
    description:
      "A mobile app for Hajj pilgrims to convert MRZ passport photo data into editable text.",
    imageUrl: "/images/biovisa.png",
    link: "#",
    techStack: ["Flutter", "Python", "Node.Js"],
  },
];

const Project = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projectData.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projectData.length - 1 ? 0 : prev + 1));
  };

  const project = projectData[current];

  return (
    <div className="relative py-16 px-4 font-montserrat " id="Project">
      <div className="absolute inset-0 -z-10 bg-[#607EAA] bg-[linear-gradient(to_right,#1C3879_1px,transparent_1px),linear-gradient(to_bottom,#1C3879_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="relative max-w-5xl mx-auto z-10">
        <h2 className="text-4xl font-bold text-white text-transparent bg-clip-text mb-10 text-center">
          Projects
        </h2>
        <div className="relative flex items-center justify-center mx-6 md:mx-0">
        
          <button
            onClick={prevProject}
            className="absolute md:left-0 -left-6 z-10 bg-[#EAE3D2] hover:bg-[#607EAA] hover:text-white text-[#1C3879] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-colors duration-200"
            aria-label="Previous Project"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Project Card */}
          <div
            className="w-full max-w-4xl md:h-[300px] h-[600px] bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 mx-auto"
            style={{ minHeight: 500 }}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto md:p-4 ">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:py-10 md:px-8 flex flex-col justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1C3879] mb-3">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-[#607EAA] mb-4">
                {project.description}
              </p>
              <p className="text-sm md:text-base text-[#1C3879] mb-4">
                <strong>Tech Stack:</strong> {project.techStack.join(", ")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    className="py-2 px-4 text-center rounded-full bg-gradient-to-r from-[#607EAA] to-[#1C3879] text-white font-semibold shadow hover:scale-105 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    className="py-2 px-4 text-center rounded-full bg-gradient-to-r from-[#EAE3D2] to-[#F9F5EB] text-[#1C3879] font-semibold shadow hover:scale-105 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextProject}
            className="absolute md:right-0 -right-6 z-10 bg-[#EAE3D2] hover:bg-[#607EAA] hover:text-white text-[#1C3879] rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg transition-colors duration-200"
            aria-label="Next Project"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {projectData.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-[#1C3879]" : "bg-[#EAE3D2]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
