export default function PageThree() {
  return (
    <main className="min-h-screen bg-[#f8f4ed] text-[#1d1d1d] p-10">
      <h1 className="display-font text-7xl">Bespoke Private Banking</h1>
      <p className="max-w-xl mt-4">Editorial luxury style: large serif-like blocks, warm neutrals, curated spacing and understated premium hierarchy.</p>
      <div className="mt-10 space-y-4">{['Concierge advisory', 'Global card privileges', 'Family office dashboards'].map((x) => <div key={x} className="rounded-2xl bg-white p-8 border">{x}</div>)}</div>
    </main>
  );
}
