import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    id: "skincare-brand",
    quote:
      "Neha's authentic approach and engaged audience delivered exceptional results. Her content feels genuine and drives real conversions.",
    name: "Marketing Team",
    role: "Brand Manager • Leading Skincare Brand",
  },
  {
    id: "wellness-brand",
    quote:
      "Working with Neha was seamless. Her professionalism and creative content exceeded our campaign expectations.",
    name: "Collaboration Partner",
    role: "Digital Marketing Lead • Beauty & Wellness Brand",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.975 0.012 10)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="What Brands Say"
          sub="Trusted by leading beauty and wellness brands"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-card relative transition-all duration-300"
              style={{
                border: "1px solid oklch(0.93 0.015 35)",
                boxShadow:
                  "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px -4px rgba(244,191,201,0.2), 0 2px 8px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)";
              }}
            >
              <Quote
                className="w-8 h-8 absolute top-6 right-6"
                style={{ color: "oklch(0.80 0.055 65 / 0.35)" }}
              />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "“{t.quote}”"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/neha-avatar-illustration.dim_800x800.png"
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
