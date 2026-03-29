interface SectionHeaderProps {
  heading: string;
  sub?: string;
  centered?: boolean;
  label?: string;
}

export function SectionHeader({
  heading,
  sub,
  centered = true,
  label,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{
            background: "oklch(0.80 0.055 65 / 0.12)",
            color: "oklch(0.55 0.055 65)",
            border: "1px solid oklch(0.80 0.055 65 / 0.25)",
          }}
        >
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
        {heading}
      </h2>
      {sub && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sub}</p>
      )}
    </div>
  );
}
