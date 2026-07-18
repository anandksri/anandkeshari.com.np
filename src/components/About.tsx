import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Shield, Terminal, ArrowUpRight, GraduationCap, School, Layers, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  glowTheme?: 'violet' | 'teal';
}

export default function About({ glowTheme }: AboutProps = {}) {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-10 w-72 h-72 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 h-72 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Solves the "empty beginning" and introduces the core mission instantly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 border-b border-white/5 pb-16">
          
          {/* Left Block: Bold Solid Typographic Statement (NO GRADIENTS) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/10 text-xs font-mono text-violet-400 uppercase tracking-widest">
              <span>01 // MISSION STATEMENT</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none text-white font-display">
              Democratizing Security. <br />
              <span className="text-violet-400">Engineering Secure Webs.</span>
            </h2>
            
            <p className="text-slate-300 text-lg sm:text-xl font-light leading-relaxed max-w-2xl font-display">
              Operating at the critical intersection of technical systems security and high-performance full-stack web applications.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              I am a cybersecurity researcher and full-stack developer. Through <strong className="text-white font-medium">TC Pioneer (TCP)</strong>, I build secure web applications, deliver practical tech workshops, and publish clear cybersecurity guides for learners in Nepal.
            </p>
          </div>

          {/* Right Block: Structured Academic Journey (SCHOOL & HIGH SCHOOL) */}
          <div className="lg:col-span-5 text-left space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
              Academic Foundations //
            </span>

            {/* High School Node */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-violet-500/35 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/[0.02] rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/10 mt-0.5">
                  <GraduationCap size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-wider bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/5">
                      2024 - 2026
                    </span>
                     <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Completed</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display pt-1">
                    HIGH SCHOOL
                  </h4>
                  <p className="text-xs text-slate-300 font-medium font-mono">
                    Himalayan Pyramid School/College, Birgunj
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1.5 font-sans">
                    In high school, I organized workshops on online safety and ethical hacking, while also taking leadership roles in tech-related activities.
                  </p>
                </div>
              </div>
            </div>

            {/* School Node */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-500/35 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/[0.02] rounded-full blur-xl pointer-events-none" />
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/10 mt-0.5">
                  <School size={18} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/5">
                      2011 - 2023
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Completed</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display pt-1">
                    SCHOOL
                  </h4>
                  <p className="text-xs text-slate-300 font-medium font-mono">
                    Little Flower Sec School, Birgunj-21
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1.5 font-sans">
                    In school, I developed basic websites using HTML, CSS, and JavaScript, which sparked my interest in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Grid: Platforms Managed + Engineering Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Maintained Ecosystem Platforms */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block">02 // MAINTAINED INFRASTRUCTURE</span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Core Digital Safety Terminals
              </h3>
              <p className="text-slate-400 text-sm max-w-xl">
                Active community hubs engineered to lower technical entry barriers and deliver systematic cybersecurity training.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* tcpioneer.org */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-violet-500/35 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] group">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/10">
                    <Shield size={18} />
                  </div>
                  <a href="https://tcpioneer.org" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-slate-950 text-slate-400 hover:text-white transition-colors" title="External link">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <h4 className="text-base font-bold text-white font-display group-hover:text-violet-400 transition-colors">
                  tcpioneer.org
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Official community training site. Outlines strategic cyber-hygiene steps, ethical hacking guides, and modular tutorials.
                </p>
              </div>

              {/* learn.tcpioneer.org */}
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-sky-500/35 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)] group">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/10">
                    <Terminal size={18} />
                  </div>
                  <a href="https://learn.tcpioneer.org" target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-slate-950 text-slate-400 hover:text-white transition-colors" title="External link">
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <h4 className="text-base font-bold text-white font-display group-hover:text-sky-400 transition-colors">
                  learn.tcpioneer.org
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Command-line and Linux docs hub. Provides compact, copyable cheat-sheets on bash commands, Git, and networking.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars and stats */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block">03 // STABLE FOUNDATIONAL PILLARS</span>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-start space-x-3.5">
                <CheckCircle2 size={16} className="text-violet-400 mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Defensive Security</h5>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">Vulnerability analysis, threat mitigation, embedded firmwares, and cryptographic audits.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-start space-x-3.5">
                <CheckCircle2 size={16} className="text-sky-400 mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Full-Stack Resilience</h5>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">Performance optimization, secure backend pipelines, strongly-typed endpoints, and isolated UI states.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 flex items-start space-x-3.5">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Civic Education</h5>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">Hosting local cybersecurity workshops, curating roadmaps, and providing open guides to rural schools.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
