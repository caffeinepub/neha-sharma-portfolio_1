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
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Let's Work Together"
          sub="Ready to collaborate? Get in touch for brand partnerships and collaborations"
        />
        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: "#FFFFFF",
            border: "1px solid #EAEAEA",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
          data-ocid="contact.panel"
        >
          <div className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                boxShadow: "0 8px 24px rgba(255,77,141,0.3)",
              }}
              data-ocid="contact.email.button"
            >
              <Mail className="w-5 h-5" /> {EMAIL}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200"
              style={{
                border: "2px solid #EAEAEA",
                color: "#555555",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,77,141,0.4)";
                (e.currentTarget as HTMLElement).style.background = "#FFF0F5";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#EAEAEA";
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
              data-ocid="contact.instagram.button"
            >
              <SiInstagram className="w-5 h-5" style={{ color: "#FF4D8D" }} />{" "}
              Instagram DM
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200"
              style={{
                border: "2px solid #EAEAEA",
                color: "#555555",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(123,97,255,0.4)";
                (e.currentTarget as HTMLElement).style.background = "#F5F0FF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#EAEAEA";
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
              data-ocid="contact.youtube.button"
            >
              <SiYoutube className="w-5 h-5" style={{ color: "#7B61FF" }} />{" "}
              YouTube Channel
            </a>
          </div>
          <p className="text-center text-sm mt-6" style={{ color: "#888888" }}>
            ✉️ Typically responds within 24–48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
