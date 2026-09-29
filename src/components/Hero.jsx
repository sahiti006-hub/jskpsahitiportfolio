import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const titlesToRotate = [
  "Agentic AI Engineer",
  "AI & Software Developer",
  "Generative AI Developer",
  "Full-Stack Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Smooth Typewriter Animation Loop
  useEffect(() => {
    const currentTitle = titlesToRotate[titleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titlesToRotate.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-atmospheric-light bg-grid-pattern-light">
      
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 right-10 w-[550px] h-[550px] rounded-full bg-purple-400/10 blur-[130px] animate-pulse-soft" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[450px] h-[450px] rounded-full bg-blue-400/10 blur-[130px] animate-pulse-soft" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Grid: LEFT = PHOTO, RIGHT = CONTENT */}
        <div className="grid lg:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: REAL PROFILE PHOTO CARD */}
          <div className="relative mx-auto lg:mx-0 w-full max-w-md">
            
            {/* Ambient Lavender Aura Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#5B7CFA]/20 via-[#4F24D8]/20 to-[#8B7CF6]/20 rounded-[3rem] blur-2xl animate-pulse-soft" />

            {/* Photo Card Container */}
            <div className="relative bg-white p-3.5 rounded-[2.5rem] shadow-[0_20px_50px_rgba(79,36,216,0.12)] border border-purple-100/90 animate-float">
              
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.8] bg-slate-100 flex items-center justify-center">
                {/* REAL PROFESSIONAL PHOTOGRAPH */}
                <img
                  src="/profile.jpg"
                  alt="JSKP Sahiti - Agentic AI Engineer"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/80 text-[#4F24D8] text-xs font-mono font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#4F24D8]" />
              <span>{personalInfo.focusArea}</span>
            </div>

            {/* Name & Title */}
            <div>
              <p className="text-xs font-mono tracking-[0.25em] text-[#4F5870] uppercase font-semibold mb-2">
                HELLO, I'M
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight leading-tight text-[#11142D]">
                <strong className="font-extrabold text-[#11142D]">JSKP</strong>{' '}
                <span className="font-normal text-[#4F5870]">Sahiti</span>
              </h1>
              
              {/* Animated Title */}
              <div className="mt-3.5 h-10 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl font-bold text-gradient-purple font-heading">
                  {displayText}
                </span>
                <span className="inline-block w-0.5 h-7 bg-[#4F24D8] ml-1.5 animate-pulse rounded-full" />
              </div>
            </div>

            {/* Supporting Statement */}
            <p className="text-lg sm:text-xl font-medium text-[#11142D] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.tagline}
            </p>

            {/* Bio Description */}
            <p className="text-sm sm:text-base text-[#4F5870] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Computer Science undergraduate with a foundation in software development, AI technologies, Generative AI, full-stack applications, and data-driven solutions.
            </p>

            {/* Action Buttons Row: View Projects + Social Icons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              
              {/* Primary Gradient Button */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white font-semibold text-sm shadow-md shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2.5">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-full bg-white border border-purple-100 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 hover:bg-purple-50/60 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-full bg-white border border-purple-100 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 hover:bg-purple-50/60 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-3 rounded-full bg-white border border-purple-100 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 hover:bg-purple-50/60 hover:-translate-y-0.5 transition-all shadow-xs"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
