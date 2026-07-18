import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import LucideIcon from './LucideIcon';
import { LayoutGrid, ArrowRight, ShieldCheck } from 'lucide-react';

interface SkillsProps {
  glowTheme?: 'violet' | 'teal';
}

const CATEGORY_META: Record<string, { desc: string; tagline: string }> = {
  "Cybersecurity": {
    tagline: "Systems Defense & Audits",
    desc: "Conducting professional vulnerability assessments, penetration testing, and implementing hardened network and system configurations."
  },
  "Web Development": {
    tagline: "Modern Full Stack Nodes",
    desc: "Building scalable, low-latency web applications and services utilizing robust architectures, isolated state managers, and typed contracts."
  },
  "IoT & Hardware": {
    tagline: "Embedded Firmware & Labs",
    desc: "Prototyping defensive hardware modules, flash memory auditing, and engineering custom ESP32/Raspberry Pi microcontrollers."
  },
  "Linux & DevOps": {
    tagline: "Infrastructure & Containers",
    desc: "Orchestrating containerized vulnerability sandboxes, maintaining secure cloud gateways, and managing Unix-based server distributions."
  },
  "Professional Skills": {
    tagline: "Mentoring & Communication",
    desc: "Authoring deep-dive security writeups, delivering engaging public school workshops, and training local community circles."
  }
};

export default function Skills({ glowTheme }: SkillsProps = {}) {
  // Default to the first category
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0]?.title || "Cybersecurity");

  const currentCategoryData = SKILL_CATEGORIES.find(cat => cat.title === activeCategory) || SKILL_CATEGORIES[0];
  const meta = CATEGORY_META[activeCategory] || { tagline: "Core Technical Expertise", desc: "Demonstrated field-tested capabilities." };

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-slate-950/20 border-b border-white/5">
      {/* Absolute ambient lights strictly in Violet and Sky */}
      <div className="absolute top-1/2 -left-1/4 w-96 h-96 rounded-full bg-violet-600/5 glow-orb pointer-events-none z-0" />
      <div className="absolute bottom-1/2 -right-1/4 w-96 h-96 rounded-full bg-sky-600/5 glow-orb pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Styled for clean look matching rest of the updated site */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/10 text-xs font-mono text-violet-400 mb-4 uppercase tracking-widest">
            <LayoutGrid size={12} />
            <span>CORE EXPERTISE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Technical Arsenal.
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl">
            A comprehensive overview of security diagnostics, full-stack systems engineering, and hardware lab practices.
          </p>
        </div>

        {/* Clean Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Categories (Sleek selector rail) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block px-2 text-left">
              Expertise Tracks
            </span>
            <div className="space-y-2">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const isActive = activeCategory === cat.title;
                const m = CATEGORY_META[cat.title] || { tagline: "Technical Domain" };
                return (
                  <button
                    key={cat.title}
                    onClick={() => setActiveCategory(cat.title)}
                    className={`w-full p-4 rounded-xl text-left border flex items-center justify-between transition-all duration-300 group cursor-pointer ${
                      isActive
                        ? "bg-violet-600/10 border-violet-500/35 shadow-[0_0_20px_rgba(124,58,237,0.04)]"
                        : "bg-slate-900/40 border-white/5 hover:bg-slate-900/60 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-2.5 rounded-lg border transition-colors ${
                        isActive 
                          ? "bg-violet-500/20 border-violet-500/30 text-violet-400" 
                          : "bg-slate-950/60 border-white/5 text-slate-400 group-hover:text-white"
                      }`}>
                        <LucideIcon name={cat.icon} size={18} />
                      </div>
                      <div>
                        <h4 className={`font-display text-sm font-bold transition-colors ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                          {cat.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {m.tagline}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono text-slate-600 font-bold">
                        0{idx + 1}
                      </span>
                      <ArrowRight 
                        size={14} 
                        className={`transition-all duration-300 ${
                          isActive ? "text-violet-400 translate-x-0" : "text-slate-600 group-hover:text-slate-400 -translate-x-1 group-hover:translate-x-0"
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean, Elegant Skills Viewport */}
          <div className="lg:col-span-7 bg-slate-950/60 border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden min-h-[440px] flex flex-col justify-between backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              {/* Category Showcase Header */}
              <div className="border-b border-white/5 pb-6 mb-8 text-left">
                <div className="flex items-center space-x-2 text-sky-400 mb-2">
                  <ShieldCheck size={14} />
                  <span className="text-[10px] font-mono uppercase tracking-widest font-semibold">{meta.tagline}</span>
                </div>
                <h3 className="text-2xl font-display font-black text-white">
                  {currentCategoryData.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                  {meta.desc}
                </p>
              </div>
 
              {/* Clean Minimal Skill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-left">
                {currentCategoryData.skills.map((skill) => (
                  <div key={skill.name} className="group/item relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-semibold text-slate-300 group-hover/item:text-white transition-colors font-sans">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-violet-400 font-semibold bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/5">
                        {skill.level}%
                      </span>
                    </div>
 
                    {/* Ultra-clean 2px progress bar */}
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-violet-500 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(124,58,237,0.4)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Showcase Footer */}
            <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Production Stack</span>
              </span>
              <span>TCP Certified Domain</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
