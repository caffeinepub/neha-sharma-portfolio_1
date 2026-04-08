import { Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function AudienceActivity() {
  return (
    <section
      id="audience"
      className="py-20 md:py-24"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader
          heading="Audience Activity"
          sub="Optimal posting window for sponsored content"
        />
        <div
          className="max-w-lg mx-auto rounded-3xl p-10 text-center"
          style={{
            background: "#FFFFFF",
            border: "1px solid #EAEAEA",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "#FFF0F5" }}
          >
            <Clock className="w-8 h-8" style={{ color: "#FF4D8D" }} />
          </div>
          <p
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{ color: "#111111" }}
          >
            9AM – 9PM
          </p>
          <p className="font-semibold mb-1" style={{ color: "#FF4D8D" }}>
            Peak around 6PM–9PM
          </p>
          <p
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "#888888" }}
          >
            Most Active Hours
          </p>
        </div>
        <p
          className="text-center text-sm mt-6 max-w-lg mx-auto"
          style={{ color: "#888888" }}
        >
          Schedule your sponsored content during these peak engagement windows
          for maximum visibility and interaction.
        </p>
      </div>
    </section>
  );
}
