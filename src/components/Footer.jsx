import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-50 border-t border-purple-100 text-[#4F5870] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-100">
          
          {/* Brand Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <a href="#top" className="font-heading text-xl tracking-tight leading-none inline-block text-[#11142D]">
              <strong className="font-extrabold text-[#11142D]">JSKP</strong>{' '}
              <span className="font-normal text-[#4F5870]">Sahiti</span>
            </a>
            <p className="text-xs text-[#4F5870] max-w-sm font-normal">
              AI & Software Developer
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#4F5870]">
            <a href="#about" className="hover:text-[#4F24D8] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#4F24D8] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#4F24D8] transition-colors">Projects</a>
            <a href="#focus" className="hover:text-[#4F24D8] transition-colors">Focus</a>
            <a href="#achievements" className="hover:text-[#4F24D8] transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-[#4F24D8] transition-colors">Contact</a>
          </div>

          {/* Clickable Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white border border-purple-200 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 transition-all shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white border border-purple-200 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 transition-all shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white border border-purple-200 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 transition-all shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white shadow-md hover:scale-105 transition-transform"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} JSKP Sahiti. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
