import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Focus from './components/Focus';
import WhatIBuild from './components/WhatIBuild';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-slate-900 font-sans selection:bg-purple-500/20 selection:text-purple-900">
      
      {/* Sticky Light Navigation Bar */}
      <Navbar />

      {/* Main Page Flow */}
      <main>
        {/* 01: Hero */}
        <Hero />

        {/* 02: About Me */}
        <About />

        {/* 03: Skills */}
        <Skills />

        {/* 04: Projects */}
        <Projects />

        {/* 05: Focus */}
        <Focus />

        {/* 06: What I Build */}
        <WhatIBuild />

        {/* 07: Achievements & Leadership */}
        <Achievements />

        {/* 08: Contact & Work Status */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
