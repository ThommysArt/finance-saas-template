export function PageTwoLanding() {
  return (
    <main className="min-h-screen bg-[#f8f4ed] text-[#1d1d1d]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="display-font text-7xl">PRIVATE BANKING, REFINED.</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-700">Editorial luxury concept with warm neutrals, strict typography and understated premium hierarchy.</p>
        <div className="mt-10 space-y-4">
          {['Concierge advisory', 'Global card privileges', 'Family office dashboards'].map((item) => (
            <article key={item} className="rounded-3xl border border-[#e2d9cb] bg-white p-8 text-2xl">{item}</article>
          ))}
        </div>
      </section>
    </main>
  );
}
