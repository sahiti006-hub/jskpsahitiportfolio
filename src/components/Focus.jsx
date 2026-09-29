import React from 'react';
import { Network, BrainCircuit, Code, Sparkles, Workflow, Cpu, ShieldCheck } from 'lucide-react';
import { focusCardsData } from '../data/portfolioData';

const pillarIcons = {
  "focus-1": Network,
  "focus-2": BrainCircuit,
  "focus-3": Code,
  "focus-4": Sparkles,
  "focus-5": Workflow,
  "focus-6": Cpu
};

export default function Focus() {
  return (
    <section id="focus" className="relative py-24 sm:py-32 bg-atmospheric-light">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              MY FOCUS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            AI & Software Development
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            Exploring practical applications of Agentic AI, Generative AI and full-stack development to build useful software solutions.
          </p>
        </div>

        {/* 6 Focus Cards Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusCardsData.map((pillar) => {
            const Icon = pillarIcons[pillar.id] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="glass-card-light p-7 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#5B7CFA] to-[#4F24D8] text-white shadow-md shadow-purple-500/20 mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#11142D] font-heading mb-2.5 group-hover:text-[#4F24D8] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4F5870] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between text-xs font-mono text-[#4F24D8]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Focus Area
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
