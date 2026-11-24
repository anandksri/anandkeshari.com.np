import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Search } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  glowTheme: 'violet' | 'teal';
  onToggleTheme: () => void;
}

export default function Navbar({ glowTheme, onToggleTheme }: NavbarProps) {
  void glowTheme;
  void onToggleTheme;
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
  ) => {
    e.preventDefault();

    const targetId = href.replace('#', '');
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.hash = href;
    }

    if (closeMenu) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check which section is in view
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-emerald-400/10 bg-[#020504]/95 py-2.5 backdrop-blur-xl'
          : 'border-b border-slate-800/40 bg-[#020504]/70 py-3 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-10 items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex min-w-0 items-center gap-2 text-white"
            id="nav-logo"
          >
            <div className="flex min-w-0 flex-col">
              <span className="font-mono text-sm font-bold tracking-[0.12em] text-emerald-400 sm:text-base">ANAND0X01</span>
              <span className="hidden text-[8px] font-mono tracking-[0.18em] text-slate-600 xs:block">TCP FOUNDER</span>
            </div>
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden items-center lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`border-b px-3 py-3 font-mono text-[10px] tracking-wide transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'border-emerald-400 text-emerald-400'
                    : 'border-transparent text-slate-500 hover:text-slate-200'
                }`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Utilities & Socials */}
          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
              className="flex h-8 items-center gap-1.5 border border-slate-800 px-2.5 font-mono text-[9px] text-slate-500 transition-colors hover:border-emerald-400/40 hover:text-emerald-400"
            >
              <Search size={11} /> CTRL K
            </button>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="grid h-8 w-8 place-items-center border border-slate-800 text-slate-500 transition-all hover:border-emerald-400/40 hover:text-emerald-400"
              id="nav-social-github"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="grid h-8 w-8 place-items-center border border-slate-800 text-slate-500 transition-all hover:border-emerald-400/40 hover:text-emerald-400"
              id="nav-social-linkedin"
            >
              <Linkedin size={16} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-9 w-9 place-items-center border border-slate-800 bg-[#050807] text-slate-300 transition-all hover:border-emerald-400/50"
              id="mobile-menu-btn"
              aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="absolute left-0 top-full flex w-full flex-col border-b border-emerald-400/10 bg-[#020504]/98 px-4 py-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href, true)}
              className={`border-b border-slate-800/60 px-2 py-3.5 font-mono text-xs tracking-wide transition-all ${
                activeSection === link.href.substring(1)
                  ? 'text-emerald-400'
                  : 'text-slate-400 hover:text-white'
              }`}
              id={`mobile-nav-link-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-gray-400 hover:text-white px-2 py-1"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-xs text-gray-400 hover:text-white px-2 py-1"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
