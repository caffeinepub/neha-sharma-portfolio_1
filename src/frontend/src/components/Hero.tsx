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
            "drop-shadow(0 0 4px #f9a825) drop-shadow(0 0 8px #f97316)",
            "drop-shadow(0 0 10px #fbbf24) drop-shadow(0 0 20px #ec4899)",
            "drop-shadow(0 0 4px #f9a825) drop-shadow(0 0 8px #f97316)",
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
      {/* Background */}
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
            "linear-gradient(135deg, oklch(0.98 0.012 40 / 0.95) 0%, oklch(0.97 0.015 30 / 0.82) 55%, oklch(0.96 0.02 20 / 0.97) 100%)",
        }}
      />
      {/* Decorative orbs */}
      <div
        className="absolute top-20 right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.70 0.12 25 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.10 15 / 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Floating theme emojis */}
      <motion.span
        className="absolute top-16 left-10 text-2xl pointer-events-none select-none"
        animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ filter: "drop-shadow(0 2px 6px rgba(236,72,153,0.3))" }}
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
        style={{ filter: "drop-shadow(0 2px 6px rgba(249,115,22,0.3))" }}
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
        style={{ filter: "drop-shadow(0 2px 6px rgba(168,85,247,0.3))" }}
      >
        💬
      </motion.span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-20">
          {/* Profile photo with decorative ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            {/* Outer decorative ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #f97316, #ec4899, #a855f7, #ec4899, #f97316)",
                padding: "4px",
                borderRadius: "9999px",
                filter: "blur(0px)",
                transform: "scale(1.08)",
              }}
            />
            {/* Rotating glow effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 60%, oklch(0.70 0.15 25 / 0.4) 100%)",
                transform: "scale(1.12)",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* White separator ring */}
            <div
              className="absolute rounded-full bg-background"
              style={{ inset: "-6px", zIndex: 1, borderRadius: "9999px" }}
            />
            {/* Gradient border ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-4px",
                background:
                  "linear-gradient(135deg, #f97316, #ec4899, #a855f7)",
                zIndex: 2,
                borderRadius: "9999px",
              }}
            />
            {/* White inner ring */}
            <div
              className="absolute rounded-full bg-background"
              style={{ inset: "-2px", zIndex: 3, borderRadius: "9999px" }}
            />
            {/* Photo */}
            <div
              className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ zIndex: 4 }}
            >
              <img
                src="/assets/uploads/photo_2026-02-16_11-22-13-2-1.jpg"
                alt="Neha Sharma"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Shining star badge */}
            <ShiningStarBadge />
          </motion.div>

          {/* Text content */}
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
              className="inline-block px-4 py-1.5 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-5"
              style={{
                background: "oklch(0.70 0.10 25 / 0.1)",
                border: "1px solid oklch(0.70 0.10 25 / 0.2)",
              }}
            >
              Beauty • Fashion • Lifestyle
            </motion.span>

            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #c0504d 0%, #c0504d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Neha Sharma
            </h1>

            <p className="text-xl md:text-2xl font-medium text-primary mb-7">
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316, #ec4899, #a855f7)",
                  boxShadow: "0 8px 24px rgba(236,72,153,0.35)",
                }}
                data-ocid="hero.instagram.button"
              >
                <SiInstagram className="w-4 h-4" /> View Instagram
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all duration-200"
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
