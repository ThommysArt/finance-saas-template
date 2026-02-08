export default function PageTwo() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-800 text-white p-10">
      <h1 className="display-font text-7xl">Neon Wealth OS</h1>
      <p className="max-w-xl mt-4 text-zinc-300">A cyber-inspired finance landing page with glowing gradients, modular product cards and conversion-first CTA rails.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-4">{['Vault', 'Pulse', 'Orbit'].map((x) => <div key={x} className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6"><h2 className="text-2xl">{x}</h2></div>)}</div>
    </main>
  );
}
