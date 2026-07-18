import React from 'react';
import { WORKSHOPS } from '../data';
import { Calendar, MapPin, Tv, ShieldAlert, CheckCircle } from 'lucide-react';

interface WorkshopsProps {
  glowTheme: 'violet' | 'teal';
}

export default function Workshops({ glowTheme }: WorkshopsProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/25 text-violet-400' : 'bg-emerald-600/25 text-emerald-400';
  const activeBorder = glowTheme === 'violet' ? 'border-violet-500/20 hover:border-violet-500/40' : 'border-emerald-500/20 hover:border-emerald-500/40';

  return (
    <section id="workshops" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <Tv size={14} className={activeText} />
            <span>COMMUNITY SESSIONS</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            Workshops & Educational Programs
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Workshops timeline / cards stack */}
        <div className="max-w-4xl mx-auto space-y-8 text-left" id="workshops-list">
          {WORKSHOPS.map((workshop, i) => {
            const workshopThemes = [
              {
                border: "border-rose-500/15 hover:border-rose-500/35",
                badge: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
                text: "text-rose-400",
                shadow: "hover:shadow-[0_0_25px_rgba(244,63,94,0.07)]",
                icon: "ShieldAlert"
              },
              {
                border: "border-sky-500/15 hover:border-sky-500/35",
                badge: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
                text: "text-sky-400",
                shadow: "hover:shadow-[0_0_25px_rgba(56,189,248,0.07)]",
                icon: "Terminal"
              },
              {
                border: "border-amber-500/15 hover:border-amber-500/35",
                badge: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
                text: "text-amber-400",
                shadow: "hover:shadow-[0_0_25px_rgba(245,158,11,0.07)]",
                icon: "Cpu"
              }
            ];
            const theme = workshopThemes[i % workshopThemes.length];

            return (
              <div
                key={workshop.title}
                className="bg-slate-950/70 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-violet-500/35 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6 justify-between items-start md:items-center"
                id={`workshop-card-${i}`}
              >
                {/* Left Column: Core Info */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold ${theme.badge}`}>
                      {workshop.audience}
                    </span>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-mono">
                      <Calendar size={12} />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs text-gray-500 font-mono">
                      <MapPin size={12} />
                      <span>{workshop.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display">
                    {workshop.title}
                  </h3>

                  {/* Topics Covered */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-gray-500 block mb-1.5 uppercase tracking-wider">
                      Topics Covered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="inline-flex items-center space-x-1 text-xs text-gray-300 bg-slate-900 px-2.5 py-1 rounded border border-white/5"
                        >
                          <CheckCircle size={10} className={theme.text} />
                          <span>{topic}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Mini verified badge */}
                <div className="hidden md:flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-slate-950/50 min-w-[140px] text-center">
                  <ShieldAlert size={24} className={`mb-1.5 ${theme.text}`} />
                  <span className="text-[10px] font-mono text-gray-400 font-bold font-mono">Verified Session</span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">Completed</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
