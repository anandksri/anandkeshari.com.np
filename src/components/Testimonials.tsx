import React from 'react';
import { TESTIMONIALS } from '../data';
import { MessageSquare, Quote } from 'lucide-react';

interface TestimonialsProps {
  glowTheme: 'violet' | 'teal';
}

export default function Testimonials({ glowTheme }: TestimonialsProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/20' : 'bg-emerald-600/20';

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <MessageSquare size={14} className={activeText} />
            <span>COMMUNITY REVIEWS</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            Testimonials & Workshop Feedback
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Testimonials cards list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col justify-between text-left relative overflow-hidden group transition-all duration-300 ${
                glowTheme === 'violet'
                  ? 'hover:border-violet-500/20 hover:shadow-[0_0_20px_rgba(124,58,237,0.08)]'
                  : 'hover:border-emerald-500/20 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]'
              }`}
              id={`testimonial-card-${i}`}
            >
              {/* Decorative Background Quote Icon */}
              <div className="absolute top-4 right-4 text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                <Quote size={50} />
              </div>

              <div className="space-y-4">
                {/* Text quote */}
                <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed relative z-10">
                  "{t.text}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/5 flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full ${activeBg} flex items-center justify-center text-xs font-bold text-white font-mono`}>
                    {t.name[0]}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-white font-display leading-tight">
                      {t.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
