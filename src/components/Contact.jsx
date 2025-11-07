import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll get back to you within 24 hours.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s Build Your World</h2>
            <p className="mt-3 text-white/70 max-w-prose">Tell us about your vision, timeline, and platform goals. We’ll propose a scope that balances art, tech, and budget.</p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-white/70">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                Web • Mobile • Desktop
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                Unity • Unreal • WebGL
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                Multiplayer • Netcode
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                Art • Audio • VFX
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70">Name</label>
                <input required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="you@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-white/70">Project Brief</label>
              <textarea rows="5" required className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/40" placeholder="Tell us about your idea, platforms, style, scope..." />
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">
                <Send className="h-4 w-4" /> Send Request
              </button>
              <p className="text-sm text-white/70">{status}</p>
            </div>
          </form>
        </div>

        <footer className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} RecLear.io. All rights reserved.</p>
          <p>Made with passion for games and playful design.</p>
        </footer>
      </div>
    </section>
  );
}
