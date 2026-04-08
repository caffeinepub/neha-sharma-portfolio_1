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
        background: "#FFFFFF",
        border: "1px solid #EAEAEA",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 8px 32px rgba(0,0,0,0.10)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(0,0,0,0.05)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{ color: "#FF4D8D" }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xl font-semibold mb-1" style={{ color: "#111111" }}>
        {label}
      </div>
      <div className="text-sm" style={{ color: "#888888" }}>
        {sublabel}
      </div>
    </div>
  );
}

export function Metrics() {
  return (
    <section
      id="metrics"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FFFFFF" }}
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
