import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  "Strong reel performance (94.2% of content)",
  "Majority female audience (76.9%)",
  "High non-follower reach (91.7%)",
  "Authentic product reviews",
  "Positive & confidence-driven brand image",
];

export function WhyBrands() {
  return (
    <section
      id="why-brands"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.975 0.012 10)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Why Brands Should Work With Me"
          sub="Authentic reach, engaged audience, and proven performance"
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          data-ocid="why_brands.list"
        >
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex items-center gap-4 p-5 rounded-3xl bg-card transition-all duration-300"
              style={{
                border: "1px solid oklch(0.93 0.015 35)",
                boxShadow: "0 2px 12px -2px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 6px 24px -4px rgba(244,191,201,0.2), 0 2px 6px rgba(0,0,0,0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.84 0.065 10 / 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px -2px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.93 0.015 35)";
              }}
            >
              <CheckCircle2
                className="w-6 h-6 flex-shrink-0"
                style={{ color: "oklch(0.65 0.065 10)" }}
              />
              <p className="text-foreground font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
