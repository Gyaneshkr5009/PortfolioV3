import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Guru Tegh Bahadur Institute of Technology',
    year: '2021 – 2025',
    details: 'CGPA: 8.15 (7th Sem)',
    skills: ['DSA', 'OOPs', 'Computer Networks', 'Operating Systems'],
  },
  {
    degree: '12th - CBSE',
    school: 'Indraprastha Convent School',
    details: 'Percentage: 70%',
    year: '2018 – 2020',
  },
  {
    degree: '10th - CBSE',
    school: 'Indraprastha Sr. Sec. Public School',
    details: 'Percentage: 75%',
    year: '2017 – 2018',
  },
];

const skills = [
  { name: 'Problem Solving (DSA with Java)', level: 'Advanced', percent: 95 },
  { name: 'Java (OOPs, Collections, Concurrency)', level: 'Advanced', percent: 90 },
  { name: 'Frontend Development (React, TailwindCSS)', level: 'Intermediate', percent: 85 },
  { name: 'Backend Basics (Node.js, Express)', level: 'Intermediate', percent: 70 },
  { name: 'Database Design (PostgreSQL, MySQL)', level: 'Intermediate', percent: 70 },
  { name: 'NoSQL & Document Stores (MongoDB)', level: 'Beginner-Intermediate', percent: 65 },
  { name: 'Version Control & Deployment (Git, GitHub, Vercel)', level: 'Intermediate', percent: 75 },
  { name: 'UI Tools & Libraries (ShadCN, Bootstrap)', level: 'Intermediate', percent: 70 },
];


const experience = [
  {
    role: 'Web Development Intern',
    company: 'CodSoft',
    duration: '1 Month',
    description: [
      'Built a personal portfolio website',
      'Developed a mini e-commerce site',
      'Created various mini projects',
    ],
  },
];

const Resume = () => {
  return (
    <section className="p-6 md:p-10 bg-white text-gray-800">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
          Resume
        </h2>
      </header>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Education */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold border-b-2 border-indigo-200 inline-block mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-500" /> Education
          </h3>
          <ul className="space-y-6">
            {education.map((edu, idx) => (
              <li
                key={idx}
                className="bg-white border border-gray-200 shadow-md p-6 rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 hover:bg-indigo-50"
              >
                <h4 className="text-xl font-semibold">{edu.degree}</h4>
                <p className="text-gray-500">{edu.school}</p>
                <p className="text-sm text-gray-400">{edu.year}</p>
                {edu.details && (
                  <p className="text-gray-600 mt-2">{edu.details}</p>
                )}
                {edu.skills && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.skills.map((skill) => (
                      <button
                        key={skill}
                        className="bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-sm hover:bg-indigo-200 transition"
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold border-b-2 border-indigo-200 inline-block mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-500" /> Experience
          </h3>
          <ul className="space-y-6">
            {experience.map((exp, idx) => (
              <li
                key={idx}
                className="bg-white border border-gray-200 shadow-md p-6 rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 hover:bg-indigo-50"
              >
                <h4 className="text-xl font-semibold">{exp.role}</h4>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <ul className="list-disc list-inside mt-3 text-gray-600 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {/* skill bar */}
      <section className="mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-4 border-indigo-500 inline-block pb-2">Skills</h3>
          <ul className="space-y-3">
            {skills.map((skill, index) => (
              <li key={index} className="bg-white p-2 rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="text-lg font-semibold">{skill.name}</h5>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-700 relative"
                    style={{ width: `${skill.percent}%` }}
                  >
                    <span className="absolute right-1 text-xs text-white font-semibold">{skill.percent}%</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Download Resume */}
      <section className="my-12">
        <div className="flex justify-between items-center flex-wrap gap-4">
          {/* Heading */}
          <h3 className="text-2xl font-semibold text-gray-800">My Resume</h3>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Preview Button */}
            <a
              href="https://www.dropbox.com/preview/GyaneshKr_resume.pdf?context=content_suggestions&role=personal"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Preview Resume
            </a>

            {/* Download Button */}
            <a
              href="/GyaneshKr_resume.pdf"
              download
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Resume;
