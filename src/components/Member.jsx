export default function Member() {
  const members = [
    'Bhima Afdhal',
    'Kevin Nugraha',
    'M Attariq',
    'M Fakhri Yusuf',
    'M Poetra Rahmat',
    'Vino Obama Purwanto',
  ];

  return (
    <section className="relative pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-fuchsia-500/5 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Team Members</h1>
          <p className="mt-3 text-white/70">Meet the creators behind RecLear.io</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((name) => (
            <div key={name} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur hover:bg-white/[0.07] transition">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-indigo-500 to-cyan-400 mx-auto shadow-lg" />
              <h3 className="mt-5 text-lg font-semibold text-white text-center">{name}</h3>
              <p className="mt-1 text-sm text-white/70 text-center">Game Developer</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#/" className="rounded-full px-6 py-3 text-white/80 hover:text-white border border-white/20 backdrop-blur bg-white/5 transition">Back to Home</a>
        </div>
      </div>
    </section>
  );
}
