import { Star } from 'lucide-react';

const projects = [
  {
    title: 'Neon Drift',
    tag: 'Arcade Racing',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Cosmic Quest',
    tag: 'Action Adventure',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Synth Runner',
    tag: 'Endless Runner',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-2xl">A quick glimpse of worlds we’ve built and gameplay systems we’ve tuned to perfection.</p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-fuchsia-300">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm">Playable prototypes on request</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <img src={p.image} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="text-xs text-white/70">{p.tag}</span>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
