import { Hero } from '@/components/landing/hero';
import { Navbar } from '@/components/landing/navbar';
import { BenefitsAndPartners, FeaturePanel, FooterCta, IntroAndStats, Testimonial } from '@/components/landing/sections';

export function LandingTemplate() {
  return (
    <main>
      <div className="bg-[#050505]">
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
