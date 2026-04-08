import { Eye, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STAT_STYLE = { background: "#FFF0F5", color: "#FF4D8D" };

export function ViralHighlight() {
  return (
    <section
      id="viral-highlight"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "#FFF0F5", color: "#FF4D8D" }}
          >
            Top Performing Collaboration
          </span>
        </div>
        <SectionHeader
          heading="Viral Campaign Highlight"
          sub="Delivering exceptional results through authentic content"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div
              className="relative w-full max-w-md"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/assets/generated/mcaffeine-reel-cropped.dim_900x700.jpg"
                alt="mCaffeine viral reel"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)",
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-3xl">12.5M Views</p>
                <p className="text-white/80 text-sm">
                  One Reel · mCaffeine Collab
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#888888" }}
              >
                Campaign Goal
              </p>
              <p className="font-medium" style={{ color: "#111111" }}>
                Product awareness & tanning removal positioning
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: "#888888" }}
              >
                Strategy
              </p>
              <p className="font-medium" style={{ color: "#111111" }}>
                Authentic demo + real skin texture showcase
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#888888" }}
              >
                Results
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Eye className="w-5 h-5" />,
                    value: "12.5M",
                    label: "Views",
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    value: "15.9K",
                    label: "Likes",
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5" />,
                    value: "798",
                    label: "Comments",
                  },
                  {
                    icon: <Repeat2 className="w-5 h-5" />,
                    value: "854",
                    label: "Shares",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 p-4 rounded-2xl"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #EAEAEA",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={STAT_STYLE}
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "#111111" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-xs" style={{ color: "#888888" }}>
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-3xl text-white font-semibold transition-all duration-200 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #FF4D8D, #7B61FF)",
                boxShadow: "0 8px 24px rgba(255,77,141,0.3)",
              }}
              data-ocid="viral.contact.button"
            >
              Partner With Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
