'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { AnimatedButton } from '@/components/landing/interactive';

export function PageTwoLanding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.v2-fade', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f4ed] text-[#1d1d1d]">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="v2-fade text-xs uppercase tracking-[0.25em] text-[#8f7654]">Bespoke Wealth</p>
        <h1 className="v2-fade display-font mt-4 text-7xl leading-[0.9]">PRIVATE BANKING, REFINED.</h1>
        <p className="v2-fade mt-6 max-w-2xl text-lg text-zinc-700">Editorial luxury concept with warm neutrals, concierge workflows, and white-glove reporting for family offices, founders, and executive teams managing international assets.</p>
        <div className="v2-fade mt-8"><AnimatedButton label="Book Consultation" className="bg-[#322314]" /></div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-4 px-6 pb-12">
        {['Concierge advisory', 'Global card privileges', 'Family office dashboards', 'Estate-level controls'].map((item) => (
          <article key={item} className="v2-fade rounded-3xl border border-[#e2d9cb] bg-white p-8">
            <h2 className="text-2xl font-semibold">{item}</h2>
            <p className="mt-2 text-zinc-600">Strategic support combining treasury policy, discretionary services, and international liquidity management.</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-3">
        {['$12B+ Assets supervised', '84 countries covered', '24/7 relationship team'].map((item) => (
          <div key={item} className="v2-fade rounded-2xl bg-[#efe7d9] p-6 text-xl">{item}</div>
        ))}
      </section>
    </main>
  );
}
