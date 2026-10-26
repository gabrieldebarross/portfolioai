"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import type { Dictionary } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";
import { Monogram } from "./monogram";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitch } from "./locale-switch";
import { CommandPalette, type PaletteItem } from "./command-palette";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const home = localeHref(locale, "/");

  const sections = [
    { id: "work", label: dict.nav.work, index: "01" },
    { id: "about", label: dict.nav.about, index: "02" },
    { id: "stack", label: dict.nav.stack, index: "03" },
    { id: "contact", label: dict.nav.contact, index: "04" },
  ];

  const paletteItems = useMemo<PaletteItem[]>(() => {
    const sectionItems = sections.map((section) => ({
      id: `section-${section.id}`,
      label: section.label,
      hint: section.index,
      group: dict.palette.sections,
      href: localeHref(locale, `/#${section.id}`),
    }));

    const projectItems = projects.map((project) => {
      const copy = dict.work.items[project.slug as keyof typeof dict.work.items];
      const internal = project.caseStudy
        ? localeHref(locale, project.caseStudy)
        : null;
      return {
        id: `project-${project.slug}`,
        label: copy.title,
        hint: copy.meta,
        group: dict.palette.projects,
        href: internal ?? project.repo,
        external: !internal,
      };
    });

    const socialItems: PaletteItem[] = [
      {
        id: "social-github",
        label: "GitHub",
        hint: "@gabrieldebarross",
        group: dict.palette.actions,
        href: site.github,
        external: true,
      },
      {
        id: "social-linkedin",
        label: "LinkedIn",
        hint: "/in/gabrieldebarros",
        group: dict.palette.actions,
        href: site.linkedin,
        external: true,
      },
    ];

    return [...sectionItems, ...projectItems, ...socialItems];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dict, locale]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-b border-line bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="u-container flex h-[68px] items-center justify-between gap-4">
          <Link
            href={home}
            className="group flex items-center gap-3"
            aria-label={`${site.name} — ${dict.hero.eyebrow}`}
          >
            <Monogram className="transition-transform duration-500 group-hover:rotate-[-4deg]" />
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-[15px] font-semibold tracking-[-0.02em]">
                Gabriel Barros
              </span>
              <span className="label-mono mt-[5px] text-[8.5px]">
                {locale === "pt" ? "Desenvolvedor full-stack" : "Full-stack developer"}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {sections.map((section) => {
              const active = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={localeHref(locale, `/#${section.id}`)}
                  className={`group flex items-baseline gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
                    active ? "text-accent" : "text-fg/80 hover:text-fg"
                  }`}
                >
                  <span className="text-[8px] text-muted">{section.index}</span>
                  <span className="relative">
                    {section.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-full bg-accent transition-transform duration-500 ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              className="hidden items-center gap-2 border border-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted transition-colors hover:border-fg/40 hover:text-fg sm:flex"
              aria-label={dict.nav.command}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <span>⌘K</span>
            </button>

            <div className="hidden sm:block">
              <LocaleSwitch locale={locale} label={dict.nav.language} />
            </div>

            <ThemeToggle label={dict.nav.theme} />

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? dict.nav.close : dict.nav.menu}
              aria-expanded={menuOpen}
              className="flex h-8 w-8 items-center justify-center border border-line transition-colors hover:border-fg/40 hover:bg-fg hover:text-bg lg:hidden"
            >
              <span className="relative block h-[9px] w-[15px]">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`fixed inset-0 z-[65] flex flex-col bg-bg pt-[68px] transition-[opacity,visibility] duration-500 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <nav className="u-container flex flex-1 flex-col justify-center gap-1 pb-10">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={localeHref(locale, `/#${section.id}`)}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline justify-between border-b border-line py-4"
              style={{
                transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
              }}
            >
              <span className="flex items-baseline gap-3">
                <span className="font-mono text-[10px] text-muted">
                  0{index + 1}
                </span>
                <span className="font-display text-[8vw] font-semibold leading-none tracking-[-0.03em] transition-colors group-hover:text-accent">
                  {section.label}
                </span>
              </span>
              <span className="font-mono text-[13px] text-muted">↗</span>
            </a>
          ))}
        </nav>
        <div className="u-container flex flex-wrap items-center justify-between gap-4 border-t border-line py-5">
          <div className="flex gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted hover:text-fg"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted hover:text-fg"
            >
              LinkedIn ↗
            </a>
          </div>
          <div className="flex items-center gap-2">
            <LocaleSwitch locale={locale} label={dict.nav.language} />
            <ThemeToggle label={dict.nav.theme} />
          </div>
        </div>
      </div>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        items={paletteItems}
        dict={dict.palette}
        locale={locale}
      />
    </>
  );
}
