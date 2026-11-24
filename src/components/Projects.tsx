import { useState } from 'react';
import { Github, ExternalLink, Search } from 'lucide-react';
import { PROJECTS } from '../data';
import { Badge } from '../../components/ui/badge';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'cyber' | 'iot'>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(PROJECTS[0]);

  const filtered = PROJECTS.filter((project) =>
    (filter === 'all' || project.category === filter) &&
    `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section id="projects" className="border-y border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-emerald-400">03 / PROJECT EXPLORER</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">SELECTED <span className="text-outline">WORK</span></h2>
          </div>
          <div className="flex h-10 items-center border border-slate-800 px-3 text-slate-600">
            <Search size={13} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="grep projects" className="ml-2 w-36 bg-transparent font-mono text-[10px] text-slate-300 outline-none" />
          </div>
        </div>

        <div className="mb-5 flex flex-wrap gap-2">
          {(['all', 'web', 'cyber', 'iot'] as const).map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`filter-chip ${filter === item ? 'filter-chip-active' : ''}`}>
              [{item}]
            </button>
          ))}
        </div>

        <div className="project-explorer">
          <div className="project-sidebar">
            {filtered.map((project, index) => (
              <button key={project.id} onClick={() => setSelected(project)} className={`project-row ${selected.id === project.id ? 'project-row-active' : ''}`}>
                <span className="text-emerald-400">0{index + 1}</span>
                <span className="truncate">{project.title}</span>
              </button>
            ))}
            {filtered.length === 0 && <p className="p-4 font-mono text-[10px] text-slate-600">NO MATCHES FOUND</p>}
          </div>

          <article className="project-detail">
            <div className="project-detail-grid" />
            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 font-mono text-[9px] text-slate-600">
                <span>./projects/{selected.id}</span>
                <Badge variant="success" className="border border-emerald-400/25 bg-emerald-400/10 font-mono text-[8px] text-emerald-400">STATUS: SHIPPED</Badge>
              </div>
              <h3 className="mt-8 text-3xl font-black tracking-tight text-white sm:text-5xl">{selected.title}</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">{selected.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selected.tags.map((tag) => <span key={tag} className="border border-slate-800 px-2 py-1 font-mono text-[9px] text-slate-500">{tag}</span>)}
              </div>
              <div className="mt-10 flex gap-3">
                {selected.github && <a href={selected.github} target="_blank" rel="noreferrer" className="command-button"><Github size={13} /> SOURCE</a>}
                {selected.demo && <a href={selected.demo} target="_blank" rel="noreferrer" className="command-button command-button-solid"><ExternalLink size={13} /> LIVE</a>}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
