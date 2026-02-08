'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatedButton } from '@/components/landing/interactive';

gsap.registerPlugin(ScrollTrigger);

export function PageFourLanding() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.v4-rise').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 38 }, { opacity: 1, y: 0, duration: 0.7, scrollTrigger: { trigger: el, start: 'top 80%' } });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#0d1028] text-white">
      <section className="v4-rise mx-auto max-w-6xl px-6 py-20">
        <h1 className="display-font text-7xl">COSMIC FINANCE STACK</h1>
        <p className="mt-4 max-w-2xl text-indigo-200">Playful futuristic concept with planetary gradients, rounded UI islands, narrative-driven conversion sections, and delightful micro interactions.</p>
        <div className="mt-8"><AnimatedButton label="Launch Mission" className="bg-indigo-500" /></div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-6 pb-12 md:grid-cols-2">
        {['Galaxy Card', 'Astro Analytics', 'Meteor Payments', 'Lunar Savings'].map((item) => (
          <article key={item} className="v4-rise rounded-3xl border border-indigo-300/30 bg-indigo-400/10 p-8">
            <h2 className="text-3xl font-semibold">{item}</h2>
            <p className="mt-2 text-indigo-100/80">Cross-border spend visibility, adaptive limits, and AI-driven recommendations for growth teams.</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-20 md:grid-cols-3">
        {['260ms avg authorization latency', '130+ local payout routes', '4.7x faster finance ops workflows'].map((item) => (
          <div key={item} className="v4-rise rounded-2xl bg-indigo-500/15 p-6">{item}</div>
        ))}
      </section>
    </main>
  );
}
