# Copilot instructions for this repository 🚀

## Quick summary
- This is a **Next.js (pages router)** portfolio site (see `package.json` scripts). It uses **Tailwind CSS** for styling, **next-themes** for dark mode, **framer-motion** for simple animations, and `@heroicons/react` for icons.
- The app is composed of small, focused React components in `components/` that are assembled in `pages/index.js`.

## Why this structure exists (big picture)
- `pages/_app.js` wraps pages with `ThemeProvider` and `Layout` so global UI (theme, navbar, page container) is consistent.
- `Layout.jsx` contains the main grid and includes `Navbar.jsx`. Navigation is section-based (scroll-to anchors) rather than routing.
- Content is mostly static and kept in component-local arrays (e.g., `components/Project.jsx` defines `projectData`). The app is essentially a static site with a small API surface (only `pages/api/hello.js`).

## Developer workflows & commands 🔧
- Run development server: `npm run dev`
- Build for production: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint` (uses `next lint`)
- Node requirement: **Node >= 24.x** (see `package.json` engines)

## Conventions & patterns (be specific) ✅
- Styling: use Tailwind utility classes everywhere. Global CSS primitives in `styles/globals.css` provide helpers like `.surface`, `.bg-grid`, and `.scrolled-header`. For light-theme overrides, follow the `.light .classname { ... }` pattern already used in `globals.css`.
- Dark mode: controlled by `next-themes` in `pages/_app.js`. The default theme is `dark`; to add theme-specific styles, use `.light` in `globals.css`.
- Navigation: `components/Navbar.jsx` defines `NAV_ITEMS` (ids: `aboutMe`, `resume`, `projects`, `contact`). A section is considered active when an element with that id exists in the DOM. When adding a section, give it an `id` that matches the navbar item.
- Content-as-data: Many components store displayed content in local arrays — e.g. `TAB_DATA` in `components/AboutMe.jsx` and `projectData` in `components/Project.jsx`. To add items, update those arrays and add images to `public/`.
- External links: use `next/link` and include `target="_blank" rel="noopener noreferrer"` for external resources (see `ProjectCard.jsx` and `EmailSection.jsx`).
- Images: Small icons are imported as SVGs and used with `next/image` (see `EmailSection.jsx`). Project thumbnails are referenced as background images (e.g., `style={{ background: `url(${imgUrl})` }}`). Adding images: drop files into `public/` and reference as `/my-image.png`.
- Animations: `framer-motion` is used for simple entrance/section reveals. When a component uses the `window` or `document`, ensure it runs client-side (e.g., `HeroSection` is dynamically imported with `ssr: false` in `pages/index.js`).

## Files to look at for common tasks 💡
- Add a project: `components/Project.jsx` (update `projectData`) + add image to `public/`.
- Add a new page/section: create a component in `components/`, export default, then add it to `pages/index.js` and (optionally) to `NAV_ITEMS` in `Navbar.jsx`.
- Update navigation behavior: `components/Navbar.jsx` controls scroll detection and active state.
- Theme & global styles: `pages/_app.js` and `styles/globals.css`.

## Build/time / SSR notes ⚠️
- Some components rely on browser globals or want client-only behavior (e.g., animations or window-based scroll detection). Use `useEffect` or `dynamic(..., { ssr: false })` when necessary.
- There are no unit tests in this repo; assume manual/visual verification is the standard for UI changes.

## Dependencies & unused packages to watch 👀
- `resend` and `typescript` are listed in `package.json` but not currently used in the code. If you plan to introduce email handling or types, add/expand related code and configuration (e.g., `tsconfig.json`).

## Safety & style hints for Copilot usage 📝
- Keep edits small and component-scoped. This is a small static site — prefer clarity over clever abstractions.
- Preserve the existing approach to dark/light theme CSS (use `.light` overrides). Don’t change the theme provider behavior unless you update `pages/_app.js`.
- When suggesting code that manipulates the DOM or relies on `window`, prefer `useEffect` and client-only imports to avoid SSR breakage.

---

If anything above is unclear or you want more examples (e.g., a sample change to `components/Project.jsx`), tell me which area to expand and I will iterate. ✅