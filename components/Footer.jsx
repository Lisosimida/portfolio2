import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-10 text-slate-400 sm:flex-row">
        <span className="text-sm">Li Soh</span>
        <p className="text-sm">Copyright © {new Date().getFullYear()} • All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;