import { Button } from '@/components/ui/button';

export function PageOneLanding() {
  return (
    <main className="min-h-screen bg-[#06131f] text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Neon Wealth OS</p>
        <h1 className="display-font mt-4 text-7xl">BOLD BANKING FOR DIGITAL BUILDERS</h1>
        <p className="mt-5 max-w-2xl text-cyan-100/80">Cyber-inspired landing page with luminous cards, modular conversion blocks, and high-speed onboarding cues.</p>
        <Button className="mt-8 bg-cyan-400 text-black hover:bg-cyan-300">Start now</Button>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {['Vault', 'Pulse', 'Orbit'].map((item) => <article key={item} className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">{item}</article>)}
        </div>
      </section>
    </main>
  );
}
