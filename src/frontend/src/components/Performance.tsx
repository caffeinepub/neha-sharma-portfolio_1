import { TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "3.0K+", label: "Followers", highlight: true },
  { value: "8K+", label: "Highest Reach on Reels", highlight: true },
  { value: "6% – 9%", label: "Engagement Rate", highlight: true },
  { value: "85%+", label: "Indian Audience", highlight: false },
  { value: "100%", label: "Focused Beauty & Skincare", highlight: false },
];

export function Performance() {
  return (
    <section id="performance" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Performance Highlights"
          sub="Avg Analytics — Real Numbers, Real Reach"
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          data-ocid="performance.list"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`p-6 rounded-3xl transition-shadow hover:shadow-card border ${
                stat.highlight
                  ? "border-primary/20 bg-primary/5"
                  : "border-border bg-muted/20"
              }`}
              style={{ boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)" }}
            >
              <p
                className={`text-3xl font-bold mb-1 ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`}
              >
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div
          className="rounded-3xl p-6 md:p-8 flex items-start gap-4"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.70 0.10 25 / 0.08), oklch(0.88 0.08 15 / 0.12))",
          }}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <p className="text-foreground/80 leading-relaxed">
            <strong className="text-foreground">
              6%–9% engagement rate with 85%+ Indian audience
            </strong>{" "}
            — Neha's focused beauty and skincare audience delivers{" "}
            <strong className="text-foreground">
              high-quality, targeted reach
            </strong>{" "}
            that converts for beauty and lifestyle brands.
          </p>
        </div>
      </div>
    </section>
  );
}
