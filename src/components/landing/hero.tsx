'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current) return;
    const cards = wrap.current.querySelectorAll('.card-float');
    gsap.fromTo(cards, { y: -20, rotate: -6 }, { y: 20, rotate: 4, duration: 2.8, stagger: 0.18, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, []);

  return (
    <section className="bg-black text-white">
      <div className="grid-overlay">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 pt-4 md:grid-cols-2 md:pt-10">
          <div>
            <h1 className="display-font text-6xl leading-[0.95] md:text-8xl">SECURE YOUR FINANCIAL FUTURE</h1>
            <p className="mt-6 max-w-sm text-zinc-300">Trusted protection and expert guidance for your finances.</p>
            <Button size="lg" className="mt-7">GET STARTED ↗</Button>
          </div>
          <div ref={wrap} className="relative h-[430px]">
            {['#ff4d00', '#3a3a3a', '#171717'].map((c, i) => (
              <div
                key={c}
                className="card-float absolute left-16 top-8 h-56 w-80 rounded-2xl p-6 text-4xl font-bold"
                style={{ background: c, transform: `translate(${i * 12}px, ${i * 95}px) rotate(${-14 + i * 9}deg)` }}
              >
                finguard
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
