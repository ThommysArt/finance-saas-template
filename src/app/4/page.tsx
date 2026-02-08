export default function PageFour() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="display-font text-7xl">Minimal Treasury</h1>
      <p className="max-w-xl mt-4 text-zinc-600">Ultra-minimal swiss layout with strict grid rhythm and monochrome controls for enterprise decision makers.</p>
      <section className="mt-10 grid md:grid-cols-2 gap-5">{['Cashflow AI', 'Risk map', 'Payment router', 'Forecast'].map((x) => <article key={x} className="border p-8 rounded-none"><h2 className="font-semibold">{x}</h2></article>)}</section>
    </main>
  );
}
