import React from 'react';
import { IOT_LAB_CARDS } from '../data';
import LucideIcon from './LucideIcon';
import { Cpu, HardDrive, ShieldAlert, Wifi, Terminal } from 'lucide-react';

interface IoTSectionProps {
  glowTheme: 'violet' | 'teal';
}

export default function IoTSection({ glowTheme }: IoTSectionProps) {
  const activeText = glowTheme === 'violet' ? 'text-violet-400' : 'text-emerald-400';
  const activeBg = glowTheme === 'violet' ? 'bg-violet-600/25 text-violet-400' : 'bg-emerald-600/25 text-emerald-400';
  const activeBorder = glowTheme === 'violet' ? 'border-violet-500/30' : 'border-emerald-500/30';
  const strokeColor = glowTheme === 'violet' ? '#7C3AED' : '#10B981';

  return (
    <section id="iot-lab" className="py-28 relative overflow-hidden bg-[#070b1e] border-y border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
      {/* Background radial highlight */}
      <div
        className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full glow-orb opacity-10 transition-all duration-1000 ${
          glowTheme === 'violet' ? 'bg-violet-900' : 'bg-emerald-950'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-2 flex items-center justify-center gap-1.5">
            <Cpu size={14} className={activeText} />
            <span>HARDWARE RESEARCH ZONE</span>
          </h2>
          <p className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-none">
            IoT & Hardware Lab
          </p>
          <div className={`h-1 w-12 mx-auto mt-4 rounded-full ${glowTheme === 'violet' ? 'bg-violet-500' : 'bg-emerald-500'}`} />
        </div>

        {/* Layout split: Animated SVG layout left, Cards grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Animated SVG Hardware Circuit blueprint */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center">
            <div className="bg-slate-950/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] w-full relative overflow-hidden max-w-md">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 font-mono text-[10px] text-gray-500">
                <span>ESP32 System Schematic</span>
                <span className={`px-2 py-0.5 rounded ${activeBg} text-[8px]`}>ACTIVE</span>
              </div>

              {/* Responsive SVG Container */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-auto max-h-[300px]"
                id="iot-hardware-svg"
              >
                {/* Circuit Grid background */}
                <defs>
                  <pattern id="circuitGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuitGrid)" rx="10" />

                {/* Animated trace lines */}
                <path
                  d="M 50,150 L 110,150"
                  stroke={strokeColor}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5, 5"
                  className="animate-pulse"
                />
                <path
                  d="M 190,150 L 250,150"
                  stroke={strokeColor}
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5, 5"
                  className="animate-pulse"
                />
                <path d="M 150,50 L 150,110" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />
                <path d="M 150,190 L 150,250" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="none" />

                {/* Central Microprocessor Core (ESP32) */}
                <rect
                  x="110"
                  y="110"
                  width="80"
                  height="80"
                  rx="6"
                  fill="#0F172A"
                  stroke={strokeColor}
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text x="150" y="145" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="monospace" fontWeight="bold">
                  ESP32 CORE
                </text>
                <text x="150" y="160" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">
                  802.11 b/g/n
                </text>

                {/* Satellite Nodes (Sensors, RFID, Wifi) */}
                {/* Left Node: Wifi Antenna */}
                <circle cx="50" cy="150" r="15" fill="#090D1F" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <path d="M 43,150 Q 50,140 57,150" stroke={strokeColor} strokeWidth="1.5" fill="none" />
                <text x="50" y="180" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                  RF DIAG
                </text>

                {/* Right Node: RFID Sensor */}
                <circle cx="250" cy="150" r="15" fill="#090D1F" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <rect x="242" y="142" width="16" height="16" fill="none" stroke={strokeColor} strokeWidth="1" />
                <text x="250" y="180" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                  RFID / NFC
                </text>

                {/* Top Node: Power Relay */}
                <circle cx="150" cy="50" r="15" fill="#090D1F" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="145" y1="50" x2="155" y2="50" stroke={strokeColor} strokeWidth="1.5" />
                <text x="150" y="30" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                  POWER 3.3V
                </text>

                {/* Bottom Node: I2C Diagnostics */}
                <circle cx="150" cy="250" r="15" fill="#090D1F" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <text x="150" y="254" textAnchor="middle" fill={strokeColor} fontSize="11" fontFamily="monospace">
                  I2C
                </text>
                <text x="150" y="280" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="7" fontFamily="monospace">
                  GPIO BUS
                </text>

                {/* Flowing animated packet particle */}
                <circle cx="110" cy="150" r="4" fill={strokeColor} className="animate-ping" />
              </svg>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center space-x-2 text-left">
                <Terminal size={14} className={activeText} />
                <span className="font-mono text-[9px] text-gray-500 leading-tight">
                  Wired layout diagram for ESP32 and RFID controllers.
                </span>
              </div>
            </div>
          </div>

          {/* Cards Grid representing laboratory topics */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {IOT_LAB_CARDS.map((card, i) => (
              <div
                key={card.title}
                className={`bg-slate-950/70 backdrop-blur-md p-5 rounded-xl border border-white/10 text-left flex flex-col justify-between group transition-all duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.8)] ${
                  glowTheme === 'violet'
                    ? 'hover:border-violet-500/35 hover:shadow-[0_20px_45px_rgba(124,58,237,0.12)]'
                    : 'hover:border-emerald-500/35 hover:shadow-[0_20px_45px_rgba(16,185,129,0.12)]'
                }`}
                id={`iot-card-${i}`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${activeBg}`}>
                      <LucideIcon name={card.icon} size={16} />
                    </div>
                    <h3 className="font-display font-bold text-white text-sm tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                {/* Card category info */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase">
                  <span>Lab Component 0{i + 1}</span>
                  <span className={activeText}>Active</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
