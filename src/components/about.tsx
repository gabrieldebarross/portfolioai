import Image from "next/image";

import type { Dictionary } from "@/content";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function About({ dict }: { dict: Dictionary }) {
  const copy = dict.about;

  return (
    <section id="about" className="relative scroll-mt-24 border-t border-line py-16 md:py-24">
      <div className="u-container grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionLabel>{copy.label}</SectionLabel>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative mt-8 overflow-hidden border border-line bg-surface/50">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <span className="label-mono text-[8.5px]">
                    {copy.monogramCaption}
                  </span>
                  <span className="h-[6px] w-[6px] rounded-full bg-accent" />
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/caricature.jpg"
                    alt={copy.portraitAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 32vw"
                    className="object-cover mix-blend-multiply dark:mix-blend-normal"
                  />
                  <div className="pointer-events-none absolute inset-0 border border-bg/10" />
                </div>
                <div className="flex items-center justify-between border-t border-line px-4 py-3">
                  <span className="label-mono text-[8.5px]">
                    {copy.monogramNote}
                  </span>
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-muted">
                    BR
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <h2 className="max-w-[19ch] text-balance font-display text-[clamp(1.9rem,4.2vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
              {copy.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-accent">
                {copy.title.split(" ").slice(-2).join(" ")}
              </span>
            </h2>
          </Reveal>

          <div className="mt-8 space-y-5">
            {copy.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={100 + index * 70}>
                <p className="max-w-[62ch] text-pretty text-[14.5px] leading-[1.75] text-muted md:text-[15.5px]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <div className="mt-12">
              <p className="label-mono mb-3">{copy.factsLabel}</p>
              <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
                {copy.facts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className={`flex items-baseline justify-between gap-4 border-b border-line py-3 ${
                      index % 2 === 0 ? "sm:border-r sm:pr-5" : "sm:pl-5"
                    }`}
                  >
                    <dt className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-[12.5px] text-fg">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
