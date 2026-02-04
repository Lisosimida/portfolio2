import React from "react";
import Link from "next/link";

const ResumeSection = () => {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to AI Engineer opportunities
              </div>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Resume Snapshot
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-200 sm:text-lg">
                NLP + LLM applications with real-world internship delivery. Strong focus on end-to-end systems: data pipelines,
                modeling, evaluation, and product-ready interfaces.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Award</div>
                  <div className="mt-1 text-lg font-semibold text-white">Best Student Project</div>
                  <div className="mt-1 text-sm text-slate-300">APU (FYP)</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Focus</div>
                  <div className="mt-1 text-lg font-semibold text-white">NLP • LLM • RAG</div>
                  <div className="mt-1 text-sm text-slate-300">NER, parsing, matching</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-wider text-slate-400">Strength</div>
                  <div className="mt-1 text-lg font-semibold text-white">Experimentation</div>
                  <div className="mt-1 text-sm text-slate-300">Model comparison & eval</div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-xl">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
                <h3 className="text-lg font-semibold text-white">Flagship Work</h3>

                <div className="mt-4 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-base font-semibold text-white">
                        Resume Parsing & Job Matching (NLP)
                      </div>
                      <div className="text-xs text-slate-300">Python • NLP • ML • Streamlit</div>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
                      <li>End-to-end pipeline: parsing → entity extraction → structured representation → matching</li>
                      <li>Implemented NER to extract skills, education, and experience</li>
                      <li>Trained and evaluated multiple ML approaches with systematic experiments</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-base font-semibold text-white">Home Fibre Chatbot (RAG)</div>
                      <div className="text-xs text-slate-300">LLM • LangChain • RAG</div>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
                      <li>Conversational complaint handling and plan recommendation</li>
                      <li>Retrieval-augmented answers for higher relevance and consistency</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="https://drive.google.com/file/d/18TXsY-gFpmgBx-jva8k7ffbZxOxmSUma/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-slate-100"
                  >
                    View Resume (PDF)
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    See Projects
                  </Link>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-slate-400">
                  Tip: For AI Engineer roles, hiring managers scan for end-to-end delivery, evaluation discipline, and production
                  awareness. This section is designed to make those signals obvious in under 10 seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
