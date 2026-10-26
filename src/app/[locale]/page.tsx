import { notFound } from "next/navigation";

import { getDictionary } from "@/content";
import { isLocale } from "@/lib/i18n";
import { Hero } from "@/components/hero";
import { Marquee, Stats } from "@/components/marquee";
import { WorkList } from "@/components/work-list";
import { About } from "@/components/about";
import { Toolkit } from "@/components/toolkit";
import { Contact } from "@/components/contact";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Marquee items={dict.marquee} />
      <Stats items={dict.stats} />
      <WorkList locale={locale} dict={dict} />
      <About dict={dict} />
      <Toolkit dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
