import { Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function AudienceActivity() {
  return (
    <section
      id="audience"
      className="py-20 md:py-24"
      style={{ backgroundColor: "oklch(0.975 0.012 10)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Audience Activity"
          sub="Optimal posting window for sponsored content"
        />
        <div
          className="max-w-lg mx-auto rounded-3xl p-10 text-center bg-card"
          style={{
            border: "1px solid oklch(0.93 0.015 35)",
            boxShadow:
              "0 2px 16px -2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.03)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "oklch(0.84 0.065 10 / 0.12)" }}
          >
            <Clock
              className="w-8 h-8"
              style={{ color: "oklch(0.65 0.065 10)" }}
            />
          </div>
          <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            9AM – 9PM
          </p>
          <p
            className="font-semibold mb-1"
            style={{ color: "oklch(0.55 0.055 65)" }}
          >
            Peak around 6PM–9PM
          </p>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Most Active Hours
          </p>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6 max-w-lg mx-auto">
          Schedule your sponsored content during these peak engagement windows
          for maximum visibility and interaction.
        </p>
      </div>
    </section>
  );
}
