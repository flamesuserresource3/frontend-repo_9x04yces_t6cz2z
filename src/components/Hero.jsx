import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Gaming • 3D • Interactive
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Building Playful Worlds for Ambitious Brands
          </h1>
          <p className="mt-6 text-lg text-white/80">
            RecLear.io crafts immersive game experiences, interactive prototypes, and realtime 3D content. From concept to launch, we bring your universe to life.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 px-6 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:brightness-110 transition">
              Get a Quote
            </a>
            <a href="#work" className="rounded-full px-6 py-3 text-white/80 hover:text-white border border-white/20 backdrop-blur bg-white/5 transition">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
