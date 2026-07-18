import { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle2, ShieldCheck, Facebook, MessageCircle } from 'lucide-react';

interface ContactProps {
  glowTheme: 'violet' | 'teal';
}

export default function Contact({ glowTheme }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/25 text-violet-400' : 'bg-emerald-600/25 text-emerald-400';
  const activeBorder = glowTheme === 'violet' ? 'border-violet-500/25 focus:border-violet-500/80 focus:ring-violet-500/20' : 'border-emerald-500/25 focus:border-emerald-500/80 focus:ring-emerald-500/20';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      {/* Background decoration */}
      <div
        className={`absolute top-1/2 left-10 w-80 h-80 rounded-full glow-orb opacity-10 transition-all duration-1000 ${
          glowTheme === 'violet' ? 'bg-violet-900' : 'bg-emerald-950'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <Mail size={14} className={activeText} />
            <span>Contact</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            Contact Me
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Column 1: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative">
              <h3 className="text-lg font-bold text-white font-display mb-2 flex items-center gap-2">
                <ShieldCheck size={18} className={activeText} />
                <span>Contact Form</span>
              </h3>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mb-6">
                Send a message to discuss projects, workshops, or collaborations.
              </p>

              {success ? (
                <div className="p-6 rounded-xl border border-emerald-500/20 bg-emerald-950/20 text-center space-y-3 animate-in zoom-in-95 duration-300">
                  <CheckCircle2 size={40} className="text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-display">
                    Message sent successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you. Your message has been delivered to Anand Keshari. Expect a response within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email in grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Sender Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 transition-all ${activeBorder}`}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 transition-all ${activeBorder}`}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Cyber audit consulting or portfolio setup"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 transition-all ${activeBorder}`}
                    />
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your project or question"
                      className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 transition-all ${activeBorder}`}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full py-3 rounded-lg text-xs font-semibold uppercase tracking-wider font-display transition-all flex items-center justify-center space-x-2 cursor-pointer ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      } ${
                        glowTheme === 'violet'
                          ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-black shadow-lg'
                      }`}
                      id="contact-submit-btn"
                    >
                      <Send size={14} />
                      <span>{loading ? "Sending message..." : "Send Message"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Details & Nepal SVG Map representation */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Contacts List */}
            <div className="bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] space-y-4">
              <h4 className="text-sm font-bold text-white font-display mb-2">
                Contact Details
              </h4>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center space-x-3 text-gray-400">
                  <div className={`p-1.5 rounded-md bg-slate-900 border border-white/5 ${activeText}`}>
                    <Mail size={14} />
                  </div>
                  <span>{PERSONAL_INFO.email}</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-400">
                  <div className={`p-1.5 rounded-md bg-slate-900 border border-white/5 ${activeText}`}>
                    <MapPin size={14} />
                  </div>
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                {/* Availability Badge */}
                <div className="pt-2 flex items-center space-x-2 font-mono text-[10px] text-gray-500 uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 pulse-dot"></span>
                  </span>
                  <span>Availability: Available</span>
                </div>
              </div>
            </div>

            {/* Nepal Geographic cyber-wireframe representation as our Interactive Map */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 overflow-hidden relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 text-[10px] font-mono text-gray-500">
                <span>Nepal Operations Map</span>
                <span className={activeText}>KATHMANDU</span>
              </div>

              {/* Geographic Wireframe Outline representing Nepal map */}
              <svg viewBox="0 0 400 160" className="w-full h-auto" id="nepal-cyber-map">
                {/* Horizontal grid lines */}
                <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />

                {/* Futuristic wireframe mesh outline of Nepal */}
                <polygon
                  points="20,100 80,70 160,80 240,65 320,80 380,105 320,125 240,110 160,115 80,115"
                  fill="none"
                  stroke={glowTheme === 'violet' ? 'rgba(124, 58, 237, 0.15)' : 'rgba(16, 185, 129, 0.15)'}
                  strokeWidth="2"
                />
                
                <polygon
                  points="25,95 78,75 162,82 238,68 318,82 375,100 322,120 238,113 162,112 78,112"
                  fill="none"
                  stroke={glowTheme === 'violet' ? '#7C3AED' : '#10B981'}
                  strokeWidth="1"
                  strokeDasharray="4, 4"
                  className="animate-pulse"
                />

                {/* Core Coordinate nodes */}
                {/* Kathmandu Center (approx coordinates relative) */}
                <circle cx="210" cy="90" r="4" fill={glowTheme === 'violet' ? '#8B5CF6' : '#10B981'} className="animate-ping" />
                <circle cx="210" cy="90" r="3" fill="#fff" />
                
                {/* Pokhara Node */}
                <circle cx="150" cy="92" r="2" fill="rgba(255,255,255,0.4)" />

                {/* Nepal East (Biratnagar Area) */}
                <circle cx="340" cy="110" r="2" fill="rgba(255,255,255,0.4)" />

                {/* Map labels */}
                <text x="210" y="115" fill="#fff" fontSize="9" fontFamily="monospace" fontWeight="bold">
                  KATHMANDU (KTM)
                </text>
                <text x="20" y="25" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">
                  LAT: 27.7172° N • LON: 85.3240° E
                </text>
              </svg>

              <div className="mt-4 text-left font-mono text-[9px] text-gray-500">
                OPERATIONAL COVERAGE: Kathmandu Valley & regional Nepalese learning cells.
              </div>
            </div>

            {/* Social linkages footer */}
            <div className="flex justify-between items-center px-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase">External Channels:</span>
              <div className="flex space-x-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-colors"
                  title="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-colors"
                  title="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.facebook}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-colors"
                  title="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="https://wa.me/9779746819176"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
