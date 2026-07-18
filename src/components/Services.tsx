import React from 'react';
import { SERVICES } from '../data';
import LucideIcon from './LucideIcon';
import { Laptop, Code } from 'lucide-react';

interface ServicesProps {
  glowTheme: 'violet' | 'teal';
}

export default function Services({ glowTheme }: ServicesProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/20 text-violet-400' : 'bg-emerald-600/20 text-emerald-400';
  const activeBorder = glowTheme === 'violet' ? 'border-violet-500/20' : 'border-emerald-500/20';

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <Laptop size={14} className={activeText} />
            <span>SOLUTIONS DIRECTORY</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            Services & Consulting Offered
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid">
          {SERVICES.map((srv, i) => (
            <div
              key={srv.title}
              className={`bg-slate-950/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 text-left group shadow-[0_15px_40px_rgba(0,0,0,0.7)] ${
                glowTheme === 'violet'
                  ? 'hover:border-violet-500/35 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]'
                  : 'hover:border-emerald-500/35 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]'
              }`}
              id={`service-card-${i}`}
            >
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className={`p-2.5 rounded-xl inline-block ${activeBg}`}>
                  <LucideIcon name={srv.icon} size={20} />
                </div>

                <h3 className="text-lg font-bold text-white font-display group-hover:text-violet-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              {/* Price or custom quote indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px]">
                <span className="text-gray-500 uppercase">Pricing Standard</span>
                <span className={`font-semibold uppercase ${activeText}`}>
                  {srv.price || "Flexible / Quote"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
