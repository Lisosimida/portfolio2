import React from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import InstagramIcon from "../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";
import GmailIcon from "../public/gmail-icon.svg";

const EmailSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Let&apos;s build something useful
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Let&apos;s Connect
            </h2>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              I&apos;m currently open to AI Engineer opportunities. If you&apos;re hiring, collaborating, or want to chat about LLM/RAG/NLP
              work, I&apos;ll reply as soon as I can.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="mailto:lisoh03@gmail.com"
                className="btn btn-contrast"
              >
                Email me
              </Link>
              <Link
                href="#projects"
                className="btn btn-ghost"
              >
                See Projects
              </Link>
            </div> 
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold text-white">Social</h3>
            <p className="mt-2 text-sm text-slate-300">
              Quick links to my profiles.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="https://github.com/Lisosimida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl social-btn px-4 py-3"
                aria-label="Open GitHub"
              >
                <Image src={GithubIcon} alt="GitHub" width={22} height={22} />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/guan-li-soh-b019a7233/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl social-btn px-4 py-3"
                aria-label="Open LinkedIn"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" width={22} height={22} />
                LinkedIn
              </Link>
              <Link
                href="https://www.instagram.com/lisohlisoh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl social-btn px-4 py-3"
                aria-label="Open Instagram"
              >
                <Image src={InstagramIcon} alt="Instagram" width={22} height={22} />
                Instagram
              </Link>
              <Link
                href="mailto:lisoh03@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl social-btn px-4 py-3"
                aria-label="Send email"
              >
                <Image src={GmailIcon} alt="Email" width={22} height={22} />
                Email
              </Link> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;