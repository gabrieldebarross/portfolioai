"use client";

import { useEffect, useState } from "react";

import { site } from "@/lib/site";

export function LocalTime({ label }: { label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: site.timezone,
      }).format(new Date());

    setTime(format());
    const timer = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
      {label} <span className="text-fg">{time ?? "--:--"}</span> BRT
    </span>
  );
}
