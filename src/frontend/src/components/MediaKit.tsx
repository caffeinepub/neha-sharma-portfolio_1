import { Download } from "lucide-react";
import { motion } from "motion/react";

const gridItems = [
  {
    label: "AUDIENCE",
    content: "Young, trend-focused, social media active",
  },
  {
    label: "NICHE",
    content: "Fashion / Lifestyle / Beauty",
  },
  {
    label: "ENGAGEMENT",
    content: "Strong interaction and reach",
  },
  {
    label: "GROWTH",
    content: "Consistent upward trend",
  },
];

export function MediaKit() {
  return (
    <section
      id="media-kit"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.96 0.015 40)" }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading Area */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
            OVERVIEW
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
            Media Kit
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="bg-card rounded-3xl border border-primary/20 p-8 md:p-10"
            style={{
              boxShadow:
                "0 4px 32px -4px rgba(0,0,0,0.09), 0 1px 4px rgba(0,0,0,0.04), inset 0 0 0 1px oklch(0.62 0.14 28 / 0.12)",
            }}
          >
            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-0">
              {gridItems.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isTop = index < 2;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.08 * index + 0.2,
                    }}
                    className={[
                      "p-5 md:p-6",
                      isLeft ? "border-r border-border/60" : "",
                      isTop ? "border-b border-border/60" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mb-1.5 font-semibold">
                      {item.label}
                    </p>
                    <p className="text-foreground text-base font-medium leading-snug">
                      {item.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Download Button */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.52 }}
          >
            <a
              href="/assets/page_1_cover_page_full-019d4320-8a7b-71c2-b1fc-288e51fc9acd.pdf"
              download="Neha_Sharma_Media_Kit.pdf"
              data-ocid="media-kit.primary_button"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 rounded-2xl font-semibold text-sm tracking-wide hover:opacity-90 active:scale-95 transition-all duration-150"
            >
              <Download className="w-4 h-4" />
              Download Media Kit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
