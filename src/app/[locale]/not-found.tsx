"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname() || "/";
  const en = pathname.startsWith("/en");

  const copy = en
    ? {
        eyebrow: "Error 404",
        title: "This page didn't pass the approval flow.",
        body: "The address you tried to open doesn't exist — or it moved to another stage.",
        cta: "Back to home",
        home: "/en",
      }
    : {
        eyebrow: "Erro 404",
        title: "Essa página não passou no fluxo de aprovação.",
        body: "O endereço que você tentou abrir não existe — ou mudou de etapa.",
        cta: "Voltar ao início",
        home: "/",
      };

  return (
    <section className="u-container flex min-h-[72vh] flex-col justify-center py-20">
      <p className="label-mono flex items-center gap-2.5">
        <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-accent" />
        {copy.eyebrow}
      </p>

      <p
        aria-hidden="true"
        className="mt-8 font-display text-[clamp(5rem,18vw,13rem)] font-semibold leading-[0.8] tracking-[-0.06em] text-accent"
      >
        404
      </p>

      <h1 className="mt-8 max-w-[20ch] text-balance font-display text-[clamp(1.6rem,3.6vw,2.8rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
        {copy.title}
      </h1>
      <p className="mt-4 max-w-[48ch] text-[14px] leading-relaxed text-muted">
        {copy.body}
      </p>

      <div className="mt-8">
        <Link
          href={copy.home}
          className="group inline-flex items-center gap-3 border border-fg/25 px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.14em] transition-colors hover:border-fg hover:bg-fg hover:text-bg"
        >
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          {copy.cta}
        </Link>
      </div>
    </section>
  );
}
