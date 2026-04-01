import { SiInstagram, SiYoutube } from "react-icons/si";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCcTyF0knONJ3x1cdBTHlLIQ";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Metrics", href: "#metrics" },
  { label: "Viral Campaign", href: "#viral-highlight" },
  { label: "Performance", href: "#performance" },
  { label: "Media Kit", href: "#media-kit" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Stories", href: "#stories" },
  { label: "Why Brands", href: "#why-brands" },
  { label: "Audience", href: "#audience" },
  { label: "Services", href: "#services" },
  { label: "Fan Love", href: "#fan-love" },
  { label: "Love & Support", href: "#love-support" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border"
      data-ocid="header.panel"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#hero"
            className="font-semibold text-lg text-primary tracking-tight"
          >
            Neha Sharma
          </a>
          <nav className="hidden xl:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-sm font-medium hover:bg-accent/30 transition-colors"
              data-ocid="header.instagram.link"
            >
              <SiInstagram className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">Instagram</span>
              <span className="sm:hidden">IG</span>
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border text-sm font-medium hover:bg-accent/30 transition-colors"
              data-ocid="header.youtube.link"
            >
              <SiYoutube className="w-4 h-4 text-primary" />
              <span className="hidden sm:inline">YouTube</span>
              <span className="sm:hidden">YT</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
