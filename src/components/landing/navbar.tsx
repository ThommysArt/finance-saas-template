import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = ['Products', 'Features', 'Benefits', 'Partners'];

export function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 text-white">
      <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/60 text-[10px]">✦</span>
        finguard
      </Link>

      <ul className="hidden items-center gap-8 text-xs text-zinc-300 md:flex">
        {navItems.map((item) => (
          <li key={item} className="transition-colors hover:text-white">{item}</li>
        ))}
      </ul>

      <Button variant="outline" className="border-white/30 text-xs">Sign up ↗</Button>
    </nav>
  );
}
