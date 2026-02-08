import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
      <div className="text-xl font-bold">finguard</div>
      <div className="hidden gap-8 text-sm md:flex">
        <span>Products</span>
        <span>Features</span>
        <span>Benefits</span>
        <span>Partners</span>
      </div>
      <Button variant="outline">Sign up ↗</Button>
    </nav>
  );
}
