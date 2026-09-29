import React from 'react';
import { Sparkles, Code2, Layout, Cpu, Database, Brain } from 'lucide-react';
import { skillsCategorizedData } from '../data/portfolioData';

const categoryIcons = {
  "Generative AI & Agentic AI": Sparkles,
  "Programming Languages": Code2,
  "Web Technologies & UI/UX": Layout,
  "Frameworks & AI Tooling": Cpu,
  "Databases & Development Tools": Database,
  "AI & Professional Strengths": Brain
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-atmospheric-light">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/3 left-10 w-96 h-96 rounded-full bg-purple-200/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              MY SKILLS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            Technologies I work with.
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            A practical toolkit spanning AI, software development, web technologies, databases, and modern development tools.
          </p>
        </div>

        {/* Categorized Skills Showcase Grid (3 cols desktop, 2 tablet, 1 mobile) */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategorizedData.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-card-light p-7 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-[#5B7CFA] to-[#4F24D8] text-white shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-[#11142D] text-lg leading-snug group-hover:text-[#4F24D8] transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* One-Line Description */}
                  <p className="text-xs text-[#4F5870] leading-relaxed mb-5 font-normal">
                    {group.description}
                  </p>

                  {/* Skill Chips List */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skillName, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-xl bg-purple-50/90 text-[#4F24D8] border border-purple-100 font-mono text-xs font-semibold shadow-2xs hover:bg-purple-100/80 transition-colors"
                      >
                        {skillName}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
