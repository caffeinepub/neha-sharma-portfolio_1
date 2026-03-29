import { Instagram, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";

const INSTAGRAM_URL =
  "https://www.instagram.com/nehasharma.3_?igsh=OHByMmt2a24yM2k4";

const BRAND_GRADIENTS = [
  "linear-gradient(135deg, #1a1a2e, #16213e)",
  "linear-gradient(135deg, #7b2d8b, #9b59b6)",
  "linear-gradient(135deg, #2e7d32, #43a047)",
  "linear-gradient(135deg, #1565c0, #1976d2)",
  "linear-gradient(135deg, #b71c1c, #e53935)",
  "linear-gradient(135deg, #e65100, #fb8c00)",
  "linear-gradient(135deg, #4a148c, #7b1fa2)",
  "linear-gradient(135deg, #006064, #00838f)",
];

const brands: { name: string; gradientIndex: number }[] = [
  { name: "Minimalist", gradientIndex: 0 },
  { name: "Plum", gradientIndex: 1 },
  { name: "Dot & Key", gradientIndex: 2 },
  { name: "Mamaearth", gradientIndex: 3 },
  { name: "The Derma Co", gradientIndex: 4 },
  { name: "Whizzkin", gradientIndex: 5 },
  { name: "Maliao", gradientIndex: 6 },
  { name: "Clarte", gradientIndex: 7 },
  { name: "Kasarta", gradientIndex: 0 },
  { name: "Garnier", gradientIndex: 1 },
  { name: "Chic Nutrix", gradientIndex: 2 },
  { name: "Wishcare", gradientIndex: 3 },
  { name: "mCaffeine", gradientIndex: 4 },
  { name: "Clayco Beauty", gradientIndex: 5 },
  { name: "Shryoan", gradientIndex: 6 },
  { name: "Color Chemistry", gradientIndex: 7 },
  { name: "The Glazing Beauty", gradientIndex: 0 },
  { name: "Be Bodywise", gradientIndex: 1 },
];

function BrandCircle({ size = 80 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "9999px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <span style={{ fontSize: "22px", lineHeight: 1 }}>🤍</span>
    </div>
  );
}

export function Stories() {
  const [modalBrand, setModalBrand] = useState<
    ((typeof brands)[0] & { gradient: string }) | null
  >(null);

  const closeModal = () => setModalBrand(null);

  return (
    <section
      id="stories"
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.99 0.007 60), oklch(0.975 0.012 10))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Story Promotions & Brand Mentions"
          sub="Quick, engaging story content for maximum brand visibility"
        />
        <p className="text-center text-muted-foreground text-sm mb-12">
          Follow and check the PR highlight on my profile to know more
        </p>
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-8 min-w-max px-2">
            {brands.map((brand, i) => {
              const gradient =
                BRAND_GRADIENTS[brand.gradientIndex % BRAND_GRADIENTS.length];
              return (
                <button
                  key={brand.name}
                  type="button"
                  onClick={() => setModalBrand({ ...brand, gradient })}
                  className="flex flex-col items-center gap-3 cursor-pointer group focus:outline-none"
                  data-ocid={`stories.item.${i + 1}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="story-ring"
                  >
                    <div className="story-ring-inner">
                      <BrandCircle size={80} />
                    </div>
                  </motion.div>
                  <span
                    className="text-sm font-semibold max-w-[80px] text-center leading-tight transition-colors duration-200 group-hover:text-primary"
                    style={{ color: "oklch(0.22 0.005 30)" }}
                  >
                    {brand.name}
                  </span>
                  <span
                    className="text-xs font-medium tracking-wide"
                    style={{ color: "oklch(0.55 0.055 65)" }}
                  >
                    View Story
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalBrand && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(43, 29, 36, 0.65)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
            onClick={closeModal}
            data-ocid="stories.modal"
          >
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full text-center rounded-[2rem] overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 100%)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <div
                className="h-1.5 w-full"
                style={{ background: modalBrand.gradient }}
              />
              <div className="px-8 py-8">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.8)",
                  }}
                  data-ocid="stories.close_button"
                >
                  <X className="w-4 h-4" />
                </button>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                  }}
                >
                  <Instagram className="w-6 h-6" style={{ color: "#2B2B2B" }} />
                </div>
                <div className="story-ring mx-auto w-fit mb-3">
                  <div className="story-ring-inner">
                    <BrandCircle size={80} />
                  </div>
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(244,191,201,0.25), rgba(216,191,163,0.25))",
                    color: "rgba(255,255,255,0.85)",
                    border: "1px solid rgba(244,191,201,0.3)",
                  }}
                >
                  {modalBrand.name}
                </span>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    color: "rgba(255,255,255,0.95)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  View on Instagram
                </h3>
                <p
                  className="text-sm leading-relaxed mb-7"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  This content is best viewed directly on Instagram. Click the
                  button below to open it in a new tab.
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg, #F4BFC9, #D8BFA3)",
                    color: "#2B2B2B",
                    boxShadow: "0 8px 24px rgba(244,191,201,0.4)",
                  }}
                  data-ocid="stories.instagram.button"
                >
                  <Instagram className="w-5 h-5" />
                  Open Instagram
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-4 text-sm"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                  data-ocid="stories.cancel_button"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
