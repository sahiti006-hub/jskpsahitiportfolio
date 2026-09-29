import React from 'react';
import { Award, CalendarCheck, Users, Sparkles, CheckCircle } from 'lucide-react';
import { professionalAchievementsData } from '../data/portfolioData';

const achievementIcons = {
  CalendarCheck,
  Users,
  Sparkles,
  Award
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 bg-atmospheric-light bg-grid-pattern-light">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-[#4F24D8] animate-pulse" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#4F24D8] font-semibold">
              Leadership & Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11142D] font-heading tracking-tight leading-tight">
            Achievements & Leadership
          </h2>

          <p className="mt-4 text-[#4F5870] text-base sm:text-lg leading-relaxed font-normal">
            Demonstrating project lead initiative, technical event organization, collaborative teamwork, and hackathon participation.
          </p>
        </div>

        {/* Professional Achievements Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalAchievementsData.map((item) => {
            const Icon = achievementIcons[item.icon] || Sparkles;
            return (
              <div
                key={item.number}
                className="glass-card-light p-6 sm:p-7 rounded-3xl border border-purple-100/90 hover:border-purple-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-3xl font-extrabold font-mono text-gradient-purple">
                      {item.number}
                    </span>
                    
                    <div className="p-2.5 rounded-2xl bg-purple-100/80 border border-purple-200 text-[#4F24D8] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase text-[#4F24D8] tracking-wider font-bold block mb-1">
                    {item.category}
                  </span>

                  <h3 className="text-lg font-bold text-[#11142D] font-heading mb-3 group-hover:text-[#4F24D8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4F5870] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-100 flex items-center justify-between text-[11px] font-mono text-[#4F5870]">
                  <span>Leadership Record</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#4F24D8]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
