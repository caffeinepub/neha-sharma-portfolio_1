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
            "drop-shadow(0 0 4px #FF4D8D) drop-shadow(0 0 8px #7B61FF)",
            "drop-shadow(0 0 10px #FF4D8D) drop-shadow(0 0 20px #7B61FF)",
            "drop-shadow(0 0 4px #FF4D8D) drop-shadow(0 0 8px #7B61FF)",
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
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #FFF0F5 55%, #F5F0FF 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,141,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-16 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(123,97,255,0.07) 0%, transparent 70%)",
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
        style={{ filter: "drop-shadow(0 2px 6px rgba(255,77,141,0.3))" }}
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
        style={{ filter: "drop-shadow(0 2px 6px rgba(123,97,255,0.3))" }}
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
        style={{ filter: "drop-shadow(0 2px 6px rgba(255,77,141,0.3))" }}
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
                  "conic-gradient(from 0deg, #FF4D8D, #7B61FF, #FF4D8D, #7B61FF, #FF4D8D)",
                padding: "4px",
                borderRadius: "9999px",
                transform: "scale(1.08)",
              }}
            />
            {/* Rotating glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 60%, rgba(255,77,141,0.4) 100%)",
                transform: "scale(1.12)",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* White separator ring */}
            <div
              className="absolute rounded-full bg-white"
              style={{ inset: "-6px", zIndex: 1, borderRadius: "9999px" }}
            />
            {/* Gradient border ring */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-4px",
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                zIndex: 2,
                borderRadius: "9999px",
              }}
            />
            {/* White inner ring */}
            <div
              className="absolute rounded-full bg-white"
              style={{ inset: "-2px", zIndex: 3, borderRadius: "9999px" }}
            />
            {/* Photo */}
            <div
              className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden"
              style={{ zIndex: 4 }}
            >
              <img
                src="/assets/uploads/image-019d38c1-0301-76de-886d-f6d9f3f9a5a2-4.png"
                alt="Neha Sharma"
                className="w-full h-full object-cover"
              />
            </div>
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
              className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold tracking-widest uppercase mb-5"
              style={{
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                boxShadow: "0 4px 16px rgba(255,77,141,0.3)",
              }}
            >
              Beauty • Fashion • Lifestyle
            </motion.span>

            <h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
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

            <ul className="space-y-2.5 mb-9" style={{ color: "#555555" }}>
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
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                  boxShadow: "0 8px 24px rgba(255,77,141,0.35)",
                }}
                data-ocid="hero.instagram.button"
              >
                <SiInstagram className="w-4 h-4" /> View Instagram
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-3xl font-semibold transition-all duration-200 hover:scale-105"
                style={{
                  border: "2px solid #FF4D8D",
                  color: "#FF4D8D",
                  background: "transparent",
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
