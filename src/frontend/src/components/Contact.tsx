import { Mail } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";
import { SectionHeader } from "./SectionHeader";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCcTyF0knONJ3x1cdBTHlLIQ";
const EMAIL = "business.nehasharmaa@gmail.com";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Let's Work Together"
          sub="Ready to collaborate? Get in touch for brand partnerships and collaborations"
        />
        <div
          className="rounded-3xl p-8 md:p-10 bg-card border border-border"
          style={{ boxShadow: "0 2px 12px -2px rgba(0,0,0,0.08)" }}
          data-ocid="contact.panel"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
              data-ocid="contact.email.button"
            >
              <Mail className="w-5 h-5" /> {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 font-semibold transition-all"
              data-ocid="contact.instagram.button"
            >
              <SiInstagram className="w-5 h-5 text-primary" /> Instagram DM
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl border-2 border-border hover:border-primary/40 hover:bg-muted/30 font-semibold transition-all"
              data-ocid="contact.youtube.button"
            >
              <SiYoutube className="w-5 h-5 text-primary" /> YouTube Channel
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
