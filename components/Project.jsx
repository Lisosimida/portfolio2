import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "NLP Resume Parsing and Job Matching",
        description: "Used NLP techniques to build resume parsing and job matching system",
        image: "/projects/hr.jpg",
        gitUrl: "https://github.com/Lisosimida/parslyst-resume-system",
        bgPosition: "left center",
        bgSize: "80%",
    },
    {
        id: 2,
        title: "Deep Learning CNN for classification of fashion images",
        description: " The dataset consists of approximately 44,000 color images of fashion items categorized under categories including footwear, tops, dresses and accessories.",
        image: "/projects/fashion.jpg",
        gitUrl: "https://github.com/Lisosimida/deep-learning-cnn",
        bgPosition: "center",
    },
    {
        id: 3,
        title: "Stock Broker Simulation",
        description: "Builded a stock broker simulation system to simulate real-time stock trading environment",
        image: "/projects/stock.jpg",
        gitUrl: "https://github.com/sebasdiii/RTS",
        bgPosition: "center",
    },
    {
        id: 4,
        title: "Spam Email Classification using NLP",
        description: "Used NLP techniques to build a spam email classification system",
        image: "/projects/email.jpg",
        gitUrl: "https://github.com/sebasdiii/NLP-Spam-Email-Classification",
        bgPosition: "center",
    },
    {
        id: 5,
        title: "CelcomDigi Home Fibre Bot",
        description: "This chatbot handles user complaints and recommends home fibre plans based on user preferences.",
        image: "/projects/chatbot.jpg",
        gitUrl: "https://github.com/Lisosimida/homefiberbot1",
        bgPosition: "center top",
        bgSize: "80%",
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
                bgPosition={project.bgPosition}
                bgSize={project.bgSize}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;