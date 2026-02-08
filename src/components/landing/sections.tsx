import { ArrowUpRight, CircleCheck, MoveRight } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function IntroAndStats() {
  return (
    <section className="bg-[#efefef]">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">About us</p>
            <h2 className="display-font mt-3 text-5xl leading-[0.92]">GETTING TO KNOW FINGUARD</h2>
          </div>
          <p className="max-w-md text-zinc-700">We are more than just a financial service provider; we are your trusted partner in navigating the complexities of finance.</p>
        </div>

        <div className="mt-9 grid gap-3 md:grid-cols-3">
          <Card className="rounded-3xl border-0 bg-[var(--primary)] p-6 text-white">
            <p className="display-font text-7xl">500k</p>
            <p className="text-3xl font-semibold">users</p>
          </Card>
          <Card className="rounded-3xl border-0 bg-black p-6 text-white">
            <p className="display-font text-7xl">98%</p>
            <p className="mt-6 text-sm text-zinc-300">Users enjoy faster transaction processing times.</p>
          </Card>
          <Card className="rounded-3xl border-0 bg-[#f8f8f8] p-6">
            <p className="display-font text-7xl">24k</p>
            <p className="mt-6 text-sm text-zinc-600">A network of over 200,000 partner ATMs worldwide.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function FeaturePanel() {
  const items = ['Secure and Easy Transactions', 'Real-Time Financial Monitoring', 'Fast & EASY TRANSACTIONS', 'Comprehensive Financial Planning'];

  return (
    <section className="bg-[#efefef] pb-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <h3 className="display-font text-5xl leading-[0.9]">ALL-IN-ONE PLATFORM FOR SAVINGS</h3>
          <p className="text-zinc-700">Simplify your financial life by securely connecting your accounts automatically categorizing transactions.</p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-zinc-300/70">
          {items.map((item, idx) => (
            <div key={item} className="flex items-center justify-between border-b border-zinc-300/70 bg-[#f5f5f5] px-6 py-6 last:border-none even:bg-white">
              <div className="flex items-center gap-8">
                <span className="text-sm text-zinc-500">{String(idx + 1).padStart(2, '0')}</span>
                <p className="text-lg font-semibold leading-tight">{item}</p>
              </div>
              <span className="rounded-full bg-zinc-200 p-2"><MoveRight className="h-4 w-4" /></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BenefitsAndPartners() {
  return (
    <>
      <section className="bg-[#efefef] py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
          <div className="relative h-[320px]">
            <div className="absolute left-0 top-8 flex h-64 w-52 items-end rounded-3xl bg-[var(--primary)] p-4 text-6xl text-white [writing-mode:vertical-rl]">
              <span className="display-font rotate-180">finguard</span>
            </div>
            <div className="absolute left-40 top-1 h-64 w-44 rotate-12 rounded-3xl bg-[var(--primary)] p-5 text-white">
              <p className="text-xs">VISA</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Benefits</p>
            <h3 className="display-font mt-3 text-5xl leading-[0.9]">SHOPPING ON INTERNATIONAL</h3>
            <ul className="mt-7 space-y-3">
              {['Card 2% cashback on all purchases.', 'Access exclusive travel deals and discounts.', 'Includes travel insurance and purchase protection.'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-zinc-700"><CircleCheck className="h-4 w-4" />{item}</li>
              ))}
            </ul>
            <Button className="mt-7">LEARN MORE <ArrowUpRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-2">
            <h3 className="display-font text-5xl leading-[0.9]">REAL-TIME FINANCIAL MONITORING</h3>
            <p className="max-w-sm text-zinc-300">Just like us, finguard believes in building long-term relationships with clients.</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/20 p-6">
              <p className="display-font text-7xl">98%</p>
              <p className="mt-3 text-sm text-zinc-300">Partnering with our collaboration, noting increased efficiency and mutual growth.</p>
            </div>
            {['Apple Pay', 'PayPal', 'Zelle', 'GPay'].map((name) => (
              <Card key={name} className="flex min-h-52 items-center justify-center rounded-3xl border-0 bg-[var(--primary)] text-4xl font-bold text-white">{name}</Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function Testimonial() {
  return (
    <section className="bg-[#efefef]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--primary)]">What they says about us</p>
        <blockquote className="mt-4 max-w-5xl text-4xl font-semibold leading-tight">“finguard has completely transformed the way I manage my finances. The real-time updates and personalized advice have been invaluable.”</blockquote>
        <div className="mt-8 flex items-center justify-between border-t border-zinc-300 pt-5">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>KW</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">Kelly Williams</p>
              <p className="text-sm text-zinc-500">Head of Design, Layers</p>
            </div>
          </div>
          <div className="text-4xl text-[var(--primary)]">❞</div>
        </div>
      </div>
    </section>
  );
}

export function FooterCta() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-14">
        <p className="display-font text-[96px] leading-none text-[#ff6b33]/80">finguard</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="display-font max-w-sm text-5xl leading-[0.9]">READY TO TAKE CONTROL OF YOUR FINANCIAL FUTURE</h4>
            <Button variant="secondary" className="mt-6 bg-white text-black hover:bg-zinc-200">GET STARTED</Button>
          </div>
          <div className="grid grid-cols-2 gap-5 text-sm md:grid-cols-4">
            {['Features', 'Company', 'Resources', 'Support'].map((heading) => (
              <div key={heading}>
                <p className="mb-3 font-semibold">{heading}</p>
                <ul className="space-y-2 text-white/85">
                  <li>Overview</li><li>Pricing</li><li>Contact</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/30 pt-4 text-xs text-white/80">
          <span>© 2026 finguard</span><span>All Rights Reserved.</span><span>Terms of Service · Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
