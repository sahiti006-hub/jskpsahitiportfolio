import React from 'react';
import { Sparkles, Network, Code, Workflow, Bot, GraduationCap, Layers, Globe, ArrowRight } from 'lucide-react';
import { whatIBuildData } from '../data/portfolioData';

const solutionIcons = {
  Sparkles,
  Network,
  Code,
  Workflow,
  Bot,
  GraduationCap,
  Layers,
  Globe
};

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="relative py-24 sm:py-32 bg-atmospheric-light bg-grid-pattern-light border-t border-purple-100/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              WHAT I BUILD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            From ideas to practical software solutions.
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            Combining AI, software development and modern technologies to turn ideas into useful applications.
          </p>
        </div>

        {/* What I Build Solution Grid (4 cols desktop, 2 tablet, 1 mobile) */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIBuildData.map((item, idx) => {
            const Icon = solutionIcons[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-card-light p-6 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-purple-100/80 border border-purple-200 text-[#4F24D8] w-fit mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-[#11142D] text-base mb-2 group-hover:text-[#4F24D8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4F5870] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-[#4F24D8]">
                  <span>Solution Type</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
