import { TIMELINE } from '../data';

export default function Experience() {
  const entries = TIMELINE.slice(0, 5);

  return (
    <section id="experience" className="relative border-b border-slate-800/80 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-5 font-mono text-[10px] tracking-[0.18em] text-emerald-400">02 / EXPERIENCE</p>
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">WHERE I&apos;VE WORKED</h2>
          </div>
        </div>

        <div className="border-t border-slate-800">
          {entries.map((item, index) => (
            <div key={item.title} className="group grid gap-4 border-b border-slate-800 py-6 sm:grid-cols-[110px_1fr_1.4fr] sm:items-start">
              <span className="font-mono text-[10px] text-emerald-400">{item.year}</span>
              <div>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="mt-1 font-mono text-[10px] text-slate-600">{item.subtitle}</p>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                {item.description.split('. ')[0].replace(/\.$/, '')}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
