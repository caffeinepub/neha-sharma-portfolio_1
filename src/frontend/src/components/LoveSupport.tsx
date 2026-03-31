import { motion } from "motion/react";
import { useRef, useState } from "react";

const videoCards = [
  { caption: "Forever grateful 💖", id: "card-1" },
  { caption: "My biggest support system ✨", id: "card-2" },
  { caption: "This means everything 🥺", id: "card-3" },
];

function VideoCard({
  caption,
  index,
}: {
  caption: string;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  function handlePlay() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }

  function handleMouseEnter() {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 900);
  }

  return (
    <motion.div
      className="relative bg-card rounded-2xl overflow-hidden border border-primary/15 cursor-pointer"
      style={{
        boxShadow: "0 4px 24px -4px rgba(0,0,0,0.08)",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 8px 40px -4px rgba(244,191,201,0.45), 0 4px 16px rgba(0,0,0,0.08)",
      }}
      onMouseEnter={handleMouseEnter}
      data-ocid={`love-support.item.${index + 1}`}
    >
      {/* Floating heart on hover */}
      {showHeart && (
        <span
          className="absolute top-3 right-4 z-20 text-xl pointer-events-none animate-heart-float"
          style={{ animationFillMode: "forwards" }}
        >
          💕
        </span>
      )}

      {/* Video — 9:16 aspect ratio (Instagram Reel style) */}
      <div
        className="relative bg-muted/30 rounded-xl overflow-hidden w-full"
        style={{ aspectRatio: "9 / 16" }}
      >
        {/* biome-ignore lint/a11y/useMediaCaption: fan video section, captions added via track when src is provided */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Overlay play button */}
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            onKeyDown={(e) => e.key === "Enter" && handlePlay()}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
            data-ocid={`love-support.toggle.${index + 1}`}
          >
            <span
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
              style={{
                background:
                  "linear-gradient(135deg, rgba(244,191,201,0.95) 0%, rgba(242,227,216,0.95) 100%)",
                boxShadow: "0 4px 20px rgba(244,191,201,0.5)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Play"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Caption */}
      <div className="px-4 py-3 text-center">
        <p className="text-sm font-medium text-muted-foreground">{caption}</p>
      </div>
    </motion.div>
  );
}

export function LoveSupport() {
  return (
    <>
      <style>{`
        @keyframes heart-float {
          0%   { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-32px) scale(1.3); }
        }
        .animate-heart-float {
          animation: heart-float 0.9s ease-out forwards;
        }
      `}</style>

      <section
        id="love-support"
        className="py-20 md:py-24"
        style={{
          background: "linear-gradient(135deg, #FFFBF9 0%, #FDF1F4 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
              LOVE &amp; SUPPORT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Your love means everything 💕
            </h2>
            <p className="text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
              Here are some special moments that truly mean a lot to me.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoCards.map((card, i) => (
              <VideoCard key={card.id} caption={card.caption} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
