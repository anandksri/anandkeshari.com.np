import { PERSONAL_INFO } from '../data';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  glowTheme: 'violet' | 'teal';
}

export default function Footer({ glowTheme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const accentBorder = glowTheme === 'violet' ? 'border-violet-500/20' : 'border-emerald-500/20';
  const accentHoverText = glowTheme === 'violet' ? 'hover:text-violet-400' : 'hover:text-emerald-400';

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#03050c] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          {/* Brand details */}
          <div className="space-y-2 text-left">
            <a href="#home" className="flex items-center space-x-2 font-display text-base font-bold text-white tracking-wider">
              <span className="font-mono font-extrabold tracking-widest text-violet-400 text-lg slashed-zero">ANAND0X01</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Cybersecurity researcher and IoT developer. Raising digital safety barriers through transparent learning pathways.
            </p>
          </div>

          {/* Social icons & Quick Links */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex space-x-3 text-gray-500">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-xl bg-slate-950/80 border border-white/5 text-gray-400 hover:text-white ${accentBorder} transition-all`}>
                <Github size={15} />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-xl bg-slate-950/80 border border-white/5 text-gray-400 hover:text-white ${accentBorder} transition-all`}>
                <Linkedin size={15} />
              </a>
              <a href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-xl bg-slate-950/80 border border-white/5 text-gray-400 hover:text-white ${accentBorder} transition-all`}>
                <Instagram size={15} />
              </a>
            </div>

            {/* Scroll top */}
            <button
              onClick={handleScrollTop}
              className="p-2.5 rounded-xl bg-slate-950 border border-white/5 hover:border-violet-500/30 text-gray-400 hover:text-white transition-all cursor-pointer"
              title="Scroll to top"
              id="scroll-to-top-btn"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <p className="text-[11px] font-mono slashed-zero text-slate-500">
            © {currentYear} Anand0x01. Crafted for secure digital development.
          </p>
          <div className="flex space-x-4 text-[11px] font-mono text-slate-500">
            <a href="https://tcpioneer.org" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">tcpioneer.org</a>
            <span>•</span>
            <a href="https://learn.tcpioneer.org" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition-colors">learn.tcpioneer.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
