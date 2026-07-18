import React from 'react';
import { BLOGS } from '../data';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPreviewProps {
  glowTheme: 'violet' | 'teal';
}

export default function BlogPreview({ glowTheme }: BlogPreviewProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/25 text-violet-400' : 'bg-emerald-600/25 text-emerald-400';

  return (
    <section id="blogs" className="py-24 relative overflow-hidden bg-slate-950/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <BookOpen size={14} className={activeText} />
            <span>BLOG PREVIEW</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            Latest Blog Posts
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Blogs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blogs-grid">
          {BLOGS.map((blog, i) => (
            <article
              key={blog.title}
              className={`bg-slate-950/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 text-left group shadow-[0_15px_40px_rgba(0,0,0,0.7)] ${
                glowTheme === 'violet'
                  ? 'hover:border-violet-500/35 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]'
                  : 'hover:border-emerald-500/35 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]'
              }`}
              id={`blog-card-${i}`}
            >
              <div className="space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className={`px-2 py-0.5 rounded ${activeBg} uppercase`}>
                    {blog.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center gap-1">
                      <Calendar size={10} />
                      <span>{blog.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      <span>{blog.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-400 transition-colors font-display leading-tight">
                  {blog.title}
                </h3>

                {/* Abstract Excerpt */}
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-1">
                  {blog.excerpt}
                </p>
              </div>

              {/* Read button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="https://tcpioneer.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-1 text-xs font-mono font-semibold uppercase tracking-wider hover:underline ${activeText}`}
                >
                  <span>Read full article</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
