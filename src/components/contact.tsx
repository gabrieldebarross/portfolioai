import type { CSSProperties } from "react";

import type { Dictionary } from "@/content";
import { site } from "@/lib/site";
import { Reveal } from "./reveal";
import { CopyEmail } from "./copy-email";

export function Contact({ dict }: { dict: Dictionary }) {
  const copy = dict.contact;
  const titleWords = copy.title.split(" ");
  const lastWord = titleWords.pop();

  const inverseVars = {
    "--muted": "color-mix(in srgb, var(--bg) 62%, transparent)",
    "--line": "color-mix(in srgb, var(--bg) 18%, transparent)",
  } as CSSProperties;

  const socials = [
    { label: copy.socials.github, href: site.github, hint: "@gabrieldebarross" },
    {
      label: copy.socials.linkedin,
      href: site.linkedin,
      hint: "/in/gabrieldebarros",
    },
    { label: copy.socials.email, href: `mailto:${site.email}`, hint: site.email },
  ];

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-fg text-bg"
      style={inverseVars}
    >
      <div className="grid-lines opacity-30" aria-hidden="true" />
      <div className="u-container relative py-16 md:py-24">
        <Reveal>
          <p className="label-mono flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="h-[5px] w-[5px] rotate-45 bg-accent"
            />
            {copy.label}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h2 className="max-w-[17ch] text-balance font-display text-[clamp(2.1rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                {titleWords.join(" ")}{" "}
                <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">
                  {lastWord}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-[52ch] text-pretty text-[14.5px] leading-relaxed text-bg/65">
                {copy.lead}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="group inline-flex items-center gap-3 bg-accent px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-on-accent transition-colors hover:bg-bg hover:text-fg"
                >
                  {copy.emailCta}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
                <CopyEmail
                  label={copy.emailLabel}
                  copiedLabel={copy.copied}
                  variant="inverse"
                />
              </div>
              <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-bg/60">
                {copy.availability}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={200}>
              <p className="label-mono mb-3 text-[8.5px]">
                {dict.footer.elsewhere}
              </p>
              <ul className="border-t border-bg/20">
                {socials.map((social) => (
                  <li key={social.label} className="border-b border-bg/20">
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex flex-col">
                        <span className="font-display text-[20px] font-semibold leading-none tracking-[-0.02em] transition-colors group-hover:text-accent">
                          {social.label}
                        </span>
                        <span className="mt-2 truncate font-mono text-[9px] normal-case tracking-normal text-bg/40">
                          {social.hint}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-[13px] text-bg/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
