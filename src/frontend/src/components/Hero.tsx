import { Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiInstagram } from "react-icons/si";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";

function ShiningStarBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -30 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay: 0.6, duration: 0.6, type: "spring", stiffness: 300 }}
      className="absolute -bottom-3 left-1/2 -translate-x-1/2"
      style={{ zIndex: 5 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          filter: [
            "drop-shadow(0 0 4px #D8BFA3) drop-shadow(0 0 8px #F4BFC9)",
            "drop-shadow(0 0 10px #D8BFA3) drop-shadow(0 0 20px #F4BFC9)",
            "drop-shadow(0 0 4px #D8BFA3) drop-shadow(0 0 8px #F4BFC9)",
          ],
        }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ fontSize: 28, lineHeight: 1 }}
      >
        ✦
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/neha-hero-bg.dim_1920x1080.png')",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.99 0.007 60 / 0.97) 0%, oklch(0.975 0.012 10 / 0.88) 55%, oklch(0.97 0.018 10 / 0.96) 100%)",
        }}
      />
      <div
        className="absolute top-20 right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.84 0.065 10 / 0.10) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.80 0.055 65 / 0.08) 0%, transparent 70%)",
        }}
      />

      <motion.span
        className="absolute top-16 left-10 text-2xl pointer-events-none select-none"
        animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ filter: "drop-shadow(0 2px 6px rgba(244,191,201,0.5))" }}
      >
        🤍
      </motion.span>
      <motion.span
        className="absolute top-28 right-10 text-xl pointer-events-none select-none"
        animate={{ y: [0, -6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{ filter: "drop-shadow(0 2px 6px rgba(216,191,163,0.5))" }}
      >
        📷
      </motion.span>
      <motion.span
        className="absolute bottom-32 right-16 text-xl pointer-events-none select-none"
        animate={{ y: [0, -7, 0], opacity: [0.4, 0.85, 0.4] }}
        transition={{
          duration: 4.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{ filter: "drop-shadow(0 2px 6px rgba(244,191,201,0.4))" }}
      >
        💬
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #F4BFC9, #D8BFA3, #F4BFC9, #D8BFA3, #F4BFC9)",
                padding: "4px",
                borderRadius: "9999px",
                transform: "scale(1.08)",
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 60%, oklch(0.84 0.065 10 / 0.35) 100%)",
                transform: "scale(1.12)",
                animation: "spin 8s linear infinite",
              }}
            />
            <div
              className="absolute rounded-full bg-background"
              style={{ inset: "-6px", zIndex: 1, borderRadius: "9999px" }}
            />
            <div
              className="absolute rounded-full"
              style={{
                inset: "-4px",
                background:
                  "linear-gradient(135deg, #F4BFC9, #D8BFA3, #F4BFC9)",
                zIndex: 2,
                borderRadius: "9999px",
              }}
            />
            <div
              className="absolute rounded-full bg-background"
              style={{ inset: "-2px", zIndex: 3, borderRadius: "9999px" }}
            />
            <div
              className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ zIndex: 4 }}
            >
              <img
                src="/assets/neha-profile.jpg"
                alt="Neha Sharma"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to original upload path if copy fails
                  (e.currentTarget as HTMLImageElement).src =
                    "/assets/uploads/photo_2026-02-16_11-22-13-2-1.jpg";
                }}
              />
            </div>
            <ShiningStarBadge />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{
                background: "oklch(0.80 0.055 65 / 0.12)",
                border: "1px solid oklch(0.80 0.055 65 / 0.3)",
                color: "oklch(0.50 0.045 65)",
              }}
            >
              Beauty • Fashion • Lifestyle Creator
            </motion.span>

            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
              style={{
                background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Neha Sharma
            </h1>

            <p
              className="text-xl md:text-2xl font-medium mb-7"
              style={{ color: "oklch(0.55 0.055 65)" }}
            >
              Spreading Positivity & Inspiring Confidence
            </p>

            <ul className="space-y-2.5 mb-9 text-foreground/80">
              <li className="flex items-center gap-2.5">
                <span className="text-lg">✨</span> Spreading Positivity &
                Inspiring Confidence
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-lg">💄</span> Honest Skincare & Product
                Reviews
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-lg">📍</span> India
              </li>
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                  color: "#2B2B2B",
                  boxShadow: "0 8px 24px rgba(244,191,201,0.45)",
                }}
                data-ocid="hero.instagram.button"
              >
                <SiInstagram className="w-4 h-4" /> View Instagram
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl border-2 font-semibold transition-all duration-200 hover:bg-primary/5"
                style={{
                  borderColor: "#D8BFA3",
                  color: "oklch(0.50 0.045 65)",
                }}
                data-ocid="hero.contact.button"
              >
                <Mail className="w-4 h-4" /> Work With Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
