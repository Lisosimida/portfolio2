import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSection = () => {

    return (
        <main className="py-16 mt-16 md:flex md:shrink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                    <h1 className="font-extrabold">
                        <span className="text-white text-8xl">
                            Hello, I&apos;m{" "}
                            <span className="text-transparent bg-clip-text sm:text-8xl md:text-9xl bg-gradient-to-r from-blue-500 via-skyblue-500 to-teal-500">
                                Li Soh
                            </span>
                        </span>
                        <span className="text-7xl">
                            <TypeWritter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString`<span style="color:#6890B9">Data Analyst</span>`
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .typeString`<span style="color:#87C7A9">Dancer</span>`
                                        .pauseFor(1500)
                                        .deleteAll()
                                        .start();
                                }}
                            ></TypeWritter>
                        </span>
                        <p className ="text-sky-100 mt-8 text-base sm:text-lg md:text-xl mb-6">Slide down to know more about me!</p>
                        <Link
                        href="#projects" 
                        className="px-12 mb-4 inline-block py-3 rounded-full mr-4 border-solid border-2 border-indigo-600 hover:bg-violet-600">
                            <span className="text-xl text-white">Projects</span>
                        </Link>
                        <Link 
                        href="https://drive.google.com/file/d/119v17nQL4_hRRvXndSkcQHbtsIix824U/view?usp=sharing"
                        className ="px-6 inline-block py-3 rounded-full border-2 border-blue-500 hover:bg-blue-400">
                            View My Resume

                        </Link>
                    </h1>
                </motion.div>
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                    <div className="w-[400px] h-[400px] relative z-0">
                         <img
                         src="/Hero-Section.png"
                         alt="hero section"
                         className="transform rounded-full flex relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-3/4"
                         >
                         </img>
                    </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;