import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "Hard Skills",
        id: "hard skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python Programming</li>
                <li>Cisco Packet Tracer</li>
                <li>C Programming</li>
                <li>Java</li>
                <li>R studio</li>
                <li>SAS studio</li>
          </ul>
        ),
    },
    {
        title: "Soft Skills",
        id: "soft skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Responsible</li>
                <li>Communication</li>
                <li>Adaptability</li>
                <li>Teamwork</li>
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Waiter</li>
            <li>Service Crew</li>
            <li>Bartender</li>
            <li>Tuition Teacher</li>
            <li>Parcel packer</li>
            <li>Concert Main Dancer</li>
            <li>Flashmob Dancer</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Tsun Jin High School</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("hard skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.png" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">Meet me, a second-year student specializing in computer science with a focus on data analytics at the Asia Pacific University of Technology & Innovation (APU). I embody a mix of responsibility, kindness, and a relentlessly positive mindset that fuels my journey through academia and beyond. Always eager to broaden my horizons, I thrive on the challenges that come with learning new concepts and tackling difficulties head-on. As a student in the dynamic field of computer science, I am constantly honing my skills in data analytics, seeking to make meaningful contributions to the evolving tech landscape.
Beyond the world of algorithms and code, I find passion and joy in dancing. It&apos;s not just a hobby for me; it&apos;s a commitment to shaping a well-rounded individual. Dancing isn&apos;t just about movement; it&apos;s about discipline, creativity, and the pursuit of a healthy lifestyle.
Driven by a genuine interest in helping others, I am not only a student of technology but also a believer in the power of collaboration and community. My positive outlook extends to a passion for contributing to projects that have a positive impact on the world.
If you&apos;re curious to learn more about my journey, skills, and experiences, feel free to explore my resume and projects. I&apos;m always open to connecting with like-minded individuals who share a passion for growth, learning, and making a difference. Let&apos;s dance through the challenges and code our way to a better future! </p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("hard skills")}
                        active= {tab === "hard skills"}
                        >
                            {" "}
                            Hard Skills{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("soft skills")}
                        active= {tab === "soft skills"}
                        >
                            {" "}
                            Soft Skills{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;