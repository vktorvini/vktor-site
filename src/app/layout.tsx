import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { site } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name}. ${site.person}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: `${site.name}. ${site.person}`, description: site.description, locale: "pt_BR", type: "website" },
};
export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={GeistSans.variable}>
      <body className="flex min-h-screen flex-col">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-bg">
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
