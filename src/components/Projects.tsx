import { useState } from 'react';
import { PROJECTS, Project } from '../data';
import { FolderCode, Github, ExternalLink, Sparkles, Terminal } from 'lucide-react';

interface ProjectsProps {
  glowTheme?: 'violet' | 'teal';
}

export default function Projects({ glowTheme }: ProjectsProps = {}) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'cyber' | 'lab'>('all');

  const filteredProjects = PROJECTS.filter(
    (proj) => activeFilter === 'all' || proj.category === activeFilter
  );

  const activeText = 'text-violet-400';
  const activeBg = 'bg-violet-600/25 text-violet-400';
  const activeBorder = 'border-violet-500/30';
  const glowShadow = 'shadow-[0_0_15px_rgba(124,58,237,0.1)]';

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Portals' },
    { id: 'cyber', label: 'Cyber Security' },
    { id: 'lab', label: 'Docker & Labs' },
  ] as const;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      {/* background noise decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.15),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/10 text-xs font-mono text-violet-400 mb-4 uppercase tracking-widest">
            <FolderCode size={12} />
            <span>DEVELOPMENT HUBS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Featured Projects & Codebases
          </h2>
        </div>

        {/* Filters Panel */}
        <div className="flex flex-wrap justify-start gap-2.5 mb-12" id="projects-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? activeBg + ' ' + activeBorder + ' ' + glowShadow
                  : 'bg-slate-900/40 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-slate-950/60 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:translate-y-[-6px] transition-all duration-300 group overflow-hidden hover:border-violet-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(124,58,237,0.15)]"
              id={`project-card-${proj.id}`}
            >
              <div>
                {/* Header / Badges */}
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-xs text-gray-600 font-bold tracking-wider uppercase">
                    0{proj.id}
                  </span>
                  
                  <div className="flex items-center space-x-2">
                    {proj.featured && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase bg-violet-950/50 text-violet-300 border border-violet-500/20">
                        <Sparkles size={8} />
                        <span>FEATURED</span>
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-gray-500 px-2 py-0.5 rounded bg-slate-950 border border-white/5 uppercase">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-violet-400 font-display text-left">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 mt-3 text-left leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-gray-500 px-2 py-0.5 rounded bg-slate-900 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="flex items-center text-[10px] font-mono text-gray-500 gap-1.5">
                  <Terminal size={10} className={activeText} />
                  <span>Public Project</span>
                </span>
                
                <div className="flex space-x-2.5">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded bg-slate-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-colors"
                      title="Live Demonstration Link"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
