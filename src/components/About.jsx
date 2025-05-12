import React from 'react';
import { Network, PencilRuler, FileJson } from 'lucide-react';
import {
  codeForces,
  leetCode,
  codingNinjas,
  github,
  linkedIn,
  gfg,
} from '../assets/Index.jsx';

const services = [
  {
    title: 'Data Structures and Algorithms',
    text: 'Regularly practicing on LeetCode & Coding Ninjas. I document my learning on GitHub and aim to reach expert-level proficiency.',
    icon: <Network className="w-10 h-10" />,
  },
  {
    title: 'Web Design',
    text: 'I craft modern, high-quality web interfaces with a clean and responsive UI/UX approach.',
    icon: <PencilRuler className="w-10 h-10" />,
  },
  {
    title: 'Web Development',
    text: 'Building scalable full-stack applications using React.js, Node.js, and PostgreSQL.',
    icon: <FileJson className="w-10 h-10" />,
  },
];

const socialLinks = [
  {
    href: 'https://leetcode.com/u/gyaneshkr/',
    img: leetCode,
    alt: 'LeetCode',
  },
  {
    href: 'https://codeforces.com/profile/gyaneshkr',
    img: codeForces,
    alt: 'CodeForces',
  },
  {
    href: 'https://www.naukri.com/code360/profile/gyaneshkr2002',
    img: codingNinjas,
    alt: 'Coding Ninjas',
  },
  {
    href: 'https://github.com/Gyaneshkr5009',
    img: github,
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/feed/',
    img: linkedIn,
    alt: 'LinkedIn',
  },
  {
    href: 'https://www.geeksforgeeks.org/user/gyanesn0kq/',
    img: gfg,
    alt: 'GeeksforGeeks',
  },
];

const About = () => {
  return (
    <section className="p-6 md:p-10 bg-white text-gray-800">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
          About Me
        </h2>
      </header>

      {/* About Text */}
      <section className="mb-12 text-lg leading-relaxed text-gray-600">
        <p>
          I'm a Software Engineer skilled in Java, DSA (900+ problems solved), and full-stack web development using technologies like React.js, Node.js, and PostgreSQL. I've built scalable applications, developed a social media platform, and contributed to real-world projects. I'm passionate about solving complex problems and building efficient systems.
        </p>
      </section>

      {/* Services */}
      <section className="mb-16">
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-200 inline-block mb-6">
          What I'm Doing
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white border border-gray-200 shadow-md p-6 rounded-2xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300 hover:bg-indigo-50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-indigo-600">{service.icon}</div>
                <h4 className="text-xl font-semibold">{service.title}</h4>
              </div>
              <p className="text-gray-600">{service.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Other Links */}
      <section>
        <h3 className="text-2xl font-semibold border-b-2 border-indigo-200 inline-block mb-4">
          Other Links
        </h3>
        <div className="flex items-center gap-10 overflow-x-auto py-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.alt}
              className="flex-shrink-0 hover:scale-110 transition-transform duration-200"
            >
              <img
                src={link.img}
                alt={link.alt}
                className="w-16 h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </section>
    </section>
  );
};

export default About;
