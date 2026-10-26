"use client";

import { useEffect, useRef, useState } from "react";

import type { Dictionary } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { Reveal } from "./reveal";
import { ProjectPreview } from "./project-preview";
import { SectionLabel } from "./section-label";

export function WorkList({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setHovered(null);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function positionPanel(event: React.MouseEvent, height: number) {
    const panel = panelRef.current;
    if (!panel) return;
    const gap = 32;
    const width = 360;
    const x = Math.min(event.clientX + gap, window.innerWidth - width - 20);
    const y = Math.min(
      Math.max(event.clientY - height / 2, 20),
      window.innerHeight - height - 20,
    );
    panel.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function handleMove(
    event: React.MouseEvent<HTMLAnchorElement>,
    index: number,
  ) {
    const rect = event.currentTarget.getBoundingClientRect();
    const onLeftHalf = event.clientX - rect.left <= rect.width / 2;

    if (!onLeftHalf) {
      setHovered(null);
      return;
    }

    setHovered(index);
    const panel = panelRef.current;
    const height = panel?.getBoundingClientRect().height || 300;
    positionPanel(event, height);
  }

  return (
    <section id="work" className="relative scroll-mt-24 py-16 md:py-24">
      <div className="u-container">
        <div className="grid gap-8 border-b border-line pb-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Reveal>
              <SectionLabel>{dict.work.label}</SectionLabel>
              <h2 className="mt-5 max-w-[18ch] text-balance font-display text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
                {dict.work.title}
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={120}>
              <p className="text-pretty text-[14px] leading-relaxed text-muted">
                {dict.work.lead}
              </p>
              <a
                href="https://github.com/gabrieldebarross?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-fg"
              >
                {dict.work.all}
                <span aria-hidden="true">↗</span>
              </a>
            </Reveal>
          </div>
        </div>

        <div onMouseLeave={() => setHovered(null)}>
          {projects.map((project, index) => {
            const copy =
              dict.work.items[project.slug as keyof typeof dict.work.items];
            const internal = project.caseStudy
              ? localeHref(locale, project.caseStudy)
              : null;
            const href = internal ?? project.repo;
            const external = !internal;

            return (
              <Reveal key={project.slug} delay={index * 60}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="work-row group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-4 border-b border-line py-7 md:grid-cols-[48px_1fr_190px_28px] md:items-center md:gap-x-6 md:py-8"
                  onMouseMove={(event) => handleMove(event, index)}
                  aria-label={`${copy.title} — ${copy.meta}`}
                >
                  <span className="pt-1 font-mono text-[10px] tracking-[0.12em] text-muted md:pt-0">
                    0{index + 1}
                  </span>

                  <div className="min-w-0">
                    <h3 className="work-title inline-block font-display text-[clamp(1.55rem,3.2vw,2.5rem)] font-semibold leading-none tracking-[-0.03em]">
                      {copy.title}
                    </h3>
                    <p className="mt-2.5 max-w-[58ch] text-pretty text-[13px] leading-relaxed text-muted">
                      {copy.tagline}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 md:hidden">
                      <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-fg/60">
                        {copy.meta}
                      </span>
                    </div>

                    <div className="mt-4 aspect-[16/10] overflow-hidden border border-line md:hidden">
                      <ProjectPreview variant={project.variant} />
                    </div>
                  </div>

                  <div className="hidden md:block">
                    <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-fg/70">
                      {copy.meta}
                    </p>
                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-muted">
                      {project.stack.join(" · ")}
                    </p>
                    {project.caseStudy && (
                      <span className="mt-2.5 inline-flex items-center gap-1.5 border border-accent/40 px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-accent">
                        Case study
                      </span>
                    )}
                  </div>

                  <span
                    aria-hidden="true"
                    className="work-arrow hidden font-mono text-[15px] text-fg/40 md:block md:justify-self-end"
                  >
                    ↗
                  </span>

                  <span
                    aria-hidden="true"
                    className="pt-1 font-mono text-[13px] text-muted md:hidden"
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* cursor-following preview (desktop, left half only) */}
      <div
        ref={panelRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[55] hidden w-[360px] transition-[opacity,scale] duration-300 md:block ${
          hovered !== null ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {hovered !== null && (
          <div className="pointer-events-none border border-fg/15 bg-bg p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.4)]">
            <div className="aspect-[16/11] overflow-hidden">
              <ProjectPreview variant={projects[hovered].variant} />
            </div>
            <div className="flex items-center justify-between px-1 pb-1 pt-2.5">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {dict.work.items[
                  projects[hovered].slug as keyof typeof dict.work.items
                ].meta}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
                {dict.work.view} ↗
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
