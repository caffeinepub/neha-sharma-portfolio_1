import { Handshake, Image, Package, Star, Target, Video } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Video,
    title: "Sponsored Reels",
    desc: "High-engagement video content showcasing your products with authentic demonstrations and honest reviews.",
  },
  {
    icon: Image,
    title: "Story Promotions",
    desc: "Quick, engaging story content for product launches, flash sales, and brand awareness campaigns.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    desc: "Ongoing brand ambassador programs with consistent content creation and audience engagement.",
  },
  {
    icon: Star,
    title: "Product Reviews",
    desc: "Detailed, honest product reviews that build trust and drive purchase decisions among followers.",
  },
  {
    icon: Package,
    title: "PR Unboxing",
    desc: "Exciting unboxing content that generates buzz and showcases your products in an authentic way.",
  },
  {
    icon: Target,
    title: "Brand Campaigns",
    desc: "Custom campaign strategies tailored to your brand goals with measurable results and engagement.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Collaboration Services"
          sub="Tailored partnership options to meet your brand goals"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-3xl bg-card border border-border hover:shadow-card hover:border-primary/30 transition-all"
              style={{ boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)" }}
            >
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
