import React from 'react';
import { TIMELINE } from '../data';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceProps {
  glowTheme?: 'violet' | 'teal';
}

export default function Experience({ glowTheme }: ExperienceProps = {}) {
  const activeText = 'text-violet-400';

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/10 text-xs font-mono text-violet-400 mb-4 uppercase tracking-widest">
            <Briefcase size={12} />
            <span>TRAJECTORY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Timeline of Work & Security.
          </h2>
        </div>

        {/* Timeline Construction */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const stepThemes = [
                {
                  text: "text-violet-400",
                  dot: "bg-violet-500 shadow-violet-500/60 border-violet-500/30",
                  border: "border-violet-500/15 hover:border-violet-500/35",
                  shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.07)]",
                  bg: "bg-violet-500/5",
                  tags: ["Cloud Sec", "Full Stack", "Audits"]
                },
                {
                  text: "text-sky-400",
                  dot: "bg-sky-500 shadow-sky-500/60 border-sky-500/30",
                  border: "border-sky-500/15 hover:border-sky-500/35",
                  shadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.07)]",
                  bg: "bg-sky-500/5",
                  tags: ["tcpioneer.org", "Community Hub", "Learning Guides"]
                },
                {
                  text: "text-violet-400",
                  dot: "bg-violet-500 shadow-violet-500/60 border-violet-500/30",
                  border: "border-violet-500/15 hover:border-violet-500/35",
                  shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.07)]",
                  bg: "bg-violet-500/5",
                  tags: ["Physical Hacking", "Tech Aware", "Y3ti@Sec"]
                },
                {
                  text: "text-sky-400",
                  dot: "bg-sky-500 shadow-sky-500/60 border-sky-500/30",
                  border: "border-sky-500/15 hover:border-sky-500/35",
                  shadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.07)]",
                  bg: "bg-sky-500/5",
                  tags: ["ESP32 Firmware", "Raspberry Pi", "API nodes"]
                },
                {
                  text: "text-violet-400",
                  dot: "bg-violet-500 shadow-violet-500/60 border-violet-500/30",
                  border: "border-violet-500/15 hover:border-violet-500/35",
                  shadow: "hover:shadow-[0_0_25px_rgba(124,58,237,0.07)]",
                  bg: "bg-violet-500/5",
                  tags: ["Docker Sandboxes", "Debian Linux", "Technical Writing"]
                }
              ];
              const theme = stepThemes[index % stepThemes.length];

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`experience-item-${index}`}
                >
                  {/* Glowing timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-white/10 flex items-center justify-center -translate-x-1/2 z-20">
                    <div className={`h-3 w-3 rounded-full transition-all duration-500 ${theme.dot}`} />
                  </div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card content container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-8 md:pr-8">
                    <div className="bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-violet-500/35 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all duration-300 text-left relative group">
                      
                      {/* Decorative corner node */}
                      <span className="absolute top-3 right-4 font-mono text-xs text-gray-700 font-bold uppercase tracking-widest">
                        0{index + 1}
                      </span>

                      {/* Period Badge */}
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-slate-900 border border-white/5 font-mono text-[10px] text-gray-400 mb-3">
                        <Calendar size={10} className={theme.text} />
                        <span>{item.year}</span>
                      </div>

                      {/* Header info */}
                      <h3 className="text-lg font-bold text-white font-display leading-tight">
                        {item.title}
                      </h3>
                      <h4 className={`text-xs font-semibold font-mono ${theme.text} mt-1`}>
                        {item.subtitle}
                      </h4>

                      {/* Detailed bullets or paragraph */}
                      <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Associated Skill Badges */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {theme.tags.map(t => (
                          <span key={t} className="text-[10px] font-mono text-slate-400 px-2.5 py-0.5 rounded bg-slate-950 border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
