import React, { useEffect } from 'react';
import { X, CheckCircle, ExternalLink, Cpu, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl border border-purple-100 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="p-6 sm:p-8 border-b border-purple-100 flex items-start justify-between gap-4 bg-purple-50/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${project.statusBadgeColor}`}>
                {project.status}
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#4F5870] border border-purple-100 text-xs font-mono font-medium">
                {project.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#11142D] font-heading tracking-tight">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white border border-purple-100 text-[#4F5870] hover:text-[#11142D] hover:bg-purple-100/60 transition-all focus:outline-none shrink-0 shadow-xs"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#4F24D8] font-bold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Project Overview
            </h4>
            <p className="text-[#4F5870] text-sm sm:text-base leading-relaxed font-normal">
              {project.shortDescription}
            </p>
          </div>

          {/* Technology Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#5B7CFA] font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-100 text-[#4F24D8] text-xs font-mono font-semibold"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-purple-700 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Key Features & Architectural Capabilities
            </h4>
            <ul className="grid sm:grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-purple-100/80 text-xs sm:text-sm text-[#11142D] flex items-start gap-3 leading-relaxed font-medium"
                >
                  <CheckCircle className="w-4 h-4 text-[#4F24D8] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer Bar */}
        <div className="p-6 border-t border-purple-100 bg-slate-50/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#4F5870]">
            {project.githubUrl ? (
              <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Verified Code Repository
              </span>
            ) : (
              <span className="text-[#4F5870] flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> Academic / Active Development
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-200 text-[#11142D] text-xs font-semibold hover:border-[#4F24D8] hover:text-[#4F24D8] transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white text-xs font-semibold shadow-md hover:scale-105 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-slate-200 text-[#11142D] text-xs font-semibold hover:bg-slate-300 transition-all"
            >
              Close Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
