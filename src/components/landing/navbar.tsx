import Link from 'next/link';
import { AnimatedButton, AnimatedNavLink } from '@/components/landing/interactive';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Partners', href: '#partners' },
];

export function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-white">
      <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 text-[10px]">✦</span>
        finguard
      </Link>

      <ul className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <li key={item.label}><AnimatedNavLink href={item.href} label={item.label} /></li>
        ))}
      </ul>

      <AnimatedButton label="Sign up" className="h-10 bg-transparent border border-white/35 px-5" />
    </nav>
  );
}
