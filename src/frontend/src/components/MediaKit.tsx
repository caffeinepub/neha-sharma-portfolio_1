import { Download } from "lucide-react";
import { motion } from "motion/react";

const gridItems = [
  { label: "AUDIENCE", content: "Young, trend-focused, social media active" },
  { label: "NICHE", content: "Fashion / Lifestyle / Beauty" },
  { label: "ENGAGEMENT", content: "Strong interaction and reach" },
  { label: "GROWTH", content: "Consistent upward trend" },
];

export function MediaKit() {
  return (
    <section
      id="media-kit"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FAFAFA" }}
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
          <p
            className="text-xs uppercase tracking-[0.18em] mb-2 font-semibold"
            style={{ color: "#FF4D8D" }}
          >
            OVERVIEW
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
            style={{ color: "#111111" }}
          >
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
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(255,77,141,0.2)",
              boxShadow:
                "0 4px 32px rgba(255,77,141,0.08), 0 4px 20px rgba(0,0,0,0.05)",
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
                      isLeft ? "border-r" : "",
                      isTop ? "border-b" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    style={{
                      borderColor: "#EAEAEA",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-[0.14em] mb-1.5 font-semibold"
                      style={{ color: "#FF4D8D" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-base font-medium leading-snug"
                      style={{ color: "#111111" }}
                    >
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
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm tracking-wide text-white transition-all duration-200 hover:opacity-90 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                boxShadow: "0 8px 24px rgba(255,77,141,0.3)",
              }}
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
