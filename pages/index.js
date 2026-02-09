import dynamic from 'next/dynamic';
import React from 'react';
import Head from 'next/head';
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
    <>
      <Head>
        <title>Li Soh - AI Engineer Portfolio</title>
        <meta name="description" content="AI Engineer specializing in LLM, RAG, NLP applications. Building practical AI systems end-to-end with Python, Java, and modern web technologies." />
        <meta name="keywords" content="AI Engineer, LLM, RAG, NLP, Python, Java, Data Analytics, Machine Learning" />
        <meta name="author" content="Li Soh" />
        
        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content="Li Soh - AI Engineer Portfolio" />
        <meta property="og:description" content="AI Engineer specializing in LLM, RAG, NLP applications. Building practical AI systems end-to-end." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourportfolio.com" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Li Soh - AI Engineer Portfolio" />
        <meta name="twitter:description" content="AI Engineer specializing in LLM, RAG, NLP applications." />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourportfolio.com" />
      </Head>
      
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
    </>
  );
}