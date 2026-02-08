export function PageThreeLanding() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="display-font text-7xl">MINIMAL TREASURY</h1>
        <p className="mt-4 max-w-xl text-zinc-600">Ultra-minimal Swiss grid, monochrome controls, and enterprise-ready information architecture.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {['Cashflow AI', 'Risk map', 'Payment router', 'Forecast model'].map((item) => (
            <div key={item} className="border border-zinc-200 p-10 text-2xl">{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
