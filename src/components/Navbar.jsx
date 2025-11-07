import { useState } from 'react';
import { Gamepad2, Rocket, Sparkles, Users } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
    { label: 'Members', href: '#/member', icon: <Users className="h-4 w-4" /> },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 text-white">
                <Gamepad2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-white tracking-tight">RecLear.io</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-indigo-400/50"
              >
                <Rocket className="h-4 w-4" />
                Start a Project
              </a>
            </nav>

            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden text-white/80 hover:text-white"
              onClick={() => setOpen(!open)}
            >
              <Sparkles className="h-6 w-6" />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-white/80 hover:text-white inline-flex items-center gap-2"
                    onClick={() => setOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"
                >
                  <Rocket className="h-4 w-4" />
                  Start a Project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
