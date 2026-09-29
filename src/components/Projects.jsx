import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Info, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { verticalProjectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-atmospheric-light bg-grid-pattern-light">
      
      {/* Background Gradient Decorative Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-300 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              Project Showcase
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            Projects & Case Studies
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            Full-stack AI platforms, financial analytics applications, and safety systems engineered end-to-end.
          </p>
        </div>

        {/* Vertical Projects List */}
        <div className="mt-14 space-y-12 sm:space-y-16">
          {verticalProjectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.id}
                className="glass-card-light rounded-3xl p-6 sm:p-10 border border-purple-100/90 hover:border-purple-300 transition-all shadow-xl relative overflow-hidden group"
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${
                    isEven ? 'from-[#5B7CFA] via-[#4F24D8] to-[#8B7CF6]' : 'from-[#8B7CF6] via-[#4F24D8] to-[#5B7CFA]'
                  }`}
                />

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number & Header Info */}
                  <div className="lg:col-span-5 space-y-4">
                    
                    <div className="flex items-center justify-between">
                      {/* Large Project Number */}
                      <span className="text-4xl sm:text-6xl font-black font-mono text-gradient-purple">
                        {project.number}
                      </span>

                      {/* Status Badge */}
                      <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${project.statusBadgeColor}`}>
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#4F24D8] font-bold">
                        {project.subtitle}
                      </span>
                      
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#11142D] font-heading mt-1 group-hover:text-[#4F24D8] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-[#4F5870] leading-relaxed font-normal">
                      {project.shortDescription}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="pt-2">
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#4F5870] mb-2 font-semibold">
                        Technologies & Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-xl bg-purple-50/80 border border-purple-100 text-[#4F24D8] text-xs font-mono font-semibold"
                          >
                            #{tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Key Features & Action Buttons */}
                  <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-purple-100 lg:pl-8">
                    
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#5B7CFA] font-bold mb-3 flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Key Features & Capabilities
                      </h4>

                      <ul className="space-y-2.5">
                        {project.features.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="p-3.5 rounded-2xl bg-white border border-purple-100/90 text-xs sm:text-sm text-[#11142D] flex items-start gap-3 leading-relaxed font-medium shadow-xs"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#4F24D8] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer Actions & Real Links */}
                    <div className="pt-4 border-t border-purple-100 flex flex-wrap items-center justify-between gap-4">
                      
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-purple-200 text-[#4F24D8] text-xs font-bold hover:border-[#4F24D8] hover:bg-purple-50/60 transition-all shadow-xs"
                      >
                        <Info className="w-4 h-4" />
                        <span>Architecture & Specs</span>
                      </button>

                      <div className="flex items-center gap-3">
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-purple-200 text-[#11142D] text-xs font-semibold hover:border-[#4F24D8] hover:text-[#4F24D8] transition-all shadow-xs"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>View GitHub</span>
                          </a>
                        ) : (
                          <span className="text-[11px] font-mono text-[#4F5870] px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 font-medium">
                            {project.repositoryNote || "Code on Request"}
                          </span>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white text-xs font-semibold shadow-md shadow-purple-500/20 hover:scale-105 transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
