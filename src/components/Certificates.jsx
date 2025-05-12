import React, {useState} from 'react'
import {
    GA4,
    Naukri,
    Infosys,
    Intern,
    viksit,
    Leetcode
} from '../assets/Index.jsx'

const certificateData = [
  {
    href: 'https://www.linkedin.com/posts/gyanesh-kumar-a73114213_glad-to-got-a-certificate-from-google-on-activity-7093613133319028736-aTig/?utm_source=share&utm_medium=member_desktop',
    img: GA4,
    alt: 'Google Analytics 4',
  },
  {
    href: 'https://www.linkedin.com/posts/gyanesh-kumar-a73114213_capital-marketing-activity-7110304613970378752-iKic/?utm_source=share&utm_medium=member_desktop',
    img: Infosys,
    alt: 'Infosys',
  },
  {
    href: 'https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/670812725abe131f423ebf91?utm_source=certificate&utm_medium=share&utm_campaign=670812725abe131f423ebf91',
    img: Naukri,
    alt: 'Coding Ninjas',
  },
  {
    href: 'https://www.naukri.com/campus/certificates/young_turks_round_1_achievement/v0/670812725abe131f423ebf91?utm_source=certificate&utm_medium=share&utm_campaign=670812725abe131f423ebf91',
    img: Intern,
    alt: 'Intern',
  },
  {
    href: 'https://www.linkedin.com/posts/gyanesh-kumar-a73114213_activity-7153127819491819520-F42-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXxrfcBjq-grZbD_eE1caOTv0gC-JCNtgo',
    img: viksit,
    alt: 'Vikasit bharat',
  },
  {
    href: 'https://www.linkedin.com/posts/gyanesh-kumar-a73114213_coding-dsa-datastructures-activity-7278412867924598784-ca0L?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXxrfcBjq-grZbD_eE1caOTv0gC-JCNtgo',
    img: Leetcode,
    alt: 'leetcode',
  },
];

const Certificates = () => {
  return (
    <section className='p-6 md:p-10 bg-white text-gray-800'>
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
          Certificates
        </h2>
      </header>
      {/* Certificate List */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateData.map((certificate, index) => (
            <a
              key={index}
              href={certificate.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 "
            >
              <img
                src={certificate.img}
                alt={certificate.alt}
                className="w-full h-40 object-cover bg-gray-50 transition-transform duration-300 group-hover:scale-110"/>
              <div className="text-center py-2 font-medium text-gray-700">
                {certificate.alt}
              </div>
            </a>
          ))}
        </div>
      </section>

    </section>
  )
}

export default Certificates