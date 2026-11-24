import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import {
  TerminalAnimationRoot,
  TerminalAnimationWindow,
  TerminalAnimationContent,
  TerminalAnimationOutput,
  TerminalAnimationCommandBar,
  TerminalAnimationTabList,
  TerminalAnimationTabTrigger,
  TerminalAnimationOutputLine,
  TerminalAnimationBlinkingCursor,
  TerminalAnimationTrailingPrompt,
  type TabContent,
} from '../../components/ui/terminal-animation';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setError('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      message: String(formData.get('message') || ''),
      website: String(formData.get('website') || ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'The message could not be delivered.');
      form.reset();
      setSent(true);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'The message could not be delivered.');
    } finally {
      setSending(false);
    }
  };

  const terminalTabs: TabContent[] = [
    {
      label: 'identity',
      command: './inspect anand0x01',
      lines: [
        { text: 'loading subject profile...', delay: 180, color: 'text-emerald-400' },
        { text: 'focus: cybersecurity / full-stack / IoT', delay: 220 },
        { text: 'base: Kathmandu, Nepal', delay: 180 },
      ],
    },
    {
      label: 'network',
      command: 'nc -z tcpioneer.org 443',
      lines: [
        { text: 'tcpioneer.org 443/tcp open', delay: 220, color: 'text-emerald-400' },
        { text: 'TLS: verified', delay: 180 },
        { text: 'channel: ready', delay: 180 },
      ],
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10">
          <p className="mb-4 font-mono text-[10px] tracking-[0.18em] text-emerald-400">04 / OPEN CHANNEL</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">MAKE <span className="text-outline">CONTACT</span></h2>
        </div>

        <div className="contact-shell">
          <div className="contact-aside">
            <p className="font-mono text-[9px] text-slate-600">DESTINATION</p>
            <div className="mt-5 space-y-4">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-link"><Mail size={14} /><span>{PERSONAL_INFO.email}</span></a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="contact-link"><Github size={14} /><span>github/anandksri</span></a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="contact-link"><Linkedin size={14} /><span>linkedin/anand-keshari</span></a>
            </div>
            <div className="mt-10 border-t border-slate-800 pt-5 font-mono text-[9px] text-slate-600">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              CHANNEL AVAILABLE
            </div>
            <TerminalAnimationRoot tabs={terminalTabs} alwaysDark className="mt-6 border border-slate-800 bg-[#020504] p-3">
              <TerminalAnimationTabList className="mb-3 flex gap-2">
                {terminalTabs.map((tab, index) => (
                  <TerminalAnimationTabTrigger
                    key={tab.label}
                    index={index}
                    className="border border-slate-800 px-2 py-1 font-mono text-[8px] text-slate-500 data-[state=active]:border-emerald-400/50 data-[state=active]:text-emerald-400"
                  >
                    {tab.label}
                  </TerminalAnimationTabTrigger>
                ))}
              </TerminalAnimationTabList>
              <TerminalAnimationWindow minHeight="190px" animateOnVisible={false} backgroundColor="#020504" className="rounded-none border border-slate-800">
                <TerminalAnimationContent className="px-3 py-3 font-mono text-[8px]">
                  <TerminalAnimationCommandBar className="mb-3 text-emerald-400" />
                  <TerminalAnimationOutput
                    renderLine={(line, index, visible) => visible ? (
                      <TerminalAnimationOutputLine key={index} line={line} visible className={line.color ?? 'text-slate-500'} />
                    ) : null}
                  />
                  <TerminalAnimationTrailingPrompt className="mt-3 text-emerald-400">
                    anand@kathmandu:~$ <TerminalAnimationBlinkingCursor />
                  </TerminalAnimationTrailingPrompt>
                </TerminalAnimationContent>
              </TerminalAnimationWindow>
            </TerminalAnimationRoot>
          </div>

          <div className="contact-terminal">
            <div className="terminal-topbar">
              <span>secure-message.sh</span>
              <span>ENCRYPTED</span>
            </div>
            {sent ? (
              <div className="flex min-h-72 flex-col items-center justify-center px-6 text-center">
                <div className="mb-5 h-px w-16 bg-emerald-400" />
                <p className="font-mono text-xs text-emerald-400">[PACKET DELIVERED]</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                  Your message reached the inbox. Anand can reply directly through the email address you provided.
                </p>
                <button type="button" onClick={() => setSent(false)} className="mt-6 border border-slate-800 px-4 py-2 font-mono text-[9px] text-slate-400 hover:border-emerald-400/50 hover:text-emerald-400">
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="terminal-form">
                <label htmlFor="contact-name">sender_name</label>
                <input id="contact-name" name="name" required minLength={2} maxLength={80} placeholder="anonymous@node" autoComplete="name" />
                <label htmlFor="contact-email">return_channel</label>
                <input id="contact-email" name="email" required type="email" maxLength={254} placeholder="you@example.com" autoComplete="email" />
                <label htmlFor="contact-message">payload</label>
                <textarea id="contact-message" name="message" required minLength={10} maxLength={3000} rows={5} placeholder="Describe the operation..." />
                <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                {error && <p className="col-span-full font-mono text-[9px] text-red-400" role="alert">{error}</p>}
                <button type="submit" disabled={sending}><Send size={13} /> {sending ? 'transmitting...' : 'transmit_packet'}</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
