import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Header() {
  const items = site.nav.filter((i) => i.ready);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-[0.28em]" aria-label="Vktor, página inicial">
          VKTOR
        </Link>
        <div className="flex items-center gap-8">
          {items.length > 0 && (
            <nav aria-label="Principal" className="hidden gap-6 text-sm text-muted md:flex">
              {items.map((i) => (
                <Link key={i.href} href={i.href} className="transition-colors hover:text-ink">{i.label}</Link>
              ))}
            </nav>
          )}
          <WhatsAppButton>Conversar</WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
