import {
  Camera,
  Handshake,
  Heart,
  MessageCircle,
  Package,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const options = [
  { icon: Camera, label: "Sponsored Reels" },
  { icon: Sparkles, label: "Skincare Reviews" },
  { icon: Heart, label: "Fashion Styling Content" },
  { icon: MessageCircle, label: "Instagram Story Promotions" },
  { icon: Handshake, label: "Long-term Brand Partnerships" },
  { icon: Package, label: "PR Unboxing & Honest Reviews" },
];

export function CollabOptions() {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Collaboration Options"
          sub="Flexible partnership opportunities tailored to your brand needs"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((opt) => (
            <div
              key={opt.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-3xl bg-muted/30 border border-border hover:shadow-card hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <opt.icon className="w-6 h-6" />
              </div>
              <p className="font-semibold text-foreground text-sm">
                {opt.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
