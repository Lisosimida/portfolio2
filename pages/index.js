import dynamic from 'next/dynamic';
import React from 'react';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Project';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';
import ResumeSection from '../components/ResumeSection';
import { motion } from 'framer-motion';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

const SectionReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <HeroSection />
        <SectionReveal><AchievementsSection /></SectionReveal>
        <SectionReveal><AboutMe /></SectionReveal>
        <SectionReveal><ResumeSection /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><EmailSection /></SectionReveal>
      </main>
      <Footer />
    </div>
  );
}