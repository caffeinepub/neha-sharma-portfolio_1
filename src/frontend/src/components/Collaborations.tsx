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

const METRIC_ICONS = [
  { icon: Eye, label: "Views" },
  { icon: Heart, label: "Likes" },
  { icon: MessageCircle, label: "Comments" },
  { icon: Repeat2, label: "Shares" },
];

const collabs = [
  {
    brand: "mCaffeine",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30-019d38c0-ebff-719a-ac08-ac7685373305-2.jpg",
    metrics: ["12.5M", "15.9K", "798", "854"],
    description:
      "Helped mCaffeine generate 12.5M organic views through authentic demo-based skincare content showcasing visible results.",
  },
  {
    brand: "Bodywise",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30_2-019d38c0-ebd3-70ff-bdbc-b7ce22346164-1.jpg",
    metrics: ["82.6K", "2.1K", "132", "89"],
    description:
      "Drove 82.6K+ views for Bodywise through relatable skincare content targeting young women.",
  },
  {
    brand: "Clay Co",
    thumbnail:
      "/assets/uploads/photo_2026-02-17_08-44-30_3-019d38c0-ec19-743d-9543-f7e7bba1476e-3.jpg",
    metrics: ["232K", "5.8K", "245", "178"],
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
      className="rounded-3xl overflow-hidden transition-all duration-200"
      style={{
        background: "#FFFFFF",
        border: "1px solid #EAEAEA",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
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
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #FF4D8D, #7B61FF)" }}
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
          <p className="text-white font-bold text-xl">{collab.brand}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {METRIC_ICONS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="flex items-center gap-3 p-3 rounded-2xl"
                style={{ background: "#FAFAFA", border: "1px solid #EAEAEA" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#FFF0F5" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "#FF4D8D" }} />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#111111" }}>
                    {collab.metrics[i]}
                  </p>
                  <p className="text-xs" style={{ color: "#888888" }}>
                    {m.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
          style={{ color: "#FF4D8D" }}
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
            <p className="text-sm leading-relaxed" style={{ color: "#555555" }}>
              {collab.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium transition-all hover:opacity-80"
                style={{ border: "1px solid #EAEAEA", color: "#555555" }}
              >
                <ExternalLink className="w-3.5 h-3.5" /> Open on Instagram
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-4 py-2 rounded-2xl text-sm font-medium text-white transition-all hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
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
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Notable Brand Collaborations"
          sub="Premium partnerships delivering measurable results"
        />
        <p className="text-center text-sm mb-10" style={{ color: "#888888" }}>
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
