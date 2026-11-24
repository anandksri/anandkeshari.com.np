import { useEffect, useRef, useState } from 'react';
import { ArrowDownRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/images/anand0x01.png';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodeIndex, setNodeIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let animationId = 0;
    const pointer = { x: -1000, y: -1000 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const nodes = Array.from({ length: 28 }, (_, index) => ({
      x: ((index * 83) % 997) / 997,
      y: ((index * 47 + 19) % 991) / 991,
      phase: index * 0.73,
    }));

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const time = frame * 0.008;

      nodes.forEach((node, index) => {
        const x = node.x * width + Math.sin(time + node.phase) * 7;
        const y = node.y * height + Math.cos(time * 0.7 + node.phase) * 5;

        context.beginPath();
        context.arc(x, y, index % 6 === 0 ? 2 : 1, 0, Math.PI * 2);
        context.fillStyle = index % 6 === 0 ? 'rgba(74,222,128,.75)' : 'rgba(148,163,184,.24)';
        context.fill();

        nodes.slice(index + 1).forEach((other, offset) => {
          if (offset > 4) return;
          const ox = other.x * width + Math.sin(time + other.phase) * 7;
          const oy = other.y * height + Math.cos(time * 0.7 + other.phase) * 5;
          const distance = Math.hypot(x - ox, y - oy);
          if (distance < 78) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(ox, oy);
            context.strokeStyle = `rgba(74,222,128,${0.08 * (1 - distance / 78)})`;
            context.stroke();
          }
        });

        const pointerDistance = Math.hypot(x - pointer.x, y - pointer.y);
        if (pointerDistance < 120) {
          context.beginPath();
          context.moveTo(x, y);
          context.lineTo(pointer.x, pointer.y);
          context.strokeStyle = 'rgba(74,222,128,.22)';
          context.stroke();
        }
      });

      frame += 1;
      animationId = window.requestAnimationFrame(draw);
    };

    const move = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    resize();
    if (reducedMotion) {
      draw();
      window.cancelAnimationFrame(animationId);
    } else {
      draw();
    }
    canvas.addEventListener('pointermove', move);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      canvas.removeEventListener('pointermove', move);
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setNodeIndex((value) => (value + 1) % 4), 3200);
    return () => window.clearInterval(timer);
  }, []);

  const movePortrait = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const identities = [
    ['DEFENSE', 'Detect. Harden. Respond.', '01'],
    ['BUILD', 'Ship resilient interfaces.', '02'],
    ['HARDWARE', 'Bring systems into the real world.', '03'],
    ['TEACH', 'Make difficult concepts usable.', '04'],
  ];

  return (
    <section id="home" className="identity-section relative flex min-h-[780px] items-center overflow-hidden pt-24 lg:min-h-screen">
      <canvas ref={canvasRef} className="identity-network absolute inset-0 h-full w-full" aria-hidden="true" />
      <div className="identity-orbit identity-orbit-one" />
      <div className="identity-orbit identity-orbit-two" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="identity-coordinate absolute left-5 top-24 hidden font-mono text-[8px] leading-5 text-slate-600 xl:block">
          <span>27.7172 N</span><br /><span>85.3240 E</span><br /><span>SYS / 01</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_390px]">
          <div className="relative z-10">
            <div className="identity-label mb-7">
              <span className="identity-label-mark">A0x01</span>
              <span>Digital identity specimen</span>
            </div>

            <h1 className="identity-name" aria-label="Anand Keshari">
              <span>ANAND</span>
              <span className="identity-name-outline">KESHARI</span>
            </h1>

            <div className="identity-manifest mt-8">
              <span className="identity-manifest-index">{identities[nodeIndex][2]}</span>
              <div>
                <strong className="identity-manifest-role">{identities[nodeIndex][0]}</strong>
                <p>{identities[nodeIndex][1]}</p>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              I work where code, security, hardware and people meet:
              building systems that are useful, understandable and harder to break.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="identity-action identity-action-primary">
                EXPLORE WORK <ArrowDownRight size={15} />
              </a>
              <a href="#contact" className="identity-action">OPEN CHANNEL</a>
            </div>

            <div className="mt-9 flex items-center gap-5">
              {[
                [Github, PERSONAL_INFO.socials.github, 'GitHub'],
                [Linkedin, PERSONAL_INFO.socials.linkedin, 'LinkedIn'],
                [Mail, `mailto:${PERSONAL_INFO.email}`, 'Email'],
              ].map(([Icon, href, label]) => (
                <a key={String(label)} href={String(href)} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer"
                  aria-label={String(label)} className="identity-social">
                  {(() => {
                    const SocialIcon = Icon as typeof Github;
                    return <SocialIcon size={16} />;
                  })()}
                </a>
              ))}
            </div>
          </div>

          <div className="identity-specimen relative mx-auto w-full max-w-[390px] lg:mx-0">
            <div className="specimen-header">
              <span>SUBJECT / A0X01</span>
              <span>AUTHENTICATED</span>
            </div>
            <div
              className="specimen-portrait"
              onMouseMove={movePortrait}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{ transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
            >
              <img src={profileImg} alt="Portrait of Anand Keshari" width="390" height="410" loading="eager" fetchPriority="high" />
              <div className="specimen-slice specimen-slice-a" />
              <div className="specimen-slice specimen-slice-b" />
              <div className="specimen-reticle"><i /><i /><i /><i /></div>
              <span className="specimen-scan">SCAN 27.7172 / 85.3240</span>
            </div>
            <div className="specimen-data">
              {[
                ['NODE', 'KTM / NP'],
                ['STATUS', 'ACTIVE'],
                ['FOCUS', 'TCP / SEC'],
              ].map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
