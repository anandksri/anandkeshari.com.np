import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [glowTheme, setGlowTheme] = useState<'violet' | 'teal'>('teal');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [booting, setBooting] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);

  // Toggle ambient accent glow
  const toggleGlowTheme = () => {
    setGlowTheme((prev) => (prev === 'violet' ? 'teal' : 'violet'));
  };

  // Follow mouse position for interactive spotlight background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBooting(false), 1800);
    const handleKeys = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
      if (event.key === 'Escape') setCommandOpen(false);
    };
    window.addEventListener('keydown', handleKeys);
    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener('keydown', handleKeys);
    };
  }, []);

  const runCommand = (target: string) => {
    setCommandOpen(false);
    document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#020504] font-sans selection:bg-emerald-400/30 selection:text-white" id="portfolio-app-root">
      {booting && (
        <div className="boot-screen">
          <div className="boot-lines">
            <span>[OK] loading identity: anand0x01</span>
            <span>[OK] mounting cybersecurity module</span>
            <span>[OK] linking TCP network</span>
            <span className="text-emerald-300">session ready<span className="boot-cursor">_</span></span>
          </div>
        </div>
      )}

      {commandOpen && (
        <div className="command-backdrop" role="dialog" aria-modal="true" onMouseDown={() => setCommandOpen(false)}>
          <div className="command-palette" onMouseDown={(event) => event.stopPropagation()}>
            <div className="command-search"><span>&gt;</span><input autoFocus placeholder="type a destination..." readOnly /></div>
            {[
              ['01', 'Jump to profile', '#home'],
              ['02', 'Jump to operations', '#about'],
              ['03', 'Jump to timeline', '#experience'],
              ['04', 'Browse projects', '#projects'],
              ['05', 'Open contact terminal', '#contact'],
            ].map(([key, label, target]) => (
              <button key={key} onClick={() => runCommand(target)}>
                <span>{key}</span>{label}<kbd>ENTER</kbd>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Sparse cursor signal */}
      <div
        className="pointer-events-none fixed inset-0 z-30 hidden md:block"
        style={{
          background: `radial-gradient(320px at ${mousePos.x}px ${mousePos.y}px, rgba(52, 211, 153, 0.055), transparent 70%)`,
        }}
      />

      {/* Persistent Subtle Cyber Noise Texture & Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />

      {/* Sticky Top-level Navigation */}
      <Navbar glowTheme={glowTheme} onToggleTheme={toggleGlowTheme} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Minimal responsive site footer */}
      <Footer glowTheme={glowTheme} />

    </div>
  );
}
