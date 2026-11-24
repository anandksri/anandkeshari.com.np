import { SKILL_CATEGORIES } from '../data';
import { NumberTicker } from '../../components/ui/number-ticker';

export default function About() {
  return (
    <section id="about" className="border-b border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-emerald-400">01 / SYSTEM PROFILE</p>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl">
              OPERATOR.<br /><span className="text-outline">NOT VENDOR.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400">
              I build in the overlap between offensive curiosity, defensive engineering,
              physical hardware and clear technical education.
            </p>
            <div className="mt-8 grid grid-cols-2 border border-slate-800">
              <div className="border-r border-slate-800 p-4"><b className="text-xl text-white"><NumberTicker value={2022} startValue={2000} className="!text-white" /></b><span className="mt-1 block font-mono text-[8px] text-slate-600">FIRST BUILD</span></div>
              <div className="p-4"><b className="text-xl text-white">KTM</b><span className="mt-1 block font-mono text-[8px] text-slate-600">BASE NODE</span></div>
            </div>
          </div>

          <div className="capability-table">
            {SKILL_CATEGORIES.slice(0, 4).map((category, index) => (
              <div key={category.title} className="capability-row">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-emerald-400">0{index + 1}</span>
                  <strong className="text-sm text-slate-200">{category.title}</strong>
                </div>
                <div className="skill-bars">
                  {category.skills.slice(0, 3).map((skill) => (
                    <div key={skill.name} className="skill-bar-row">
                      <span>{skill.name}</span>
                      <div className="skill-bar"><i style={{ width: `${skill.level}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
