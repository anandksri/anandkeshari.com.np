import { useState, useEffect } from 'react';
import { Menu, X, ShieldAlert, Github, Linkedin, Disc, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  glowTheme: 'violet' | 'teal';
  onToggleTheme: () => void;
}

export default function Navbar({ glowTheme, onToggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Community', href: '#community' },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/80 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center space-x-2 font-display text-lg font-bold tracking-wider text-white"
            id="nav-logo"
          >
            <div className="flex flex-col">
              <span className="leading-tight font-mono font-extrabold tracking-widest text-violet-400 slashed-zero">ANAND0X01</span>
              <span className="text-[8px] text-gray-500 font-mono tracking-widest uppercase">TCP FOUNDER</span>
            </div>
          </a>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium font-display tracking-wide transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'text-violet-400 bg-violet-950/30'
                    : 'text-gray-400 hover:text-white'
                }`}
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Utilities & Socials */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/5 bg-slate-900/40 text-gray-400 hover:text-white hover:border-white/10 transition-all"
              id="nav-social-github"
            >
              <Github size={16} />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/5 bg-slate-900/40 text-gray-400 hover:text-white hover:border-white/10 transition-all"
              id="nav-social-linkedin"
            >
              <Linkedin size={16} />
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-white/5 bg-slate-900/40 text-gray-400 hover:text-white transition-all"
              id="mobile-menu-btn"
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
          className="lg:hidden absolute top-full left-0 w-full bg-[#050816]/95 border-b border-white/5 py-4 px-4 backdrop-blur-lg flex flex-col space-y-2 animate-in fade-in slide-in-from-top-5 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href, true)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium font-display tracking-wide transition-all ${
                activeSection === link.href.substring(1)
                  ? 'text-violet-400 bg-violet-950/45'
                  : 'text-gray-400 hover:text-white'
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
