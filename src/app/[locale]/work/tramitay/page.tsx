import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content";
import { isLocale, localeHref, type Locale } from "@/lib/i18n";
import { ProjectPreview } from "@/components/project-preview";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "pt";
  const dict = getDictionary(locale);
  const path = "/work/tramitay";

  return {
    title: "TramitaY — Case study",
    description: dict.caseStudy.subtitle,
    alternates: {
      canonical: locale === "pt" ? path : `/en${path}`,
      languages: {
        "pt-BR": path,
        en: `/en${path}`,
      },
    },
    openGraph: {
      type: "article",
      title: "TramitaY — Case study",
      description: dict.caseStudy.subtitle,
      url: locale === "pt" ? path : `/en${path}`,
    },
  };
}

export default async function TramitaYPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dict = getDictionary(locale);
  const copy = dict.caseStudy;
  const { context, problem, approach, decisions, result } = copy.sections;

  return (
    <article className="pt-6 md:pt-10">
      <div className="u-container">
        <Reveal>
          <Link
            href={localeHref(locale, "/#work")}
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-fg"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            >
              ←
            </span>
            {copy.back}
          </Link>
        </Reveal>

        <header className="mt-8 md:mt-10">
          <Reveal delay={60}>
            <p className="label-mono flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="h-[5px] w-[5px] rotate-45 bg-accent"
              />
              {copy.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-[clamp(3.4rem,11vw,9rem)] font-semibold leading-[0.86] tracking-[-0.055em]">
              {copy.title}
              <span className="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-[56ch] text-pretty text-[15px] leading-relaxed text-muted md:text-[17px]">
              {copy.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/gabrieldebarross/sistemalicitacao"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-fg px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-bg transition-colors hover:bg-accent hover:text-on-accent"
              >
                {copy.links.repo} ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 grid grid-cols-2 border-t border-line lg:grid-cols-4">
              {copy.meta.map((item, index) => (
                <div
                  key={item.label}
                  className={`py-4 lg:py-5 ${
                    index % 2 !== 0
                      ? "border-l border-line pl-4 lg:pl-5"
                      : ""
                  } ${index >= 2 ? "border-t border-line lg:border-t-0" : ""} ${
                    index === 2 ? "lg:border-l lg:border-line lg:pl-5" : ""
                  }`}
                >
                  <dt className="label-mono text-[8.5px]">{item.label}</dt>
                  <dd className="mt-1.5 text-[12.5px] leading-snug text-fg md:text-[13px]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </header>

        <Reveal delay={120}>
          <div className="mt-10 aspect-[16/9] overflow-hidden border border-line md:mt-14">
            <ProjectPreview variant="tramitay" />
          </div>
        </Reveal>
      </div>

      <div className="u-container">
        {/* context */}
        <CaseSection label={context.label} title={context.title}>
          <div className="space-y-5">
            {context.body.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[62ch] text-pretty text-[14.5px] leading-[1.75] text-muted md:text-[15.5px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </CaseSection>

        {/* problem */}
        <CaseSection label={problem.label} title={problem.title}>
          <ul className="border-t border-line">
            {problem.points.map((point, index) => (
              <li
                key={index}
                className="flex gap-4 border-b border-line py-3.5"
              >
                <span className="font-mono text-[10px] text-accent">
                  0{index + 1}
                </span>
                <span className="max-w-[58ch] text-[13.5px] leading-relaxed text-muted">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </CaseSection>

        {/* approach */}
        <CaseSection label={approach.label} title={approach.title}>
          <p className="max-w-[62ch] text-pretty text-[14.5px] leading-[1.75] text-muted md:text-[15.5px]">
            {approach.body}
          </p>

          <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {approach.layers.map((layer, index) => (
              <div
                key={layer.title}
                className="group relative border border-line bg-surface/40 p-4 transition-colors hover:border-accent/40 hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-muted">
                    {layer.subtitle}
                  </span>
                  <span className="font-mono text-[8.5px] text-muted/60">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 font-display text-[16px] font-semibold leading-tight tracking-[-0.02em]">
                  {layer.title}
                </p>
                <p className="mt-1.5 font-mono text-[9px] uppercase tracking-[0.1em] text-muted">
                  {layer.note}
                </p>
                {index < approach.layers.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[7px] top-1/2 hidden -translate-y-1/2 font-mono text-[10px] text-accent lg:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-4 max-w-[62ch] border-l border-accent/40 pl-4 text-[12.5px] leading-relaxed text-muted">
            {approach.note}
          </p>
        </CaseSection>

        {/* decisions */}
        <CaseSection label={decisions.label} title={decisions.title}>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {decisions.items.map((item, index) => (
              <div
                key={item.title}
                className="bg-bg p-5 transition-colors hover:bg-surface/60 md:p-6"
              >
                <span className="font-mono text-[9px] tracking-[0.14em] text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-display text-[19px] font-semibold leading-tight tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-[42ch] text-[12.8px] leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </CaseSection>

        {/* result */}
        <CaseSection label={result.label} title={result.title} last>
          <div className="space-y-5">
            {result.body.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[62ch] text-pretty text-[14.5px] leading-[1.75] text-muted md:text-[15.5px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 border-t border-line">
            {result.facts.map((fact, index) => (
              <div
                key={fact.label}
                className={`border-b border-line py-4 ${
                  index % 2 === 0 ? "pr-4 sm:border-r" : "pl-4"
                }`}
              >
                <dt className="label-mono text-[8.5px]">{fact.label}</dt>
                <dd className="mt-1.5 text-[12.5px] text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </CaseSection>
      </div>

      <div className="u-container pb-16 md:pb-24">
        <Link
          href={localeHref(locale, copy.next.href)}
          className="group flex items-center justify-between gap-6 border-y border-line py-8 md:py-10"
        >
          <div>
            <p className="label-mono text-[8.5px]">{copy.next.label}</p>
            <p className="mt-3 font-display text-[clamp(1.5rem,3.4vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] transition-colors group-hover:text-accent">
              {copy.next.title}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="font-mono text-[22px] text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
          >
            ↗
          </span>
        </Link>

        <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          {site.name} · {new Date().getFullYear()}
        </p>
      </div>
    </article>
  );
}

function CaseSection({
  label,
  title,
  children,
  last = false,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`grid gap-6 py-10 md:grid-cols-12 md:gap-8 md:py-14 ${
        last ? "" : "border-b border-line"
      }`}
    >
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <Reveal>
            <p className="label-mono text-[8.5px]">{label}</p>
            <h2 className="mt-4 max-w-[16ch] text-balance font-display text-[clamp(1.5rem,2.8vw,2.1rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              {title}
            </h2>
          </Reveal>
        </div>
      </div>
      <div className="md:col-span-7 md:col-start-6">
        <Reveal delay={80}>{children}</Reveal>
      </div>
    </section>
  );
}
