import { Mail } from "lucide-react";
import { SiInstagram, SiYoutube } from "react-icons/si";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCcTyF0knONJ3x1cdBTHlLIQ";
const EMAIL = "business.nehasharmaa@gmail.com";

const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Metrics", href: "#metrics" },
  { label: "Viral Campaign", href: "#viral-highlight" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Stories", href: "#stories" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer
      className="pt-16 pb-8"
      style={{ background: "#111111", color: "#FFFFFF" }}
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p
              className="text-2xl font-bold mb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Neha Sharma
            </p>
            <p
              className="text-sm mb-1"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Spreading Positivity & Inspiring Confidence
            </p>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Beauty • Fashion • Lifestyle
            </p>
          </div>
          <div>
            <p
              className="font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FF4D8D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.65)";
                  }}
                >
                  <SiInstagram className="w-4 h-4" /> @nehasharma.3_
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#7B61FF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.65)";
                  }}
                >
                  <SiYoutube className="w-4 h-4" /> YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FF4D8D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.65)";
                  }}
                >
                  <Mail className="w-4 h-4" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              Explore
            </p>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#FF4D8D";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color =
                        "rgba(255,255,255,0.65)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <p>© {year} Neha Sharma. All rights reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#FF4D8D";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  "rgba(255,255,255,0.4)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
