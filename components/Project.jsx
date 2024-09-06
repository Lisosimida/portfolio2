import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    {
        id: 1,
        title: "Staff Management System",
        description: "This is a project.",
        image: "/projects/cprogramming.png",
        gitUrl: "https://github.com/Lisosimida/Staff-Management-System"

    },
    {
        id: 2,
        title: "Home Fibre Chatbot",
        description: "Developed a chatbot that handles user complaints and recommends home fibre plans based on user preferences.",
        image: "/projects/hfbpic.png",
        gitUrl: "https://github.com/Lisosimida/homefiberbot1"
    },
    // {
    //     id: 3,
    //     title: "FundChat",
    //     description: "This is a project for APUBCC Sparkathon & Solana Hyperdrive.",
    //     image: "/projects/FundChat.png",
    //     gitUrl: "https://github.com/cheongyeechian/fundchat"
    // },
    // {
    //     id: 4,
    //     title: "Megamask",
    //     description: "This is a project for ETH Online.",
    //     image: "/projects/megamask.png",
    //     gitUrl: "https://github.com/megamask"
    // }, {
    //     id: 5,
    //     title: "zkJom",
    //     description: "This is a project fro ETHKL.",
    //     image: "/projects/zkJom.png",
    //     gitUrl: "https://github.com/trlau/zkJ0M"
    // }, {
    //     id: 6,
    //     title: "Attest Me",
    //     description: "This is a project for ETH Global Superhack.",
    //     image: "/projects/attestme.png",
    //     gitUrl: "https://github.com/0xBenjamintan/attestMe"
    // }, 

];

const Project = () => {
    return (
        <div id="projects">
            <div className="text-4xl font-semibold mb-8">My Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 md:gap-12 h-full">
                {projectData.map((project) => (
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                    />))}
            </div>
        </div>
    );
};

export default Project;