export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center border border-fg/80 bg-fg text-[13px] font-bold tracking-[-0.06em] text-bg ${className}`}
      style={{ fontFamily: "var(--font-bricolage)" }}
    >
      GB
      <span className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-accent" />
    </span>
  );
}
