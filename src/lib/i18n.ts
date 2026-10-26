export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Build a locale-aware path. PT lives at the root, EN under /en. */
export function localeHref(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "pt") return clean;
  return clean === "/" ? "/en" : `/en${clean}`;
}

/** Strip the locale prefix from a pathname. */
export function stripLocale(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

/** Hash-safe pathname, used by the language switcher. */
export function switchLocalePath(locale: Locale, pathname: string): string {
  const base = stripLocale(pathname) || "/";
  return localeHref(locale, base);
}
