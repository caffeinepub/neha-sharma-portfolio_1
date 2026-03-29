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
    <section
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.99 0.007 60)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Collaboration Options"
          sub="Flexible partnership opportunities tailored to your brand needs"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {options.map((opt) => (
            <div
              key={opt.label}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-3xl bg-card transition-all duration-300 cursor-default"
              style={{
                border: "1px solid oklch(0.93 0.015 35)",
                boxShadow: "0 2px 12px -2px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 32px -4px rgba(244,191,201,0.25), 0 2px 8px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.84 0.065 10 / 0.35)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px -2px rgba(0,0,0,0.05)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "oklch(0.93 0.015 35)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: "oklch(0.84 0.065 10 / 0.12)",
                  color: "oklch(0.65 0.065 10)",
                }}
              >
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
