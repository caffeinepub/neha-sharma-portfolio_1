import { Mail } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { SectionHeader } from "./SectionHeader";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCcTyF0knONJ3x1cdBTHlLIQ";
const EMAIL = "business.nehasharmaa@gmail.com";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.975 0.012 10)" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Let's Work Together"
          sub="Ready to collaborate? Get in touch for brand partnerships and collaborations"
        />
        <div
          className="rounded-3xl p-8 md:p-10 bg-card"
          style={{
            border: "1px solid oklch(0.93 0.015 35)",
            boxShadow:
              "0 4px 24px -4px rgba(0,0,0,0.08), 0 1px 6px rgba(0,0,0,0.04)",
          }}
          data-ocid="contact.panel"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                color: "#2B2B2B",
                boxShadow: "0 4px 16px rgba(244,191,201,0.35)",
              }}
              data-ocid="contact.email.button"
            >
              <Mail className="w-5 h-5" /> {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 hover:bg-primary/5"
              style={{
                border: "1.5px solid oklch(0.84 0.065 10 / 0.3)",
                color: "oklch(0.52 0.005 30)",
              }}
              data-ocid="contact.instagram.button"
            >
              <SiInstagram
                className="w-5 h-5"
                style={{ color: "oklch(0.65 0.065 10)" }}
              />{" "}
              Instagram DM
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 hover:bg-primary/5"
              style={{
                border: "1.5px solid oklch(0.84 0.065 10 / 0.3)",
                color: "oklch(0.52 0.005 30)",
              }}
              data-ocid="contact.youtube.button"
            >
              <SiYoutube
                className="w-5 h-5"
                style={{ color: "oklch(0.65 0.065 10)" }}
              />{" "}
              YouTube Channel
            </a>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            ✉️ Typically responds within 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
