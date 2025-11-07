import { Sparkles, Layers, Cpu, Gamepad2 } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: 'Game Development',
    desc: 'End-to-end production for indie titles and branded experiences across mobile, web, and desktop.'
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: '3D Art & Worlds',
    desc: 'Stylized characters, environments, and shaders tailored to your visual identity and performance needs.'
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: 'Systems & Gameplay',
    desc: 'Responsive controls, juicy feedback, and scalable systems that keep players engaged.'
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Prototyping & R&D',
    desc: 'Rapid iteration with realtime engines and WebGL to validate mechanics and UX early.'
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuchsia-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What We Do</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">We combine art, code, and sound to craft memorable interactive experiences that feel alive.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-6 hover:bg-white/[0.06] transition">
              <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 text-white p-3 shadow-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
