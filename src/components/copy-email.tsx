"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function CopyEmail({
  label,
  copiedLabel,
  variant = "solid",
}: {
  label: string;
  copiedLabel: string;
  variant?: "solid" | "outline" | "bare" | "inverse";
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  const base =
    "group inline-flex items-center justify-center gap-3 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors";
  const styles = {
    solid: "bg-fg text-bg hover:bg-accent hover:text-on-accent",
    outline:
      "border border-fg/25 text-fg hover:border-fg hover:bg-fg hover:text-bg",
    bare: "text-fg hover:text-accent",
    inverse:
      "border border-bg/35 text-bg hover:border-bg hover:bg-bg hover:text-fg",
  }[variant];

  return (
    <button type="button" onClick={copy} className={`${base} ${styles}`}>
      <span>{copied ? copiedLabel : label}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-[13px] w-[13px]"
        aria-hidden="true"
      >
        {copied ? (
          <path d="m5 13 4 4L19 7" />
        ) : (
          <>
            <rect x="9" y="9" width="11" height="11" rx="1" />
            <path d="M5 15V5a1 1 0 0 1 1-1h10" />
          </>
        )}
      </svg>
    </button>
  );
}
