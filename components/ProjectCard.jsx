import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20">
      <div className="pointer-events-none absolute -inset-20 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div
        className="relative h-52 bg-center bg-no-repeat"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        aria-label={`${title} preview`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/0" />

        <div className="absolute inset-0 hidden items-center justify-center md:flex">
          <Link
            href={gitUrl}
            className="relative inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-3 opacity-0 backdrop-blur transition group-hover:opacity-100 hover:bg-black/55"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} on GitHub`}
          >
            <CodeBracketIcon className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>

      <div className="relative p-5 text-white">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>

        <div className="mt-4 md:hidden">
          <Link
            href={gitUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-5 w-5" />
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;