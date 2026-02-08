'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/landing/navbar';
import { BenefitsAndPartners, FeaturePanel, FooterCta, IntroAndStats, Testimonial } from '@/components/landing/sections';

gsap.registerPlugin(ScrollTrigger);

export function LandingTemplate() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
            },
          },
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className="bg-[#050505] reveal">
        <Navbar />
      </div>
      <Hero />
      <IntroAndStats />
      <FeaturePanel />
      <BenefitsAndPartners />
      <Testimonial />
      <FooterCta />
    </main>
  );
}
