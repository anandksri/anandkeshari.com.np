const faqs = [
  {
    question: 'What does Anand Keshari work on?',
    answer: 'Anand works across cybersecurity, full-stack web development and IoT. His work includes secure web applications, practical security education and hardware projects.',
  },
  {
    question: 'Where is Anand Keshari based?',
    answer: 'Anand is based in Kathmandu, Nepal, and contributes through TC Pioneer and independent technical projects.',
  },
  {
    question: 'How can I contact Anand?',
    answer: 'Use the contact form on this website or email anandkeshari0711@gmail.com for project, collaboration and workshop inquiries.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="border-b border-slate-800/80 py-20 sm:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-emerald-400">05 / FAQ</p>
        <h2 id="faq-heading" className="text-3xl font-black tracking-[-0.04em] text-white sm:text-5xl">
          COMMON <span className="text-outline">QUESTIONS</span>
        </h2>
        <div className="mt-10 border-t border-slate-800">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-slate-800">
              <summary className="cursor-pointer list-none py-5 text-sm font-semibold text-slate-200 marker:hidden">
                <span className="mr-3 font-mono text-[10px] text-emerald-400">+</span>
                {faq.question}
              </summary>
              <p className="max-w-3xl pb-5 pl-7 text-sm leading-7 text-slate-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
