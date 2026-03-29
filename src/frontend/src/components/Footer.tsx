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
      style={{
        background:
          "linear-gradient(135deg, oklch(0.22 0.005 30), oklch(0.18 0.008 20))",
        color: "oklch(0.92 0.03 50)",
      }}
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <p
              className="text-2xl font-bold mb-2"
              style={{
                color: "oklch(0.99 0.007 60)",
              }}
            >
              Neha Sharma
            </p>
            <p
              className="text-sm mb-1"
              style={{ color: "oklch(0.84 0.065 10 / 0.85)" }}
            >
              Spreading Positivity & Inspiring Confidence
            </p>
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "oklch(0.80 0.055 65 / 0.6)" }}
            >
              Beauty • Fashion • Lifestyle
            </p>
          </div>
          <div>
            <p
              className="font-semibold mb-4"
              style={{ color: "oklch(0.92 0.03 50 / 0.9)" }}
            >
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-80"
                  style={{ color: "oklch(0.75 0.015 30)" }}
                >
                  <SiInstagram className="w-4 h-4" /> @nehasharma.3_
                </a>
              </li>
              <li>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-80"
                  style={{ color: "oklch(0.75 0.015 30)" }}
                >
                  <SiYoutube className="w-4 h-4" /> YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-80"
                  style={{ color: "oklch(0.75 0.015 30)" }}
                >
                  <Mail className="w-4 h-4" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="font-semibold mb-4"
              style={{ color: "oklch(0.92 0.03 50 / 0.9)" }}
            >
              Explore
            </p>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:opacity-80"
                    style={{ color: "oklch(0.75 0.015 30)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm"
          style={{
            borderColor: "oklch(0.92 0.03 50 / 0.1)",
            color: "oklch(0.75 0.015 30 / 0.6)",
          }}
        >
          <p>© {year} Neha Sharma. All rights reserved.</p>
          <p>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
