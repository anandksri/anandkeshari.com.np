import { PERSONAL_INFO } from '../data';
import tcpLogo from '../assets/images/tcp-logo.png';
import { Users, Target, Eye, Compass, Heart, ArrowUpRight, Shield } from 'lucide-react';

interface CommunityProps {
  glowTheme: 'violet' | 'teal';
}

export default function Community({ glowTheme }: CommunityProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/25 text-violet-400' : 'bg-emerald-600/25 text-emerald-400';
  const activeBorder = glowTheme === 'violet' ? 'border-violet-500/35' : 'border-emerald-500/35';

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOrgLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const pillars = [
    {
      title: "Our Mission",
      description: "Democratizing cyber safety education and secure engineering in Nepal through simplified, straight-to-the-point practical setups.",
      icon: Target
    },
    {
      title: "Our Vision",
      description: "Building an active collective of security experts and ethical developers who collaborate, share roadmaps, and secure regional infrastructure.",
      icon: Eye
    },
    {
      title: "Our Values",
      description: "Fostering transparency, practical laboratories, and active mentoring. Cybersecurity literacy is a fundamental right for everyone.",
      icon: Compass
    }
  ];

  return (
    <section id="community" className="py-28 relative overflow-hidden bg-[#050816] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <Users size={14} className={activeText} />
            <span>COLLECTIVE VOICE</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            TC Pioneer (TCP)
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Big visual banner for TCP community */}
        <div className="bg-slate-950/80 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-12 mb-16 text-left relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none hidden md:block">
            <Users size={240} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Text description on Left */}
            <div className="lg:col-span-8 space-y-6">
              <div className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl ${activeBg} font-mono text-[11px] uppercase tracking-wider border ${activeBorder}`}>
                <Heart size={12} className="animate-pulse" />
                <span>TCP Nepalese Security Collective</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white leading-tight">
                TC Pioneer advances cybersecurity education in Nepal.
              </h3>
              
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Founded in Nepal, <strong className="text-white font-medium">TC Pioneer</strong> delivers practical cybersecurity pathways, hands-on workshops, and community tools. We help learners gain defensive security skills, network auditing experience, and practical IoT knowledge.
              </p>

              <div className="pt-2">
                <a
                  href="https://tcpioneer.org"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase font-display transition-all hover:scale-[1.03] duration-300 ${
                    glowTheme === 'violet'
                      ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/10'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-black shadow-lg shadow-emerald-600/10'
                  }`}
                >
                  <span>Visit TCP Website</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Interactive Org Logo frame on Right */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-[180px] h-[180px] rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-center transition-all duration-300 p-4 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src={tcpLogo}
                    alt="TC Pioneer logo"
                    className="max-w-[140px] max-h-[140px] object-contain rounded-2xl shadow-[0_0_25px_rgba(124,58,237,0.25)]"
                  />
                </div>
                <span className={`absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-mono ${glowTheme === 'violet' ? 'bg-violet-500/10 text-violet-300' : 'bg-emerald-500/10 text-emerald-300'}`}>
                  TC Pioneer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars (Mission, Vision, Goals) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="bg-slate-950/70 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-left flex flex-col justify-between group hover:border-violet-500/35 hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)] transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.8)]"
              id={`pillar-card-${i}`}
            >
              <div>
                <div className={`p-3 rounded-xl inline-block mb-4 ${activeBg}`}>
                  <p.icon size={20} />
                </div>
                <h4 className="text-lg font-bold text-white font-display mb-2">
                  {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[9px] text-gray-600 tracking-widest uppercase">
                Pillar 0{i + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
