import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Eye,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";

const collabs = [
  {
    brand: "mCaffeine",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30-019d38c0-ebff-719a-ac08-ac7685373305-2.jpg",
    metrics: [
      {
        icon: Eye,
        v: "12.5M",
        l: "Views",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
      {
        icon: Heart,
        v: "15.9K",
        l: "Likes",
        color: "text-rose-500",
        bg: "bg-rose-50",
      },
      {
        icon: MessageCircle,
        v: "798",
        l: "Comments",
        color: "text-violet-500",
        bg: "bg-violet-50",
      },
      {
        icon: Repeat2,
        v: "854",
        l: "Shares",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
    ],
    description:
      "Helped mCaffeine generate 12.5M organic views through authentic demo-based skincare content showcasing visible results.",
  },
  {
    brand: "Bodywise",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30_2-019d38c0-ebd3-70ff-bdbc-b7ce22346164-1.jpg",
    metrics: [
      {
        icon: Eye,
        v: "82.6K",
        l: "Views",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
      {
        icon: Heart,
        v: "2.1K",
        l: "Likes",
        color: "text-rose-500",
        bg: "bg-rose-50",
      },
      {
        icon: MessageCircle,
        v: "132",
        l: "Comments",
        color: "text-violet-500",
        bg: "bg-violet-50",
      },
      {
        icon: Repeat2,
        v: "89",
        l: "Shares",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
    ],
    description:
      "Drove 82.6K+ views for Bodywise through relatable skincare content targeting young women.",
  },
  {
    brand: "Clay Co",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30_3-019d38c0-ec19-743d-9543-f7e7bba1476e-3.jpg",
    metrics: [
      {
        icon: Eye,
        v: "232K",
        l: "Views",
        color: "text-blue-500",
        bg: "bg-blue-50",
      },
      {
        icon: Heart,
        v: "5.8K",
        l: "Likes",
        color: "text-rose-500",
        bg: "bg-rose-50",
      },
      {
        icon: MessageCircle,
        v: "245",
        l: "Comments",
        color: "text-violet-500",
        bg: "bg-violet-50",
      },
      {
        icon: Repeat2,
        v: "178",
        l: "Shares",
        color: "text-emerald-500",
        bg: "bg-emerald-50",
      },
    ],
    description:
      "Generated 232K+ views showcasing Clay Co's gentle face scrub with authentic before-after results.",
  },
];

function CollabCard({
  collab,
  index,
}: { collab: (typeof collabs)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="rounded-3xl bg-card overflow-hidden transition-all duration-300"
      style={{
        border: "1px solid oklch(0.93 0.015 35)",
        boxShadow:
          "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 40px -4px rgba(244,191,201,0.25), 0 4px 12px rgba(0,0,0,0.06)";
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <img
          src={collab.thumbnail}
          alt={collab.brand}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute top-3 left-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold"
            style={{
              background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
              color: "#2B2B2B",
            }}
          >
            Paid Partnership
          </span>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 p-4"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        >
          <p className="font-bold text-xl text-white">{collab.brand}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {collab.metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.l}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{
                  background: "oklch(0.975 0.012 10)",
                  border: "1px solid oklch(0.93 0.015 35)",
                }}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${m.bg}`}
                >
                  <Icon className={`w-4 h-4 ${m.color}`} />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">{m.v}</p>
                  <p className="text-xs text-muted-foreground">{m.l}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium hover:underline"
          style={{ color: "oklch(0.55 0.055 65)" }}
          data-ocid={`collaborations.item.${index + 1}`}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" /> Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> View Details
            </>
          )}
        </button>
        {expanded && (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {collab.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium"
                style={{
                  border: "1px solid oklch(0.93 0.015 35)",
                  color: "oklch(0.52 0.005 30)",
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open on Instagram
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-semibold hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                  color: "#2B2B2B",
                }}
                data-ocid={`collaborations.contact.button.${index + 1}`}
              >
                Work With Me
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Collaborations() {
  return (
    <section
      id="collaborations"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.975 0.012 10)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Notable Brand Collaborations"
          sub="Premium partnerships delivering measurable results"
        />
        <p className="text-center text-muted-foreground text-sm mb-10">
          Follow on Instagram and check out reels & highlights to know more
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collabs.map((collab, i) => (
            <CollabCard key={collab.brand} collab={collab} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
