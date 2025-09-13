"use client"
import React from "react";

const AboutMe = () => {
  return (
    <section
      className="relative w-full flex flex-col items-center py-20 px-4 overflow-hidden bg-white"
      id="AboutMe"
    >
      {/* Decorative 3D Blue Elements */}

      <img
        src="/images/kotak.png"
        className="absolute w-[200px] h-[200px] top-30 left-10 animate-float delay-1000"
      />
      <img
        src="/images/donat.png"
        className="absolute w-[200px] h-[200px] bottom-0 right-10 animate-float delay-1000"
      />
      {/* Main Card */}
      <div className="relative z-10 max-w-5xl w-full border-2 border-[#EAE3D2] rounded-xl flex flex-col md:flex-row bg-white shadow-lg">
        {/* Profile Picture */}
        <div className="md:block md:w-1/3 rounded-t-xl md:rounded-l-xl overflow-hidden">
          <img
            src="/images/idd.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: About Content */}
        <div className="p-8 flex-1 flex flex-col justify-between">
          {/* Title */}
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-4xl font-bold text-[#1C3879] bg-gradient-to-r from-[#607EAA] to-[#1C3879] text-transparent bg-clip-text">
              About Me
            </h2>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-6 shadow-inner border border-[#EAE3D2] mb-4">
            <p className="text-[#1C3879] text-lg font-montserrat mb-2">
              Hi, I'm Asma. I'm a passionate Developer With{" "}
              <span className="font-bold text-[#607EAA]">
                1 years of experience
              </span>{" "}
              in building modern, user-friendly websites and applications. With
              a strong foundation in front-end technologies like React and
              Tailwind CSS, I enjoy turning complex problems into simple,
              elegant solutions. When I'm not coding, I love exploring new
              technologies, learning about design trends, and collaborating with
              other developers.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="bg-[#EAE3D2] text-[#1C3879] px-3 py-1 rounded font-semibold text-xs shadow">
                Creative
              </span>
              <span className="bg-[#607EAA] text-white px-3 py-1 rounded font-semibold text-xs shadow">
                Curious
              </span>
              <span className="bg-[#1C3879] text-white px-3 py-1 rounded font-semibold text-xs shadow">
                Meticulous
              </span>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1C3879] mb-2">
              Skills
            </h3>
            <ul className="flex flex-wrap">
              {[
                { name: "React", style: "bg-[#607EAA] text-white" },
                { name: "Tailwind CSS", style: "bg-[#EAE3D2] text-[#1C3879]" },
                { name: "JavaScript", style: "bg-[#F9F5EB] text-[#1C3879]" },
                { name: "TypeScript", style: "bg-[#EAE3D2] text-[#1C3879]" },
                { name: "HTML & CSS", style: "bg-[#607EAA] text-white" },
                { name: "UI/UX Design", style: "bg-[#EAE3D2] text-[#1C3879]" },
                { name: "Flutter", style: "bg-[#607EAA] text-white" },
                { name: "Python", style: "bg-[#F9F5EB] text-[#1C3879]" },
                { name: "Git", style: "bg-[#EAE3D2] text-[#1C3879]" },
              ].map((skill, idx) => (
                <li
                  key={idx}
                  className={`${skill.style} px-4 py-2 rounded-full mr-2 mb-2 font-medium`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
