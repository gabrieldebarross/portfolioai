"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { switchLocalePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content";

export type PaletteItem = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  href?: string;
  external?: boolean;
  action?: "theme" | "locale";
};

export function CommandPalette({
  open,
  onClose,
  items,
  dict,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  items: PaletteItem[];
  dict: Dictionary["palette"];
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname() || "/";

  const allItems = useMemo<PaletteItem[]>(
    () => [
      ...items,
      {
        id: "action-theme",
        label: dict.toggleTheme,
        group: dict.actions,
        action: "theme",
      },
      {
        id: "action-locale",
        label: dict.switchLanguage,
        group: dict.actions,
        action: "locale",
      },
    ],
    [items, dict],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((item) =>
      `${item.label} ${item.hint ?? ""} ${item.group}`.toLowerCase().includes(q),
    );
  }, [allItems, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const raf = requestAnimationFrame(() => inputRef.current?.focus());
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const node = listRef.current?.querySelector<HTMLElement>(
      `[data-index="${active}"]`,
    );
    node?.scrollIntoView({ block: "nearest" });
  }, [active, open]);

  function run(item: PaletteItem) {
    if (item.action === "theme") {
      const isDark = document.documentElement.classList.toggle("dark");
      try {
        localStorage.setItem("gb-theme", isDark ? "dark" : "light");
      } catch {
        /* ignore */
      }
      onClose();
      return;
    }

    if (item.action === "locale") {
      router.push(switchLocalePath(locale === "pt" ? "en" : "pt", pathname));
      onClose();
      return;
    }

    if (!item.href) return;

    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
      const hash = item.href.split("#")[1];
      if (hash) {
        window.setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 80);
      }
    }
    onClose();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((index) => (index + 1) % Math.max(filtered.length, 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(
        (index) =>
          (index - 1 + filtered.length) % Math.max(filtered.length, 1),
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      const item = filtered[active];
      if (item) run(item);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    }
  }

  if (!open) return null;

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[95] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label={dict.placeholder}
    >
      <button
        type="button"
        aria-label={dict.hint}
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-fg/25 backdrop-blur-[3px] dark:bg-black/55"
      />
      <div className="relative w-full max-w-[600px] border border-line bg-bg shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4 shrink-0 text-muted"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder={dict.placeholder}
            className="w-full bg-transparent font-sans text-[14px] text-fg outline-none placeholder:text-muted/70"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="hidden shrink-0 border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">
            esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center text-[13px] text-muted">
              {dict.empty}
            </p>
          )}
          {filtered.map((item, index) => {
            const showGroup = item.group !== lastGroup;
            lastGroup = item.group;
            return (
              <div key={item.id}>
                {showGroup && (
                  <p className="label-mono px-4 pb-1 pt-3 text-[9px]">
                    {item.group}
                  </p>
                )}
                <button
                  type="button"
                  data-index={index}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => run(item)}
                  className={`flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left transition-colors ${
                    active === index
                      ? "bg-fg text-bg"
                      : "text-fg hover:bg-surface"
                  }`}
                >
                  <span className="truncate font-sans text-[13.5px]">
                    {item.label}
                  </span>
                  <span
                    className={`shrink-0 font-mono text-[10px] uppercase tracking-[0.12em] ${
                      active === index ? "text-bg/60" : "text-muted"
                    }`}
                  >
                    {item.hint}
                    {item.external ? " ↗" : ""}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-line px-4 py-2">
          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
            {dict.hint}
          </span>
          <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
            GB / 2026
          </span>
        </div>
      </div>
    </div>
  );
}
