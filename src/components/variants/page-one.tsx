'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedButton } from '@/components/landing/interactive';

gsap.registerPlugin(ScrollTrigger);

export function PageOneLanding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.v1-reveal').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 82%' } });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#06131f] text-white">
      <section className="v1-reveal mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Neon Wealth OS</p>
        <h1 className="display-font mt-4 text-7xl leading-[0.9]">BOLD BANKING FOR DIGITAL BUILDERS</h1>
        <p className="mt-5 max-w-2xl text-cyan-100/80">Cyber-inspired landing with luminous cards, modular conversion rails, personalized onboarding journeys, and live treasury observability for modern internet businesses.</p>
        <div className="mt-8"><AnimatedButton label="Start now" className="bg-cyan-400 text-black" /></div>
      </section>

      <section className="v1-reveal mx-auto grid max-w-6xl gap-4 px-6 pb-12 md:grid-cols-3">
        {['Vault', 'Pulse', 'Orbit'].map((item) => (
          <article key={item} className="rounded-3xl border border-cyan-300/40 bg-cyan-400/10 p-6">
            <h2 className="text-2xl font-semibold">{item}</h2>
            <p className="mt-3 text-sm text-cyan-100/80">Automated liquidity, payment orchestration, and predictive analytics in one composable module.</p>
          </article>
        ))}
      </section>

      <section className="v1-reveal mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-3xl border border-cyan-400/40 p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Why teams switch</p>
          <ul className="mt-4 space-y-3 text-cyan-50">
            <li>• 42% faster monthly close across multi-entity books.</li>
            <li>• 65% reduction in manual treasury operations.</li>
            <li>• Unified controls for payments, cards, and approvals.</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-cyan-500/15 p-8">
          <p className="display-font text-6xl">98.4%</p>
          <p className="mt-2 text-cyan-100">Payment success rate across global rails with adaptive routing and real-time fallback.</p>
        </div>
      </section>
    </main>
  );
}
