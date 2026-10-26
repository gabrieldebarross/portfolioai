import Link from "next/link";

import type { Dictionary } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { ProjectPreview } from "./project-preview";

export function Hero({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const copy = dict.hero;

  return (
    <section id="top" className="relative overflow-hidden pt-8 md:pt-12">
      <div className="grid-lines" aria-hidden="true" />

      <div className="u-container relative">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          <Reveal>
            <p className="label-mono flex items-center gap-2">
              <span className="status-dot inline-block h-[6px] w-[6px] rounded-full bg-accent" />
              {copy.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="label-mono hidden text-fg/70 sm:block">
              {copy.available}
            </p>
          </Reveal>
        </div>

        <h1 className="mt-9 font-display text-[clamp(2.5rem,7.6vw,7.4rem)] font-semibold leading-[0.94] tracking-[-0.045em] md:mt-12">
          <Reveal delay={80}>
            <span className="block text-balance">{copy.titleTop}</span>
          </Reveal>
          <Reveal delay={180}>
            <span className="block text-accent">
              <span className="font-serif font-normal italic tracking-[-0.02em]">
                {copy.titleAccent}
              </span>
            </span>
          </Reveal>
        </h1>

        <div className="mt-10 grid gap-12 border-t border-line pt-8 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6 lg:col-span-5">
            <Reveal delay={120}>
              <p className="max-w-[46ch] text-pretty text-[15px] leading-relaxed text-muted md:text-[16.5px]">
                {copy.lead}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={localeHref(locale, "/#work")}
                  className="group inline-flex items-center gap-3 bg-accent px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-on-accent transition-colors hover:bg-fg hover:text-bg"
                >
                  {copy.primaryCta}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </Link>
                <Link
                  href={localeHref(locale, "/#contact")}
                  className="inline-flex items-center gap-2 border border-fg/25 px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-fg transition-colors hover:border-fg hover:bg-fg hover:text-bg"
                >
                  {copy.secondaryCta}
                </Link>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {copy.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line pt-3">
                    <dt className="label-mono text-[8.5px]">{fact.label}</dt>
                    <dd className="mt-1.5 text-[13px] leading-snug text-fg">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <Reveal delay={240}>
              <Link
                href={localeHref(locale, "/work/tramitay")}
                className="group block border border-line bg-surface/60 transition-colors hover:border-fg/30"
              >
                <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                  <span className="label-mono text-[8.5px]">{copy.card.label}</span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-accent">
                    <span className="h-[5px] w-[5px] rounded-full bg-accent" />
                    {copy.card.status}
                  </span>
                </div>
                <div className="aspect-[16/10] border-b border-line">
                  <ProjectPreview variant="tramitay" />
                </div>
                <div className="flex items-end justify-between gap-4 p-4">
                  <div>
                    <p className="font-display text-[22px] font-semibold leading-none tracking-[-0.02em]">
                      {copy.card.value}
                    </p>
                    <p className="mt-2 max-w-[26ch] text-[12.5px] leading-snug text-muted">
                      {copy.card.description}
                    </p>
                  </div>
                  <span className="mb-1 font-mono text-[14px] text-muted transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted">
                {site.location[locale]}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
