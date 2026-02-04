import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
    {
        title: "AI / ML",
        id: "ai-ml",
        content: (
          <ul className="list-disc pl-4 text-slate-200">
                <li>NLP, NER, LLMs, RAG</li>
                <li>CNNs, supervised learning, model evaluation</li>
                <li>Feature engineering and experimentation</li>
          </ul>
        ),
    },
    {
        title: "Engineering",
        id: "engineering",
        content: (
          <ul className="list-disc pl-4 text-slate-200">
                <li>Python, Java, SQL, R</li>
                <li>Streamlit, LangChain, Ollama</li>
                <li>AWS, Microsoft Azure, Git</li>
          </ul>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
          <ul className="list-disc pl-4 text-slate-200">
            <li>AI Engineer Intern @ CelcomDigi (LLM chatbots, RAG, PDF Q&amp;A)</li>
            <li>Data Analyst Engineer @ Tencent Games (data workflows, case analysis)</li>
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-4 text-slate-200">
                <li>APU — BSc (Hons) Computer Science (Data Analytics), First Class</li>
                <li>Vice Chancellor’s List (2022/2023)</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("ai-ml");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="py-20" id="aboutMe">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10">
                <div className="pointer-events-none absolute inset-0 opacity-80">
                    <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
                </div>

                <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <div>
                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                            <img
                                src="/AboutMe.png"
                                alt="Li Soh"
                                className="h-full w-full object-cover"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                        </div>
                    </div>

                    <div className="text-left flex flex-col">
                        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200">
                            <span className="h-2 w-2 rounded-full bg-sky-400" />
                            AI Engineer profile
                        </div>

                        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">About Me</h2>

                        <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
                            I&apos;m an early-career engineer focused on building practical AI systems. My experience includes NLP pipelines,
                            named entity recognition, resume parsing and job matching, and LLM applications such as retrieval-augmented
                            generation (RAG). I enjoy designing end-to-end solutions—from data processing and modeling to evaluation and
                            deployment.
                        </p>

                        <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                            I&apos;ve shipped real-world chatbot work during my internship at CelcomDigi (LLM + RAG, internal assistance, PDF
                            querying) and I&apos;m currently working as a Data Analyst Engineer at Tencent Games where I execute data workflows
                            and support policy-driven case analysis.
                        </p>

                        <div className="mt-8 flex flex-row flex-wrap gap-2">
                            <TabButton 
                            selectTab={() => handleTabChange("ai-ml")}
                            active= {tab === "ai-ml"}
                            >
                                {" "}
                                AI / ML{" "}
                            </TabButton>

                            <TabButton 
                            selectTab={() => handleTabChange("engineering")}
                            active= {tab === "engineering"}
                            >
                                {" "}
                                Engineering{" "}
                            </TabButton>

                            <TabButton 
                            selectTab={() => handleTabChange("experience")}
                            active= {tab === "experience"}
                            >
                                {" "}
                                Experience{" "}
                            </TabButton>

                            <TabButton 
                            selectTab={() => handleTabChange("education")}
                            active= {tab === "education"}
                            >
                                {" "}
                                Education{" "}
                            </TabButton>
                            
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 text-slate-200">
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default AboutMe;