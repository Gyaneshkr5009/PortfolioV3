import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import React from "react";

const projects = [
  {
    title: "Bank Management System",
    category: "web",
    link: "https://github.com/Gyaneshkr5009/Bank_Management_System/blob/main/screenshots/login.png?raw=true",
  },
  {
    title: "Moto-Hub",
    category: "webapps",
    link: "https://revnation.vercel.app/",
  },
  {
    title: "My Personal Blog",
    category: "webapps",
    link: "https://gyaneshkr-blog-site.vercel.app/",
  },
  {
    title: "Restro",
    category: "webapps",
    link: "https://restro-nine-zeta.vercel.app/",
  },
  {
    title: "portfolioV2",
    category: "web",
    link: "https://gyaneshkr5009.github.io/portfolio_v2/",
  },
  {
    title: "Password Generator",
    category: "webapps",
    link: "https://password-generator-murex-phi.vercel.app/",
  },
  {
    title: "Currency Converter",
    category: "webapps",
    link: "https://currency-convertor-drab.vercel.app/",
  },
  {
    title: "PetNest",
    category: "web",
    link: "https://gyaneshkr5009.github.io/PetNest/",
  },
  {
    title: "Drum Kit",
    category: "web",
    link: "https://gyaneshkr5009.github.io/Drum-Kit/",
  },
  {
    title: "Mobile Tracker",
    category: "mobile",
    link: "#",
  },
  {
    title: "Login Page",
    category: "web",
    link: "https://gyaneshkr5009.github.io/login-page/",
  },
  {
    title: "Calculator App",
    category: "web",
    link: "https://gyaneshkr5009.github.io/Calculator/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="p-6 md:p-10 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h2 className="text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
            Portfolio
          </h2>
        </header>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap justify-between gap-3 sm:gap-4 mb-8 w-full">
            <TabsTrigger
              value="all"
              className="px-5 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="px-5 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Website
            </TabsTrigger>
            <TabsTrigger
              value="webapps"
              className="px-5 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Web Apps
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="px-5 py-2 rounded-full text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Mobile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProjectGrid projects={projects} />
          </TabsContent>

          <TabsContent value="web">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "web")}
            />
          </TabsContent>

          <TabsContent value="webapps">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "webapps")}
            />
          </TabsContent>

          <TabsContent value="mobile">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "mobile")}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const ProjectGrid = ({ projects }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {projects.map((project, index) => (
      <div
        key={index}
        className="relative group border border-gray-300 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative overflow-hidden">
            <img
              src={`https://api.microlink.io/?url=${project.link}&screenshot=true&embed=screenshot.url`}
              alt={project.title}
              className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">
                View Project 🔗
              </span>
            </div>
          </div>

          <div className="p-5 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
            <p className="text-sm text-gray-600 mt-1 capitalize">
              {project.category} App
            </p>
          </div>
        </a>
      </div>
    ))}
  </div>
);




export default Portfolio;