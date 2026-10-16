import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton({ children = "Conversar no WhatsApp", message }: { children?: React.ReactNode; message?: string }) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${typeof children === "string" ? children : "Conversar"} (abre em nova aba)`}
      className="inline-flex items-center rounded-sm border border-gold px-5 py-2.5 text-sm font-medium text-gold transition-colors duration-200 hover:bg-gold hover:text-bg"
    >
      {children}
    </a>
  );
}
