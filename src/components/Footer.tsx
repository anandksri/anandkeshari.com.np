import { PERSONAL_INFO } from '../data';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  glowTheme: 'violet' | 'teal';
}

export default function Footer({ glowTheme }: FooterProps) {
  void glowTheme;
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-slate-800/80 bg-[#020504] py-10">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-8 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          {/* Brand details */}
          <div className="space-y-2 text-left">
            <a href="#home" className="flex items-center font-mono text-lg font-bold tracking-[0.12em] text-emerald-400">
              ANAND0X01
            </a>
            <p className="max-w-sm text-xs leading-6 text-slate-500">
              Cybersecurity, secure software and hands-on engineering from Kathmandu.
            </p>
          </div>

          {/* Social icons & Quick Links */}
          <div className="flex items-center justify-between gap-4 sm:justify-start">
            <div className="flex gap-2 text-slate-500">
              <a aria-label="GitHub" href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center border border-slate-800 transition-all hover:border-emerald-400/50 hover:text-emerald-400">
                <Github size={15} />
              </a>
              <a aria-label="LinkedIn" href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center border border-slate-800 transition-all hover:border-emerald-400/50 hover:text-emerald-400">
                <Linkedin size={15} />
              </a>
              <a aria-label="Instagram" href={PERSONAL_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center border border-slate-800 transition-all hover:border-emerald-400/50 hover:text-emerald-400">
                <Instagram size={15} />
              </a>
            </div>

            {/* Scroll top */}
            <button
              onClick={handleScrollTop}
              className="grid h-9 w-9 place-items-center border border-slate-800 text-slate-500 transition-all hover:border-emerald-400/50 hover:text-emerald-400"
              title="Scroll to top"
              id="scroll-to-top-btn"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 border-t border-slate-800/80 pt-6 text-left sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] text-slate-600">
            © {currentYear} ANAND0X01 // ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] text-slate-600">
            <a href="https://tcpioneer.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">TCPIONEER.ORG</a>
            <span className="text-slate-800">/</span>
            <a href="https://learn.tcpioneer.org" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">LEARN.TCPIONEER.ORG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
