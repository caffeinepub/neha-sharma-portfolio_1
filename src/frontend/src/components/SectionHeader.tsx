interface SectionHeaderProps {
  heading: string;
  sub?: string;
  centered?: boolean;
}

export function SectionHeader({
  heading,
  sub,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
        {heading}
      </h2>
      {sub && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{sub}</p>
      )}
    </div>
  );
}
