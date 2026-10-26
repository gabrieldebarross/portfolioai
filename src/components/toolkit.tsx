import type { Dictionary } from "@/content";
import { Reveal } from "./reveal";
import { SectionLabel } from "./section-label";

export function Toolkit({ dict }: { dict: Dictionary }) {
  const copy = dict.toolkit;

  return (
    <section
      id="stack"
      className="relative scroll-mt-24 border-t border-line py-16 md:py-24"
    >
      <div className="u-container">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel>{copy.label}</SectionLabel>
              <h2 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(1.9rem,4.2vw,3.3rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                {copy.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={120}>
              <p className="text-pretty text-[14px] leading-relaxed text-muted">
                {copy.lead}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {copy.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70} className="h-full">
              <div className="group h-full bg-bg p-5 transition-colors hover:bg-surface md:p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] tracking-[0.14em] text-muted">
                    {group.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-[5px] w-[5px] rotate-45 bg-accent opacity-40 transition-opacity group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.02em] md:text-[22px]">
                  {group.title}
                </h3>
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2.5 text-[12.5px] text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[10px] text-accent/70"
                      >
                        +
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
