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
      className="rounded-3xl p-8 text-center hover:shadow-card transition-shadow duration-300"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.70 0.10 25 / 0.05), oklch(0.88 0.08 15 / 0.08))",
        boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)",
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
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
      style={{ backgroundColor: "oklch(0.97 0.012 40)" }}
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
