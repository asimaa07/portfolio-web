import React from 'react';

const Project = () => {
  const projectData = [
    {
      title: 'DeliCook',
      description:
        'DeliCook is a web-based recipe platform that provides a wide selection of recipes from various cuisines.',
      imageUrl: '/images/delicook.png',
      link: 'https://github.com/asimaa07/Recipeweb',
      demoLink: 'https://www.linkedin.com/feed/update/urn:li:activity:7270694047709573120/', // Tambahkan properti demoLink
      techStack: ['Typescript', 'React.js', 'Laravel', 'Filament', 'MySQL'],
    },
    {
      title: 'KawanBantu',
      description:
        'KawanBantu is a Software-as-a-Service (SaaS) designed for nonprofits, enabling individuals and communities to easily, quickly, and securely create and manage fundraising campaigns on their own platform.',
      imageUrl: '/images/kbt.png',
      link: 'https://www.kawanbantu.com/',
      techStack: ['Typescript', 'Next.Js', 'Tailwind'],
    },
    {
      title: 'BioVisa Indonesia',
      description:
        'A mobile application designed for Hajj pilgrims, allowing users to convert MRZ (Machine-Readable Zone) data from passport photos into editable text.',
      imageUrl: '/images/biovisa.png',
      link: '#',
      techStack: ['Flutter', 'Python', 'Node.Js'],
    },
  ];

  return (
    <div className="py-12 px-6 font-montserrat" id="Project">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-[#608BC1] to-[#133E87] text-transparent bg-clip-text mb-8 text-center">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-[#133E87] mb-4">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
