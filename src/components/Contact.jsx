import React, { useState } from 'react';
import { Mail, ExternalLink, Copy, Check, Briefcase } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-atmospheric-light">
      
      {/* Background Decorative Blur */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-purple-200/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              Contact & Opportunities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            Let's Build Something Meaningful
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            Reach out directly for software engineering roles, Agentic AI development opportunities, internships, or technical collaborations.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Contact Cards (Email, GitHub, LinkedIn) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Email Card */}
            <div className="glass-card-light p-6 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-purple-100 text-[#4F24D8] border border-purple-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-[#4F5870] uppercase tracking-wider font-bold">EMAIL ADDRESS</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-[#11142D] hover:text-[#4F24D8] transition-colors font-mono"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-white border border-purple-200 text-[#4F5870] hover:text-[#4F24D8] hover:border-purple-300 transition-all shrink-0 shadow-xs"
                  title="Copy Email Address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-light p-6 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all group flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-100 text-[#5B7CFA] border border-blue-200 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#4F5870] uppercase tracking-wider font-bold">GITHUB PROFILE</p>
                  <span className="text-sm sm:text-base font-bold text-[#11142D] group-hover:text-[#4F24D8] transition-colors font-mono">
                    github.com/sahiti006-hub
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-purple-200 text-[#4F5870] group-hover:text-[#4F24D8] group-hover:border-purple-300 transition-all shrink-0 shadow-xs">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card-light p-6 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all group flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-purple-100 text-purple-700 border border-purple-200 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#4F5870] uppercase tracking-wider font-bold">LINKEDIN PROFILE</p>
                  <span className="text-sm sm:text-base font-bold text-[#11142D] group-hover:text-[#4F24D8] transition-colors font-mono">
                    linkedin.com/in/jskp-sahiti
                  </span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-purple-200 text-[#4F5870] group-hover:text-[#4F24D8] group-hover:border-purple-300 transition-all shrink-0 shadow-xs">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

          </div>

          {/* Right Side: WORK STATUS Panel */}
          <div className="lg:col-span-6">
            <div className="glass-panel-light p-8 rounded-3xl border border-purple-100 shadow-xl h-full flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30">
              
              <div className="space-y-6">
                
                {/* Header & Status Indicator */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#4F24D8]" />
                    <h3 className="text-xl font-extrabold text-[#11142D] font-heading">
                      WORK STATUS
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    Available for Opportunities
                  </div>
                </div>

                {/* Statement */}
                <p className="text-[#4F5870] text-base leading-relaxed font-normal">
                  {personalInfo.workStatusStatement}
                </p>

                {/* Focused Technologies & Domains */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#4F24D8] font-bold mb-3">
                    CURRENTLY FOCUSED ON
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {personalInfo.currentlyFocusedOn.map((focusItem, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-white border border-purple-100 text-xs font-mono text-[#4F24D8] font-bold flex items-center gap-2.5 shadow-xs"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#4F24D8]" />
                        <span>{focusItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Direct Contact Button */}
              <div className="mt-8 pt-6 border-t border-purple-100 flex items-center justify-end">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white font-semibold text-xs shadow-md shadow-purple-500/20 hover:scale-105 transition-all"
                >
                  Send Email Directly
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
