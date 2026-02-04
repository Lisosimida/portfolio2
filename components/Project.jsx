import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "NLP Resume Parsing and Job Matching",
        description: "Used NLP techniques to build resume parsing and job matching system",
        image: "/FYP_Resume_Parsing.png",
        gitUrl: "https://github.com/Lisosimida/FYP_Final",
    },
    {
        id: 2,
        title: "Mars Space Exploration",
        description: "Used ASP.NET MVC to build web application",
        image: "/Mars_Space.png",
        gitUrl: "https://github.com/Lisosimida/Mars_Space_Exploration",
    },
    {
        id: 3,
        title: "National Science Challenge",
        description: "Used NLP techniques to build classification model",
        image: "/National Science Challenge.png",
        gitUrl: "https://github.com/Lisosimida/AI_Final",
    },
    {
        id: 4,
        title: "Kulim City Infrastructure Assessment",
        description: "Used QGIS to build map and analysis",
        image: "/Kulim_City.png",
        gitUrl: "https://github.com/Lisosimida/DA_Assignment",
    },
    {
        id: 5,
        title: "Clean My Home",
        description: "Used Xamarin to build mobile application",
        image: "/CleanMyHome.png",
        gitUrl: "https://github.com/Lisosimida/CleanMyHome",
    },
];

const Project = () => {
  return (
    <section id="projects" className="py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>

        <div className="relative">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Selected Projects
            </h2>
            <p className="mt-2 max-w-2xl text-slate-200">
              AI-focused builds with clear problem framing, evaluation, and end-to-end implementation.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;