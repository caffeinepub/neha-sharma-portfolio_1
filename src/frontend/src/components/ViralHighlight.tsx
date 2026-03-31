import { Eye, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function ViralHighlight() {
  return (
    <section id="viral-highlight" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
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
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                Campaign Goal
              </p>
              <p className="text-foreground font-medium">
                Product awareness & tanning removal positioning
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                Strategy
              </p>
              <p className="text-foreground font-medium">
                Authentic demo + real skin texture showcase
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Results
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: <Eye className="w-5 h-5" />,
                    value: "12.5M",
                    label: "Views",
                    bg: "bg-blue-50",
                    color: "text-blue-500",
                  },
                  {
                    icon: <Heart className="w-5 h-5" />,
                    value: "15.9K",
                    label: "Likes",
                    bg: "bg-rose-50",
                    color: "text-rose-500",
                  },
                  {
                    icon: <MessageCircle className="w-5 h-5" />,
                    value: "798",
                    label: "Comments",
                    bg: "bg-violet-50",
                    color: "text-violet-500",
                  },
                  {
                    icon: <Repeat2 className="w-5 h-5" />,
                    value: "854",
                    label: "Shares",
                    bg: "bg-emerald-50",
                    color: "text-emerald-500",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-muted/30 border border-border/40"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.bg}`}
                    >
                      <span className={stat.color}>{stat.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-3xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-soft"
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
