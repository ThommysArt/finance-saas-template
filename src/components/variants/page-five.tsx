import { Button } from '@/components/ui/button';

export function PageFiveLanding() {
  return (
    <main className="min-h-screen bg-[#f3fff7] text-[#0d2d1a]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">Eco Finance</p>
        <h1 className="display-font mt-4 text-7xl leading-[0.9]">SUSTAINABLE BANKING FOR MODERN TEAMS</h1>
        <p className="mt-4 max-w-2xl text-emerald-800/80">A bright, trust-first marketing direction built around transparency, impact analytics, and frictionless payments.</p>
        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-500">Join Waitlist</Button>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {['Carbon-aware cards', 'Impact reports', 'Green treasury'].map((item) => (
            <div key={item} className="rounded-2xl border border-emerald-200 bg-white p-6">{item}</div>
          ))}
        </div>
      </section>
    </main>
  );
}
