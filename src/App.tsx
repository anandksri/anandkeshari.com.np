import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import IoTSection from './components/IoTSection';
import Community from './components/Community';
import Workshops from './components/Workshops';
import Services from './components/Services';
import Resume from './components/Resume';
import BlogPreview from './components/BlogPreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Glow Theme: 'violet' or 'teal'. Dark mode only is maintained as requested.
  const [glowTheme, setGlowTheme] = useState<'violet' | 'teal'>('violet');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  return (
    <div className="relative min-h-screen text-slate-100 bg-[#050816] font-sans selection:bg-violet-600/30 selection:text-white" id="portfolio-app-root">
      
      {/* Interactive Mouse Spotlight Glow Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${
            glowTheme === 'violet' ? 'rgba(124, 58, 237, 0.04)' : 'rgba(16, 185, 129, 0.04)'
          }, transparent 80%)`,
        }}
      />

      {/* Persistent Subtle Cyber Noise Texture & Grid */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0" />
      <div className="fixed inset-0 bg-noise opacity-[0.015] pointer-events-none z-0" />

      {/* Sticky Top-level Navigation */}
      <Navbar glowTheme={glowTheme} onToggleTheme={toggleGlowTheme} />

      {/* Content Section Cascade */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <Hero glowTheme={glowTheme} />

        {/* About Me Section with Timeline roadmap */}
        <About glowTheme={glowTheme} />

        {/* Skills & Cybersecurity domain ratings */}
        <Skills glowTheme={glowTheme} />

        {/* Structured Trajectory timeline */}
        <Experience glowTheme={glowTheme} />

        {/* Core Codebases and website nodes */}
        <Projects glowTheme={glowTheme} />

        {/* Dedicated IoT & Hardware Lab section */}
        <IoTSection glowTheme={glowTheme} />

        {/* TC Pioneer community portal */}
        <Community glowTheme={glowTheme} />

        {/* Educational workshops timeline */}
        <Workshops glowTheme={glowTheme} />

        {/* Professional Services directory */}
        <Services glowTheme={glowTheme} />

        {/* Chronological resume & milestones */}
        <Resume glowTheme={glowTheme} />

        {/* Technical blog journal previews */}
        <BlogPreview glowTheme={glowTheme} />

        {/* Encrypted Contact Terminal and Nepal geographic wireframe map */}
        <Contact glowTheme={glowTheme} />

      </main>

      {/* Minimal responsive site footer */}
      <Footer glowTheme={glowTheme} />

    </div>
  );
}
