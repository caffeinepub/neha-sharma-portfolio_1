import { useCountUp } from "../hooks/useCountUp";
import { SectionHeader } from "./SectionHeader";

function CountCard({
  label,
  sublabel,
  value,
  suffix,
}: { label: string; sublabel: string; value: number; suffix: string }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div
      ref={ref}
      className="rounded-3xl p-8 text-center transition-all duration-300"
      style={{
        background: "oklch(1 0 0)",
        boxShadow:
          "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
        border: "1px solid oklch(0.93 0.015 35)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 32px -4px rgba(244,191,201,0.3), 0 2px 8px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color: "oklch(0.65 0.065 10)" }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xl font-semibold text-foreground mb-1">{label}</div>
      <div className="text-sm text-muted-foreground">{sublabel}</div>
    </div>
  );
}

export function Metrics() {
  return (
    <section
      id="metrics"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.99 0.007 60)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Impact at a Glance"
          sub="Proven results that drive brand awareness and engagement"
        />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="metrics.list"
        >
          <CountCard
            value={12}
            suffix=".5M+"
            label="Total Views"
            sublabel="In one viral reel"
          />
          <CountCard
            value={15}
            suffix="+"
            label="Total Campaigns"
            sublabel="Successful brand collaborations"
          />
          <CountCard
            value={10}
            suffix="+"
            label="Brand Partnerships"
            sublabel="Trusted by top beauty brands"
          />
        </div>
      </div>
    </section>
  );
}
