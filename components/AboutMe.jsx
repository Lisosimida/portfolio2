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
                    <p className="text-base text-justify lg:text-lg">I am currently pursuing a degree in Cyber Security at APU, where I have been honing my skills in various technologies. I am familiar in frontend development, with expertise in React, Next.js, HTML, CSS, and I&apos;m skilled in creating visually appealing and user-friendly interfaces using Tailwind CSS.
                        Additionally, I&apos;ve ventured into the world of blockchain development, particularly with Solidity, allowing me to build smart contracts for decentralized applications.
                        My passion for technology and problem-solving has led me to actively participate in 11 hackathons this year, where I primarily serve as a Front End Developer. However, I am not limited to frontend tasks and often take on backend responsibilities, demonstrating my versatility and commitment to delivering complete solutions. </p>
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