"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { switchLocalePath, type Locale } from "@/lib/i18n";

export function LocaleSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <div
      className="flex items-center gap-1 border border-line px-1 py-1"
      aria-label={label}
    >
      {(["pt", "en"] as const).map((code) => {
        const active = locale === code;
        return (
          <Link
            key={code}
            href={switchLocalePath(code, pathname)}
            aria-current={active ? "true" : undefined}
            className={`px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors ${
              active
                ? "bg-fg text-bg"
                : "text-muted hover:text-fg"
            }`}
          >
            {code}
          </Link>
        );
      })}
    </div>
  );
}
