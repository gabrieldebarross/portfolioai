import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

import { getDictionary } from "@/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const themeScript = `(function(){try{document.documentElement.classList.add('js');var t=localStorage.getItem('gb-theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const dict = getDictionary(locale);
  const canonical = locale === "pt" ? "/" : "/en";

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.meta.title,
      template: `%s — ${site.name}`,
    },
    description: dict.meta.description,
    keywords: dict.meta.keywords,
    authors: [{ name: site.name, url: site.github }],
    creator: site.name,
    alternates: {
      canonical,
      languages: {
        "pt-BR": "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: canonical,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [{ url: `/${locale === "pt" ? "pt" : "en"}/opengraph-image`, width: 1200, height: 630, alt: dict.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle:
      locale === "pt" ? "Desenvolvedor Full-Stack" : "Full-Stack Developer",
    description: dict.meta.description,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "TypeScript",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "Tailwind CSS",
      "Docker",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
  };

  return (
    <html
      lang={locale === "pt" ? "pt-BR" : "en"}
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrument.variable} ${mono.variable} ${serif.variable}`}
    >
      <body className="grain min-h-svh bg-bg text-fg antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-fg focus:bg-bg focus:px-4 focus:py-2 focus:text-sm"
        >
          {dict.nav.skip}
        </a>
        <SiteHeader locale={locale} dict={dict} />
        <main id="main" className="pt-[68px]">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
