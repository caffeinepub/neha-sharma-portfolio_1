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
      style={{ backgroundColor: "#FAFAFA" }}
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
              className="p-8 rounded-3xl relative transition-all duration-200"
              style={{
                background: "#FFFFFF",
                border: "1px solid #EAEAEA",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <Quote
                className="w-8 h-8 absolute top-6 right-6"
                style={{ color: "rgba(255,77,141,0.2)" }}
              />
              <p
                className="leading-relaxed mb-6 italic"
                style={{ color: "#555555" }}
              >
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/generated/neha-avatar-illustration.dim_800x800.png"
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold" style={{ color: "#111111" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "#888888" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
