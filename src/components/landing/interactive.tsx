'use client';

import Link from 'next/link';
import { useRef } from 'react';
import gsap from 'gsap';

type AnimatedButtonProps = {
  label: string;
  className?: string;
};

export function AnimatedButton({ label, className }: AnimatedButtonProps) {
  const rootRef = useRef<HTMLButtonElement>(null);

  const animateIn = () => {
    if (!rootRef.current) return;
    gsap.to(rootRef.current.querySelector('.btn-label-top'), { yPercent: -110, duration: 0.25, ease: 'power2.out' });
    gsap.fromTo(rootRef.current.querySelector('.btn-label-bottom'), { yPercent: 110 }, { yPercent: 0, duration: 0.25, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.icon-wrap'), { rotate: 45, scale: 1.12, duration: 0.25, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.icon-arrow'), { x: 2, y: -2, duration: 0.25, ease: 'power2.out' });
  };

  const animateOut = () => {
    if (!rootRef.current) return;
    gsap.to(rootRef.current.querySelector('.btn-label-top'), { yPercent: 0, duration: 0.25, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.btn-label-bottom'), { yPercent: 110, duration: 0.25, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.icon-wrap'), { rotate: 0, scale: 1, duration: 0.25, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.icon-arrow'), { x: 0, y: 0, duration: 0.25, ease: 'power2.out' });
  };

  return (
    <button
      ref={rootRef}
      className={`group inline-flex h-12 items-center gap-2 rounded-full bg-[var(--primary)] px-6 font-semibold text-white ${className ?? ''}`}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
      type="button"
    >
      <span className="relative h-5 overflow-hidden">
        <span className="btn-label-top block">{label}</span>
        <span className="btn-label-bottom absolute left-0 top-0 translate-y-[110%]">{label}</span>
      </span>
      <span className="icon-wrap inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
        <svg className="icon-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  );
}

type AnimatedNavLinkProps = {
  href: string;
  label: string;
};

export function AnimatedNavLink({ href, label }: AnimatedNavLinkProps) {
  const rootRef = useRef<HTMLAnchorElement>(null);

  const onEnter = () => {
    if (!rootRef.current) return;
    gsap.to(rootRef.current.querySelector('.nav-line'), { scaleX: 1, duration: 0.26, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.nav-label-top'), { yPercent: -115, duration: 0.26, ease: 'power2.out' });
    gsap.fromTo(rootRef.current.querySelector('.nav-label-bottom'), { yPercent: 120 }, { yPercent: 0, duration: 0.26, ease: 'power2.out' });
  };

  const onLeave = () => {
    if (!rootRef.current) return;
    gsap.to(rootRef.current.querySelector('.nav-line'), { scaleX: 0, duration: 0.26, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.nav-label-top'), { yPercent: 0, duration: 0.26, ease: 'power2.out' });
    gsap.to(rootRef.current.querySelector('.nav-label-bottom'), { yPercent: 120, duration: 0.26, ease: 'power2.out' });
  };

  return (
    <Link ref={rootRef} href={href} onMouseEnter={onEnter} onMouseLeave={onLeave} className="relative inline-flex flex-col overflow-hidden pb-1 text-xs text-zinc-300">
      <span className="relative h-4 overflow-hidden">
        <span className="nav-label-top block">{label}</span>
        <span className="nav-label-bottom absolute left-0 top-0 translate-y-[120%] text-white">{label}</span>
      </span>
      <span className="nav-line mt-1 h-px origin-left scale-x-0 bg-white" />
    </Link>
  );
}
