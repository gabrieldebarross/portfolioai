import { getDictionary } from "@/content";
import { localeHref, type Locale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { Monogram } from "./monogram";
import { LocalTime } from "./local-time";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: ReturnType<typeof getDictionary>;
}) {
  const copy = dict.footer;
  const year = new Date().getFullYear();

  const sections = [
    { label: dict.nav.work, href: localeHref(locale, "/#work") },
    { label: dict.nav.about, href: localeHref(locale, "/#about") },
    { label: dict.nav.stack, href: localeHref(locale, "/#stack") },
    { label: dict.nav.contact, href: localeHref(locale, "/#contact") },
  ];

  return (
    <footer className="relative border-t border-line">
      <div className="u-container">
        <div className="grid gap-10 py-12 md:grid-cols-12 md:py-14">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Monogram />
              <div>
                <p className="font-display text-[15px] font-semibold leading-none tracking-[-0.02em]">
                  {site.name}
                </p>
                <p className="label-mono mt-1.5 text-[8.5px]">
                  {site.role[locale]}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-[26ch] text-[13px] leading-relaxed text-muted">
              {copy.tagline}
            </p>
            <p className="mt-5 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              {site.location[locale]}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="label-mono mb-3 text-[8.5px]">{copy.sections}</p>
            <ul className="space-y-2">
              {sections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label-mono mb-3 text-[8.5px]">{copy.elsewhere}</p>
            <ul className="space-y-2">
              {[
                { label: "GitHub", href: site.github },
                { label: "LinkedIn", href: site.linkedin },
                { label: site.email, href: `mailto:${site.email}` },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-fg/70 transition-colors hover:text-accent"
                  >
                    {item.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5">
              <LocalTime label={copy.localTime} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
            © {year} {site.name}. {copy.rights}
          </p>
          <div className="flex items-center gap-5">
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
              {copy.builtWith}
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-fg/70 transition-colors hover:text-accent"
            >
              {copy.backToTop}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              >
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
