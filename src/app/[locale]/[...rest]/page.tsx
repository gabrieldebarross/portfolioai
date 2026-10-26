import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const en = locale === "en";
  return {
    title: en ? "Page not found" : "Página não encontrada",
    robots: { index: false, follow: false },
  };
}

/**
 * Catch-all for routes that do not exist inside a locale.
 * It throws `notFound()` so the localized `[locale]/not-found` boundary
 * renders inside the regular layout (header, footer, fonts and theme).
 */
export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  notFound();
}
