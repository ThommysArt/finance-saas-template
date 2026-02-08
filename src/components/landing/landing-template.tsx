import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { BenefitBlock, FeatureList, FooterCta, StatsStrip, Testimonial } from '@/components/landing/sections';

export function LandingTemplate() {
  return (
    <main>
      <div className="bg-black"><Navbar /></div>
      <Hero />
      <StatsStrip />
      <FeatureList />
      <BenefitBlock />
      <Testimonial />
      <FooterCta />
    </main>
  );
}
