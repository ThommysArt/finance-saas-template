export default function PageFive() {
  return (
    <main className="min-h-screen bg-[#0b1020] text-white p-10">
      <h1 className="display-font text-7xl">Cosmic Finance Stack</h1>
      <p className="max-w-xl mt-4 text-indigo-200">A playful futuristic concept with deep-space palette, rounded UI islands and bold visual storytelling.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">{['Galaxy Card', 'Astro Analytics', 'Meteor Payments', 'Lunar Savings'].map((x) => <div key={x} className="rounded-3xl p-8 bg-indigo-500/20 border border-indigo-300/30">{x}</div>)}</div>
    </main>
  );
}
