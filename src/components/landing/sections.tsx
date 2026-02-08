import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function StatsStrip() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-3">
      <Card className="bg-[var(--primary)] p-6 text-white"><div className="display-font text-6xl">500k</div><p>users</p></Card>
      <Card className="bg-black p-6 text-white"><div className="display-font text-6xl">98%</div><p>approval rate</p></Card>
      <Card className="p-6"><div className="display-font text-6xl">24k</div><p>ATMs worldwide</p></Card>
    </section>
  );
}

export function FeatureList() {
  const items = ['Secure and Easy Transactions', 'Real-Time Financial Monitoring', 'Fast & Easy Transactions', 'Comprehensive Financial Planning'];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="display-font text-5xl">ALL-IN-ONE PLATFORM FOR SAVINGS</h2>
      <div className="mt-8 divide-y border-t border-b bg-white">
        {items.map((item, i) => (
          <div key={item} className="flex items-center justify-between px-4 py-5"><span className="text-sm text-zinc-500">{String(i + 1).padStart(2, '0')}</span><p className="font-semibold">{item}</p><ArrowUpRight className="h-4 w-4" /></div>
        ))}
      </div>
    </section>
  );
}

export function BenefitBlock() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
      <div className="h-80 rounded-3xl bg-[var(--primary)] p-10 text-7xl text-white display-font">finguard</div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Benefits</p>
        <h3 className="display-font mt-3 text-5xl">SHOPPING ON INTERNATIONAL</h3>
        <ul className="mt-6 space-y-3 text-zinc-700"><li>• Card supports all purchases.</li><li>• Travel deals and discounts.</li><li>• Includes travel insurance.</li></ul>
        <Button className="mt-6">LEARN MORE ↗</Button>
      </div>
    </section>
  );
}

export function Testimonial() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--primary)]">WHAT THEY SAYS ABOUT US</p>
      <blockquote className="mt-4 text-4xl font-semibold leading-tight">“finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.”</blockquote>
    </section>
  );
}

export function FooterCta() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h4 className="display-font text-6xl">READY TO TAKE CONTROL OF YOUR FINANCIAL FUTURE</h4>
        <Button variant="secondary" className="mt-6">GET STARTED</Button>
      </div>
    </footer>
  );
}
