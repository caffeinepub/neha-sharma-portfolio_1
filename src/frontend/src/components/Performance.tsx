import { TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "2500+", label: "Followers", highlight: true },
  { value: "3.5K – 4.5K", label: "Avg Reel Views", highlight: true },
  { value: "8K+", label: "Highest Reach on Reels", highlight: true },
  { value: "6% – 9%", label: "Engagement Rate", highlight: true },
  { value: "85%+", label: "Indian Audience", highlight: false },
  { value: "100%", label: "Focused Beauty & Skincare", highlight: false },
];

export function Performance() {
  return (
    <section
      id="performance"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.99 0.007 60)" }}
    >
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
              className="p-6 rounded-3xl transition-all duration-300"
              style={{
                background: stat.highlight
                  ? "oklch(0.975 0.012 10)"
                  : "oklch(1 0 0)",
                border: stat.highlight
                  ? "1px solid oklch(0.84 0.065 10 / 0.25)"
                  : "1px solid oklch(0.93 0.015 35)",
                boxShadow: "0 2px 12px -2px rgba(0,0,0,0.05)",
              }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{
                  color: stat.highlight
                    ? "oklch(0.65 0.065 10)"
                    : "oklch(0.22 0.005 30)",
                }}
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
              "linear-gradient(135deg, oklch(0.84 0.065 10 / 0.06), oklch(0.80 0.055 65 / 0.08))",
            border: "1px solid oklch(0.84 0.065 10 / 0.15)",
          }}
        >
          <div
            className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: "oklch(0.84 0.065 10 / 0.15)" }}
          >
            <TrendingUp
              className="w-5 h-5"
              style={{ color: "oklch(0.65 0.065 10)" }}
            />
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
