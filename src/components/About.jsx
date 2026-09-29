import React from 'react';
import { Sparkles, Brain, Code, Rocket, Workflow, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const coreValues = [
  {
    icon: Sparkles,
    title: "Agentic AI & GenAI",
    description: "Deeply interested in agentic workflows, prompt engineering, RAG pipelines, and autonomous AI systems that perform real task automation."
  },
  {
    icon: Rocket,
    title: "Full-Stack Development",
    description: "Building scalable web and mobile software with clean frontend interfaces, structured backends, and robust database layers."
  },
  {
    icon: Code,
    title: "Problem Solving",
    description: "Transforming complex logic and algorithm challenges into clean, efficient, and well-documented Python and Java code."
  },
  {
    icon: Workflow,
    title: "End-to-End Execution",
    description: "From conceptual software architecture and database schemas to UI components and deployment, taking ownership of full project lifecycles."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Constantly expanding skills in modern AI models, agent frameworks (LangChain, LlamaIndex, CrewAI, AutoGen), and software engineering standards."
  },
  {
    icon: Brain,
    title: "Team Collaboration",
    description: "Experienced as a project lead and collaborative contributor in academic and personal tech initiatives."
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-atmospheric-light">
      
      {/* Background Decorative Gradient Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              About Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            Building at the intersection of AI, Software Development & Full-Stack Engineering.
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            {personalInfo.bio}
          </p>
        </div>

        {/* Highlight Cards Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card-light p-7 rounded-3xl border border-purple-100/90 hover:border-purple-300 group transition-all"
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-purple-100 border border-purple-200 text-[#4F24D8] mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-bold text-lg text-[#11142D] mb-2 group-hover:text-[#4F24D8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#4F5870] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
