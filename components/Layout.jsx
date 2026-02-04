import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
      </div>

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto w-full max-w-6xl px-6"
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;