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
      style={{ backgroundColor: "oklch(0.97 0.012 40)" }}
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
              className="p-8 rounded-3xl bg-card border border-border relative"
              style={{ boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)" }}
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                “{t.quote}”
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
