import React from 'react';
import { Card, CardContent } from './ui/card';
import { Trophy } from 'lucide-react';

const Home = () => {
  return (
    <div className="px-4 py-6 sm:px-6 md:px-10 bg-white text-gray-800">
      <header className="mb-6 pt-2">
        <h2 className="text-3xl sm:text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
          Hi, I'm Gyanesh Kumar 👋
        </h2>
      </header>

      <section className="mb-8 text-base leading-relaxed text-gray-600">
        <p>
          B.Tech CSE Graduated passionate about software development, web technologies, and backend systems.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Competitive Programming Card */}
        <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-5 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-zinc-800">
          <CardContent className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
              <span>🚀</span> Competitive Programming
            </h2>
            <ul className="list-disc pl-5 text-sm text-zinc-700 dark:text-zinc-300 space-y-1">
              <li>LeetCode: <span className="font-medium text-indigo-600 dark:text-indigo-400">670+</span> problems solved</li>
              <li>Code360: <span className="font-medium text-indigo-600 dark:text-indigo-400">400+</span> problems solved</li>
              <li>Leetcode Contest Rating: <span className="font-medium text-indigo-600 dark:text-indigo-400">1567</span></li>
              <li>Continuously improving my DSA skills with an emphasis on optimized problem-solving.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Tech Stack Card */}
        <Card className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-4 py-5 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-zinc-800">
          <CardContent>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🛠️</span> Tech Stack
            </h2>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">☕ Java</li>
              <li className="flex items-center gap-2">💻 C++</li>
              <li className="flex items-center gap-2">✨ JavaScript</li>
              <li className="flex items-center gap-2">⚛️ React.js</li>
              <li className="flex items-center gap-2">🌐 Node.js</li>
              <li className="flex items-center gap-2">🎨 Tailwind CSS</li>
              <li className="flex items-center gap-2">🧩 Bootstrap</li>
              <li className="flex items-center gap-2">🗃️ MySQL / PostgreSQL</li>
              <li className="flex items-center gap-2">🍃 MongoDB</li>
              <li className="flex items-center gap-2">🔧 Git / GitHub</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* GitHub Highlights Section */}
      <Card className="px-4 py-5 mt-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-zinc-800">
        <CardContent className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5" /> GitHub Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            <img
                src="https://leetcard.jacoblin.cool/gyaneshkr?theme=dark&ext=contest"
                alt="Leetcode Stats"
                className="h-full w-full object-contain"
            />
            <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=Gyaneshkr5009&theme=highcontrast"
                alt="GitHub Streak"
                className="h-full w-full object-contain"
            />
            <img
            src="https://github-profile-trophy.vercel.app/?username=Gyaneshkr5009&theme=radical&no-frame=false&no-bg=true&margin-w=4"
            alt="GitHub Trophies"
            className="w-full object-contain bg-[#0D1117]"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
