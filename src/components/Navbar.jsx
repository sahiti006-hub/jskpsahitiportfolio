import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Focus', href: '#focus' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/85 backdrop-blur-xl border-b border-purple-100/80 shadow-xs' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#top" className="group flex items-center gap-2.5 font-heading text-lg sm:text-xl tracking-tight">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#5B7CFA] to-[#4F24D8] p-[1px] shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <div className="h-full w-full bg-white rounded-[11px] flex items-center justify-center text-[#4F24D8] font-mono text-xs font-extrabold">
                JS
              </div>
            </div>
            <span className="flex flex-col">
              <span className="leading-none text-[#11142D]">
                <strong className="font-extrabold text-[#11142D]">JSKP</strong>{' '}
                <span className="font-normal text-[#4F5870]">Sahiti</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#4F24D8] uppercase font-semibold">AGENTIC AI</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 p-1.5 rounded-full border border-purple-100/80 backdrop-blur-md shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#5B7CFA]/15 to-[#4F24D8]/15 text-[#4F24D8] border border-[#4F24D8]/30 font-semibold shadow-xs'
                      : 'text-[#4F5870] hover:text-[#11142D] hover:bg-purple-50/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTA & Availability Badge */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Collaborations
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white text-xs font-semibold shadow-md shadow-purple-500/20 hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <span>Let's Connect</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white border border-purple-100 text-[#11142D] hover:text-[#4F24D8] hover:border-purple-300 transition-all focus:outline-none shadow-xs"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-purple-100 p-5 shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#11142D] hover:text-[#4F24D8] hover:bg-purple-50/80 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-4 border-t border-purple-100 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Open for Collaborations
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-[#5B7CFA] to-[#4F24D8] text-white font-semibold text-sm shadow-md"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
