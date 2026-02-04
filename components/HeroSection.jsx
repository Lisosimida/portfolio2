import React from "react";
import TypeWritter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <main id="top" className="pt-24">
      <section className="py-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 opacity-80">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-12 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Building practical AI systems end-to-end
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                Hello, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-teal-300">
                  Li Soh
                </span>
              </h1>

              <div className="mt-3 text-2xl font-semibold text-slate-200 sm:text-3xl">
                <TypeWritter
                  options={{ autoStart: true, loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('<span style="color:#7DD3FC">AI Engineer</span>')
                      .pauseFor(1400)
                      .deleteAll()
                      .typeString('<span style="color:#A5B4FC">LLM / RAG Builder</span>')
                      .pauseFor(1400)
                      .deleteAll()
                      .typeString('<span style="color:#6EE7B7">NLP Engineer</span>')
                      .pauseFor(1400)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                I build AI features that ship: data pipelines, NLP/LLM applications, evaluation, and clean UI. Scroll for a fast
                resume snapshot and selected projects.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#resume"
                  className="btn btn-contrast flex-1"
                >
                  Resume Snapshot
                </Link>
                <Link
                  href="#projects"
                  className="btn btn-ghost flex-1"
                >
                  View Projects
                </Link>
              </div> 
            </motion.div>

            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto w-full max-w-[360px]"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-black/30">
                  <img
                    src="/Hero-Section.png"
                    alt="Li Soh portrait"
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-400">Focus</div>
                    <div className="mt-1 text-sm font-semibold text-white">LLM + RAG</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-400">Stack</div>
                    <div className="mt-1 text-sm font-semibold text-white">Python</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-3 text-center">
                    <div className="text-xs uppercase tracking-wider text-slate-400">Style</div>
                    <div className="mt-1 text-sm font-semibold text-white">Ship fast</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;