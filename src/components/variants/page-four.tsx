export function PageFourLanding() {
  return (
    <main className="min-h-screen bg-[#0d1028] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="display-font text-7xl">COSMIC FINANCE STACK</h1>
        <p className="mt-4 max-w-2xl text-indigo-200">Playful futuristic concept with planetary gradients, rounded UI islands, and immersive product storytelling.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {['Galaxy Card', 'Astro Analytics', 'Meteor Payments', 'Lunar Savings'].map((item) => (
            <article key={item} className="rounded-3xl border border-indigo-300/30 bg-indigo-400/10 p-8">{item}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
