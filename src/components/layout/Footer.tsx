import { site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-ink">{site.person}</span>. {site.tagline}
        </p>
        <div className="flex gap-6">
          <a className="hover:text-ink" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="hover:text-ink" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
