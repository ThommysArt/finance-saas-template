'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { AnimatedButton } from '@/components/landing/interactive';

export function PageFiveLanding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.v5-pop', { opacity: 0, scale: 0.97, y: 14 }, { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#f3fff7] text-[#0d2d1a]">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="v5-pop text-xs uppercase tracking-[0.3em] text-emerald-700">Eco Finance</p>
        <h1 className="v5-pop display-font mt-4 text-7xl leading-[0.9]">SUSTAINABLE BANKING FOR MODERN TEAMS</h1>
        <p className="v5-pop mt-4 max-w-2xl text-emerald-800/80">A bright trust-first marketing direction centered around transparent pricing, measurable climate impact analytics, and frictionless global payment operations.</p>
        <div className="v5-pop mt-8"><AnimatedButton label="Join Waitlist" className="bg-emerald-600" /></div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-12 md:grid-cols-3">
        {['Carbon-aware cards', 'Impact reports', 'Green treasury'].map((item) => (
          <div key={item} className="v5-pop rounded-2xl border border-emerald-200 bg-white p-6">
            <h2 className="text-2xl font-semibold">{item}</h2>
            <p className="mt-2 text-emerald-900/70">Automated programs that track emissions and route capital toward verified sustainability projects.</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-2">
        <article className="v5-pop rounded-3xl bg-emerald-100 p-8">
          <h3 className="display-font text-5xl">$84M</h3>
          <p className="mt-2">Capital directed to climate-positive initiatives through partner network pools.</p>
        </article>
        <article className="v5-pop rounded-3xl bg-emerald-700 p-8 text-white">
          <h3 className="display-font text-5xl">71%</h3>
          <p className="mt-2 text-emerald-100">Reduction in manual ESG reporting overhead after switching to unified automation.</p>
        </article>
      </section>
    </main>
  );
}
