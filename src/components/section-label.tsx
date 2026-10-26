export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-mono flex items-center gap-2.5 ${className}`}>
      <span aria-hidden="true" className="h-[5px] w-[5px] rotate-45 bg-accent" />
      {children}
    </p>
  );
}
