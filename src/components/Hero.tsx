import { useState, useEffect } from 'react';
import { 
  ShieldCheck, Code, Cpu, Download, ArrowRight, ExternalLink, 
  Terminal, Server, Database, Network, Cloud, Github, Linkedin, 
  Instagram, Mail, Twitter, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data';
import profileImg from '../assets/images/anand0x01.png';

interface HeroProps {
  glowTheme: 'violet' | 'teal';
}

export default function Hero({ glowTheme }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const maxTiltX = 20; // max degrees rotate on X
    const maxTiltY = 20; // max degrees rotate on Y

    const rotateY = (mouseX / (width / 2)) * maxTiltY;
    const rotateX = -(mouseY / (height / 2)) * maxTiltX;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // High-end security and developer roles specified by user
  const typingRoles = [
    "Cybersecurity Enthusiast",
    "Web Developer",
    "IoT Innovator",
    "Open Source Contributor",
    "Community Builder",
    "Technical Writer",
    "Linux Enthusiast"
  ];

  const period = 100; // Typing speed
  const deleteSpeed = 50; // Deleting speed
  const delayBetweenWords = 2500; // Hold word before deleting

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = typingRoles[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      }, period);
    }

    if (!isDeleting && displayText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingRoles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  // Premium accent themes matching selected theme
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/10 border-violet-500/20' : 'bg-emerald-600/10 border-emerald-500/20';
  const accentBorder = glowTheme === 'violet' ? 'border-violet-500/30' : 'border-emerald-500/30';
  const glowShadow = glowTheme === 'violet' ? 'shadow-violet-600/20' : 'shadow-emerald-600/20';

  // Decorative floating items with randomized speeds/positions
  const floatingIcons = [
    { Icon: ShieldCheck, top: "12%", left: "8%", delay: 0 },
    { Icon: Cpu, top: "22%", right: "12%", delay: 1 },
    { Icon: Terminal, bottom: "18%", left: "15%", delay: 2 },
    { Icon: Server, top: "45%", left: "4%", delay: 1.5 },
    { Icon: Database, bottom: "35%", right: "8%", delay: 0.5 },
    { Icon: Code, top: "50%", right: "20%", delay: 2.5 },
    { Icon: Network, bottom: "45%", left: "42%", delay: 3 },
    { Icon: Cloud, top: "8%", right: "35%", delay: 1.8 }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Animated Blurs / Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none animate-subtle-pulse" />
      <div className="absolute bottom-[15%] right-[5%] w-[380px] h-[380px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none animate-subtle-pulse" style={{ animationDelay: '2s' }} />

      {/* Subtle Background Cyber Grid Layout */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-[0.4]" />

      {/* Slowly Floating Abstract Cyber Icons */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {floatingIcons.map(({ Icon, top, left, right, delay }, idx) => (
          <div
            key={idx}
            className="absolute opacity-[0.25] text-slate-500 transition-transform hover:opacity-75 hover:scale-110 duration-500"
            style={{
              top,
              left,
              right,
              animation: `float 8s ease-in-out infinite`,
              animationDelay: `${delay}s`
            }}
          >
            <Icon size={24} className="stroke-[1.25]" />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Swapped layout strictly matching request: Profile image on LEFT, Info on RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Premium Profile Image (Visual Centerpiece) */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-1">
            <div 
              className="relative animate-float"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`,
                transition: 'transform 0.15s ease-out',
                willChange: 'transform'
              }}
            >
              
              {/* Dynamic Aura Gradient Mesh behind image frame */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-violet-600 via-sky-500 to-violet-500 opacity-25 blur-2xl animate-slow-spin"
                style={{ 
                  animationDuration: '15s',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
              />

              {/* Custom Premium Frame: Hexagonal outline and glass card */}
              <div 
                className="relative w-[250px] sm:w-[290px] md:w-[320px] aspect-[1/1.15] p-[4px] bg-gradient-to-b from-violet-500/80 via-white/10 to-sky-400/80 backdrop-blur-md shadow-2xl shadow-black/95 group transition-all duration-500"
                style={{ 
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' 
                }}
              >
                {/* Thin inner glossy overlay background */}
                <div className="absolute inset-[1px] bg-slate-950/20 rounded-none pointer-events-none z-10" />

                {/* Inner Image Masked */}
                <div 
                  className="relative w-full h-full bg-slate-950/90 overflow-hidden"
                  style={{ 
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' 
                  }}
                >
                  <img
                    src={profileImg}
                    alt="Anand Keshari"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center   contrast-105  scale-100 hover:scale-[1.05] transition-all duration-700 ease-out"
                  />
                  {/* Premium overlay shadow gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Premium micro details floating near frame */}
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-2xl flex items-center space-x-2 border border-white/10 shadow-lg select-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">Ops Secured</span>
              </div>

              <div className="absolute -top-4 -right-4 glass-card px-3.5 py-2 rounded-2xl flex items-center space-x-2 border border-white/10 shadow-lg select-none">
                <Terminal size={12} className="text-violet-400" />
                <span className="text-[10px] font-mono text-slate-400">NP_NODE_ACTIVE</span>
              </div>

            </div>
          </div>

          {/* Right Column: Introduction Content & Whitespace */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-7 order-2 lg:order-2 lg:pl-4">
            
            {/* Status Badge above heading */}
            <div
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/45 border border-white/10 backdrop-blur-md text-[11px] font-semibold tracking-wider text-slate-300 select-none shadow-sm"
              id="hero-badge"
            >
              <ShieldCheck size={13} className="text-violet-400 animate-pulse" />
              <span>Founder • TC Pioneer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse ml-1" />
            </div>

            {/* Typography Section */}
            <div className="space-y-3 w-full">
              <span className="text-slate-400 font-display font-medium tracking-widest text-xs uppercase block">
                Hi, I'm
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 flex-wrap">
                <h1
                  className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-violet-400 bg-clip-text text-transparent pb-2 hover:tracking-wide transition-all duration-500 ease-out select-none"
                  style={{ fontFamily: '"Righteous", sans-serif' }}
                  id="hero-name"
                >
                  Anand Keshari
                </h1>
              </div>

              {/* Roles Typewriter with beautiful styling */}
              <div className="h-10 sm:h-12 flex items-center font-mono mt-2" id="typing-container">
                <span className="text-slate-500 text-sm sm:text-base mr-2 select-none">&gt;_</span>
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-bold tracking-wide ${activeText}`}
                >
                  {displayText}
                </span>
                <span
                  className={`animate-pulse inline-block w-2 h-5 sm:h-6 ml-1.5 bg-violet-400`}
                />
              </div>
            </div>

            {/* Minimal Description (Only 2-3 lines of core information) */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xl font-sans leading-relaxed pl-4 md:pl-8 ml-2 border-l border-white/10" id="hero-intro">
              <strong className="text-slate-200 font-semibold font-display block text-lg mb-1.5">
                Founder of TC Pioneer
              </strong>
              Cybersecurity researcher and web developer focused on secure applications, IoT systems, and technical education for learners in Nepal.
            </p>

            {/* Premium Buttons Grid */}
            <div className="flex flex-wrap gap-3 w-full sm:w-auto" id="hero-buttons">
              <a
                href="#projects"
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest font-display transition-all duration-300 flex items-center space-x-2 bg-violet-600 hover:bg-violet-500 text-white shadow-lg ${glowShadow} hover:scale-[1.03] cursor-pointer`}
              >
                <span>View Projects</span>
                <ArrowRight size={13} />
              </a>

              <a
                href="#resume"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest font-display transition-all duration-300 border border-white/10 bg-slate-900/40 hover:bg-slate-800/40 text-slate-200 hover:text-white flex items-center space-x-2 cursor-pointer"
              >
                <span>Download CV</span>
                <Download size={13} />
              </a>

              <a
                href="https://tcpioneer.org"
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest font-display transition-all duration-300 border ${accentBorder} bg-slate-950/60 text-slate-300 hover:text-white flex items-center space-x-1.5 cursor-pointer`}
              >
                <span>Visit TCPioneer</span>
                <ExternalLink size={13} />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-widest font-display transition-all duration-300 text-slate-400 hover:text-white hover:bg-white/5 flex items-center space-x-1.5 cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Glass Circular Icons */}
            <div className="flex items-center space-x-3 pt-2" id="hero-socials">
              {[
                { icon: Github, link: PERSONAL_INFO.socials.github, label: 'GitHub' },
                { icon: Linkedin, link: PERSONAL_INFO.socials.linkedin, label: 'LinkedIn' },
                { icon: Instagram, link: PERSONAL_INFO.socials.instagram, label: 'Instagram' },
                { icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
                { icon: Globe, link: 'https://tcpioneer.org', label: 'TCP Platform' }
              ].map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/5 bg-slate-950/40 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-6 hover:border-violet-500/30 hover:shadow-[0_0_15px_rgba(124,58,237,0.25)] cursor-pointer"
                  title={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Premium Statistics Grid Below Hero layout */}
        <div className="mt-20 pt-10 border-t border-white/5" id="hero-stats">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "25+", label: "Completed Projects", desc: "Production-ready tools" },
              { value: "20+", label: "Workshops Led", desc: "Interactive safety sessions" },
              { value: "5+", label: "Communities Managed", desc: "Education & group nodes" },
              { value: "30+", label: "Core Technologies", desc: "Stack tools & firmware" }
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="glass-card p-5 rounded-2xl border border-white/5 flex flex-col justify-between items-start text-left relative overflow-hidden group hover:border-violet-500/20"
                id={`stat-card-${i}`}
              >
                {/* Micro accent corner bar */}
                <div className="absolute top-0 left-0 w-1.5 h-0 bg-violet-500 group-hover:h-full transition-all duration-300" />
                
                <div>
                  <span
                    className={`text-3xl md:text-4xl font-display font-extrabold transition-all duration-300 ${activeText}`}
                  >
                    {stat.value}
                  </span>
                  <h4 className="text-xs sm:text-sm font-semibold tracking-tight text-white mt-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-1">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
