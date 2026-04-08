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
    <section
      id="performance"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FFFFFF" }}
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
              className="p-6 rounded-3xl transition-all duration-200"
              style={{
                border: stat.highlight
                  ? "1px solid rgba(255,77,141,0.25)"
                  : "1px solid #EAEAEA",
                background: stat.highlight ? "#FFF0F5" : "#FAFAFA",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{ color: stat.highlight ? "#FF4D8D" : "#111111" }}
              >
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: "#888888" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div
          className="rounded-3xl p-6 md:p-8 flex items-start gap-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,77,141,0.06), rgba(123,97,255,0.06))",
            border: "1px solid rgba(255,77,141,0.12)",
          }}
        >
          <div
            className="flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center"
            style={{ background: "#FFF0F5" }}
          >
            <TrendingUp className="w-5 h-5" style={{ color: "#FF4D8D" }} />
          </div>
          <p className="leading-relaxed" style={{ color: "#555555" }}>
            <strong style={{ color: "#111111" }}>
              6%–9% engagement rate with 85%+ Indian audience
            </strong>{" "}
            — Neha's focused beauty and skincare audience delivers{" "}
            <strong style={{ color: "#111111" }}>
              high-quality, targeted reach
            </strong>{" "}
            that converts for beauty and lifestyle brands.
          </p>
        </div>
      </div>
    </section>
  );
}
