import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { id: "aboutMe", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ThemeToggle = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted ? (theme === "system" ? systemTheme : theme) : "dark";
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 dark:text-white"
    >
      {mounted ? (isDark ? "Light" : "Dark") : "Theme"}
    </button>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("aboutMe");

  const sectionIds = useMemo(() => NAV_ITEMS.map((x) => x.id), []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const y = window.scrollY + 120;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= y) current = id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = (id) =>
    `rounded-xl px-4 py-2 transition ${
      active === id
        ? "bg-white/10 text-white"
        : "text-slate-200 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav
      className={`sticky top-0 left-0 z-50 w-full border-b border-white/10 transition ${
        scrolled ? "scrolled-header" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-semibold tracking-wide text-white dark:text-white">
          Li Soh
        </a>

        <div className="hidden items-center gap-2 text-sm md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/70 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={linkClass(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;