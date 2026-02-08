'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { AnimatedButton } from '@/components/landing/interactive';

export function PageThreeLanding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.v3-in', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 0.55, stagger: 0.08 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="v3-in display-font text-7xl">MINIMAL TREASURY</h1>
        <p className="v3-in mt-4 max-w-xl text-zinc-600">Ultra-minimal Swiss grid with monochrome controls, strict hierarchy, and enterprise-grade precision built for CFO offices and finance operations teams.</p>
        <div className="v3-in mt-8"><AnimatedButton label="Request Demo" className="bg-black" /></div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-12 md:grid-cols-2">
        {['Cashflow AI', 'Risk map', 'Payment router', 'Forecast model'].map((item) => (
          <div key={item} className="v3-in border border-zinc-200 p-10">
            <h2 className="text-2xl font-semibold">{item}</h2>
            <p className="mt-3 text-zinc-600">Operational intelligence with auditable trails, anomaly flags, and what-if planning for strategic decisions.</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="v3-in grid gap-4 border-t border-zinc-200 pt-8 text-sm uppercase tracking-[0.2em] text-zinc-500 md:grid-cols-4">
          <p>ISO 27001 controls</p><p>SOC 2 Type II</p><p>GDPR Ready</p><p>99.99% uptime SLA</p>
        </div>
      </section>
    </main>
  );
}
