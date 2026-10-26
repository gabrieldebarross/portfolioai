import type { Dictionary } from "@/content";

export function Marquee({ items }: { items: string[] }) {
  const row = (
    <div className="flex items-center">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center">
          <span className="whitespace-nowrap px-5 font-display text-[clamp(0.95rem,1.6vw,1.35rem)] font-medium uppercase tracking-[-0.01em] text-fg/75">
            {item}
          </span>
          <span
            aria-hidden="true"
            className="h-[5px] w-[5px] shrink-0 rotate-45 bg-accent"
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee relative mt-14 overflow-hidden border-y border-line py-3.5 md:mt-20">
      <div className="marquee-track">
        {row}
        <div aria-hidden="true" className="flex items-center">
          {row}
        </div>
      </div>
    </div>
  );
}

export function Stats({ items }: { items: Dictionary["stats"] }) {
  return (
    <div className="u-container">
      <dl className="grid grid-cols-2 border-b border-line md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col gap-1.5 px-1 py-6 md:px-5 md:py-8 ${
              index !== 0 ? "md:border-l md:border-line" : ""
            } ${index % 2 !== 0 ? "border-l border-line pl-4 md:pl-5" : ""} ${
              index < 2 ? "border-b border-line md:border-b-0" : ""
            }`}
          >
            <dt className="label-mono order-2 text-[8.5px] leading-snug">
              {item.label}
            </dt>
            <dd className="order-1 font-display text-[clamp(1.9rem,3vw,2.6rem)] font-semibold leading-none tracking-[-0.03em]">
              {item.value}
              <span className="text-accent">.</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
