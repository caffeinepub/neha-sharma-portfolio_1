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
      style={{ backgroundColor: "oklch(0.96 0.015 40)" }}
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
              className="flex items-center gap-4 p-5 rounded-3xl bg-card border border-border"
              style={{ boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)" }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
              <p className="text-foreground font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
