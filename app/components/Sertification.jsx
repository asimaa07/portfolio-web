"use client";
import React, { useState } from 'react';

const Sertification = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State untuk gambar sertifikat
  const [isModalOpen, setIsModalOpen] = useState(false);    // State untuk status modal

  const projectData = [
    {
      title: 'Dicoding',
      description: 'Belajar Membuat Aplikasi Web dengan React',
      imageUrl: '/images/sertif6.png',
      link: '#',
    },
    {
      title: 'Dicoding',
      description: 'Belajar Dasar Pemrograman Web',
      imageUrl: '/images/sertif4.png',
      link: '#',
    },
    {
      title: 'Dicoding ',
      description: 'Belajar Dasar Pemrograman Javascript',
      imageUrl: '/images/sertif5.png',
      link: '#',
    },
    {
      title: 'Cisco Networking Academy',
      description: 'CCNAv7: Introduction to Networks',
      imageUrl: '/images/sertif1.png', // URL untuk gambar sertifikat
      link: '#',
    },
    {
      title: 'Oracle Academy',
      description: 'Artificial Intelligence with Machine Learning in Java',
      imageUrl: '/images/sertif2.png',
      link: '#',
    },
    {
      title: 'Cisco Networking Academy',
      description: 'Introduction to Cybersecurity',
      imageUrl: '/images/sertif3.png',
      link: '#',
    },
  ];

  // Fungsi untuk membuka modal dan menampilkan gambar sertifikat
  const handleOpenModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="py-12 px-6 font-montserrat">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold bg-gradient-to-t from-[#608BC1] to-[#133E87] text-transparent bg-clip-text mb-8 text-center">
          Certification
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center">
          {projectData.map((project, index) => (
            <div key={index} className="bg-gradient-to-tr from-[#F3F3E0] to-[#CBDCEB] shadow-lg rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#133E87] mb-2">{project.title}</h3>
                <p className="text-[#133E87] mb-4">{project.description}</p>
                <button
                  onClick={() => handleOpenModal(project.imageUrl)}
                  className="mt-4 py-2 px-4 bg-[#133E87] text-white rounded-full shadow-md hover:bg-[#0e2b5e] transition duration-200"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
            {selectedImage && (
              <img src={selectedImage} alt="Certificate" className="w-full h-auto rounded-lg" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sertification;
