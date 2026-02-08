'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedButton } from '@/components/landing/interactive';

export function Hero() {
  const cardStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardStackRef.current) return;

    const cards = cardStackRef.current.querySelectorAll('.hero-card');
    const glow = cardStackRef.current.querySelector('.hero-glow');

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        y: (index: number) => index * 12 - 24,
        rotate: (index: number) => -22 + index * 13,
        duration: 2.8,
        stagger: 0.15,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      if (glow) {
        gsap.fromTo(glow, { scale: 0.9, opacity: 0.35 }, { scale: 1.2, opacity: 0.8, duration: 2.2, yoyo: true, repeat: -1 });
      }
    }, cardStackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="bg-[#050505] text-white reveal">
      <div className="grid-overlay">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-20 pt-8 md:grid-cols-[1.1fr_0.9fr] md:pt-12">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.2em] text-zinc-400">Trusted protection and expert guidance</p>
            <h1 className="display-font text-5xl leading-[0.9] md:text-8xl">SECURE YOUR FINANCIAL FUTURE</h1>
            <p className="mt-6 max-w-xs text-sm text-zinc-300">Trusted Protection and Expert Guidance for your Finances.</p>
            <div className="mt-8"><AnimatedButton label="GET STARTED" /></div>

            <div className="mt-10">
              <p className="text-xs text-zinc-400">● Active Users</p>
              <div className="mt-2 flex items-center gap-3">
                <p className="display-font text-5xl">95k+</p>
                <div className="flex -space-x-2">
                  {['#ff8f66', '#ffd8cc', '#f6ad93', '#ffe3d9', '#f4b9a5'].map((color) => (
                    <span key={color} style={{ backgroundColor: color }} className="h-8 w-8 rounded-full border-2 border-black" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative" ref={cardStackRef}>
            <div className="hero-glow absolute right-4 top-4 h-20 w-20 rounded-full bg-[var(--primary)]/35 blur-3xl" />
            <div className="hero-card absolute left-10 top-14 flex h-48 w-72 rounded-2xl bg-[var(--primary)] p-6 shadow-2xl shadow-[var(--primary)]/30">
              <div className="display-font text-5xl">finguard</div>
            </div>
            <div className="hero-card absolute left-8 top-40 h-48 w-72 rounded-2xl bg-zinc-600/95 p-6 shadow-xl">
              <p className="text-xs uppercase text-zinc-300">Balance</p>
              <p className="mt-8 text-3xl font-semibold">$58,238</p>
            </div>
            <div className="hero-card absolute left-6 top-64 h-48 w-72 rounded-2xl bg-zinc-900 p-6 shadow-xl">
              <p className="text-sm uppercase text-zinc-300">Payment Card</p>
              <p className="mt-8 text-2xl">•••• 5212</p>
            </div>

            <ul className="absolute right-0 top-24 space-y-8 text-sm">
              {['Selecting your provider', 'Set Up Your Account', 'Enjoy Seamless Banking'].map((item) => (
                <li key={item} className="flex items-center justify-end gap-3 text-right">
                  <span className="max-w-[125px]">{item}</span>
                  <ArrowUpRight className="h-4 w-4 text-zinc-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
