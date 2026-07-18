import { useState } from 'react';
import { RESUME_DATA } from '../data';
import { FileText, Download, Award, GraduationCap, Briefcase, CheckCircle2 } from 'lucide-react';

interface ResumeProps {
  glowTheme: 'violet' | 'teal';
}

export default function Resume({ glowTheme }: ResumeProps) {
  const [downloading, setDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/20 text-violet-400 border-violet-500/20' : 'bg-emerald-600/20 text-emerald-400 border-emerald-500/20';

  const downloadMockResume = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    }, 1200);
  };

  return (
    <section id="resume" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      {/* Dynamic ambient background depth */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/10 text-xs font-mono text-violet-400 mb-4 uppercase tracking-widest">
            <FileText size={12} />
            <span>CREDENTIAL INDEX</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight leading-none">
            Resume & Achievements
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl">
            A pristine register of technical competence, educational timelines, and certified milestones.
          </p>
        </div>

        {/* Clean, Non-Messy Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start text-left">
          
          {/* LEFT: Timelines (Experience & Education) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Experience Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                <div className={`p-2 rounded-lg ${activeBg} border`}>
                  <Briefcase size={16} />
                </div>
                <h3 className="text-lg font-bold font-display text-white tracking-tight uppercase">
                  Professional Focus
                </h3>
              </div>

              <div className="relative border-l border-white/5 pl-6 ml-4 space-y-8">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <div key={exp.role} className="relative group">
                    {/* Timeline Node dot */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-violet-500 group-hover:border-white transition-colors duration-300 shadow-[0_0_8px_rgba(124,58,237,0.4)]" />
                    
                    <div className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-bold text-white font-display group-hover:text-violet-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider bg-slate-900/60 px-2.5 py-0.5 rounded border border-white/5 self-start sm:self-auto">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className={`text-xs font-semibold font-mono ${activeText}`}>
                        {exp.company}
                      </p>

                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2.5 leading-relaxed">
                            <span className="text-violet-500 mt-1.5 shrink-0 select-none text-[8px]">■</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center space-x-3 border-b border-white/5 pb-3">
                <div className={`p-2 rounded-lg ${activeBg} border`}>
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-lg font-bold font-display text-white tracking-tight uppercase">
                  Education Index
                </h3>
              </div>

              <div className="relative border-l border-white/5 pl-6 ml-4 space-y-8">
                {RESUME_DATA.education.map((edu) => (
                  <div key={edu.degree} className="relative group">
                    {/* Timeline Node dot */}
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-violet-500 group-hover:border-white transition-colors duration-300 shadow-[0_0_8px_rgba(124,58,237,0.4)]" />
                    
                    <div className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-bold text-white font-display group-hover:text-violet-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider bg-slate-900/60 px-2.5 py-0.5 rounded border border-white/5 self-start sm:self-auto">
                          {edu.period}
                        </span>
                      </div>

                      <p className="text-xs font-semibold font-mono text-slate-400">
                        {edu.institution}
                      </p>

                      <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400">
                        {edu.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start space-x-2.5 leading-relaxed">
                            <span className="text-violet-500 mt-1.5 shrink-0 select-none text-[8px]">■</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Certifications, Key Milestones & Elegant PDF Panel */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Certifications Card with depth */}
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-5">
              <div className="flex items-center space-x-2 border-b border-white/5 pb-3">
                <Award size={16} className={activeText} />
                <h4 className="text-sm font-bold font-mono text-white uppercase tracking-wider">
                  Verifications & Certs
                </h4>
              </div>

              <div className="space-y-3">
                {RESUME_DATA.certifications.map((cert) => (
                  <div key={cert.name} className="p-3.5 rounded-xl border border-white/5 bg-slate-900/20 hover:border-violet-500/20 transition-all flex justify-between items-center group">
                    <div className="space-y-0.5">
                      <h5 className="text-xs sm:text-sm font-bold text-white group-hover:text-violet-400 transition-colors">
                        {cert.name}
                      </h5>
                      <p className="text-[10px] font-mono text-slate-500">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md select-none shrink-0 ml-3">
                      Verified
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* PDF Compilation Download Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden text-center space-y-4">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/[0.03] rounded-full blur-xl" />
              
              <h4 className="text-sm font-bold text-white font-display">
                Need a physical copy?
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">
                Download the fully complete CV detailing Anand Keshari's hardware research, speaking history, and software systems.
              </p>
              
              <button
                onClick={downloadMockResume}
                disabled={downloading}
                className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider font-display transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                  downloading ? 'opacity-70 cursor-not-allowed' : ''
                } ${
                  glowTheme === 'violet'
                    ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/10'
                    : 'bg-emerald-600 hover:bg-emerald-500 text-black shadow-lg shadow-emerald-600/10'
                }`}
                id="resume-download-btn"
              >
                <Download size={14} className={downloading ? 'animate-bounce' : ''} />
                <span>{downloading ? 'Compiling Document...' : 'Download Verified CV'}</span>
              </button>

              {showToast && (
                <div className="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-1.5 font-bold text-sm">
                    ✓
                  </div>
                  <p className="text-xs font-bold text-white">CV Document Ready</p>
                  <p className="text-[10px] text-slate-500 mt-1 max-w-[200px]">
                    Anand Keshari's complete CV has been compiled for secure download.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
